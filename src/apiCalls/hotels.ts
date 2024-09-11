import { Http } from "./http";
import { ReservationData, HotelData } from "../types/SearchTypes";

export class Hotels {
  private hotelsUrl = import.meta.env.VITE_HOTELS_API_URL;
  private reservationsUrl = import.meta.env.VITE_RESERVATION_API_URL;

  public async getAllHotels(search: string): Promise<HotelData|any> {
    return new Promise((resolve, reject) => {
      new Http().get(`${this.hotelsUrl}/GetAllHotels`, {search}).then((res) => {
        resolve(res)
      }).catch((error) => { reject(error) })
      
    })
  }

  public async getAllReservations(data: any): Promise<ReservationData|any> {
    return new Promise((resolve, reject) => {
      new Http().get(`${this.reservationsUrl}/reservations`, data).then((res) => {
        resolve(res)
      }).catch((error) => { reject(error) })
    })
  }

}