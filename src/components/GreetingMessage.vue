<template>
	<p v-if="age > 25">{{ msg }}
		<span>span</span>
	</p>
	<p v-else>You must be 25 years or older to view this message</p>
</template>
<script>
export default {
	name: 'greeting-message',
	props: ['age'],
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