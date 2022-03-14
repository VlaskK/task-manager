const parseDate = (date) => {
    date.toString();
    return {
        dayOfWeek: date.slice(0, 3),
        month: date.slice(4, 7),
        dayOfMonth: date.slice(8,10),
        year: date.slice(11, 15)
    }
}

export default parseDate;