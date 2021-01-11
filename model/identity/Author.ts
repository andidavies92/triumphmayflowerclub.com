import Member from "model/identity/Member";
import Person from "model/identity/person/Person";

type Author = Member | Person;

export function authorToString({ name: { forename, surname, middleNames } }: Author) {
    const optionalMiddleNames = middleNames?.join(' ');
    const forenameWithOptionalMiddlenames = `${forename}${optionalMiddleNames ? ` ${optionalMiddleNames}` : ""}`;

    return `${forenameWithOptionalMiddlenames} ${surname}`;
};

export default Author;
