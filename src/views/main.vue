/*
* 描述：main
* 作者：tianwenjie
* 创建时间：2017/9/11
* 版权：Copyright 2017 Howso Tech. Co. Ltd. All Rights Reserved.
* Company:南京华苏科技有限公司
*/

<template>
    <div class="main d-flex flex-column">
        <top-bar></top-bar>
        <div class="d-flex flex-1">
            <h-sidenav class="text-white bg-primary"></h-sidenav>
            <div class="flex-1 ml-2 mr-2">
                <div class="breadcrumb ml-3 font-weight-bold">当前位置：
                    <h-breadcrumb></h-breadcrumb>
                </div>
                <router-view class="main-router-view margin-main"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import topBar from '@/components/topBar'

    export default {
        name: 'main',
        components: {
            topBar
        },
        methods: {},
        data () {
            return {
                navListDatas:
                    [
                        {
                            'label': '网络监控',
                            'path': '/netMonitor'
                        },
                        {
                            'label': '感知评估',
                            children:[
                                {
                                    'label': '栅格级感知评估',
                                    'path': '/satisfactionAssess/gridSatisfaction'
                                },
                                {
                                    'label': '用户级感知评估',
                                    'path': '/satisfactionAssess/userSatisfaction'
                                }
                            ]
                        },
                        {
                            'label': '智能场景',
                            'path': '/smartScene'

                        },
                        {
                            'label': '网络诊断',
                            children:[
                                {
                                    'label': '网络深度覆盖',
                                    'path': '/netDepthCoverage'
                                },
                                {
                                    'label': '网络异常检测',
                                    children:[
                                        {
                                            'label': '实时检测',
                                            'path': '/realTimeDetection'
                                        },
                                        {
                                            'label': '可视化分析',
                                            'path': '/visualizationAnalysis'
                                        },
                                        {
                                            'label': '报表统计',
                                            'path': '/reportStatistics'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            'label': 'AI SON',
                            'path': '/aiSon'
                        },
                        {
                            'label': '智能报表',
                            'path': '/smartTable'
                        }
                    ],
            }
        }
    }
</script>

<style lang="scss">
    .main {
        height: 100%;
    }
</style>
