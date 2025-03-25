"use client"
import { removeBooking } from "@/redux/features/bookSlice"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { Dayjs } from "dayjs"
import { useDispatch } from "react-redux"

export default function BookingList({bookings}:{bookings:BookingJson}){
    
    
    return  (
        <div className="mx-5 my-2">
            {bookings.data.length === 0 ? (
                <div className="text-center text-lg font-semibold text-gray-500">
                    No Booking
                </div>
            ) : (
                bookings.data.map((bookingItem) => (
                    <div 
                        className="bg-slate-200 rounded px-5 py-2 my-2 text-black"
                        key={bookingItem._id}
                    >
                        <div className="text-xl">UserID: {bookingItem.user}</div>
                        <div className="text-xl">BookingID: {bookingItem._id}</div>
                        <div className="text-xl">Dentist: {bookingItem.dentist.name}</div>
                        <div className="text-xl">Booking Date: {bookingItem.bookingDate}</div>
                        {/* <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
                        onClick={()=>{dispatch(removeBooking(bookingItem))}}>
                            Remove Booking
                        </button> */}
                    </div>
                ))
            )}
        </div>
    )
}