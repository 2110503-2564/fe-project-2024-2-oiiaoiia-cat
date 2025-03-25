"use client";

import deleteBookings from "@/libs/deleteBooking";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import updateBooking from "@/libs/updateBooking";
import { MenuItem, Select } from "@mui/material";

export default function BookingList({
  bookings,
  dentists,
  token,
}: {
  bookings: BookingJson;
  token: string;
  dentists: DentistJson;
}) {
  const [bookingList, setBookingList] = useState<BookingItem[]>(bookings.data);
  const [editingBooking, setEditingBooking] = useState<BookingItem | null>(
    null
  );
  const [updatedBookingDate, setUpdatedBookingDate] = useState<Dayjs | null>(
    null
  );
  const [updatedDentist, setUpdatedDentist] = useState<string | null>(null);

  const handleDelete = async (bookingId: string) => {
    try {
      await deleteBookings(bookingId, token);
      setBookingList(
        bookingList.filter((booking) => booking._id !== bookingId)
      );
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  const handleEdit = (booking: BookingItem) => {
    setEditingBooking(booking);
    setUpdatedBookingDate(dayjs(booking.bookingDate));
  };

  const handleUpdate = async () => {
    if (!editingBooking || !updatedBookingDate || !updatedDentist) return;
    try {
      await updateBooking(
        editingBooking._id,
        updatedDentist,
        updatedBookingDate.toString(),
        token
      );
      setBookingList(
        bookingList.map((booking) =>
          booking._id === editingBooking._id
            ? {
                ...booking,
                bookingDate: updatedBookingDate.toString(),
                dentist: {
                  ...booking.dentist,
                  id: updatedDentist,
                  name: dentists.data.find(
                    (dentist) => dentist._id === updatedDentist
                  )?.name,
                },
              }
            : booking
        )
      );
      setEditingBooking(null);
    } catch (error) {
      console.error("Error updating booking:", error);
    }
  };

  return (
    <div className="mx-5 my-2">
      {bookingList.length === 0 ? (
        <div className="text-center text-lg font-semibold text-gray-500">
          No Booking
        </div>
      ) : (
        bookingList.map((bookingItem) => (
          <div
            className="bg-slate-200 rounded px-5 py-2 my-2 text-black"
            key={bookingItem._id}
          >
            <div className="text-xl">UserID: {bookingItem.user}</div>
            <div className="text-xl">BookingID: {bookingItem._id}</div>
            <div className="text-xl">Dentist: {bookingItem.dentist.name}</div>
            <div className="text-xl">
              Booking Date: {new Date(bookingItem.bookingDate).toUTCString()}
            </div>
            <button
              className="block rounded-md bg-red-600 hover:bg-red-800 px-3 py-2 mt-2 text-white shadow-sm"
              onClick={() => handleDelete(bookingItem._id)}
            >
              Delete Booking
            </button>
            <button
              className="block rounded-md bg-blue-600 hover:bg-blue-800 px-3 py-2 mt-2 text-white shadow-sm"
              onClick={() => handleEdit(bookingItem)}
            >
              Edit Booking
            </button>
          </div>
        ))
      )}

      {editingBooking && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded shadow-md w-96">
            <h2 className="text-lg font-semibold text-black">Edit Booking</h2>
            <Select
              className=" bg-white w-full"
              variant="standard"
              id="dentist"
              value={updatedDentist}
              onChange={(e) => {
                setUpdatedDentist(e.target.value);
              }}
            >
              {dentists.data.map((dentistItem: DentistItem) => (
                <MenuItem key={dentistItem.name} value={dentistItem._id}>
                  {" "}
                  {dentistItem.name}
                </MenuItem>
              ))}
            </Select>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={updatedBookingDate}
                onChange={(newValue) => setUpdatedBookingDate(newValue)}
                className="border p-2 w-full mt-2"
              />
            </LocalizationProvider>
            <div className="mt-2">
              <button
                className="bg-gray-400 hover:bg-gray-600 px-4 py-2 text-white rounded"
                onClick={handleUpdate}
              >
                Save
              </button>
              <button
                className="bg-green-600 hover:bg-green-800 px-4 py-2 text-white rounded mr-2"
                onClick={() => setEditingBooking(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
