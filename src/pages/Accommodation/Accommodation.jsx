import {useEffect, useState} from "react";
import AccommodationService from "../../services/AccommodationService.js";
import FilterAccommodation from "../../components/filter/FilterAccommodation.jsx";
import AccommodationCard from "./components/AccommodationCard.jsx";
import {filterObjectsByDateRange} from "../../utils/filters/filterObjectsByDateRange.js";
import {filterObjectsByCapacity} from "../../utils/filters/filterObjectsByCapacity.js";
import {filterObjectsByMaxPrice} from "../../utils/filters/filterObjectsByMaxPrice.js";
import {areAllAttributesNull} from "../../utils/areAllAttributesNull.js";
import SuccessReservation from "./SuccessReservation.jsx";


const Accommodation = () => {
    const [accommodation, setAccommodation] = useState([]);
    const [originalAccommodation, setOriginalAccommodation] = useState([]);
    const [addedFilterDateRange, setAddedFilterDateRange] = useState(null)
    const [roomNumber, setRoomNumber] = useState(null)
    const [title, setTitle] = useState(null)
    const [reservation, setReservation] = useState(false)

    const getAccommodation = () => {
        AccommodationService.getAccommodation().then(response => {
            setAccommodation(response.data)
            setOriginalAccommodation(response.data)
        })
    }
    useEffect(() => {
        getAccommodation()
    }, []);

    const handleFilter = (filter) => {
        let filteredAccommodations = originalAccommodation
        if (areAllAttributesNull(filter)) {
            getAccommodation()
            setAddedFilterDateRange(null)
            return
        }
        if (filter.startDate && filter.endDate) {
            filteredAccommodations = filterObjectsByDateRange(filteredAccommodations, filter.startDate, filter.endDate)
            setAddedFilterDateRange({startDate: filter.startDate, endDate: filter.endDate})
        } else {
            setAddedFilterDateRange(null)
        }
        if (filter.roomNumber) {
            filteredAccommodations = filterObjectsByCapacity(filteredAccommodations, filter.roomNumber)
            setRoomNumber(filter.roomNumber)
        } else {
            setRoomNumber(1)
        }
        if (filter.price) {
            filteredAccommodations = filterObjectsByMaxPrice(filteredAccommodations, filter.price)
        }
        setAccommodation(filteredAccommodations)
    }

    const handleReservation = (data) => {
        setTitle(data.title)
        setReservation(true)
    }

    const handleReturnHome = () => {
        getAccommodation()
        setReservation(false)
    }
    return reservation ? (
        <SuccessReservation
            title={title}
            dateRange={addedFilterDateRange}
            roomNumber={roomNumber}
            handleReturn={handleReturnHome}
        />
    ) : (
        <div className='mt-[30px] gap-5'>
            <FilterAccommodation
                onFilter={handleFilter}
            />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {accommodation.map(el => {
                    return (
                        <AccommodationCard
                            key={el.id}
                            data={el}
                            addedFilterDateRange={addedFilterDateRange}
                            roomNumber={roomNumber}
                            setReservation={handleReservation}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Accommodation