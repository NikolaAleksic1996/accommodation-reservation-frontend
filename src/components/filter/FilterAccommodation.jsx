import {useState} from "react";
import DatePicker from "react-datepicker"
import {formatDate} from "../../utils/formatDate.js";
import NumberInput from "../input/NumberInput.jsx";

const FilterAccommodation = ({onFilter}) => {
    const [filters, setFilters] = useState({
        startDate: "2024-01-01",
        endDate: "2024-01-02",
        roomNumber: '',
        price: '',
    });

    console.log(filters)
    const handleFilterDateChange = (name, date) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: formatDate(date ? date.toLocaleString() : "2024-01-01"),
        }));
    };
    const handleFilterChange = (e) => {
        const {name, value} = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const applyFilters = () => {
        onFilter(filters);
    };

    return (
        <div className="bg-white p-4 rounded shadow">
            <div className="mb-4 flex space-x-4 gap-3 justify-center items-center">
                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-2">Date from</label>
                    <DatePicker
                        dateFormat="yyyy-MM-dd"
                        className="block mt-1 dark:bg-gray-100 border-gray-300 rounded-md shadow-sm w-25 focus:border-indigo-500 focus:ring-indigo-500"
                        selected={new Date(filters.startDate)}
                        onChange={(date) => handleFilterDateChange("startDate", date)}
                        selectsStart
                        startDate={new Date(filters.startDate)}
                        endDate={new Date(filters.endDate)}
                        minDate={new Date("2024-01-01")}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-2">Date to</label>
                    <DatePicker
                        dateFormat="yyyy-MM-dd"
                        className="block mt-1 dark:bg-gray-100 border-gray-300 rounded-md shadow-sm w-25 focus:border-indigo-500 focus:ring-indigo-500"
                        selected={new Date(filters.endDate)}
                        onChange={(date) => handleFilterDateChange('endDate', date)}
                        selectsEnd
                        startDate={new Date(filters.startDate)}
                        endDate={new Date(filters.endDate)}
                        minDate={new Date(filters.startDate)}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-2">Room number</label>
                    <NumberInput
                        id="roomNumber"
                        name="roomNumber"
                        value={filters.roomNumber || ''}
                        isFocused={true}
                        onChange={(e) => handleFilterChange(e)}
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-2">Price in EUR</label>
                    <NumberInput
                        id="price"
                        name="price"
                        value={filters.price || ''}
                        isFocused={true}
                        onChange={(e) => handleFilterChange(e)}
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <button
                        onClick={applyFilters}
                        className="bg-blue-500 text-white font-medium p-2 rounded hover:bg-blue-600 mt-6"
                    >
                        Apply Filters
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterAccommodation