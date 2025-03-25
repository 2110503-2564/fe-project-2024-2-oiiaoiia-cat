import BookingList from "@/components/BookingList";
import getBookings from "@/libs/getBookings";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

export default async function myBookingPage() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  const bookings = await getBookings(session.user.token);

  return (
    <main>
      <BookingList bookings={bookings}></BookingList>
    </main>
  );
}
