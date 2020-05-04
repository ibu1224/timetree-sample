const axiosBase = require('axios');

const calendarId = 'replace';
const token = 'replace';

const axios = axiosBase.create({
  baseURL: 'https://timetreeapis.com/',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/vnd.timetree.v1+json',
    'Authorization': `Bearer ${token}`
  },
  responseType: 'json'
});


const createEvent = () => {
  const params = {
    data: {
      attributes: {
        category: 'schedule',
        title: 'これはテストです',
        all_day: true,
        start_at: '2020-05-04T00:00:00.000Z',
        start_timezone: 'UTC',
        end_at: `2020-05-04T00:00:00.000Z`,
        end_timezone: 'UTC',
        description: 'これはテストです',
      },
      relationships: {
        label: {
          data: {
            id: `${calendarId},7`,
            type: "label"
          }
        }
      }
    }
  };
  axios.post(`calendars/${calendarId}/events`, JSON.stringify(params))
    .then(response => console.log(response))
}

const getCalendar = () => {
  axios.get(`calendars/${calendarId}?include=labels,members`)
    .then(response => console.log(response))
}

getCalendar();
createEvent();



