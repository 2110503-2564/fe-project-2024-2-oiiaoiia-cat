"use client"

import { TextField, MenuItem, Select, Button } from "@mui/material";
import DateReserve from "@/components/DateReserve";
import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { addBooking } from "@/redux/features/bookSlice";
import { useSearchParams } from "next/navigation";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

export default function Booking() {

    const urlParams = useSearchParams();
    const did = urlParams.get('did');
    const dname = urlParams.get('dname')

    const dispatch = useDispatch<AppDispatch>()
    
    const makeBooking = () => {
    }

    const [bookingDate,setBookingDate] = useState<Dayjs|null>(null);
    const [user, setUser] = useState<Object | null>(null);

    console.log(user);
    
    return (
        <main className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-10">
                <h1 className="text-2xl font-bold text-center mb-5 text-black">Dentist Booking</h1>
                <div className="text-black">
                    <div>Dentist: {dname}</div>
                </div>
                <form className="flex flex-col w-80 space-y-4">
                    <DateReserve onDateChange={(value:Dayjs)=>{setBookingDate(value)}}/>
                    <Button variant="contained" name="Book Venue" onClick={makeBooking}>
                        Book Appointment
                    </Button>
                </form>
            </div>
        </main>
    );
}
