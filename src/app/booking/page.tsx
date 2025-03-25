
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import BookingForm from "@/components/BookingForm";
import getDentists from "@/libs/getDentists";
import getBookings from "@/libs/getBookings";

export default async function Booking() {
  

  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);
  console.log(profile);
  
  const dentists = await getDentists();
  const bookings = await getBookings(session.user.token);
  
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-10">
        <h1 className="text-2xl font-bold text-center mb-5 text-black">
          Dentist Booking
        </h1>
        <BookingForm user={profile} dentists={dentists} token={session.user.token} bookings={bookings}/>
      </div>
    </main>
  );
}
