import Image01d from "../../../assets/Weather/01d/01d.png";
import Image01n from "../../../assets/Weather/01n/01n.png";
import Image02d from "../../../assets/Weather/02d/02d.png";
import Image02n from "../../../assets/Weather/02n/02n.png";
import Image04 from "../../../assets/Weather/04/04.png";
import Image09d from "../../../assets/Weather/09d/09d.png";
import Image09n from "../../../assets/Weather/09n/09n.png";
import Image10d from "../../../assets/Weather/10d/10d.png";
import Image10n from "../../../assets/Weather/10n/10n.png";
import Image11d from "../../../assets/Weather/11d/11d.png";
import Image11n from "../../../assets/Weather/11n/11n.png";
import Image13d from "../../../assets/Weather/13d/13d.png";
import Image13n from "../../../assets/Weather/13n/13n.png";


export const weatherImage = (icon) => {
    switch (icon) {
        case "01d":
            return Image01d;
        case "01n":
            return Image01n;
        case "02d":
            return Image02d;
        case "02n":
            return Image02n;
        case "03d":
            return Image02d;
        case "03n":
            return Image02n;
        case "04d":
            return Image04;
        case "04n":
            return Image04;
        case "09d":
            return Image09d
        case "09n":
            return Image09n
        case "10d":
            return Image10d
        case "10n":
            return Image10n
        case "11d":
            return Image11d
        case "11n":
            return Image11n
        case "13d":
            return Image13d
        case "13n":
            return Image13n
        case "50d":
            return Image04
        case "50n":
            return Image04

        default:
            break;
    }
};
