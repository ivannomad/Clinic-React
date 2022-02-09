import React, {useEffect, useState} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid'
import {useLocation} from "react-router-dom"; // a plugin!

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.

export const  DoctorScheduleAppointment = (props) => {

    const { state } = useLocation();
    const [doctorId, setDoctorId] = useState("");

    useEffect(() => {
        setDoctorId(state.doctorId);
    },[]);

    return (
        <>
            <div>{doctorId}</div>
            <FullCalendar
                plugins={[timeGridPlugin]}
                initialView="timeGridWeek"
            />
        </>
    )
}

