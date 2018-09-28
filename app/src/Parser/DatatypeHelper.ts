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
        else if(str === "CHARACTER_20") return Datatype.CHARACTER_20;
        else if(str === "VARCHAR_255") return Datatype.VARCHAR_255;
        else if(str === "VARYING_CHARACTER_255") return Datatype.VARYING_CHARACTER_255;
        else if(str === "NCHAR_55") return Datatype.NCHAR_55;
        else if(str === "NATIVE_CHARACTER_70") return Datatype.NATIVE_CHARACTER_70;
        else if(str === "NVCHAR_100") return Datatype.NVCHAR_100;
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
        else if(str === "DECIMAL_10_5") return Datatype.DECIMAL_10_5;
        else if(str === "BOOLEAN") return Datatype.BOOLEAN;
        else if(str === "DATE") return Datatype.DATE;
        else if(str === "DATETIME") return Datatype.DATETIME;
        // Error
        else throw new Error(`Unknown datatype passed: ${str}`);
    }

}