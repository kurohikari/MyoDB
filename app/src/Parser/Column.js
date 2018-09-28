"use strict";
exports.__esModule = true;
var Column = /** @class */ (function () {
    function Column(name, datatype) {
        this.name = name;
        this.datatype = datatype;
    }
    /**
     * Get the name of the column
     */
    Column.prototype.GetName = function () {
        return this.name;
    };
    /**
     * Get the datatype of the column
     */
    Column.prototype.GetDatatype = function () {
        return this.datatype;
    };
    return Column;
}());
exports.Column = Column;
