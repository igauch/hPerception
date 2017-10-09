<template>
	<thead>
		<tr>
			<th v-for="(col,index) in columns" :style="columnStyle[index]">
				<div v-if="col.title">
					<span v-if="col.order" class="hso-arrow-order" :class="[order.key==col.key?order.rule:'']" @click="toOrder(col.key)">{{col.title}}</span>
					<span v-else>{{col.title}}</span>
				</div>
				<div v-else-if="col.select">
					<label class="hso-checkbox" @click="selectAll"><span class="checkbox-inner" :class="{'on':allSelect}"></span></label>
				</div>
				<div v-else-if="col.index">
					<div>{{col.name||'#'}}</div>
				</div>
				<div v-else-if="col.btn&&col.btn.length>0">
					<div>{{col.name||'操作'}}</div>
				</div>
			</th>
		</tr>
	</thead>
</template>

<script>
	export default {
		name: 'head-tr',
		props: {
			columns: {
				type: Array,
				default() {
					return [];
				}
			}
		},
		data() {
			return {
				order: {
					key: '',
					rule: ''
				},
				allSelect: false
			}
		},
		computed: {
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
			toOrder(key) {
				if(key != this.order.key) {
					this.order.key = key;
					this.order.rule = 'asc';
				} else {
					if(this.order.rule == 'asc') {
						this.order.rule = 'desc';
					} else {
						this.order.rule = '';
						this.order.key = '';
					}
				}
				this.$emit('order', this.order);
			},
			selectAll() {
				this.allSelect = !this.allSelect;
				this.$emit('selectAll', this.allSelect);
			}
		},
		created() {
			this.$on('setSelectAll', (param) => {
				this.allSelect = param;
			})
		}
	}
</script>