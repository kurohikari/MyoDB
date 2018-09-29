// According to https://www.tutorialspoint.com/sqlite/sqlite_data_types.htm

export enum Datatype {
    // Affinity Integer
    INT, INTEGER, TINYINT, SMALLINT, MEDIUMINT, BIGINT, INT2, INT8,

    // Affinity Text
    CHARACTER_20, VARCHAR_255, VARYING_CHARACTER_255, NCHAR_55, NATIVE_CHARACTER_70, NVCHAR_100, TEXT, CLOB,

    // Affinity None
    BLOB, UNSPECIFIED,

    // Affinity Real
    REAL, DOUBLE, DOUBLE_PRECISION, FLOAT,

    // Affinity Numeric
    NUMERIC, DECIMAL_10_5, BOOLEAN, DATE, DATETIME
    
}