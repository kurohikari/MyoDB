"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Table {
    constructor(name) {
        this.name = name;
        this.columns = [];
    }
    /**
     * Adds a column to the table
     * @param column column to add
     */
    AddColumn(column) {
        if (this.GetColumnWithName(column.GetName()) === null) {
            this.columns.push(column);
        }
        else
            throw new Error(`Column with name "${column.GetName()}" already exists!`);
    }
    /**
     * Get the name of the table
     */
    GetName() {
        return this.name;
    }
    /**
     * Get the number of columns in the table
     */
    GetColumnCount() {
        return this.columns.length;
    }
    /**
     * Get a specific column in the table
     * @param index index of the column
     */
    GetColumnAt(index) {
        return this.columns[index];
    }
    /**
     * Get a specific column in the table given its name
     * @param name name of the table
     */
    GetColumnWithName(name) {
        for (let column of this.columns) {
            if (column.GetName() === name) {
                return column;
            }
        }
        return null;
    }
}
exports.Table = Table;
