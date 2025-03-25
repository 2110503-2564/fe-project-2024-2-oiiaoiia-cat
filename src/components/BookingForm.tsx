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
  bookings,
  token,
}: {
  user: User;
  dentists: DentistJson;
  bookings: BookingJson;
  token: string;
}) {
  const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
  const [dentist, setDentist] = useState<string | null>(null);

  const makeBooking = () => {
    if(bookings.count>=1 && user.data.role!=="admin"){
      alert("Can't book more than once.")
      return;
    }
    if (bookingDate && dentist) {
      postBooking(token, dentist, bookingDate.toString());
      alert("book success.");
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
        <Button
          variant="contained"
          name="Book Appointment"
          onClick={makeBooking}
        >
          Book Appointment
        </Button>
      </form>
    </div>
  );
}
