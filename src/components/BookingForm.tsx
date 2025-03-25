"use client";
import postBooking from "@/libs/postBooking";
import { Button, MenuItem, Select } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function BookingForm({
  user,
  dentists,
  token,
}: {
  user: User;
  dentists: DentistJson;
  token: string;
}) {
  const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
  const [dentist, setDentist] = useState<string | null>(null);

  const makeBooking = () => {
    if (bookingDate && dentist) {
      postBooking(token,dentist,bookingDate.toString());
      alert("booked");
    }
  };

  return (
    <div>
      <div className="text-black">
        <div>Name: {user.data.name}</div>
      </div>
      <form className="flex flex-col w-80 space-y-4">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={bookingDate}
            onChange={(value) => {
              setBookingDate(value);
            }}
          />
        </LocalizationProvider>
        <Select
          className=" bg-white"
          variant="standard"
          id="venue"
          value={dentist}
          onChange={(e) => {
            setDentist(e.target.value);
          }}
        >
          {dentists.data.map((dentistItem: DentistItem) => (
            <MenuItem key={dentistItem.name} value={dentistItem._id}>
              {" "}
              {dentistItem.name}
            </MenuItem>
          ))}
        </Select>
        <Button variant="contained" name="Book Appointment" onClick={makeBooking}>
          Book Appointment
        </Button>
      </form>
    </div>
  );
}
