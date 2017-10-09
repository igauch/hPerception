/*
* 描述：topbar
* 作者：tianwenjie
* 创建时间：2017/9/11
* 版权：Copyright 2017 Howso Tech. Co. Ltd. All Rights Reserved.
* Company:南京华苏科技有限公司
*/

<template>
    <div class="text-white top-bar bg-primary" v-if="$route.path!=='/login'">
        <div class="container-fluid">
            <img src="../styles/imgs/logo.png" alt="logo" class="logo align-middle">
            <h-select :items="items" :labelKey="'name'" @on-change="selectChange"></h-select>
            <div class="float-right">
                <span>欢迎你，{{userName}}</span>
                <i class="iconfont icon-loginout" @click="loginOut"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'topBar',
        data() {
            return {
                userName: sessionStorage.getItem('userName'),
                items:[
                    {name:'LTE全业务感知'},
                    {name:'投诉洞察'},
                    {name:'治安防控系统'},
                    {name:'重点区域运营监控'}
                ]
            }
        },
        methods: {
            loginOut: function () {
                sessionStorage.setItem('userName', null);
                this.$router.push('/login');
            },
            selectChange(val){
                console.log(val)
            }
        }
    }
</script>

