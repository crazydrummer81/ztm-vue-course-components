<template>
	<button @click="showMessage = !showMessage">Toggle</button>
	<transition name="fade">
		<div v-if="showMessage">
			<h1>Message</h1>
		</div>
	</transition>
</template>
<script>
export default {
	name: 'lesson-animation-with-css-transitions',
	title: 'Animation with css transitions',
	data() {
		return {
			showMessage: false
		}
	}
}
</script>
<style lang="scss">
	.fade {
		&-enter-from {
			opacity: 0;
		}
		&-enter-active {
			transition: all 1s linear;
		}
		&-leave-to {
			transition: all 1s linear;
			opacity: 0;
		}
	}
</style>