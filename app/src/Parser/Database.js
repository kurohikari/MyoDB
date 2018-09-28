"use strict";
exports.__esModule = true;
var Database = /** @class */ (function () {
    function Database(name) {
        this.name = name;
        this.tables = [];
    }
    /**
     * Add a table to the database
     * @param table table to add
     */
    Database.prototype.AddTable = function (table) {
        if (this.GetTableWithName(table.GetName()) === null) {
            this.tables.push(table);
        }
        throw new Error("Table with name \"" + table.GetName() + "\" already exists in the database!");
    };
    /**
     * Get the name of the database
     */
    Database.prototype.GetName = function () {
        return this.name;
    };
    /**
     * Get the number of tables in the database
     */
    Database.prototype.GetTableCount = function () {
        return this.tables.length;
    };
    /**
     * Get a specific table from the database
     * @param index index of the desired table
     */
    Database.prototype.GetTableAt = function (index) {
        return this.tables[index];
    };
    /**
     * Get a specific table from the database with the given name
     * @param name name of the table
     */
    Database.prototype.GetTableWithName = function (name) {
        for (var _i = 0, _a = this.tables; _i < _a.length; _i++) {
            var table = _a[_i];
            if (table.GetName() === name) {
                return table;
            }
        }
        return null;
    };
    return Database;
}());
exports.Database = Database;
