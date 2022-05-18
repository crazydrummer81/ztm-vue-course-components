<template>
	<label for="select-keep-alive">Keep alive</label>

	<textarea cols="30" rows="10" v-model="text" ref="text"></textarea>

	<h1 @keep-alive-changed="onTest">{{ test }}</h1>
</template>
<script>
export default {
	name: 'lesson-dynamic-components',
	title: 'Dynamic components',
	data() {
		return {
			text: 'Change this text to see difference between inserting component in or out of "keep-alive"\n',
			test: 'asd',
		}
	},
	unmounted() {
		// console.log(`Component ${this.$options.name} unmounted`)
	},
	activated() {
		// console.log(`Component ${this.$options.name} activated`)
		this.$refs.text.focus()
	},
	deactivated() {
		// console.log(`Component ${this.$options.name} deactivated`)
	},
}
</script>