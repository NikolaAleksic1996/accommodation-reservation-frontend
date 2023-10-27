import {useState} from "react";
import {Amenities} from "../../../enums/Amenities.ts";

const AccommodationCard = ({data}) => {
    const [isExpanded, setExpanded] = useState(false);

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
                        {"Available rooms: " + data.capacity}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {isExpanded && (
                        <>
                            <span
                                className={`inline-block ${
                                    data.amenities.airConditioning ? 'bg-blue-600' : 'bg-gray-200'} rounded-full px-3 py-1 text-sm font-semibold ${
                                    data.amenities.airConditioning ? 'text-blue-50' : 'text-gray-700'} mr-2 mb-2`}
                                style={data.amenities.airConditioning ? {} : { textDecoration: 'line-through' }}
                            >
                            {Amenities.AirConditioning}
                            </span>
                            <span
                                className={`inline-block ${
                                    data.amenities.parkingSpace ? 'bg-blue-600' : 'bg-gray-200'} rounded-full px-3 py-1 text-sm font-semibold ${
                                    data.amenities.parkingSpace ? 'text-blue-50' : 'text-gray-700'} mr-2 mb-2`}
                                style={data.amenities.parkingSpace ? {} : { textDecoration: 'line-through' }}
                            >
                            {Amenities.ParkingSpace}
                            </span>
                            <span
                                className={`inline-block ${
                                    data.amenities.pets ? 'bg-blue-600' : 'bg-gray-200'} rounded-full px-3 py-1 text-sm font-semibold ${
                                    data.amenities.pets ? 'text-blue-50' : 'text-gray-700'} mr-2 mb-2`}
                                style={data.amenities.pets ? {} : { textDecoration: 'line-through' }}
                            >
                            {Amenities.Pets}
                            </span>
                            <span
                                className={`inline-block ${
                                    data.amenities.pool ? 'bg-blue-600' : 'bg-gray-200'} rounded-full px-3 py-1 text-sm font-semibold ${
                                    data.amenities.pool ? 'text-blue-50' : 'text-gray-700'} mr-2 mb-2`}
                                style={data.amenities.pool ? {} : { textDecoration: 'line-through' }}
                            >
                            {Amenities.Pool}
                            </span>
                            <span
                                className={`inline-block ${
                                    data.amenities.tv ? 'bg-blue-600' : 'bg-gray-200'} rounded-full px-3 py-1 text-sm font-semibold ${
                                    data.amenities.tv ? 'text-blue-50' : 'text-gray-700'} mr-2 mb-2`}
                                style={data.amenities.tv ? {} : { textDecoration: 'line-through' }}
                            >
                            {Amenities.Tv}
                            </span>
                            <span
                                className={`inline-block ${
                                    data.amenities.wifi ? 'bg-blue-600' : 'bg-gray-200'} rounded-full px-3 py-1 text-sm font-semibold ${
                                    data.amenities.wifi ? 'text-blue-50' : 'text-gray-700'} mr-2 mb-2`}
                                style={data.amenities.wifi ? {} : { textDecoration: 'line-through' }}
                            >
                            {Amenities.Wifi}
                            </span>
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