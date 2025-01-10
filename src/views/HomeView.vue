<script setup lang="ts">
import { useRouter } from 'vue-router'
import VBarcode from '../components/VBarcode.vue'

const router = useRouter()
localStorage.setItem('barcode-value', 'data from localStorage')
const barcodeValue = localStorage.getItem('barcode-value')

function toBarcodeView() {
  sessionStorage.setItem('barcode-value', 'data from sessionStorage')
  router.push('/barcode')
}
</script>

<template>
  <h1>Home V3</h1>
  <section class="border p-2 rounded w-max my-4">
    <h2>data from localStorage</h2>
    <VBarcode :value="barcodeValue!" />
  </section>
  <button class="underline text-blue-300" @click="toBarcodeView">
    To Barcode page
  </button>
</template>
