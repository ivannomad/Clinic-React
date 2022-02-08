import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid' // a plugin!

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.

export const  DoctorScheduleAppointment = () => {
    return (
        <FullCalendar
            plugins={[timeGridPlugin]}
            initialView="timeGridWeek"
        />
    )
}

