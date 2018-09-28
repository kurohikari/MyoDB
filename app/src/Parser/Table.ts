import { Column } from "./Column";

export class Table {

    private columns: Column[];

    constructor(private name: string) {
        this.columns = [];
    }

    /**
     * Adds a column to the table
     * @param column column to add
     */
    public AddColumn(column: Column) {
        if(this.GetColumnWithName(column.GetName()) === null) {
            this.columns.push(column);
        }
        throw new Error(`Column with name "${column.GetName()}" already exists!`);
    }

    /**
     * Get the name of the table
     */
    public GetName() {
        return this.name;
    }

    /**
     * Get the number of columns in the table
     */
    public GetColumnCount() {
        return this.columns.length;
    }

    /**
     * Get a specific column in the table
     * @param index index of the column
     */
    public GetColumnAt(index: number) {
        return this.columns[index];
    }

    /**
     * Get a specific column in the table given its name
     * @param name name of the table
     */
    public GetColumnWithName(name:string) {
        for(let column of this.columns) {
            if(column.GetName() === name) {
                return column;
            }
        }
        return null;
    }

}