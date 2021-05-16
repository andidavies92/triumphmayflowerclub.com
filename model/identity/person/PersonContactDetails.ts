import EmailAddress from "types/EmailAddress";
import PhoneNumber from "model/PhoneNumber";

export default interface PersonContactDetails {
    phone?: PhoneNumber;
    email?: EmailAddress;
}
