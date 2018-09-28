"use strict";
// According to https://www.tutorialspoint.com/sqlite/sqlite_data_types.htm
exports.__esModule = true;
var Datatype;
(function (Datatype) {
    // Affinity Integer
    Datatype[Datatype["INT"] = 0] = "INT";
    Datatype[Datatype["INTEGER"] = 1] = "INTEGER";
    Datatype[Datatype["TINYINT"] = 2] = "TINYINT";
    Datatype[Datatype["SMALLINT"] = 3] = "SMALLINT";
    Datatype[Datatype["MEDIUMINT"] = 4] = "MEDIUMINT";
    Datatype[Datatype["BIGINT"] = 5] = "BIGINT";
    Datatype[Datatype["INT2"] = 6] = "INT2";
    Datatype[Datatype["INT8"] = 7] = "INT8";
    // Affinity Text
    Datatype[Datatype["CHARACTER_20"] = 8] = "CHARACTER_20";
    Datatype[Datatype["VARCHAR_255"] = 9] = "VARCHAR_255";
    Datatype[Datatype["VARYING_CHARACTER_255"] = 10] = "VARYING_CHARACTER_255";
    Datatype[Datatype["NCHAR_55"] = 11] = "NCHAR_55";
    Datatype[Datatype["NATIVE_CHARACTER_70"] = 12] = "NATIVE_CHARACTER_70";
    Datatype[Datatype["NVCHAR_100"] = 13] = "NVCHAR_100";
    Datatype[Datatype["TEXT"] = 14] = "TEXT";
    Datatype[Datatype["CLOB"] = 15] = "CLOB";
    // Affinity None
    Datatype[Datatype["BLOB"] = 16] = "BLOB";
    Datatype[Datatype["UNSPECIFIED"] = 17] = "UNSPECIFIED";
    // Affinity Real
    Datatype[Datatype["REAL"] = 18] = "REAL";
    Datatype[Datatype["DOUBLE"] = 19] = "DOUBLE";
    Datatype[Datatype["DOUBLE_PRECISION"] = 20] = "DOUBLE_PRECISION";
    Datatype[Datatype["FLOAT"] = 21] = "FLOAT";
    // Affinity Numeric
    Datatype[Datatype["NUMERIC"] = 22] = "NUMERIC";
    Datatype[Datatype["DECIMAL_10_5"] = 23] = "DECIMAL_10_5";
    Datatype[Datatype["BOOLEAN"] = 24] = "BOOLEAN";
    Datatype[Datatype["DATE"] = 25] = "DATE";
    Datatype[Datatype["DATETIME"] = 26] = "DATETIME";
})(Datatype = exports.Datatype || (exports.Datatype = {}));
