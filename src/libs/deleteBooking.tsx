export default async function deleteBookings(bid:string,token:string) {
    try {
  
      const response = await fetch(
        `https://dentist-backend-zeta.vercel.app/api/v1/bookings/${bid}`, {
            method:"DELETE",
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        
      );
  
      if (!response.ok) {
        throw new Error(`Failed to fetch bookings: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching bookings:", error);
      throw error; // Re-throw for proper error handling in calling code
    }
  }