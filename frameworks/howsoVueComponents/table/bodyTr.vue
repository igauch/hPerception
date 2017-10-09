<template>
	<tbody>
		<tr v-for="(item,index1) in data">
			<td v-for="(col,index) in columns" :style="columnStyle[index]">
				<div v-if="col.title">
					<i class="hso-table-icon" v-if="col.iconClass" :class="col.iconClass"></i>
					<i class="hso-table-icon" v-else-if="col.iconFn" :class="col.iconFn(item[col.key])"></i>
					<span>{{item[col.key]}}</span>
				</div>
				<div v-else-if="col.select">
					<label @click="select(index1)" class="hso-checkbox">
						<span class="checkbox-inner" :class="{'on':selects.indexOf(index1)>-1}"></span>
					</label>
				</div>
				<div v-else-if="col.index">
					<div>{{index1+1}}</div>
				</div>
				<div v-else-if="col.btn&&col.btn.length>0" class="hso-btn-wrap">
					<span v-for="btn in col.btn" @click="btn.fn?btn.fn(item):null">{{btn.name}}</span>
				</div>
			</td>
		</tr>
	</tbody>
</template>

<script>
	import _ from 'lodash';
	export default {
		name: 'body-tr',
		props: {
			columns: {
				type: Array,
				default() {
					return [];
				}
			},
			data: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				selects: []
			}
		},
		computed: {
			lengthDiffer() {
				return this.data.length - this.selects.length;
			},
			columnStyle() {
				let styles = [];
				this.columns.forEach((col) => {
					let style = {};
					if(col.widthPx) {
						style.width = `${col.widthPx}px`;
					} else if(col.widthEm) {
						style.width = `${col.widthEm}em`;
					}
					styles.push(style);
				});
				return styles;
			}
		},
		methods: {
			select(index) {
				let i = this.selects.indexOf(index);
				i < 0 ? this.selects.push(index) : this.selects.splice(i, 1);
				let nowLength = this.selects.length;
				if(this.lengthDiffer == 0 && i < 0) {
					this.$emit('setSelectAll', true);
				} else if(this.lengthDiffer == 1 && i > -1) {
					this.$emit('setSelectAll', false);
				}
				this.$emit('select', _.map(this.selects, (n) => {
					return this.data[n];
				}))
			}
		},
		watch: {
			data() {
				this.selects = [];
				this.$emit('setSelectAll', false);
			}
		},
		mounted() {
			this.$on('selectAll', (param) => {
				this.selects = param ? (function(n) {
					let arr = [];
					while(n > -1) {
						arr.push(n--)
					}
					return arr;
				})(this.data.length - 1) : [];
			})
		}
	}
</script>