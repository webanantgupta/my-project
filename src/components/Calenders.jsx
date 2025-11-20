import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)

const Calenders = () => {
  const myEventsList = [
    {
      title: "Demo Event",
      start: new Date(2025, 10, 25, 10, 0), // year, month, day
      end: new Date(2025, 10, 25, 12, 0),
    },
    {
      title: "Demo Event",
      start: new Date(2025, 10, 16, 10, 0), // year, month, day
      end: new Date(2025, 10, 19, 12, 0),
    },

  ];
  return (
    <div>
      <h2 className='text-center text-4xl text-indigo-800 font-semibold'>Calender</h2>
      <div style={{ height: "600px", padding: "20px" }}>
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          defaultView="month"
          defaultDate={new Date()}
          views={["month", "week", "day"]}
          style={{ height: "100%" }}
        />
      </div>
    </div>
  )
}

export default Calenders
