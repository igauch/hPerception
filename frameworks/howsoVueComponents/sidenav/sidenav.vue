/*
* 描述：sidenav
* 作者：twj94
* 创建时间：2017/10/9
* 版权：Copyright 2017 Howso Tech. Co. Ltd. All Rights Reserved.
* Company:南京华苏科技有限公司
*/

<template>
    <div class="sidenav">
        <el-menu :default-active="activeMenu" router class="bg-primary">

            <sidenav-for-tpl
                v-for="(route, index) in $router.options.routes[$router.options.routes.length - 2].children" :route="route">
            </sidenav-for-tpl>

        </el-menu>
    </div>
</template>

<script>
    import Vue from 'vue'

    //
    Vue.component('sidenavForTpl',{
        name:'sidenavForTpl',
        template: `<component v-bind:is="currentView" :route="route"></component>`,
        components: {
            submenu: {
                template: `
                    <el-submenu :index="route.meta.title">
                        <template slot="title"><i :class="route.iconClass" class="text-white"></i>{{route.meta.title}}</template>
                        <sidenav-for-tpl v-for="(route, index) in route.children" :route="route"></sidenav-for-tpl>
                    </el-submenu>`,
                props: ['route']
            },
            menuItems: {
                template: `
                    <el-menu-item :index="route.meta.title" :route="route" class="text-white"><i :class="route.iconClass"></i>{{route.meta.title}}</el-menu-item>`,
                props: ['route'],
                methods: {
//                    rout: function (route) {
//                        router.push(route);
//                    }
                }
            }
        },
        props: ['route'],
        data() {
            return {
                currentView: this.route.meta.title && !this.route.children ? 'menuItems' : 'submenu'
            }
        }
    });


    export default {
        name: 'sidenav',
        data(){
            return{

            }
        },
        mounted(){

        }
    }
</script>
