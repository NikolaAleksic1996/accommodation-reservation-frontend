export function filterObjectsByDateRange(data, startDate, endDate) {
    return data.filter((obj) => {
        const hasAvailableDates = obj.availableDates.some((range) => {
            const from = new Date(range.intervalStart);
            const to = new Date(range.intervalEnd);
            return new Date(startDate) >= from && new Date(endDate) <= to;
        });
        return hasAvailableDates;
    });
}