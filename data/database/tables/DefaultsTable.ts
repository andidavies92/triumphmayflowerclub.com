import DatabaseRow from "types/database/DatabaseRow";
import DatabaseTable from "types/database/DatabaseTable";
import Guid from "types/Guid";

interface Default extends DatabaseRow {
    name: string;
    table: string;
    foreignKey: Guid;
}

const DefaultsTable: DatabaseTable<Default> = [
    {
        id: "67cc4f95-7541-405e-b6ef-4b0c09511494",
        name: "Author",
        table: "people",
        foreignKey: "b314ca8e-bbe4-42cf-85a5-d97d8551aea4"
    }
];

export default DefaultsTable;
