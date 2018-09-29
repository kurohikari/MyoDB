"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Database {
    constructor(name) {
        this.name = name;
        this.tables = [];
    }
    /**
     * Add a table to the database
     * @param table table to add
     */
    AddTable(table) {
        if (this.GetTableWithName(table.GetName()) === null) {
            this.tables.push(table);
        }
        else
            throw new Error(`Table with name "${table.GetName()}" already exists in the database!`);
    }
    /**
     * Get the name of the database
     */
    GetName() {
        return this.name;
    }
    /**
     * Get the number of tables in the database
     */
    GetTableCount() {
        return this.tables.length;
    }
    /**
     * Get a specific table from the database
     * @param index index of the desired table
     */
    GetTableAt(index) {
        return this.tables[index];
    }
    /**
     * Get a specific table from the database with the given name
     * @param name name of the table
     */
    GetTableWithName(name) {
        for (let table of this.tables) {
            if (table.GetName() === name) {
                return table;
            }
        }
        return null;
    }
}
exports.Database = Database;
