import * as sqlite3 from "sqlite3";
import * as path from "path";
import { DatatypeHelper } from "../Parser/DatatypeHelper";
import { Database } from "../Parser/Database";
import { Table } from "../Parser/Table";

export class SQLiteDatabase {

    constructor(private database: sqlite3.Database, private databaseModel: Database) {}

    /**
     * Creates a SQLiteDatabase from the given database model
     * @param db 
     */
    public static FromDatabase(db: Database) {
        let dbname = db.GetName();
        let database = new sqlite3.Database(path.join(`${__dirname}`, "../../db",dbname));
        for(let i = 0; i<db.GetTableCount(); i++) {
            let statement = this.CreateTableStatement(db.GetTableAt(i));
            database.serialize(() => {
                database.run(statement);
            });
        }
        return new SQLiteDatabase(database, db);
    }

    /**
     * Create a sqlite create statement for the given table
     * @param table 
     */
    private static CreateTableStatement(table: Table) {
        let tablename = table.GetName();
        let columns: string[] = [];
        for(let j = 0; j<table.GetColumnCount(); j++) {
            let column = table.GetColumnAt(j);
            columns.push(`${column.GetName()} ${DatatypeHelper.DatatypeToString(column.GetDatatype())}`);
        }
        return `CREATE TABLE IF NOT EXISTS ${tablename} (${columns.join(",")})`;
    }

    /**
     * Get the sqlite.Database object of the SQLiteDatabase
     */
    public GetDB() {
        return this.database;
    }

    /**
     * Get the database model
     */
    public GetDatabaseModel() {
        return this.databaseModel;
    }

}