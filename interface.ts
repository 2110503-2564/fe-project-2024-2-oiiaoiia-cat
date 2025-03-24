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
    nameLastname: string;
    tel: string;
    venue: string;
    bookDate: string;
  }