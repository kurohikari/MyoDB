import { Datatype } from "./Datatype";

export class DatatypeHelper {

    /**
     * Returns the datatype represented by the string
     * @param str string to be interpreted
     */
    public static DatatypeForString(str: string): Datatype {
        str = str.trim().toUpperCase();

        // Integer
        if(str === "INT") return Datatype.INT;
        else if(str === "INTEGER") return Datatype.INTEGER;
        else if(str === "TINYINT") return Datatype.TINYINT;
        else if(str === "SMALLINT") return Datatype.SMALLINT;
        else if(str === "MEDIUMINT") return Datatype.MEDIUMINT;
        else if(str === "BIGINT") return Datatype.BIGINT;
        else if(str === "INT2") return Datatype.INT2;
        else if(str === "INT8") return Datatype.INT8;
        // Text
        else if(str === "CHARACTER(20)") return Datatype.CHARACTER_20;
        else if(str === "VARCHAR(255)") return Datatype.VARCHAR_255;
        else if(str === "VARYING CHARACTER(255)") return Datatype.VARYING_CHARACTER_255;
        else if(str === "NCHAR(55)") return Datatype.NCHAR_55;
        else if(str === "NATIVE CHARACTER(70)") return Datatype.NATIVE_CHARACTER_70;
        else if(str === "NVCHAR(100)") return Datatype.NVCHAR_100;
        else if(str === "TEXT") return Datatype.TEXT;
        else if(str === "CLOB") return Datatype.CLOB;
        // None
        else if(str === "BLOB") return Datatype.BLOB;
        else if(str === "UNSPECIFIED") return Datatype.UNSPECIFIED; // Maybe should not be accounted for?
        // Real
        else if(str === "REAL") return Datatype.REAL;
        else if(str === "DOUBLE") return Datatype.DOUBLE;
        else if(str === "DOUBLE_PRECISION") return Datatype.DOUBLE_PRECISION;
        else if(str === "FLOAT") return Datatype.FLOAT;
        // Numeric
        else if(str === "NUMERIC") return Datatype.NUMERIC;
        else if(str === "DECIMAL(10,5)") return Datatype.DECIMAL_10_5;
        else if(str === "BOOLEAN") return Datatype.BOOLEAN;
        else if(str === "DATE") return Datatype.DATE;
        else if(str === "DATETIME") return Datatype.DATETIME;
        // Error
        else throw new Error(`Unknown datatype passed: ${str}`);
    }

    /**
     * Returns the string corresponding to a datatype value.
     * @param datatype 
     */
    public static DatatypeToString(datatype: Datatype) {

        // Integer
        if(datatype === Datatype.INT) return "INT";
        else if(datatype === Datatype.INTEGER) return "INTEGER";
        else if(datatype === Datatype.TINYINT) return "TINYINT";
        else if(datatype === Datatype.SMALLINT) return "SMALLINT";
        else if(datatype === Datatype.MEDIUMINT) return "MEDIUMINT";
        else if(datatype === Datatype.BIGINT) return "BIGINT";
        else if(datatype === Datatype.INT2) return "INT2";
        else if(datatype === Datatype.INT8) return "INT8";

        // Text
        else if(datatype === Datatype.CHARACTER_20) return "CHARACTER(20)";
        else if(datatype === Datatype.VARCHAR_255) return "VARCHAR(255)";
        else if(datatype === Datatype.VARYING_CHARACTER_255) return "VARYING CHARACTER(255)";
        else if(datatype === Datatype.NCHAR_55) return "NCHAR(55)";
        else if(datatype === Datatype.NATIVE_CHARACTER_70) return "NATIVE CHAR(70)";
        else if(datatype === Datatype.NVCHAR_100) return "NVCHAR(100)";
        else if(datatype === Datatype.TEXT) return "TEXT";
        else if(datatype === Datatype.CLOB) return "CLOB";

        // NONE
        else if(datatype === Datatype.BLOB) return "BLOB";
        else if(datatype === Datatype.UNSPECIFIED) return "";

        // Real
        else if(datatype === Datatype.REAL) return "REAL";
        else if(datatype === Datatype.DOUBLE) return "DOUBLE";
        else if(datatype === Datatype.DOUBLE_PRECISION) return "DOUBLE PRECISION";
        else if(datatype === Datatype.FLOAT) return "FLOAT";

        // Numeric
        else if(datatype === Datatype.NUMERIC) return "NUMERIC";
        else if(datatype === Datatype.DECIMAL_10_5) return "DECIMAL(10,5)";
        else if(datatype === Datatype.BOOLEAN) return "BOOLEAN";
        else if(datatype === Datatype.DATE) return "DATE";
        else if(datatype === Datatype.DATETIME) return "DATETIME";

        // Error
        else throw new Error(`Unsupported datatype received "${datatype}"`);
    }

}