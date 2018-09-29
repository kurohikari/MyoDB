import { DatatypeHelper } from './DatatypeHelper';
import { Database } from './Database';
import { Column } from './Column';
import { Table } from './Table';
import * as fs from 'fs';

export class Parser {

    /**
     * Parses the file indicated by the path
     * @param path path of the file to parse
     */
    public static Parse(path: string) {
        if(!path.endsWith(".mdb")) throw new Error(`File is not an mdb file!`);
        let file = fs.readFileSync(path).toString();
        let lines = file.split("\n");
        return this.ParseDBs(lines);
    }

    /**
     * parses the databases in a given array of lines
     * @param lines 
     */
    private static ParseDBs(lines: string[]) {
        let databases: Database[] = [];
        while(lines.length > 0) {
            let nextLine = lines.shift().trim();
            if(nextLine.trim().indexOf("DATABASE") === 0) {
                let dbname = nextLine.substring(nextLine.indexOf(" ")+1);
                let database = new Database(dbname);
                let databasetables = this.ParseTables(lines);
                for(let table of databasetables) {
                    database.AddTable(table);
                }
                databases.push(database);
            }
        }
        return databases;
    }

    /**
     * Parses the tables in a given array of lines
     * @param lines 
     */
    private static ParseTables(lines: string[]) {
        let tables: Table[] = [];
        while(lines.length > 0) {
            let nextLine = lines.shift().trim();
            if(nextLine.indexOf("TABLE") === 0) {
                let tablename = nextLine.substring(nextLine.indexOf(" ")+1);
                let table = new Table(tablename);
                let tablecolumns = this.ParseColumns(lines);
                for(let column of tablecolumns) {
                    table.AddColumn(column);
                }
                tables.push(table);
            } else if(nextLine.indexOf("DATABASE") === 0) {
                lines.unshift(nextLine);
                break;
            }
        }
        return tables;
    }

    /**
     * Parses the columns in a given array of lines
     * @param lines 
     */
    private static ParseColumns(lines: string[]) {
        let columns: Column[] = [];
        while(lines.length > 0) {
            let nextLine = lines.shift().trim();
            if(nextLine.indexOf("COLUMN") === 0) {
                let vals = nextLine.substring(nextLine.indexOf(" ")+1).split(",");
                // Check that there are two values
                if(vals.length !== 2) throw new Error(`Line "${nextLine}" should have two values separated by a ","`);
                let columnname = vals[0];
                let columntype = DatatypeHelper.DatatypeForString(vals[1]);
                let column = new Column(columnname, columntype);
                columns.push(column);
            } else if(nextLine.indexOf("TABLE") * nextLine.indexOf("DATABASE") === 0) {
                lines.unshift(nextLine);
                break;
            }
        }
        return columns;
    }

}