<template>
	<p>{{ msg }}
		<span>span</span>
	</p>
</template>
<script>
export default {
	name: 'greeting-message',
	data() {
		return {
			msg: 'Hello world!',
		}
	}
}
</script>
<style scoped>
p {
	color: red;
}

p /deep/ span {
	color: green;
}
</style>