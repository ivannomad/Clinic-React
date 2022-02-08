import React, {useEffect} from 'react';
import axios from "axios";

export const PatientAppointments = () => {

  useEffect(async () => {
    await axios.get("http://localhost:8080", {})
  }, [])

  return (
      <div>Hello</div>
  )
}