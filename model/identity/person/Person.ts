import DatabaseRow from "types/database/DatabaseRow";
import PersonContactDetails from "model/identity/person/PersonContactDetails";
import PersonName from "model/identity/person/PersonName";

export default interface Person extends DatabaseRow {
    name: PersonName;
    contact?: PersonContactDetails;
}
