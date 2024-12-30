<template>
  <table>
    <thead>
      <tr>
        <th v-for="(item, index) in tableArray">
          <div class="tcol">
            <div class="col-text" v-if="item.type === ''">{{ item.name }}</div>
            <div class="col-selector" v-if="item.type === 'selector'">
              <div class="selector"><span></span></div>
            </div>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in dataArray">
        <th></th>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, watch, watchEffect, defineProps, defineEmits } from 'vue';

const emit = defineEmits(['oninput'])
const props = defineProps({
  'table': {
    type    : Array,
    required: false,
    default : []
  },
  'data' : {
    type    : Array,
    required: false,
    default : []
  }
});

const dataArray = ref([]);
const tableArray = ref([]);

// watch props
watchEffect(() => {
  if(props.data && props.data.length > 0)
  {
    dataArray.value = JSON.parse(JSON.stringify(props.data));
  }
  if(props.table && props.table.length > 0)
  {
    tableArray.value = JSON.parse(JSON.stringify(props.table));
  }
})


</script>

<style scoped lang="scss">

</style>
