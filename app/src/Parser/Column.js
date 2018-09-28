"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Column {
    constructor(name, datatype) {
        this.name = name;
        this.datatype = datatype;
    }
    /**
     * Get the name of the column
     */
    GetName() {
        return this.name;
    }
    /**
     * Get the datatype of the column
     */
    GetDatatype() {
        return this.datatype;
    }
}
exports.Column = Column;
