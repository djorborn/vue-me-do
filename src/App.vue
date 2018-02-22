<template lang="pug">
	#app
		.box
			.title Hello {{title}}
</template>

<script>
export default {
	name: 'app',
	data: {
		title: 'Vue'
	}
}
</script>

<style lang="less">
	@blue: #33bbcc;
	@pink: #f0f;
	.borderd {
		border: solid 5px @pink;
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
