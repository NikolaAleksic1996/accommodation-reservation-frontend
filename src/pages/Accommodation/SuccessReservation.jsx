
const SuccessReservation = ({title, dateRange, roomNumber, handleReturn}) => {

    const handleClick = () => {
        handleReturn();
    };

    return(
        <div className="flex items-center justify-center md:h-[100vh]">
            <div className="bg-white px-6 md:py-10 md:px-14 md:rounded-[30px] md:h-[480px] md:w-[500px]">
                <h1 className="text-2xl md:text-3xl font-[700] mb-5">
                    You have successfully booked your accommodation
                </h1>
                <h1 className="text-2xl md:text-3xl font-[700] mb-5">
                    {title}
                </h1>
                <p>
                    <span className="font-[700]"> {`Date: ${dateRange.startDate} - ${dateRange.endDate}`} </span>

                </p>
                <p>
                    <span className="font-[700]"> {`Person number: ${roomNumber}`} </span>
                </p>
                <button
                    onClick={handleClick}
                    className="bg-blue-400 text-white font-[700] rounded-lg py-4 px-6 mt-[160px] md:mt-10 w-[100%] transition ease-in-out duration-300 hover:bg-gradient-to-r from-blue-500 hover:to-green-500 hover:shadow-2xl hover:shadow-blue-500"
                >
                    Return back
                </button>
            </div>
        </div>
    )
}

export default SuccessReservation