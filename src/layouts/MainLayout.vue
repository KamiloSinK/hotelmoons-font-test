<script setup lang="ts">
import { useCurrencyStore } from '@/stores/CurrencyStore';
import { storeToRefs } from 'pinia';

const {currencies, currencySelected} = storeToRefs(useCurrencyStore())

const { setCurrency } = useCurrencyStore()

</script>

<template>
  <header class="px-6 py-8 bg-indigo">
    <div class="container d-flex align-center justify-space-between">
      <h1 class="text-3xl">Hotel Moons</h1>

      
      <div class="d-flex ga-4">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn
              color="primary"
              v-bind="props"
            >
              {{ currencySelected }}
            </v-btn>
          </template>
          <v-list bg-color="white	" return-object @update:selected="setCurrency">
            <v-list-item
              v-for="(item, index) in currencies"
              :key="index"
              :value="index"
              :prepend-icon="item.icon"
            >
              <v-list-item-title >{{ item.label }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn color="white" disabled class="text-indigo">Registrate</v-btn>
        
        <v-btn color="white" disabled class="text-indigo">Inicia sesion</v-btn>
      </div>

    </div>

  </header>  
  
  <main>
    <slot />
  </main>

  <footer class="px-6 py-8 bg-white text-center">
    <h5>Hotel Moons forma parte de Hotel Moons Inc., líder mundial en hoteleria.</h5>
    <p>Copyright © 1996-2024 HotelMoons.com™. Todos los derechos reservados.</p>
  </footer>
</template>

<style scoped>

</style>