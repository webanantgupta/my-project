// import { Calendar, momentLocalizer } from 'react-big-calendar'
// import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import headline from "../assets/headline2.png"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { useState } from "react";
import AdminContact from "../components/AdminContact"

// const localizer = momentLocalizer(moment)

const Calenders = ({ open, setOpen }) => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  const handleClick = () => {
    setOpen(true)
  }


  return (
    <>
      <div data-aos="fade-up" className='px-5 md:mt-10 cursor-pointer h-[800px]'>
        <h2 className='text-center text-4xl text-indigo-800 font-semibold'>Calender</h2>
        <div className="flex justify-center">
          <img src={headline} alt="headline" className="w-full md:h-20 md:w-80 " />
        </div>
        <div style={{ height: "400px", padding: "20px" }}>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            events={[
              { title: 'Engaged', date: '2025-11-28' },
              { title: 'Engaged', date: '2025-11-29' },
              { title: 'Engaged', date: '2025-11-30' },
              { title: 'Engaged', date: '2025-12-01' },
              { title: 'Contact Admin', date: '2025-12-02' },
              { title: 'Free', date: '2025-12-03' },
              { title: 'Free', date: '2025-12-04' },
              { title: 'Engaged', date: '2025-12-05' },
              { title: 'Engaged', date: '2025-12-06' },
              { title: 'Engaged', date: '2025-12-07' },
              { title: 'Free', date: '2025-12-08' },
              { title: 'Free', date: '2025-12-09' },
              { title: 'Engaged', date: '2025-12-10' },
              { title: 'Engaged', date: '2025-12-11' },
              { title: 'Free', date: '2025-12-12' },
              { title: 'Contact Admin', date: '2025-12-13' },
              { title: 'Free', date: '2025-12-14' },
              { title: 'Free', date: '2025-12-15' },
              { title: 'Engaged', date: '2025-12-16' },
              { title: 'Contact Admin', date: '2025-12-17' },
              { title: 'Engaged', date: '2025-12-18' },
              { title: 'Free', date: '2025-12-19' },
              { title: 'Free', date: '2025-12-20' },
              { title: 'Free', date: '2025-12-21' },
              { title: 'Free', date: '2025-12-22' },
              { title: 'Engaged', date: '2025-12-23' },
              { title: 'Free', date: '2025-12-24' },
              { title: 'Free', date: '2025-12-25' },
              { title: 'Engaged', date: '2025-12-26' },
              { title: 'Free', date: '2025-12-27' },
              { title: 'Contact Admin', date: '2025-12-28' },
              { title: 'Free', date: '2025-12-29' },
              { title: 'Engaged', date: '2025-12-30' },
              { title: 'Free', date: '2025-12-31' },
            ]}

            eventDidMount={(info) => {
              console.log(info.event._def.title)
              let title = info.event._def.title;
              if (title === "Engaged") {
                info.el.style.backgroundColor = "red"
                info.el.style.fontSize = "20px"
              } else if (title === "Contact Admin") {
                info.el.style.backgroundColor = "orange"
                info.el.style.fontSize = "20px"

                info.el.addEventListener("click", () => {
                  handleModal();
                })
              } else if (title === "Free") {
                info.el.style.backgroundColor = "green"
                info.el.style.fontSize = "20px"

                info.el.addEventListener("click", () => {
                  handleClick();
                })
              }

            }}
          />
          {/* <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          defaultView="month"
          defaultDate={new Date()}
          views={["month", "week", "day"]}
          style={{ height: "100%" }}
        /> */}
        </div>

      </div>
      <AdminContact modal={modal} closeModal={closeModal} />

    </>
  )
}

export default Calenders
