<script setup lang="ts">
import JsBarcode from 'jsbarcode'
import { onMounted, useTemplateRef, watch } from 'vue'

const props = defineProps<{
  value: string
}>()

const barcodeRef = useTemplateRef('barcodeRef')
function renderBarcode() {
  if (barcodeRef.value) {
    JsBarcode(barcodeRef.value, props.value)
  }
}
onMounted(() => {
  renderBarcode()
})
watch(() => props.value, renderBarcode)
</script>

<template>
  <svg ref="barcodeRef" />
</template>
