import {useEffect, useState} from "react";
import AccommodationService from "../../services/AccommodationService.js";


const Accommodation = () => {
    const [accommodation, setAccommodation] = useState([]);

    useEffect(() => {
        AccommodationService.getAccommodation().then(response => {
            setAccommodation(response.data)
        })
    }, []);

}

export default Accommodation