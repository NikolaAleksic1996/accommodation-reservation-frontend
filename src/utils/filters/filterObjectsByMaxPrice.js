export function filterObjectsByMaxPrice(data, enteredPrice) {
    return data.filter((obj) => {
        const minPrice = Math.min(...obj.pricelistInEuros.map((item) => item.pricePerNight));
        return parseInt(enteredPrice) >= minPrice;
    });
}
