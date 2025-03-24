export default async function getDentists() {
    try {
      await new Promise((resolve) => setTimeout(resolve, 300)); // Simulated delay
  
      const response = await fetch(
        "https://dentist-backend-zeta.vercel.app/api/v1/dentists"
      );
  
      if (!response.ok) {
        throw new Error(`Failed to fetch dentists: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching dentists:", error);
      throw error; // Re-throw for proper error handling in calling code
    }
  }