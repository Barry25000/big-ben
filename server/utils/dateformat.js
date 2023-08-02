// format the date to be readable
// export function formatDate(date) 
// import dayjs from "dayjs";


const formatDate = (date) => {
    const newDate = new Date(date).days.formattoLocaleDateString("en-US");
    const newTime = new Date(date).toLocaleTimeString("en-US");
    return `${newDate} at ${newTime}`;
}
console.log(formatDate("2021-08-03T18:25:43.511Z"));

// console.log(Date.now());