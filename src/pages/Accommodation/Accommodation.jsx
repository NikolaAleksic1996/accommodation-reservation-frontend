import {useEffect, useState} from "react";
import AccommodationService from "../../services/AccommodationService.js";
import FilterAccommodation from "../../components/filter/FilterAccommodation.jsx";
import AccommodationCard from "./components/AccommodationCard.jsx";


const Accommodation = () => {
    const [accommodation, setAccommodation] = useState([]);

    useEffect(() => {
        AccommodationService.getAccommodation().then(response => {
            setAccommodation(response.data)
        })
    }, []);

    console.log(accommodation)

    const handleFilter = (filter) => {
        console.log(filter)
    }

    return (
        <div className='mt-[30px] gap-5'>
            <FilterAccommodation
                onFilter={handleFilter}
            />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {accommodation.map(el => { console.log(el.image)
                    return (
                        <AccommodationCard key={el.id} data={el}/>
                    )
                })}
            </div>
        </div>
    )

}

export default Accommodation