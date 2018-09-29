import { Table } from "./Table";

export class Database {

    private tables: Table[];

    constructor(private name: string) {
        this.tables = [];
    }

    /**
     * Add a table to the database
     * @param table table to add
     */
    public AddTable(table: Table) {
        if(this.GetTableWithName(table.GetName()) === null) {
            this.tables.push(table);
        }
        else throw new Error(`Table with name "${table.GetName()}" already exists in the database!`);
    }

    /**
     * Get the name of the database
     */
    public GetName() {
        return this.name;
    }

    /**
     * Get the number of tables in the database
     */
    public GetTableCount() {
        return this.tables.length;
    }

    /**
     * Get a specific table from the database
     * @param index index of the desired table
     */
    public GetTableAt(index: number) {
        return this.tables[index];
    }

    /**
     * Get a specific table from the database with the given name
     * @param name name of the table
     */
    public GetTableWithName(name: string) {
        for(let table of this.tables) {
            if(table.GetName() === name) {
                return table;
            }
        }
        return null;
    }
}