<template lang="pug">
	#todo
		input.input.panel-heading(v-model="listTitle" placeholder="List Title")
		.panel.has-addons
			input.input(v-model="newItem" v-on:keyup.enter="addItem" placeholder="Add Item")
			button(@click="addItem") Add
		.panel(v-for="item in items") {{item.body}}
</template>

<script>
export default {
	name: 'todo',
	data () {
		return {
		listTitle: "",
		newItem: "",
		items: [
			{body: 'thing1'},
			{body: 'thing2'},
		],
		addItem: function () {
			this.items.push({body: this.newItem})
			this.newItem = "";
		}
	}
}
}
</script>

<style lang="less">
	#todo {
		margin: auto;
	}
	.input, button {
		font-size: 20px;
		margin: 0;
		padding: 3px;
	}
	.panel-heading {
		font-size: 28px;
		margin: 0;
		width: 100%;
	}
	.has-addons input, .has-addons button {
		font-size: 20px;
		border: solid 2px;
	}
	.has-addons {
		input {
			border-right: hidden;
		}
		button {
			border-left: hidden;
		}
	}

</style>

