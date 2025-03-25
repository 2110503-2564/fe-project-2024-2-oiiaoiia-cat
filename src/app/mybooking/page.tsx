import BookingList from "@/components/BookingList";
import getBookings from "@/libs/getBookings";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import getDentists from "@/libs/getDentists";

export default async function myBookingPage() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  const bookings = await getBookings(session.user.token);
  const dentists = await getDentists();

  return (
    <main>
      <BookingList bookings={bookings} token={session.user.token} dentists={dentists}></BookingList>
    </main>
  );
}
