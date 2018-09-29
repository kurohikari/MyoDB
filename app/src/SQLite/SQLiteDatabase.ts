import * as sqlite3 from "sqlite3";
import * as path from "path";
import { Database } from "../Parser/Database";

export class SQLiteDatabase {

    public static FromDatabase(db: Database) {
        let dbname = db.GetName();
        let database = new sqlite3.Database(path.join(`${__dirname}`, "../../db",dbname)).verbose();
        for(let i = 0; i<db.GetTableCount(); i++) {
            let table = db.GetTableAt(i);
            let tablename = table.GetName();
            let columns = "";
            for(let j = 0; j<table.GetColumnCount(); j++) {
                
            }
            this.Run(database, "CREATE TABLE IF NOT EXISTS ?()")
        }
    }

    private static async Run(db: sqlite3.Database, statement: string, ...args: string[]) {
        return new Promise<void>((fulfill, reject) => {
            db.run(statement, args, error => {
                if(error) reject(error);
                else fulfill();
            });
        });
    }

}