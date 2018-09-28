"use strict";
exports.__esModule = true;
var Table = /** @class */ (function () {
    function Table(name) {
        this.name = name;
        this.columns = [];
    }
    /**
     * Adds a column to the table
     * @param column column to add
     */
    Table.prototype.AddColumn = function (column) {
        if (this.GetColumnWithName(column.GetName()) === null) {
            this.columns.push(column);
        }
        throw new Error("Column with name \"" + column.GetName() + "\" already exists!");
    };
    /**
     * Get the name of the table
     */
    Table.prototype.GetName = function () {
        return this.name;
    };
    /**
     * Get the number of columns in the table
     */
    Table.prototype.GetColumnCount = function () {
        return this.columns.length;
    };
    /**
     * Get a specific column in the table
     * @param index index of the column
     */
    Table.prototype.GetColumnAt = function (index) {
        return this.columns[index];
    };
    /**
     * Get a specific column in the table given its name
     * @param name name of the table
     */
    Table.prototype.GetColumnWithName = function (name) {
        for (var _i = 0, _a = this.columns; _i < _a.length; _i++) {
            var column = _a[_i];
            if (column.GetName() === name) {
                return column;
            }
        }
        return null;
    };
    return Table;
}());
exports.Table = Table;
