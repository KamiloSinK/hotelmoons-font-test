<template>
  <main-layout>
    <div class="bg-indigo px-8 pt-8">
      <h1 class="d-flex max-width mb-3">Inicia sesión para emepezar a reservar</h1>
      <h3 class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

      <v-btn color="indigo-lighten-1" disabled class="border-thin mb-16">Inicia o hazte una cuenta</v-btn>
    </div>

    <div class="bg-indigo">
      <hotel-search />
    </div>

    <div>
      <searched-hotels />
    </div>

    <div>
      <info-cards />
    </div>

    

    
  </main-layout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import HotelSearch from '@/components/HotelSearch.vue';
import SearchedHotels from '@/components/SearchedHotels.vue';
import InfoCards from '@/components/InfoCards.vue';
</script>

<style lang="scss" scoped>
.max-width {
  max-width: 320px;
}

.floating-search{
  transform: translateY(50%);
    margin-top: -24px;
}
</style>
