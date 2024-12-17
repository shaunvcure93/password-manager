<template>
    <div class="forget">
        <div class="form">
            <div class="formcover">
                <div class="logo">
                    <div></div>
                    <span>Company Name</span>
                </div>
                <div class="page" v-if="page == 1">
                    <div class="title">Forget Password?</div>
                    <div class="desc">No worries, we'll send you reset instructions</div>
                    <div class="container">
                        <div class="inputrow">
                            <InputBox title="Email" :value="formData.email" @oninput="formData.email = $event" />
                        </div>
                        <div class="submitrow">
                            <ButtonBox text="NEXT" @click="submitEmail" />
                        </div>
                        <div class="backrow">
                            <span>Back to SignIn</span>
                        </div>
                    </div>
                </div>
                <div class="page" v-if="page == 2">
                    <div class="title">OTP Verification</div>
                    <div class="desc">We sent the verification code to tester@gmail.com</div>
                    <div class="container">
                        <!-- <div class="resend">
                            <span>Resend OTP</span>
                        </div> -->
                        <div class="inputrow">
                            <InputBox type="otp" :value="formData.otp" @oninput="formData.otp = $event" />
                        </div>
                        <div class="submitrow">
                            <ButtonBox text="NEXT" @click="emailVerify" />
                        </div>
                        <div class="backrow">
                            <span @click="backPage(2)">Back</span>
                        </div>
                    </div>
                </div>
                <div class="page" v-if="page == 4">
                    <div class="title">Choose New Password</div>
                    <div class="desc">Must be atleast 8 characters</div>
                    <div class="container">
                        <div class="inputrow">
                            <InputBox title="New Password" type="password" :value="formData.password" @oninput="formData.password = $event" />
                        </div>
                        <div class="inputrow">
                            <InputBox title="Confirm New Password" type="password" :value="formData.confirm_password" @oninput="formData.confirm_password = $event" />
                        </div>
                        <div class="submitrow">
                            <ButtonBox text="SIGN IN" @click="confirmRegister" />
                        </div>
                        <div class="backrow">
                            <span @click="backPage(2)">Back</span>
                        </div>
                    </div>
                </div>
                <div class="page" v-if="page == 5">
                    <div class="check">
                        <span><i class="fi fi-rr-check"></i></span>
                    </div>
                    <div class="title">Confratulations</div>
                    <div class="desc">You've create your account, sign in now to start exploring!</div>
                    <div class="container">
                        <div class="submitrow">
                            <ButtonBox text="Go to Dashboard" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ButtonBox from '../components/button-box.vue';
import InputBox from '../components/input-box.vue';
import { ref } from 'vue';

const page = ref(1);
const formData = ref({
    'email'           : '',
    'otp'             : '',
    'password'        : '',
    'confirm_password': ''
})

// page
function submitEmail()
{
    page.value = 2;
}
function sendCodeToEmail()
{
    page.value = 3;
}
function emailVerify()
{
    page.value = 4;
}
function confirmRegister()
{
    page.value = 5;
    console.warn(JSON.parse(JSON.stringify(formData.value)))
}
function backPage(num)
{
    page.value = num;
}

// input
function onEmail(data)
{
    formData.email = data;
}
function onOTP(data)
{
    formData.otp = data;
}
</script>

<style scoped lang="scss">
.forget {
    display            : block;
    position           : fixed;
    width              : 100%;
    height             : 100%;
    top                : 0;
    left               : 0;
    background-image   : url('../assets/images/logon-bg.png');
    background-repeat  : no-repeat;
    background-size    : cover;
    background-position: 50% 50%;
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
            padding           : 60px 50px;

            & > .logo
            {
                display : block;
                position: relative;
                width   : 100%;
                overflow: hidden;
                margin  : 0px 0px 80px 0px;

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
            & > .page
            {
                display : block;
                position: relative;
                width   : 100%;

                & > .check
                {
                    display   : block;
                    position  : relative;
                    width     : 100%;
                    text-align: center;
                    margin    : 0px 0px 20px 0px;

                    & > span
                    {
                        display              : inline-block;
                        position             : relative;
                        width                : 60px;
                        height               : 60px;
                        border-radius        : 50%;
                        -webkit-border-radius: 50%;
                        background           : #70A3FB;

                        & > i
                        {
                            display    : block;
                            position   : absolute;
                            width      : 24px;
                            height     : 24px;
                            line-height: 24px;
                            font-size  : 24px;
                            text-align : center;
                            top        : calc(50% - 12px);
                            left       : calc(50% - 12px);
                            color      : #ffffff;
                        }
                    }
                }
                & > .title
                {
                    display    : block;
                    position   : relative;
                    width      : 100%;
                    font-size  : 18px;
                    font-weight: 800;
                    margin     : 0px 0px 8px 0px;
                    text-align : center;
                }
                & > .desc
                {
                    display    : block;
                    position   : relative;
                    width      : 100%;
                    font-size  : 14px;
                    line-height: 20px;
                    margin     : 0px 0px 40px 0px;
                    text-align : center;
                }
                & > .container
                {
                    display : block;
                    position: relative;
                    width   : 100%;

                    & > .email
                    {
                        display   : block;
                        position  : relative;
                        width     : 100%;
                        text-align: center;

                        & > div
                        {
                            display              : inline-block;
                            position             : relative;
                            box-sizing           : border-box;
                            -webkit-box-sizing   : border-box;
                            border               : solid 1px #e0e0e0;
                            border-radius        : 60px;
                            -webkit-border-radius: 60px;
                            height               : 50px;
                            line-height          : 28px;
                            padding              : 10px 12px 10px 50px;
                            font-size            : 14px;

                            & > span
                            {
                                display              : block;
                                position             : absolute;
                                width                : 30px;
                                height               : 30px;
                                line-height          : 30px;
                                text-align           : center;
                                border-radius        : 50%;
                                -webkit-border-radius: 50%;
                                top                  : 10px;
                                left                 : 12px;
                                background-color     : #BEE0FF;
                                font-size            : 14px;
                                font-weight          : 600;
                            }
                        }
                    }
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
                    & > .submitrow
                    {
                        display : block;
                        position: relative;
                        width   : 100%;
                        margin  : 30px 0px 0px 0px;
                    }
                    & > .backrow
                    {
                        display   : block;
                        position  : relative;
                        width     : 100%;
                        margin    : 20px 0px 0px 0px;
                        text-align: center;

                        & > span
                        {
                            display    : inline-block;
                            position   : relative;
                            height     : 14px;
                            line-height: 14px;
                            font-size  : 14px;
                            cursor     : pointer;
                        }
                    }
                }
            }
        }
    }
}
</style>
