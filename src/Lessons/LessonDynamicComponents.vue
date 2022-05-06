<template>
	<h1>Dynamic Components</h1>
	
	<label for="select-keep-alive">Keep alive</label>
	<select @change="$emit('keep-alive-changed', $event.target.value)" id="select-keep-alive">
		<option :value="true">Yes</option>
		<option :value="false">No</option>
	</select>

	<textarea cols="30" rows="10" v-model="text" ref="text"></textarea>
</template>
<script>
export default {
	name: 'lesson-dynamic-components',
	title: 'Dynamic components',
	emits: [ 'keep-alive-changed' ],
	data() {
		return {
			text: 'Change this text to see difference between inserting component in or out of "keep-alive"\n',
		}
	},
	unmounted() {
		console.log(`Component ${this.$options.name} unmounted`)
	},
	activated() {
		console.log(`Component ${this.$options.name} activated`)
		this.$refs.text.focus()
	},
	deactivated() {
		console.log(`Component ${this.$options.name} deactivated`)
	},
}
</script>