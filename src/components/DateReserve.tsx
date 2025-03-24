"use client";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { useState } from "react";

export default function DateReserve({onDateChange}:{onDateChange:Function}) {
  
  const [bookingDate,setBookingDate] = useState<Dayjs|null>(null)
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker value={bookingDate}
      onChange={(value)=>{setBookingDate(value); onDateChange(value)}} />
    </LocalizationProvider>
  );
}
