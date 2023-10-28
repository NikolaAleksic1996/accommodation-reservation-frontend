export function filterObjectsByCapacity(data, enteredCapacity) {
    return data.filter((obj) => obj.capacity >= parseInt(enteredCapacity));
}