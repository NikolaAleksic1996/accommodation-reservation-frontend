import {useState} from "react";
import DatePicker from "react-datepicker"
import {formatDate} from "../../utils/formatDate.js";
import NumberInput from "../input/NumberInput.jsx";
import { addDays } from 'date-fns';

const FilterAccommodation = ({onFilter, handleRoomNumber}) => {
    const [filters, setFilters] = useState({
        startDate: null,
        endDate: null,
        roomNumber: null,
        price: null,
    });

    const handleFilterDateChange = (name, date) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: formatDate(date ? date.toLocaleString() : null),
        }));
        if (name === 'startDate' && date >= new Date(filters.endDate)) {
            setFilters((prevFilters) => ({
                ...prevFilters,
                endDate: null,
            }));
        }
    };
    const handleFilterChange = (e) => {
        const {name, value} = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
        if(name === 'roomNumber') {
            handleRoomNumber(value)
        }
    };

    const applyFilters = () => {
        onFilter(filters);
    };

    return (
        <div className="bg-white p-4 rounded shadow">
            <div className="mb-4 flex space-x-4 gap-3 justify-center items-center flex-col sm:flex-row md:flex-row lg:flex-row ">
                <div className="flex ms-4 flex-col sm:w-auto md:w-auto lg:w-auto">
                    <label className="text-sm font-medium mb-2">Date from</label>
                    <DatePicker
                        dateFormat="yyyy-MM-dd"
                        className="block mt-1 dark:bg-gray-100 border-gray-300 rounded-md shadow-sm w-full sm:w-25 md:w-25 lg:w-25 focus:border-indigo-500 focus:ring-indigo-500"
                        selected={filters.startDate ? new Date(filters.startDate) : null}
                        onChange={(date) => handleFilterDateChange("startDate", date)}
                        selectsStart
                        startDate={new Date(filters.startDate)}
                        endDate={new Date(filters.endDate)}
                        minDate={new Date("2024-01-01")}
                    />
                </div>
                <div className="flex flex-col sm:w-auto md:w-auto lg:w-auto">
                    <label className="text-sm font-medium mb-2">Date to</label>
                    <DatePicker
                        dateFormat="yyyy-MM-dd"
                        className="block mt-1 dark:bg-gray-100 border-gray-300 rounded-md shadow-sm w-full sm:w-25 md:w-25 lg:w-25 focus:border-indigo-500 focus:ring-indigo-500"
                        selected={filters.endDate ? new Date(filters.endDate) : null}
                        onChange={(date) => handleFilterDateChange('endDate', date)}
                        selectsEnd
                        startDate={new Date(filters.startDate)}
                        endDate={new Date(filters.endDate)}
                        minDate={addDays(new Date(filters.startDate), 1)}
                    />
                </div>
                <div className="flex flex-col sm:w-auto md:w-auto lg:w-auto">
                    <label className="text-sm font-medium mb-2">Person number</label>
                    <NumberInput
                        id="roomNumber"
                        name="roomNumber"
                        value={filters.roomNumber || ''}
                        onChange={(e) => handleFilterChange(e)}
                        required
                    />
                </div>
                <div className="flex flex-col sm:w-auto md:w-auto lg:w-auto">
                    <label className="text-sm font-medium mb-2">Price per night in EUR</label>
                    <NumberInput
                        id="price"
                        name="price"
                        value={filters.price || ''}
                        onChange={(e) => handleFilterChange(e)}
                        required
                    />
                </div>
                <div className="flex flex-col sm:w-auto md:w-auto lg:w-auto">
                    <button
                        onClick={applyFilters}
                        className="bg-blue-500 text-white font-medium p-2 sm:rounded md:rounded-e-2xl lg:rounded-e-2xl hover:bg-blue-600 mt-6"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterAccommodation