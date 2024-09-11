<script setup lang="ts">
import { useCurrencyStore } from "@/stores/CurrencyStore";
import { useHotelSearchStore } from "@/stores/HotelSearchStore";
import { useReservationStore } from "@/stores/ReservationStore";
import { storeToRefs } from "pinia";
import { computed, Ref, ref, ComputedRefImpl } from "vue";

const timer:any = ref(null)
const search: Ref<string|null> = ref(null)
const model: Ref<string[]|null> = ref(null)
const menu: Ref<boolean> = ref(false)

const today = ref(new Date().toISOString().slice(0, 10))

const { hotels } = storeToRefs(useHotelSearchStore())
const { searchHotels } = useHotelSearchStore()
const { currency } = storeToRefs(useCurrencyStore())

const { reservationData, details } = storeToRefs(useReservationStore())
const { searchResevations } = useReservationStore()

const limitSearch = computed(() => {
  if(reservationData.value.hotelId == null) return true
  if(reservationData.value.checkIn == '') return true
  if(reservationData.value.checkOut == '') return true
  if(reservationData.value.numberOfGuests <= 0) return true
  if(reservationData.value.numberOfRooms <= 0) return true
  return false
})

const setSearch = (value: string) => {
  clearTimeout(timer.value);

  timer.value = setTimeout(() => {
    searchHotels(value)
  }, 500);
}

const searchReservations = () => {
  if(reservationData.value.currency == null) reservationData.value.currency = currency.value?.label
  if(reservationData.value.currency !== currency.value?.label) reservationData.value.currency = currency.value?.label

  searchResevations(reservationData.value)
}

const setDates = () => {
  if(model.value == null) return	
  reservationData.value.checkIn = model.value[0].toLocaleDateString('en-CA', {year: 'numeric', month: '2-digit', day: '2-digit'})
  reservationData.value.checkOut = model.value[model.value.length -1].toLocaleDateString('en-CA', {year: 'numeric', month: '2-digit', day: '2-digit'})
}

</script>

<template>
  <div class="hotel-search floating-search px-12">
    
    <div class="bg-indigo-lighten-1 d-flex pa-3 elevation-3 align-center">

      <v-select
        v-model="reservationData.hotelId"
        :items="hotels"
        class="autocomplete-form"
        item-title="hotelName"
        item-value="id"
        prepend-inner-icon="mdi-domain"
        append-inner="mdi-chevron-down"
        placeholder="A donde vas?"
        variant="plain"
        hide-details
        
      >
        <template v-slot:prepend-item>
          
          <v-text-field v-model="search" class="px-4" variant="plain" placeholder="Busca donde ir" @update:modelValue="setSearch"></v-text-field>
          
          <v-divider class="mt-2"></v-divider>
        </template>
      </v-select>

      <v-date-input
      prepend-icon=""
      prepend-inner-icon="mdi-calendar"
      v-model="model"
      placeholder="Fechas de reserva"
      max-width="368"
      multiple="range"
      hide-details
      variant="plain"
      @update:modelValue="setDates"
      :min="today"
      ></v-date-input>


      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        location="top center"
        offset="15"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            variant="plain"
            color="white"
          >
            {{details}}
          </v-btn>
        </template>

        <v-card min-width="300" class="pa-4 d-flex justify-center align-center ga-4 bg-indigo-lighten-1">
          <div class="d-flex flex-column align-center">
            <label for="">Huespedes</label>
            <div class="d-flex align-center">
              <v-btn icon="mdi-minus" @click="reservationData.numberOfGuests--" :disabled="reservationData.numberOfGuests == 0" variant="plain"></v-btn>
              <p>{{ reservationData.numberOfGuests }}</p>
              <v-btn icon="mdi-plus" @click="reservationData.numberOfGuests++" variant="plain"></v-btn>
            </div>
          </div>

          <div class="d-flex flex-column align-center">
            <label for="">habitaciones</label>
            <div class="d-flex align-center">
              <v-btn icon="mdi-minus" @click="reservationData.numberOfRooms--" :disabled="reservationData.numberOfRooms == 0" variant="plain"></v-btn>
              <p>{{ reservationData.numberOfRooms }}</p>
              <v-btn icon="mdi-plus" @click="reservationData.numberOfRooms++" variant="plain"></v-btn>
            </div>
          </div>

        </v-card>
      </v-menu>

      <v-btn class="h-fill" variant="plain" append-icon="mdi-magnify" :disabled="limitSearch" @click="searchReservations(search)">Buscar</v-btn>
    </div>



  </div>
</template>

<style lang="scss">
.autocomplete-form{
  .v-field__append-inner{
    display: none !important;
  }
  .v-field__field{
    display: flex;
    align-items: center;

    .v-field__input{
      input{
        height: 100% !important;
      }
    }

  
    label.v-label.v-field-label{
      top:auto !important;
    }
  }
}

.hotel-search{
  .v-filed{
    align-items: center !important;
  }
  .v-field__prepend-inner{
    padding: 0px 2px !important;
    align-items: center !important;
  }
  
  .v-field__input{
    padding: 0px 6px !important;
  }
}
</style>