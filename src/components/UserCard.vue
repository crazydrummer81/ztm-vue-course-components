<template>
	<button type="button" @click="onClickAge(-1)">Age -</button>
	<button type="button" @click="onClickAge(1)">Age +</button>
	<button type="button" @click="ageChangeFn(5)">Age +5</button>
	<p>The user is {{ age }} years old</p>
	<p>{{ ageDoubled }}</p>
</template>

<script>
export default {
	name: 'user-card',
	props: {
		age: {
			type: [Number],
			required: true,
			default: 20,
			validator(value) {
				return (value > 15) && (value < 30)
			}
		},
		ageChangeFn: Function
	},
	emits: ['age-change'],
	computed: {
		ageDoubled() {
			return this.age * 2
		}
	},
	methods: {
		onClickAge(value) {
			this.$emit('age-change', value)
		},
	}
}
</script>

<style>

</style>