<template lang="pug">
	#app
		.box
			.title Hello {{ttitle}}
		<Todo/>
</template>

<script>
import Todo from './components/Todo.vue';

export default {
	name: 'app',
	data: function () {
		return {
			ttitle: 'Vue',
		}
	},
	components: {
		Todo,
	}
}
</script>

<style lang="less">
	@blue: #33bbcc;
	@pink: #f0f;
	.borderd {
		border: solid 5px @pink;
	}
	* {
		box-sizing: border-box;
	}
	body, input {
		font-family:'Courier New', Courier, monospace
	}
	#app {
		width: 350px;
		margin: auto;
	}
	.box {
		.borderd;
	}
	.title {
		font-size: 50px;
	}
</style>
