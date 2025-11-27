import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import headline from "../assets/headline2.png"

const localizer = momentLocalizer(moment)

const Calenders = ({open,setOpen}) => {

const handleClick = () =>{
setOpen(true)
}


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
    <div data-aos="fade-up" className='px-5 md:mt-10 cursor-pointer' onClick={handleClick}>
      <h2 className='text-center text-4xl text-indigo-800 font-semibold'>Calender</h2>
       <div className="flex justify-center">
                  <img src={headline} alt="headline" className="w-full md:h-20 md:w-80 " />
              </div>
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
