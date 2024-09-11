import { Http } from "./http";
import { ReservationData, HotelData } from "../types/SearchTypes";

export class Hotels {
  private hotelsUrl = "https://4868f2b0-b45a-4bed-9410-d7ccc6e41bf2.mock.pstmn.io";
  private reservationsUrl = "http://localhost:8000/api";

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