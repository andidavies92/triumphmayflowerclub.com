import CarRegistration from "types/CarRegistration";
import classes from "components/markers/NumberPlateMarker.module.scss";

interface NumberPlateMarkerProps { registration: CarRegistration; }

const NumberPlateMarker = ({ registration }: NumberPlateMarkerProps) => <div className={classes.numberPlateMarker}>{registration}</div>;

export default NumberPlateMarker;
