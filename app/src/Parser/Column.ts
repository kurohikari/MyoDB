import { Datatype } from "./Datatype";

export class Column {

    constructor(private name: string, private datatype: Datatype) {}

    /**
     * Get the name of the column
     */
    public GetName() {
        return this.name;
    }

    /**
     * Get the datatype of the column
     */
    public GetDatatype() {
        return this.datatype;
    }

}