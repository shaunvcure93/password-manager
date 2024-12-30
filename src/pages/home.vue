<template>
    <div class="toper">
        <div class="filter">
            <i class="fi fi-rr-filter"></i> Filters
        </div>
        <div class="list">
            <swiper :slidesPerView="'auto'" :spaceBetween="8">
                <swiper-slide class="auto">
                    <div class="box">Username<i class="fi fi-rr-cross-small"></i></div>
                </swiper-slide>
                <swiper-slide class="auto">
                    <div class="box">Password<i class="fi fi-rr-cross-small"></i></div>
                </swiper-slide>
                <swiper-slide class="auto">
                    <div class="box">TOTP<i class="fi fi-rr-cross-small"></i></div>
                </swiper-slide>
                <swiper-slide class="auto">
                    <div class="box">URL<i class="fi fi-rr-cross-small"></i></div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="action">
            <div class="search">
                <input type="text" v-model="searchValue" placeholder="Search" />
                <i class="fi fi-rr-search"></i>
            </div>
            <div class="add">
                <i class="fi fi-rr-add"></i>
                Add New
            </div>
        </div>
        <div class="clear-row"></div>
    </div>
    <div class="table">
        <TableList :table="tableData"></TableList>
    </div>
</template>

<script setup>
import TableList from '../components/table-list.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref, defineComponent } from 'vue';

const searchValue = ref('');
const tableData = ref([
    {
        'name' : '',
        'code' : 'selector',
        'type' : 'selector',
        'sort' : false,
        'list' : []
    },
    {
        'name' : '',
        'code' : 'favourite',
        'type' : '',
        'sort' : false,
        'list' : []
    },
    {
        'name' : 'Name',
        'code' : 'name',
        'type' : '',
        'sort' : true,
        'list' : []
    },
    {
        'name' : 'Username',
        'code' : 'username',
        'type' : '',
        'sort' : true,
        'list' : []
    },
    {
        'name' : 'Password',
        'code' : 'password',
        'type' : '',
        'sort' : false,
        'list' : []
    },
    {
        'name' : 'TOTP',
        'code' : 'totp',
        'type' : '',
        'sort' : false,
        'list' : []
    },
    {
        'name' : 'URL',
        'code' : 'url',
        'type' : '',
        'sort' : false,
        'list' : []
    },
    {
        'name' : 'Modified',
        'code' : 'modified',
        'type' : '',
        'sort' : false,
        'list' : []
    },
    {
        'name' : 'Action',
        'code' : 'action',
        'type' : 'action',
        'sort' : false,
        'list' : [
            {
                'name' : 'copy',
                'icon' : 'fi-rr-clone',
                'callback' : (data) =>
                {
                    cloneData(data);
                }
            },
            {
                'name' : 'edit',
                'icon' : 'fi-rr-edit',
                'callback' : (data) =>
                {
                    editData(data);
                }
            }
        ]
    }
])

function cloneData(data)
{
    console.warn(data);
}
function editData(data)
{
    console.warn(data);
}
</script>

<style scoped lang="scss">
.toper
{
    display           : block;
    position          : relative;
    width             : 100%;
    box-sizing        : border-box;
    -webkit-box-sizing: border-box;
    padding           : 20px;
    border-bottom     : solid 1px #D9D9D9;

    & > .filter
    {
        display              : block;
        position             : relative;
        float                : left;
        box-sizing           : border-box;
        -webkit-box-sizing   : border-box;
        border               : solid 1px #D9D9D9;
        padding              : 0px 12px 0px 32px;
        height               : 36px;
        line-height          : 34px;
        border-radius        : 40px;
        -webkit-border-radius: 40px;
        cursor               : pointer;
        font-size            : 14px;
        margin               : 0px 12px 0px 0px;

        & > i
        {
            display    : block;
            position   : absolute;
            width      : 14px;
            height     : 14px;
            line-height: 14px;
            font-size  : 14px;
            top        : calc(50% - 7px);
            left       : 12px;
        }
    }
    & > .list
    {
        display : block;
        position: relative;
        float   : left;

        & .box
        {
            display              : block;
            position             : relative;
            white-space          : nowrap;
            font-size            : 14px;
            height               : 36px;
            line-height          : 34px;
            padding              : 0px 30px 0px 12px;
            box-sizing           : border-box;
            -webkit-box-sizing   : border-box;
            border               : solid 1px #D9D9D9;
            border-radius        : 40px;
            -webkit-border-radius: 40px;
            cursor               : pointer;

            & > i
            {
                display    : block;
                position   : absolute;
                width      : 14px;
                height     : 14px;
                line-height: 14px;
                font-size  : 14px;
                top        : calc(50% - 7px);
                right      : 10px;
            }
        }
    }
    & > .action
    {
        display : block;
        position: relative;
        float   : right;

        & > .search
        {
            display : block;
            position: relative;
            float   : left;
            margin  : 0px 12px 0px 0px;

            & > input
            {
                display              : block;
                position             : relative;
                float                : left;
                height               : 36px;
                box-sizing           : border-box;
                -webkit-box-sizing   : border-box;
                line-height          : 34px;
                border               : solid 1px #D9D9D9;
                padding              : 0px 12px;
                border-radius        : 40px;
                -webkit-border-radius: 40px;
                font-size            : 14px;

                &:focus
                {
                    outline:none;
                }
            }
            & > i
            {
                display    : block;
                position   : absolute;
                width      : 16px;
                height     : 16px;
                line-height: 16px;
                z-index    : 1;
                font-size  : 16px;
                top        : calc(50% - 8px);
                right      : 12px;
            }
        }
        & > .add
        {
            display              : block;
            position             : relative;
            float                : left;
            box-sizing           : border-box;
            -webkit-box-sizing   : border-box;
            height               : 36px;
            line-height          : 34px;
            border-radius        : 40px;
            -webkit-border-radius: 40px;
            background           : #70A3FB;
            color                : #ffffff;
            font-size            : 14px;
            padding              : 0px 12px 0px 32px;
            cursor               : pointer;

            & > i
            {
                display    : block;
                position   : absolute;
                width      : 14px;
                height     : 14px;
                line-height: 14px;
                font-size  : 14px;
                left       : 12px;
                top        : calc(50% - 7px);
                left       : 12px;
            }
        }
    }
}
.table
{
    display           : block;
    position          : relative;
    width             : 100%;
    box-sizing        : border-box;
    -webkit-box-sizing: border-box;
    padding           : 20px;
}
</style>
