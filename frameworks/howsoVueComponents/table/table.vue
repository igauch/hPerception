<template>
	<div :class="[prefixCls+'-wrapper']">
		<div :class="classes">
			<div :class="[prefixCls + '-header']" v-if="showHeader" ref="header">
				<table cellspacing="0" cellpadding="0" border="0" style="width: 100%;">
					<head-tr :columns="columns" @order="toOrder" @selectAll="selectAll"></head-tr>
				</table>
			</div>
			<div :class="[prefixCls + '-body']" ref="body">
				<table cellspacing="0" cellpadding="0" border="0" style="width: 100%;">
					<body-tr :columns="columns" :data="data" @select="select" @setSelectAll="setSelectAll"></body-tr>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	import headTr from './headTr.vue';
	import bodyTr from './bodyTr.vue';
	import Emitter from './emitter';
	const prefixCls = 'hso-table';
	export default {
		name: 'hso-table',
		mixins: [Emitter],
		components: {
			headTr,
			bodyTr
		},
		props: {
			data: {
				type: Array,
				default() {
					return [];
				}
			},
			columns: {
				type: Array,
				default() {
					return [];
				}
			},
			showHeader: {
				type: Boolean,
				default: true
			},
			size: {
				validator(value) {
					return ['small', 'large', 'default'].indexOf(value) > -1;
				}
			},
			stripe: {
				type: Boolean,
				default: false
			},
			border: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				prefixCls: prefixCls,

			}
		},
		computed: {
			classes() {
				return [
					`${prefixCls}`,
					{
						[`${prefixCls}-${this.size}`]: !!this.size,
						[`${prefixCls}-border`]: this.border,
						[`${prefixCls}-stripe`]: this.stripe
					}
				];
			}
		},
		methods: {
			toOrder(param) {
				this.$emit('order', param);
			},
			select(param) {
				this.$emit('select', param);
			},
			selectAll(param) {
				this.$emit('select', param ? this.data : []);
				this.broadcast('body-tr', 'selectAll', param);
			},
			setSelectAll(param) {
				this.broadcast('head-tr', 'setSelectAll', param);
			}
		}
	}
</script>

<style lang="less">
	@import './style/table.less';
</style>