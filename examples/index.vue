<template>
  <div>
    <zv-checkbox v-model="test" checked-value="X" un-checked-value="">选项框一</zv-checkbox>
    <zv-checkbox v-model="test2" checked-value="yes" un-checked-value="no">选项框二</zv-checkbox>
    <zv-checkbox v-model="test3" @change="change" @click="click" shape="square">选项框三</zv-checkbox>
  </div>
</template>

<script>
import ZvCheckbox from 'packages/checkbox'

export default {
  components: {
    ZvCheckbox
  },
  data () {
    return {
      test: '',
      test2: '',
      test3: true
    }
  },
  methods: {
    change (value) {
      console.log(value)
    },
    click (e) {
      console.log(e)
    }
  }
}
</script>

<style>

</style>
