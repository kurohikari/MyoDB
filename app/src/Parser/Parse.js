"use strict";
exports.__esModule = true;
var DatatypeHelper_1 = require("./DatatypeHelper");
var Database_1 = require("./Database");
var Column_1 = require("./Column");
var Table_1 = require("./Table");
var fs = require("fs");
var Parser = /** @class */ (function () {
    function Parser() {
    }
    /**
     * Parses the file indicated by the path
     * @param path path of the file to parse
     */
    Parser.Parse = function (path) {
        if (!fs.existsSync(path))
            throw new Error("File at path " + path + " does not exist!");
        if (!path.endsWith(".mdb"))
            throw new Error("File is not an mdb file!");
        var file = fs.readFileSync(path).toString();
        var lines = file.split("\n");
        return this.ParseDBs(lines);
    };
    /**
     * parses the databases in a given array of lines
     * @param lines
     */
    Parser.ParseDBs = function (lines) {
        var databases = [];
        while (lines.length > 0) {
            var nextLine = lines.shift().trim();
            if (nextLine.trim().indexOf("DATABASE") === 0) {
                var dbname = nextLine.substring(nextLine.indexOf(" ") + 1);
                var database = new Database_1.Database(dbname);
                var databasetables = this.ParseTables(lines);
                for (var _i = 0, databasetables_1 = databasetables; _i < databasetables_1.length; _i++) {
                    var table = databasetables_1[_i];
                    database.AddTable(table);
                }
                databases.push(database);
            }
        }
        return databases;
    };
    /**
     * Parses the tables in a given array of lines
     * @param lines
     */
    Parser.ParseTables = function (lines) {
        var tables = [];
        while (lines.length > 0) {
            var nextLine = lines.shift().trim();
            if (nextLine.indexOf("TABLE") === 0) {
                var tablename = nextLine.substring(nextLine.indexOf(" ") + 1);
                var table = new Table_1.Table(tablename);
                var tablecolumns = this.ParseColumns(lines);
                for (var _i = 0, tablecolumns_1 = tablecolumns; _i < tablecolumns_1.length; _i++) {
                    var column = tablecolumns_1[_i];
                    table.AddColumn(column);
                }
                tables.push(table);
            }
            else if (nextLine.indexOf("DATABASE") === 0) {
                lines.unshift(nextLine);
                break;
            }
        }
        return tables;
    };
    /**
     * Parses the columns in a given array of lines
     * @param lines
     */
    Parser.ParseColumns = function (lines) {
        var columns = [];
        while (lines.length > 0) {
            var nextLine = lines.shift().trim();
            if (nextLine.indexOf("COLUMN") === 0) {
                var vals = nextLine.substring(nextLine.indexOf(" ") + 1).split(",");
                // Check that there are two values
                if (vals.length !== 2)
                    throw new Error("Line \"" + nextLine + "\" should have two values separated by a \",\"");
                var columnname = vals[0];
                var columntype = DatatypeHelper_1.DatatypeHelper.DatatypeForString(vals[1]);
                var column = new Column_1.Column(columnname, columntype);
                columns.push(column);
            }
            else if (nextLine.indexOf("TABLE") * nextLine.indexOf("DATABASE") === 0) {
                lines.unshift(nextLine);
                break;
            }
        }
        return columns;
    };
    return Parser;
}());
exports.Parser = Parser;
