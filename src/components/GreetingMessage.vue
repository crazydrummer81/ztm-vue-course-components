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
<style scoped lang="scss">
$color: red;
p {
	color: $color;
}

p /deep/ span {
	color: green;
}
</style>