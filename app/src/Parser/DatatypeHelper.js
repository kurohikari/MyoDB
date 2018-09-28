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
        else if (str === "CHARACTER_20")
            return Datatype_1.Datatype.CHARACTER_20;
        else if (str === "VARCHAR_255")
            return Datatype_1.Datatype.VARCHAR_255;
        else if (str === "VARYING_CHARACTER_255")
            return Datatype_1.Datatype.VARYING_CHARACTER_255;
        else if (str === "NCHAR_55")
            return Datatype_1.Datatype.NCHAR_55;
        else if (str === "NATIVE_CHARACTER_70")
            return Datatype_1.Datatype.NATIVE_CHARACTER_70;
        else if (str === "NVCHAR_100")
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
        else if (str === "DECIMAL_10_5")
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
}
exports.DatatypeHelper = DatatypeHelper;
