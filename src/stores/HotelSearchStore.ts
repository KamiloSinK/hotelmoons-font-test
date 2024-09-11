import { Ref, ref } from "vue"
import { defineStore } from "pinia"
import { Hotels } from "@/apiCalls/hotels"

export const useHotelSearchStore = defineStore('hotelSearch', () => {

  const search: Ref<string|null> = ref(null)
  const hotels:Ref<any> = ref(undefined)

  const searchHotels = (search: string) => {
    new Hotels().getAllHotels(search).then((res) => {
      hotels.value = res.results
    }).catch((error) => { console.log(error) })
  }


  return {hotels, search, searchHotels}
})