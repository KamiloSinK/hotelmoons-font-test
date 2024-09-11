<template>
  <div class="grid ga-4 justify-space-between px-8 py-12 bg-white">  
    <v-card v-for="(item, index) in info" :key="index" class="rounded-md bg-indigo pa-5">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const info = ref([
  {
    title: 'Reserva ahora, paga en el alojamiento',
    description: 'Cancelación GRATIS en la mayoría de las habitaciones'
  },
  {
    title: 'Más de dos millones de alojamientos en todo el mundo',
    description: 'Encuentra los mejores hoteles de cualquier destino'
  },
  {
    title: 'Atención al cliente de confianza, 24/7',
    description: 'Reserva y paga con tarjeta de credito o PayPal'
  }
])
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr;
  }
}

@media (min-width: 768px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>