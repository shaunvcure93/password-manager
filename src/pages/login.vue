<script setup>
import InputBox from '../components/input-box.vue';
import { ref } from 'vue';

const rememberMe = ref(false);
</script>

<template>
    <div class="logon">
        <div class="form">
            <div class="formcover">
                <div class="logo">
                    <div></div>
                    <span>Company Name</span>
                </div>
                <div class="title">Nice to See You Again.</div>
                <div class="container">
                    <div class="inputrow">
                        <InputBox title="Username" />
                    </div>
                    <div class="inputrow">
                        <InputBox title="Password" type="password" />
                    </div>
                    <div class="noterow">
                        <div class="rmb">
                            <div class="toggle" :class="{'active' : rememberMe}" @click="rememberMe = !rememberMe">
                                <div><span></span></div>
                                Remember Me
                            </div>
                        </div>
                        <div class="forget">Forget Password?</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.logon {
    display            : block;
    position           : fixed;
    width              : 100%;
    height             : 100%;
    top                : 0;
    left               : 0;
    background-image   : url('../assets/images/logon-bg.png');
    user-select        : none;
    -webkit-user-select: none;

    & > .form
    {
        display   : block;
        position  : relative;
        width     : 420px;
        min-height: 100vh;
        background: #ffffff;
        float     : right;

        & > .formcover
        {
            display           : block;
            position          : relative;
            width             : 100%;
            box-sizing        : border-box;
            -webkit-box-sizing: border-box;
            padding           : 60px 40px;

            & > .logo
            {
                display : block;
                position: relative;
                width   : 100%;
                overflow: hidden;
                margin  : 0px 0px 60px 0px;

                & > div
                {
                    display              : block;
                    position             : relative;
                    float                : left;
                    width                : 50px;
                    height               : 50px;
                    background           : rgba(0,0,0,0.1);
                    border-radius        : 50%;
                    -webkit-border-radius: 50%;
                    margin               : 0px 14px 0px 0px;
                }
                & > span
                {
                    display    : block;
                    position   : relative;
                    float      : left;
                    height     : 50px;
                    line-height: 50px;
                    font-size  : 16px;
                    font-weight: 600;
                }
            }
            & > .title
            {
                display    : block;
                position   : relative;
                width      : 100%;
                font-size  : 18px;
                font-weight: 800;
                margin     : 0px 0px 40px 0px;
                text-align : center;
            }
            & > .container
            {
                display : block;
                position: relative;
                width   : 100%;

                & .inputrow
                {
                    display : block;
                    position: relative;
                    width   : 100%;
                    margin  : 16px 0px 0px 0px;

                    &:first-child
                    {
                        margin:0px;
                    }
                }
                & > .noterow
                {
                    display : block;
                    position: relative;
                    width   : 100%;
                    margin  : 12px 0px 0px 0px;
                    overflow: hidden;

                    & > .rmb
                    {
                        display : block;
                        position: relative;
                        float   : left;

                        & > .toggle
                        {
                            display           : block;
                            position          : relative;
                            box-sizing        : border-box;
                            -webkit-box-sizing: border-box;
                            padding           : 0px 0px 0px 38px;
                            font-size         : 13px;
                            line-height       : 20px;
                            height            : 20px;
                            cursor            : pointer;

                            &.active
                            {
                                & > div
                                {
                                    & > span
                                    {
                                        left      : 14px;
                                        background: #5089E9;
                                    }
                                }
                            }
                            & > div
                            {
                                display              : block;
                                position             : absolute;
                                width                : 32px;
                                height               : 20px;
                                border-radius        : 40px;
                                -webkit-border-radius: 40px;
                                background           : #D9D9D9;
                                top                  : 0;
                                left                 : 0;

                                & > span
                                {
                                    display              : block;
                                    position             : absolute;
                                    width                : 16px;
                                    height               : 16px;
                                    background           : #f4f4f4;
                                    border-radius        : 50%;
                                    -webkit-border-radius: 50%;
                                    top                  : 2px;
                                    left                 : 2px;
                                    transition           : all 0.2s ease;
                                    -webkit-transition   : all 0.2s ease;
                                }
                            }
                        }
                    }
                    & > .forget
                    {
                        display    : block;
                        position   : relative;
                        float      : right;
                        font-size  : 13px;
                        cursor     : pointer;
                        line-height: 20px;
                        height     : 20px;

                        &:hover
                        {
                            color          : #5089E9;
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }
}
</style>
