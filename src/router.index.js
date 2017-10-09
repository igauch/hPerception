import Vue from 'vue'
import Router from 'vue-router'
/**
 * 看webpack配置
 * build文件夹里的webpack.base.conf.js里面的resolve里面的alias
 */
import main from './views/main.vue'
import netMonitor from './views/netMonitor.vue'
import gridSatisfaction from './views/gridSatisfaction.vue'
import userSatisfaction from './views/userSatisfaction.vue'
import smartScene from './views/smartScene.vue'
import netDiagnose from './views/netDiagnose.vue'
import aiSon from './views/aiSon.vue'
import smartTable from './views/smartTable.vue'

const root = Vue.component('root', {
    template: '<router-view></router-view>'
});

// todo 侧边栏
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI);

/**
 * 安装插件
 * 该插件直接在Vue上进行了扩展，所以在使用时直接this.{$name}即可
 * {$name}可直接在该插件的提供文档去找或在该文件里搜索Vue.prototype
 */
Vue.use(Router);
/**
 * export default时在import defaultMember时defaultMember可以随意命名且不能加{}
 * 并且一个js文件只能有一个这样的export，可以添加其他的已经命名好的export
 * export var在import时必须import {var}
 */
export let router = new Router({
    /**
     * routes：一组路由
     */
    routes: [
        {
            /**
             * 对应当前路由的路径，总是解析为绝对路径，如 "/foo/bar"
             */
            path: '/',
            /**
             * 定义当前路由的名称，非必需
             */
            name: 'main',
            meta:{title:'main'},
            redirect: '/netMonitor',
            /**
             * 视图组件
             * 如果多个components?: { [name: string]: Component };
             */
            component: main,
            children: [
                {
                    path:'netMonitor',
                    name:'netMonitor',
                    meta:{title:'网络监控'},
                    component:netMonitor
                },
                {
                    path:'satisfactionAssess',
                    name:'satisfactionAssess',
                    meta:{title:'感知评估'},
                    component:root,
                    children:[
                        {
                            path:'gridSatisfaction',
                            name:'gridSatisfaction',
                            meta:{title:'栅格级感知评估'},
                            component:gridSatisfaction
                        },
                        {
                            path:'userSatisfaction',
                            name:'userSatisfaction',
                            meta:{title:'用户级感知评估'},
                            component:userSatisfaction
                        }
                    ]
                },
                {
                    path:'smartScene',
                    name:'smartScene',
                    meta:{title:'只能场景'},
                    component:smartScene
                },
                {
                    path:'netDiagnose',
                    name:'netDiagnose',
                    meta:{title:'网络诊断'},
                    component:netDiagnose
                },
                {
                    path:'aiSon',
                    name:'aiSon',
                    meta:{title:'AI SON'},
                    component:aiSon
                },
                {
                    path:'smartTable',
                    name:'smartTable',
                    meta:{title:'智能报表'},
                    component:smartTable
                }
            ]
        },
        /**
         * 模拟了angular-ui-router的otherwise
         * 必须写在最后
         */
        {
            path: '/*',
            redirect: '/'
        }
    ]
});

/**
 * 创建全局的导航钩子，用以拦截导航，完成导航或取消
 */
router.beforeEach((to, from, next) => {
    /**
     * next 是一个函数，必须被执行，否则这个钩子就不能被resolve，而导航也会一直在等待中，所以必须调用以完成逻辑
     */
    next()
//  do something
});
