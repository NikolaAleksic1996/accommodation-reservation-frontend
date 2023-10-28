import {useState} from "react";
import {Amenities} from "../../../enums/Amenities.ts";
import {returnPricePerNight} from "../../../utils/calculations/returnPricePerNight.js";

const AccommodationCard = ({data, addedFilterDateRange, roomNumber, setReservation}) => {
    const [isExpanded, setExpanded] = useState(false);

    const handleReserve = () => {
        setReservation(data)
    }

    return (
        <div className="p-10">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={data.image} alt={data.title}/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{data.title}</div>
                    <p className="text-gray-700 text-base">
                        {data.beachDistanceInMeters ? "Beach distance: " + data.beachDistanceInMeters + 'm' : null}
                    </p>
                    <p className="text-gray-700 text-base">
                        {"Room capacity: " + data.capacity}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {isExpanded && (
                        <>
                            <span
                                className={`inline-block ${
                                    data.amenities.airConditioning ? 'bg-blue-600' : 'bg-gray-200'} rounded-full px-3 py-1 text-sm font-semibold ${
                                    data.amenities.airConditioning ? 'text-blue-50' : 'text-gray-700'} mr-2 mb-2`}
                                style={data.amenities.airConditioning ? {} : {textDecoration: 'line-through'}}
                            >
                            {Amenities.AirConditioning}
                            </span>
                            <span
                                className={`inline-block ${
                                    data.amenities.parkingSpace ? 'bg-blue-600' : 'bg-gray-200'} rounded-full px-3 py-1 text-sm font-semibold ${
                                    data.amenities.parkingSpace ? 'text-blue-50' : 'text-gray-700'} mr-2 mb-2`}
                                style={data.amenities.parkingSpace ? {} : {textDecoration: 'line-through'}}
                            >
                            {Amenities.ParkingSpace}
                            </span>
                            <span
                                className={`inline-block ${
                                    data.amenities.pets ? 'bg-blue-600' : 'bg-gray-200'} rounded-full px-3 py-1 text-sm font-semibold ${
                                    data.amenities.pets ? 'text-blue-50' : 'text-gray-700'} mr-2 mb-2`}
                                style={data.amenities.pets ? {} : {textDecoration: 'line-through'}}
                            >
                            {Amenities.Pets}
                            </span>
                            <span
                                className={`inline-block ${
                                    data.amenities.pool ? 'bg-blue-600' : 'bg-gray-200'} rounded-full px-3 py-1 text-sm font-semibold ${
                                    data.amenities.pool ? 'text-blue-50' : 'text-gray-700'} mr-2 mb-2`}
                                style={data.amenities.pool ? {} : {textDecoration: 'line-through'}}
                            >
                            {Amenities.Pool}
                            </span>
                            <span
                                className={`inline-block ${
                                    data.amenities.tv ? 'bg-blue-600' : 'bg-gray-200'} rounded-full px-3 py-1 text-sm font-semibold ${
                                    data.amenities.tv ? 'text-blue-50' : 'text-gray-700'} mr-2 mb-2`}
                                style={data.amenities.tv ? {} : {textDecoration: 'line-through'}}
                            >
                            {Amenities.Tv}
                            </span>
                            <span
                                className={`inline-block ${
                                    data.amenities.wifi ? 'bg-blue-600' : 'bg-gray-200'} rounded-full px-3 py-1 text-sm font-semibold ${
                                    data.amenities.wifi ? 'text-blue-50' : 'text-gray-700'} mr-2 mb-2`}
                                style={data.amenities.wifi ? {} : {textDecoration: 'line-through'}}
                            >
                            {Amenities.Wifi}
                            </span>
                            {addedFilterDateRange ? (
                                <>
                                    <div className="px-6 pt-4 pb-2 flex items-center justify-between">
                                        <p className="text-gray-700 text-base">
                                            {returnPricePerNight(data.pricelistInEuros, addedFilterDateRange) ? (
                                                `Total amount: ${returnPricePerNight(data.pricelistInEuros, addedFilterDateRange)} EUR`
                                            ) : (
                                                '/ EUR'
                                            )}
                                        </p>
                                        <button
                                            className={`bg-blue-500 text-white font-medium px-4 py-2 rounded-2xl
                                            ${returnPricePerNight(data.pricelistInEuros, addedFilterDateRange) === 0 ?
                                                'cursor-not-allowed bg-gray-500 hover:bg-gray-600' : 'bg-blue-500 hover:bg-blue-600'
                                            }`}
                                            onClick={handleReserve}
                                            disabled={returnPricePerNight(data.pricelistInEuros, addedFilterDateRange) === 0}
                                        >
                                            Reserve
                                        </button>
                                    </div>
                                </>
                            ) : <>
                                <div className="pt-4 pb-2 flex items-center justify-between">
                                    <p className="text-gray-700 text-base">
                                        {`Price from: ${Math.min(...data.pricelistInEuros.map(item => item.pricePerNight))} to
                                         ${Math.max(...data.pricelistInEuros.map(item => item.pricePerNight))} EUR per night`
                                        }
                                    </p>
                                </div>
                                <div className="pt-2 pb-2 text-red-500">
                                    Please select the dates of your stay
                                    to be able to see the exact price and book the accommodation.
                                </div>
                            </>}
                        </>
                    )}
                </div>
                <div className="px-6 pt-4 pb-2">
                    <button
                        className="bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600"
                        onClick={() => setExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'Hide' : 'More'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AccommodationCard