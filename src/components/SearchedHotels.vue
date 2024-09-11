<template>
  <div class="pt-16 pb-12 px-8 bg-white" v-if="revealData">
    <h1>Hoteles encontrados:</h1>

    <v-row>
      <v-col cols="12" md="4" xl="3" v-for="(item, index) in rooms" :key="index">
        <v-card elevation="4" class="bg-indigo pa-5">
          <v-card-title>{{ item.roomId }}</v-card-title>

          <v-card-subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid commodi nulla atque cupiditate. Voluptatibus et qui voluptas, laborum provident consectetur, doloribus odio molestias vitae commodi quisquam! Nemo ipsa voluptatem aliquid!</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { useReservationStore } from '@/stores/ReservationStore';
import { storeToRefs } from 'pinia';
import {watch, computed } from 'vue';

  const { reservations } = storeToRefs(useReservationStore())

  const rooms = computed(() => {
    console.log(reservations.value)
    if(reservations.value !== null) return reservations.value.rooms
    return []
  })

  const revealData = computed(() => {
    if(reservations.value !== null) return true
    else return false
  })

  watch(() => reservations.value, (newVal:any) => console.log(newVal))
</script>

<style scoped>

</style>