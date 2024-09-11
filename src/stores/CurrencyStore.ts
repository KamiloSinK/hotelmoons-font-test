import {Ref, ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCurrencyStore = defineStore('currency', () => {
  const currency: Ref<{ [key: string]: any; }> = ref({symbol: '$', label: 'USD', icon: 'mdi-currency-usd'})
  const currencies = ref([{symbol: '$', label: 'USD', icon: 'mdi-currency-usd'}, {symbol: '€', label: 'EUR', icon: 'mdi-currency-eur'}])

  
const currencySelected = computed(() => {
  if(currency.value == null) return `${currencies.value[0].label} ${currencies.value[0].symbol}`;
  return `${currency.value.label} ${currency.value.symbol}`
})

  const setCurrency = (event:number[]) => {
    currency.value = currencies.value[event[0]]
  }

  return { currency, currencies, currencySelected, setCurrency }
})