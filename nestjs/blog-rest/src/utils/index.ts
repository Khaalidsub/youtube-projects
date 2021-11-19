export function isEmpty(obj: Object) {
    return (obj
        && Object.keys(obj).length === 0
        && Object.getPrototypeOf(obj) === Object.prototype)
}