export function areAllAttributesNull(obj) {
    return Object.values(obj).every((value) => value === null);
}