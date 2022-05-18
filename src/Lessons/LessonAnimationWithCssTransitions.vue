<template>
	<button @click="showMessage = !showMessage">Toggle</button>
	<!-- <transition name="fade" mode="out-in">
		<div v-if="showMessage" key="main">
			<h1>Message</h1>
		</div>
		<div v-else key="secondary">
			<h1>Egassem</h1>
		</div>
	</transition> -->
	<transition name="zoom" type="animation" appear>
		<h2 class="h2" v-if="showMessage">Hauihosdfsd</h2>
	</transition>
</template>
<script>
export default {
	name: 'lesson-animation-with-css-transitions',
	title: 'Animation with css transitions',
	data() {
		return {
			showMessage: true
		}
	}
}
</script>
<style lang="scss">
	.h2 {
		width: 400px;
		padding: 20px;
		margin: 20px;
	}
	.zoom-enter-active {
		animation: zoom-in 1s ease forwards;
		transition: all 2s ease;
	}
	.zoom-leave-active {
		animation: zoom-out 1s ease forwards;
		transition: all 2s ease;
	}
	.zoom-enter-from {
		opacity: 0;
	}
	.zoom-leave-to {
		opacity: 1;
	}
	@keyframes zoom-in {
		from {
			transform: scale(0, 0);
		}
		to {
			transform: scale(1, 1);
		}
	}
	@keyframes zoom-out {
		from {
			transform: scale(1, 1);
		}
		to {
			transform: scale(0, 0);
		}
	}
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