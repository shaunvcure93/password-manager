<template>
  <div class="input-box">
    <div class="title" v-if="props.title">{{ props.title }}</div>

    <div class="textbox" v-if="props.type === 'text'">
      <input type="text" :placeholder="placeholder" :value="textValue" @input="$emit('oninput', $event.target.value)" />
    </div>
    <div class="passbox" v-else-if="props.type === 'password'">
      <input :type="showPassword ? 'text' : 'password'" :placeholder="props.placeholder" />
      <span @click="showPassword = !showPassword"><i class="fi" :class="showPassword ? 'fi-rr-eye' : 'fi-rr-eye-crossed'"></i></span>
    </div>
    <div class="otpbox" v-else-if="props.type === 'otp'">
      <input type="text" class="d1" maxlength="1" size="1" @input="onOtp($event.target.value, 1)" />
      <input type="text" class="d2" maxlength="1" size="1" @input="onOtp($event.target.value, 2)" />
      <input type="text" class="d3" maxlength="1" size="1" @input="onOtp($event.target.value, 3)" />
      <input type="text" class="d4" maxlength="1" size="1" @input="onOtp($event.target.value, 4)" />
      <input type="text" class="d5" maxlength="1" size="1" @input="onOtp($event.target.value, 5)" />
      <input type="text" class="d6" maxlength="1" size="1" @input="onOtp($event.target.value, 6)" />
    </div>
    <div class="selectbox" v-else-if="props.type === 'select'">
      
    </div>
  </div>
</template>

<script setup>
import { ref, watch, watchEffect, defineProps, defineEmits } from 'vue';

const emit = defineEmits(['oninput'])
const props = defineProps({
  'title' : {
    type    : String,
    required: false,
    default : ''
  },
  'type' : {
    type    : String,
    required: false,
    default : 'text'
  },
  'value' : {
    type : [String],
    required : false
  },
  'placeholder' : {
    type : String,
    required : false
  },
});
const showPassword = ref(false);
const textValue = ref('');

// watch ref
// watch(textValue, (data) => {
//   if(props.type === 'text')
//   {
//     emit('input', textValue)
//   }
// })

// watch props
watchEffect(() => {
  // runs only once before 3.5
  // re-runs when the "foo" prop changes in 3.5+
  if(props.value)
  {
    if(props.type === 'text')
    {
      textValue.value = props.value;
    }
  }
})

function onOtp(data, num)
{
  let current = document.querySelector(`input.d${num}`);
  if(data.length === 0)
  {
    let prev = document.querySelector(`input.d${num - 1}`);
    if(current && prev)
    {
      current.focus();
      prev.select();
    }
  }
  else
  {
    let next = document.querySelector(`input.d${num + 1}`);
    if(current && next)
    {
      current.focus();
      next.select();
    }
  }
  let otpArray = document.querySelectorAll('.otpbox input');
    let arr = [...otpArray];
    let otpValue = '';
    if(arr && arr.length > 0)
    {
      arr.map((ele, index) =>
      {
        otpValue += ele.value;
      }) 
    }
    emit('oninput', otpValue);
}
</script>

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
  & > .otpbox
  {
    display : flex;
    position: relative;
    width   : 100%;
    gap     : 12px;

    & input
    {
      display              : block;
      position             : relative;
      float                : left;
      width                : 100%;
      height               : 42px;
      box-sizing           : border-box;
      -webkit-box-sizing   : border-box;
      border               : solid 1px #e0e0e0;
      background           : #ffffff;
      text-align           : center;
      border-radius        : 8px;
      -webkit-border-radius: 8px;
      line-height          : 40px;
      font-size            : 14px;

      &:focus
      {
        outline:none;
      }
    }
  }
}
</style>
