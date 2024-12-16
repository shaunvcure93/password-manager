<script setup>
import { ref } from 'vue';

defineProps({
  'title' : {
    type    : String,
    required: false,
    default : '',
    validator(val) {
      return val
    }
  },
  'type' : {
    type    : String,
    required: false,
    default : 'text'
  },
  'placeholder': String
})

const showPassword = ref(false);
</script>

<template>
  <div class="input-box">
    <div class="title" v-if="title">{{ title }}</div>

    <div class="textbox" v-if="type === 'text'">
      <input type="text" :placeholder="placeholder" />
    </div>
    <div class="passbox" v-else-if="type === 'password'">
      <input :type="showPassword ? 'text' : 'password'" :placeholder="placeholder" />
      <span @click="showPassword = !showPassword"><i class="fi" :class="showPassword ? 'fi-rr-eye' : 'fi-rr-eye-crossed'"></i></span>
    </div>
    <div class="selectbox" v-else-if="type === 'select'">
      
    </div>
  </div>
</template>

<style scoped lang="scss">
.input-box
{
  display : block;
  position: relative;
  width   : 100%;

  & > .title
  {
    display  : block;
    position : relative;
    width    : 100%;
    font-size: 14px;
    margin   : 0px 0px 8px 0px;
  }
  & > .textbox
  {
    display              : block;
    position             : relative;
    width                : 100%;
    box-sizing           : border-box;
    -webkit-box-sizing   : border-box;
    background-color     : #F4F4F4;
    border-radius        : 8px;
    -webkit-border-radius: 8px;
    height               : 42px;
    overflow             : hidden;

    & > input
    {
      display           : block;
      position          : relative;
      width             : 100%;
      border            : none;
      height            : 42px;
      background        : none;
      box-sizing        : border-box;
      -webkit-box-sizing: border-box;
      padding           : 0px 16px;
      line-height       : 42px;
      font-size         : 14px;

      &:focus
      {
        outline:none;
      }
    }
  }
  & > .passbox
  {
    display              : flex;
    position             : relative;
    width                : 100%;
    box-sizing           : border-box;
    -webkit-box-sizing   : border-box;
    background-color     : #F4F4F4;
    border-radius        : 8px;
    -webkit-border-radius: 8px;
    height               : 42px;
    overflow             : hidden;
    padding              : 0px 6px 0px 0px;

    & > input
    {
      display           : block;
      position          : relative;
      width             : 100%;
      border            : none;
      height            : 42px;
      background        : none;
      box-sizing        : border-box;
      -webkit-box-sizing: border-box;
      padding           : 0px 16px;
      line-height       : 42px;
      font-size         : 14px;

      &:focus
      {
        outline:none;
      }
    }
    & > span
    {
      display : block;
      position: relative;
      width   : 42px;
      height  : 42px;
      cursor  : pointer;

      & > i
      {
        display    : block;
        position   : absolute;
        width      : 18px;
        height     : 18px;
        font-size  : 18px;
        line-height: 18px;
        top        : calc(50% - 9px);
        left       : calc(50% - 9px);
      }
    }
  }
}
</style>
