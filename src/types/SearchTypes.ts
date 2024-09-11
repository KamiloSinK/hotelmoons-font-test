export interface SearchData {
  hotelId: string | null;
  checkIn: string;
  checkOut: string;
  numberOfGuests: number;
  numberOfRooms: number;
  currency: string | null;
}
export interface HotelData {
  result: {
    id: number;
    hotelName: string;
    location: string;
    country: string;
  }[];
}
export interface ReservationData {
  rooms: {
    roomId: number;
    rates: {
      mealPlanId: number;
      isCancellable: boolean;
      price: number;
    }[];
  }[];
}
