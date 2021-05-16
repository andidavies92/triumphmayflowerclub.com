import DatabaseTable from "types/database/DatabaseTable";
import Person from "model/identity/person/Person";

const PeopleTable: DatabaseTable<Person> = [
    {
        id: "b314ca8e-bbe4-42cf-85a5-d97d8551aea4",
        name: {
            forename: "Andrea",
            middleNames: ["Emma"],
            surname: "Davies",
            display: {
                short: "Andi",
                long: "Andi Emma Davies"
            }
        },
        contact: {
            phone: {
                full: "+447961138856",
                formatted: "(07961) 138856"
            },
            email: "andi@stackinabox.co.uk"
        }
    },
    {
        id: "8e61cb21-a316-4e91-81a9-90e0a826cc5d",
        name: {
            forename: "Rye",
            surname: "Livingston"
        },
        contact: {
            phone: {
                full: "+15303463793",
                formatted: "(+1) 530-FIND-RYE"
            },
            email: "driveyourtriumphday@gmail.com"
        }
    },
    {
        id: "96630854-040f-466d-9696-0bfbff8aefce",
        name: {
            forename: "Paul",
            surname: "Burgess"
        },
        contact: {
            email: "pburgess1956@gmail.com"
        }
    },
    {
        id: "3d8c2fcc-8bea-45aa-8322-89760ece82dc",
        name: {
            forename: "Robert",
            middleNames: ["Lloyd"],
            surname: "Davies",
            display: {
                short: "Rob",
                long: "Rob Davies"
            }
        },
        contact: {
            phone: {
                full: "+441291623388",
                formatted: "(01291) 623388"
            },
            email: "robertldavies@btinternet.com"
        }
    }
];

export default PeopleTable;
