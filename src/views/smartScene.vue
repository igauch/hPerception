/*
* 描述：智能场景
* 作者：sunxin
* 创建时间：2017/10/9
* 版权：Copyright 2017 Howso Tech. Co. Ltd. All Rights Reserved.
* Company:南京华苏科技有限公司
*/
<template>
	<h-table :columns="columns" :data="data" @select="select" @order="order" border></h-table>
</template>
<script>
	export default {
		name: 'smart-scene',
		data() {
			return {
				columns: [{
						select: true,
						widthPx: 42
					}, {
						name: '序号',
						index: true,
						widthPx: 42
					}, {
						title: '姓名',
						key: 'name',
						//iconClass: 'ivu-icon ivu-icon-person',
						iconFn: function(name) {
							return name != '李小红' ? 'ivu-icon ivu-icon-person' : '';
						},
						widthEm: 7
					}, {
						title: '年龄',
						key: 'age',
						order: true,
						widthPx: 70
					},
					{
						title: '地址',
						key: 'address'
					}, {
						name: '我的操作',
						btn: [{
							name: '查看',
							fn: this.look
						}, {
							name: '删除',
							fn: this.del
						}],
						widthPx: 100
					}
				],
				columns4: [{
						type: 'selection',
						width: 60,
						align: 'center'
					},
					{
						title: '姓名',
						key: 'name'
					},
					{
						title: '年龄',
						key: 'age'
					},
					{
						title: '地址',
						key: 'address'
					}
				],
				data: [{
						name: '王小明',
						age: 18,
						address: '北京市朝阳区芍药居'
					},
					{
						name: '张小刚',
						age: 25,
						address: '北京市海淀区西二旗'
					},
					{
						name: '李小红',
						age: 30,
						address: '上海市浦东新区世纪大道'
					},
					{
						name: '周小伟',
						age: 26,
						address: '深圳市南山区深南大道'
					}
				]
			}
		},
		methods: {
			del(param) {
				console.log(JSON.parse(JSON.stringify(param)));
				this.data.splice(0, 1)
			},
			look(param) {
				console.log(JSON.parse(JSON.stringify(param)));
			},
			select(param) {
				console.log(JSON.parse(JSON.stringify(param)))
			},
			order(param) {
				console.log(JSON.parse(JSON.stringify(param)))
			}
		}
	}
</script>