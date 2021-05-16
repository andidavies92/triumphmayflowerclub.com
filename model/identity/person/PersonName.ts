export default interface PersonName {
    forename: string;
    middleNames?: string[];
    surname: string;
    display?: {
        short?: string;
        long?: string;
    }
}
