export default async function postBooking(
  token: string,
  did: string,
  bookingDate: string
) {
  try {
    const response = await fetch(
      `https://dentist-backend-zeta.vercel.app/api/v1/dentists/${did}/booking`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ bookingDate: bookingDate })
      }
    );
    console.log(response);
    if (!response.ok) {
      throw new Error(`Failed to make booking: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error making booking:", error);
    throw error;
  }
}
