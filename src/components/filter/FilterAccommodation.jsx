import {useState} from "react";

const FilterAccommodation = ({ onFilter }) => {
    const [filters, setFilters] = useState({
        dateFrom: '',
        dateTo: '',
        roomNumber: '',
        price: '',
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
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
            <h2 className="text-xl font-semibold mb-4">Filter</h2>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                    name="category"
                    value={filters.category}
                    onChange={handleFilterChange}
                    className="block w-full border p-2 rounded"
                >
                    <option value="All">All</option>
                    <option value="Category 1">Category 1</option>
                    <option value="Category 2">Category 2</option>
                    {/* Add more options based on your data */}
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Price</label>
                <select
                    name="price"
                    value={filters.price}
                    onChange={handleFilterChange}
                    className="block w-full border p-2 rounded"
                >
                    <option value="All">All</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    {/* Add more options based on your data */}
                </select>
            </div>

            <button
                onClick={applyFilters}
                className="bg-blue-500 text-white font-medium p-2 rounded hover:bg-blue-600"
            >
                Apply Filters
            </button>
        </div>
    );
};

export default FilterAccommodation