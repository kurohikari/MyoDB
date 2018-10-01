import * as path from "path";
import * as assert from "assert";
import * as sqlite3 from "sqlite3";
import { Parser } from "../../src/Parser/Parser";
import { SQLiteDatabase } from "../../src/SQLite/SQLiteDatabase";


export class SQLiteDatabaseTest {

    public static Test() {
        let dbs = Parser.Parse(path.join(`${__dirname}` ,"test.mdb"));
        assert.strictEqual(dbs.length, 1);

        let database = SQLiteDatabase.FromDatabase(dbs[0]);
        let db = database.GetDB();
        let model = database.GetDatabaseModel();

        let tablenames = [];
        for(let i = 0; i<model.GetTableCount(); i++) {
            tablenames.push(model.GetTableAt(i).GetName());
        }

        db.serialize(() => {
            db.all("SELECT name FROM sqlite_master WHERE type='table'", (error, tables) => {
                assert.strictEqual(tables.length, tablenames.length);
                for(let table of tables) {
                    assert.ok(tablenames.indexOf(table.name) >= 0, `Table ${table.name} should not be in the database!`);

                    let tableModel = model.GetTableWithName(table.name);
                    let expectedColumns = [];
                    for(let i = 0; i<tableModel.GetColumnCount(); i++) {
                        expectedColumns.push(tableModel.GetColumnAt(i).GetName());
                    }
                    this.TestColumnsOfTable(db, table.name, expectedColumns);
                }
                console.log(`Tables for database ${model.GetName()} verified!`);
            });
        });
    }

    private static TestColumnsOfTable(db: sqlite3.Database, table: string, columnNames: string[]) {
        db.all(`SELECT sql FROM sqlite_master WHERE tbl_name='${table}' AND type='table'`, (error, columns) => {
            let columnnames = columns[0].sql.replace(/^[^\(]+\(([^\)]+)\)/g, '$1').replace(/ [^,]+/g, '').split(',');
            assert.strictEqual(columnnames.length, columnNames.length);
            for(let columnname of columnnames) {
                assert.ok(columnNames.indexOf(columnname)>-1, `Column ${columnname} should not be in table ${table}`);
            }
            console.log(`Columns for table ${table} verified!`);
        });
    }

}

SQLiteDatabaseTest.Test();