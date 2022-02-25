import { DateTime } from 'luxon';

const dateTimeContainer = document.querySelector('.date-time');

const liveDateTime = () => {
  setInterval(() => {
    dateTimeContainer.innerHTML = DateTime.local()
      .setZone('UTC+1')
      .toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  }, 1);
};

export default liveDateTime;
