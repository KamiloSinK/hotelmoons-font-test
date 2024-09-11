import { Ref, ref, computed } from "vue"
import { defineStore, storeToRefs } from "pinia";
import { ReservationData, SearchData } from "@/types/SearchTypes";
import { Hotels } from "@/apiCalls/hotels";
import { useCurrencyStore } from "./CurrencyStore";

export const useReservationStore = defineStore('reservation', () => {

  const {currency} = storeToRefs(useCurrencyStore())

  const reservationData: Ref<SearchData> = ref({
    hotelId: null,
    checkIn: '',
    checkOut: '',
    numberOfGuests: 0,
    numberOfRooms: 0,
    currency: currency.value?.label
  })

  const reservations: Ref<ReservationData|null> = ref(null)

  const details = computed(() => {
    return `${reservationData.value?.numberOfGuests} huespedes, ${reservationData.value?.numberOfRooms} habitaciones`
  })
  

  const searchResevations = (data: SearchData) => {
    new Hotels().getAllReservations(data).then((res) => {
      reservations.value = res
    })
  }


  return {reservationData, details, reservations, searchResevations}
})