interface DentistItem {
    _id: string,
    name: string,
    yearsOfExp: number,
    areaOfExpertise: string,
    __v: number,
    id: string
  }
  
  interface DentistJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: DentistItem[]
  }

  interface BookingItem {
    _id: string,
    bookingDate: string;
    user: string,
    dentist: DentistItem,
    createdAt: string,
    __v: number
  }

  interface BookingJson {
    success: boolean,
    count: number,
    data: BookingItem[]
  }