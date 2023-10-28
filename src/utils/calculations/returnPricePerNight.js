export function returnPricePerNight(data, {startDate, endDate}) {
    let totalPrice = 0;

    for (const item of data) {
        const itemStartDate = new Date(item.intervalStart);
        const itemEndDate = new Date(item.intervalEnd);

        if (itemStartDate <= new Date(endDate) && itemEndDate >= new Date(startDate)) {
            const overlapStartDate = new Date(Math.max(itemStartDate, new Date(startDate)));
            const overlapEndDate = new Date(Math.min(itemEndDate, new Date(endDate)));

            const nights = Math.ceil((overlapEndDate - overlapStartDate) / (1000 * 60 * 60 * 24));
            totalPrice += nights * item.pricePerNight;
        }
    }

    return totalPrice;
}