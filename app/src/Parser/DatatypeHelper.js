"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Datatype_1 = require("./Datatype");
class DatatypeHelper {
    /**
     * Returns the datatype represented by the string
     * @param str string to be interpreted
     */
    static DatatypeForString(str) {
        str = str.trim().toUpperCase();
        // Integer
        if (str === "INT")
            return Datatype_1.Datatype.INT;
        else if (str === "INTEGER")
            return Datatype_1.Datatype.INTEGER;
        else if (str === "TINYINT")
            return Datatype_1.Datatype.TINYINT;
        else if (str === "SMALLINT")
            return Datatype_1.Datatype.SMALLINT;
        else if (str === "MEDIUMINT")
            return Datatype_1.Datatype.MEDIUMINT;
        else if (str === "BIGINT")
            return Datatype_1.Datatype.BIGINT;
        else if (str === "INT2")
            return Datatype_1.Datatype.INT2;
        else if (str === "INT8")
            return Datatype_1.Datatype.INT8;
        else if (str === "CHARACTER(20)")
            return Datatype_1.Datatype.CHARACTER_20;
        else if (str === "VARCHAR(255)")
            return Datatype_1.Datatype.VARCHAR_255;
        else if (str === "VARYING CHARACTER(255)")
            return Datatype_1.Datatype.VARYING_CHARACTER_255;
        else if (str === "NCHAR(55)")
            return Datatype_1.Datatype.NCHAR_55;
        else if (str === "NATIVE CHARACTER(70)")
            return Datatype_1.Datatype.NATIVE_CHARACTER_70;
        else if (str === "NVCHAR(100)")
            return Datatype_1.Datatype.NVCHAR_100;
        else if (str === "TEXT")
            return Datatype_1.Datatype.TEXT;
        else if (str === "CLOB")
            return Datatype_1.Datatype.CLOB;
        else if (str === "BLOB")
            return Datatype_1.Datatype.BLOB;
        else if (str === "UNSPECIFIED")
            return Datatype_1.Datatype.UNSPECIFIED; // Maybe should not be accounted for?
        else if (str === "REAL")
            return Datatype_1.Datatype.REAL;
        else if (str === "DOUBLE")
            return Datatype_1.Datatype.DOUBLE;
        else if (str === "DOUBLE_PRECISION")
            return Datatype_1.Datatype.DOUBLE_PRECISION;
        else if (str === "FLOAT")
            return Datatype_1.Datatype.FLOAT;
        else if (str === "NUMERIC")
            return Datatype_1.Datatype.NUMERIC;
        else if (str === "DECIMAL(10,5)")
            return Datatype_1.Datatype.DECIMAL_10_5;
        else if (str === "BOOLEAN")
            return Datatype_1.Datatype.BOOLEAN;
        else if (str === "DATE")
            return Datatype_1.Datatype.DATE;
        else if (str === "DATETIME")
            return Datatype_1.Datatype.DATETIME;
        else
            throw new Error(`Unknown datatype passed: ${str}`);
    }
    /**
     * Returns the string corresponding to a datatype value.
     * @param datatype
     */
    static DatatypeToString(datatype) {
        // Integer
        if (datatype === Datatype_1.Datatype.INT)
            return "INT";
        else if (datatype === Datatype_1.Datatype.INTEGER)
            return "INTEGER";
        else if (datatype === Datatype_1.Datatype.TINYINT)
            return "TINYINT";
        else if (datatype === Datatype_1.Datatype.SMALLINT)
            return "SMALLINT";
        else if (datatype === Datatype_1.Datatype.MEDIUMINT)
            return "MEDIUMINT";
        else if (datatype === Datatype_1.Datatype.BIGINT)
            return "BIGINT";
        else if (datatype === Datatype_1.Datatype.INT2)
            return "INT2";
        else if (datatype === Datatype_1.Datatype.INT8)
            return "INT8";
        else if (datatype === Datatype_1.Datatype.CHARACTER_20)
            return "CHARACTER(20)";
        else if (datatype === Datatype_1.Datatype.VARCHAR_255)
            return "VARCHAR(255)";
        else if (datatype === Datatype_1.Datatype.VARYING_CHARACTER_255)
            return "VARYING CHARACTER(255)";
        else if (datatype === Datatype_1.Datatype.NCHAR_55)
            return "NCHAR(55)";
        else if (datatype === Datatype_1.Datatype.NATIVE_CHARACTER_70)
            return "NATIVE CHAR(70)";
        else if (datatype === Datatype_1.Datatype.NVCHAR_100)
            return "NVCHAR(100)";
        else if (datatype === Datatype_1.Datatype.TEXT)
            return "TEXT";
        else if (datatype === Datatype_1.Datatype.CLOB)
            return "CLOB";
        else if (datatype === Datatype_1.Datatype.BLOB)
            return "BLOB";
        else if (datatype === Datatype_1.Datatype.UNSPECIFIED)
            return "";
        else if (datatype === Datatype_1.Datatype.REAL)
            return "REAL";
        else if (datatype === Datatype_1.Datatype.DOUBLE)
            return "DOUBLE";
        else if (datatype === Datatype_1.Datatype.DOUBLE_PRECISION)
            return "DOUBLE PRECISION";
        else if (datatype === Datatype_1.Datatype.FLOAT)
            return "FLOAT";
        else if (datatype === Datatype_1.Datatype.NUMERIC)
            return "NUMERIC";
        else if (datatype === Datatype_1.Datatype.DECIMAL_10_5)
            return "DECIMAL(10,5)";
        else if (datatype === Datatype_1.Datatype.BOOLEAN)
            return "BOOLEAN";
        else if (datatype === Datatype_1.Datatype.DATE)
            return "DATE";
        else if (datatype === Datatype_1.Datatype.DATETIME)
            return "DATETIME";
        else
            throw new Error(`Unsupported datatype received "${datatype}"`);
    }
}
exports.DatatypeHelper = DatatypeHelper;
