import Person from "model/identity/person/Person";
type Member = Person & { membershipNumber: number; };
export default Member;
