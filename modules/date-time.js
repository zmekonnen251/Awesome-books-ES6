import { DateTime } from "../node_modules/luxon/src/luxon.js";
const dateTimeContainer = document.querySelector(".date-time");

const liveDateTime = setInterval(() => {
  dateTimeContainer.innerHTML = DateTime.local()
    .setZone("UTC+1")
    .toLocaleString(DateTime.DATETIME_FULL);
}, 1000);

export default liveDateTime;
