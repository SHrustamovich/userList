export const shortTitle = (str) => {
    if (str.length > 30) {
        return str.slice(0,30) + "..."
    } else {
        return str
    }
}