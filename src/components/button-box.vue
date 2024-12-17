<script setup>
import { ref } from 'vue';

defineProps({
  'text' : {
    type    : String,
    required: false,
    default : ''
  },
  'icon' : {
    type    : String,
    required: false,
    default : ''
  }
})
</script>

<template>
  <div class="button-box">
    <div class="hover"></div>
    <div class="btn">
      <div><i class="fi" v-if="icon" :class="icon"></i>{{ text }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.button-box
{
  display              : block;
  position             : relative;
  width                : 100%;
  height               : 48px;
  box-sizing           : border-box;
  -webkit-box-sizing   : border-box;
  border-radius        : 8px;
  -webkit-border-radius: 8px;
  cursor               : pointer;
  overflow             : hidden;
  background           : rgb(112,163,251);
  background           : -moz-linear-gradient(90deg, rgba(112,163,251,1) 0%, rgba(255,135,229,1) 100%);
  background           : -webkit-linear-gradient(90deg, rgba(112,163,251,1) 0%, rgba(255,135,229,1) 100%);
  background           : linear-gradient(90deg, rgba(112,163,251,1) 0%, rgba(255,135,229,1) 100%);
  filter               : progid:DXImageTransform.Microsoft.gradient(startColorstr = "#70a3fb",endColorstr = "#ff87e5",GradientType = 1);

  &:hover
  {
    & > .hover
    {
      opacity:1;
    }
  }
  & > .hover
  {
    display           : block;
    position          : absolute;
    width             : 100%;
    height            : 100%;
    top               : 0px;
    left              : 0px;
    background        : rgba(0,0,0,0.1);
    opacity           : 0;
    transition        : all 0.2s ease;
    -webkit-transition: all 0.2s ease;
  }
  & > .btn
  {
    display        : flex;
    justify-content: center;
    align-items    : center;
    position       : relative;
    width          : 100%;
    height         : 100%;
    z-index        : 1;

    & > div
    {
      display           : block;
      position          : relative;
      box-sizing        : border-box;
      -webkit-box-sizing: border-box;
      font-size         : 14px;
      font-weight       : 600;
      color             : #ffffff;
      letter-spacing    : 0.4px;
    }
  }
}
</style>
