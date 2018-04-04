import { helper } from '@ember/component/helper';

export function handleDate(date) {
    const newDate = new Date(date + "T12:00:00-05:00")
    const monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return `${monthsArr[newDate.getMonth()]} ${newDate.getFullYear()}`
}
export default helper(handleDate);
