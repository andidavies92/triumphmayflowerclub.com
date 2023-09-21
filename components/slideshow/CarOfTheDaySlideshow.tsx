import ImageCaption from "components/text/ImageCaption";
import merge from "utilities/Merge";
import NumberPlateMarker from "components/markers/NumberPlateMarker";
import SlideshowCar from "model/SlideshowCar";
import SlideshowCars from "data/SlideshowCars";
import StylesFactory from "factories/StylesFactory";

import { carOfTheDaySlideshowZIndex } from "styles/ZIndices";
import { CSSProperties, useEffect, useState } from "react";

const styles = StylesFactory.makeStyles({
    container: {
        zIndex: carOfTheDaySlideshowZIndex,
        position: "relative"
    },
    sellotape: {
        zIndex: carOfTheDaySlideshowZIndex + 1,
        position: "absolute",
        width: 75
    },
    sellotapeTopLeft: {
        top: 31,
        left: -21
    },
    sellotapeBottomRight: {
        bottom: 36,
        right: -20
    },
    slideshow: { textAlign: "center" },
    photo: {
        margin: "10px 8px 7px 8px",
        width: "calc(100% - 16px)",
        boxShadow: "1px 1px 3px",
        color: "grey"
    }
});

const millisecondsPerDay = 8.64e7;

const CarOfTheDaySlideshow = () => {
    const [carOfTheDay, setCarOfTheDay] = useState<SlideshowCar>();

    useEffect(() => {
        const millisecondsSinceEpoch = new Date().getTime();
        const daysSinceEpoch = Math.floor(millisecondsSinceEpoch / millisecondsPerDay);
        const totalNumberOfCars = SlideshowCars.length;
        const cycleIndex = daysSinceEpoch % totalNumberOfCars;

        setCarOfTheDay(SlideshowCars[cycleIndex]);
    });

    if (!carOfTheDay) return null;

    const sellotape = (style: CSSProperties) => (
        <img
            style={merge<CSSProperties>(styles.sellotape, style)}
            src="/graphics/sellotape.png"
            role="presentation"
        />
    );

    const slideshow = (
        <div>
            <img
                style={styles.photo}
                src={`/slideshow/${carOfTheDay.photoFilename}`}
                alt="Car of the Day photo"
            />
            <NumberPlateMarker registration={carOfTheDay.registration} />
            <ImageCaption text={carOfTheDay.caption} />
        </div>
    );

    return (
        <div style={styles.container}>
            {sellotape(styles.sellotapeBottomRight)}
            {sellotape(styles.sellotapeTopLeft)}
            {slideshow}
        </div>
    );
};

export default CarOfTheDaySlideshow;
