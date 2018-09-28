"use strict";
exports.__esModule = true;
var Parse_1 = require("../../src/Parser/Parse");
var Datatype_1 = require("../../src/Parser/Datatype");
var TestParser = /** @class */ (function () {
    function TestParser() {
    }
    TestParser.main = function () {
        this.Test1();
        return 0;
    };
    TestParser.Test1 = function () {
        var dbs = Parse_1.Parser.Parse("./test.mdb");
        if (dbs.length !== 1)
            throw new Error("1 Database should have been parsed instead of " + dbs.length + "!");
        var db = dbs[0];
        if (db.GetName() !== "MyoDB")
            throw new Error("Database name should be MyoDB instead of " + db.GetName() + "!");
        if (db.GetTableCount() !== 2)
            throw new Error("Database should have 2 tables instead of " + db.GetTableCount());
        var table1 = db.GetTableAt(0);
        if (table1.GetName() !== "MyoTable1")
            throw new Error("Table name should be MyoTable1 instead of " + table1.GetName() + "!");
        if (table1.GetColumnCount() !== 3)
            throw new Error("Table should have 3 columns instead of " + table1.GetColumnCount());
        var column11 = table1.GetColumnAt(0);
        if (column11.GetName() !== "id")
            throw new Error("Column name should be id instead of " + column11.GetName() + "!");
        if (column11.GetDatatype() !== Datatype_1.Datatype.INT)
            throw new Error("Column datatype should be INT instead of " + column11.GetDatatype() + "!");
        var column12 = table1.GetColumnAt(1);
        if (column12.GetName() !== "name")
            throw new Error("Column name should be name instead of " + column12.GetName() + "!");
        if (column12.GetDatatype() !== Datatype_1.Datatype.TEXT)
            throw new Error("Column datatype should be TEXT instead of " + column12.GetDatatype() + "!");
        var column13 = table1.GetColumnAt(2);
        if (column13.GetName() !== "date")
            throw new Error("Column name should be date instead of " + column13.GetName() + "!");
        if (column13.GetDatatype() !== Datatype_1.Datatype.DATE)
            throw new Error("Column datatype should be DATE instead of " + column13.GetDatatype() + "!");
        var table2 = db.GetTableAt(1);
        if (table2.GetName() !== "MyoTable2")
            throw new Error("Table name should be MyoTable2 instead of " + table2.GetName() + "!");
        if (table2.GetColumnCount() !== 2)
            throw new Error("Table should have 2 columns instead of " + table2.GetColumnCount());
        var column21 = table2.GetColumnAt(0);
        if (column21.GetName() !== "uname")
            throw new Error("Column name should be uname instead of " + column21.GetName() + "!");
        if (column21.GetDatatype() !== Datatype_1.Datatype.TEXT)
            throw new Error("Column datatype should be TEXT instead of " + column21.GetDatatype() + "!");
        var column22 = table2.GetColumnAt(1);
        if (column22.GetName() !== "time")
            throw new Error("Column name should be time instead of " + column22.GetName() + "!");
        if (column22.GetDatatype() !== Datatype_1.Datatype.FLOAT)
            throw new Error("Column datatype should be FLOAT instead of " + column22.GetDatatype() + "!");
        console.log("Test ran successfully!");
    };
    return TestParser;
}());
exports.TestParser = TestParser;
