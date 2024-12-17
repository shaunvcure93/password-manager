<template>
    <div class="sidemenu">
        <div class="logo">
            <div></div>
            <span>Company Name</span>
        </div>
        <div class="menu">
            <div class="nav"><i class="fi fi-rr-menu-burger"></i></div>
            <div class="mainbox">
                <div class="title">CATEGORIES</div>
                <div class="list">
                    <div class="subbox">
                        <div></div>
                        <span>My Vault</span>
                    </div>
                    <div class="subbox">
                        <div></div>
                        <span>Breach Watch</span>
                    </div>
                    <div class="subbox">
                        <div></div>
                        <span>Deleted Items</span>
                    </div>
                </div>
            </div>
            <div class="mainbox">
                <div class="title">SETTINGS</div>
                <div class="list">
                    <div class="subbox">
                        <div></div>
                        <span>General</span>
                    </div>
                    <div class="subbox">
                        <div></div>
                        <span>Import / Export</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <router-view />
</template>

<script setup>

</script>

<style scoped lang="scss">
.sidemenu
{
    display           : block;
    position          : fixed;
    width             : 280px;
    top               : 0px;
    left              : 0px;
    box-sizing        : border-box;
    -webkit-box-sizing: border-box;
    padding           : 20px;

    & > .logo
    {
        display : block;
        position: relative;
        width   : 100%;
        overflow: hidden;
        margin  : 0px 0px 20px 0px;

        & > div
        {
            display             : block;
            position            : relative;
            float               : left;
            width               : 38px;
            height              : 38px;
            border-radius       : 50%;
            -webkit-border-rdius: 50%;
            background          : #000000;
            margin              : 0px 10px 0px 0px;
        }
        & > span
        {
            display    : block;
            position   : relative;
            float      : left;
            height     : 38px;
            line-height: 38px;
            font-size  : 14px;
            font-weight: 600;
        }
    }
    & > .menu
    {
        display             : block;
        position            : relative;
        width               : 100%;
        box-sizing          : border-box;
        -webkit-box-sizing  : border-box;
        border              : solid 1px #D9D9D9;
        border-radius       : 10px;
        -webkit-borde-radius: 10px;
        padding             : 20px;

        & > .nav
        {
            display              : block;
            position             : absolute;
            width                : 28px;
            height               : 28px;
            top                  : 12px;
            right                : 12px;
            z-index              : 1;
            cursor               : pointer;
            border-radius        : 8px;
            -webkit-border-radius: 8px;
            background           : rgba(0,0,0,0.1);

            & > i
            {
                display    : block;
                position   : absolute;
                width      : 16px;
                height     : 16px;
                line-height: 16px;
                text-align : center;
                font-size  : 16px;
                top        : calc(50% - 8px);
                left       : calc(50% - 8px);
            }
        }
        & .mainbox
        {
            display : block;
            position: relative;
            width   : 100%;
            margin  : 0px 0px 24px 0px;

            &:last-child
            {
                margin:0px;
            }
            & > .title
            {
                display    : block;
                position   : relative;
                width      : 100%;
                font-size  : 12px;
                font-weight: 600;
                margin     : 0px 0px 14px 0px;
            }
            & > .list
            {
                display : block;
                position: relative;
                width   : 100%;

                & .subbox
                {
                    display           : block;
                    position          : relative;
                    width             : 100%;
                    box-sizing        : border-box;
                    -webkit-box-sizing: border-box;
                    padding           : 0px 0px 0px 34px;
                    margin            : 0px 0px 8px 0px;
                    cursor            : pointer;

                    &:last-child
                    {
                        margin:0px;
                    }
                    & > div
                    {
                        display              : block;
                        position             : absolute;
                        width                : 24px;
                        height               : 24px;
                        border-radius        : 8px;
                        -webkit-border-radius: 8px;
                        background           : rgba(0,0,0,0.1);
                        top                  : 0;
                        left                 : 0;
                    }
                    & > span
                    {
                        display    : block;
                        position   : relative;
                        width      : 100%;
                        height     : 24px;
                        line-height: 24px;
                        font-size  : 14px;
                    }
                }
            }
        }
    }
}
</style>
