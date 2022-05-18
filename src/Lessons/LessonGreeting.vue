<template>
	<greeting-message :age="age" />
	<user-card :age="age" @age-change="onEmitChange" :ageChangeFn="onEmitChange"/>
</template>

<script>
import GreetingMessage from '@/components/GreetingMessage'
import UserCard from '@/components/UserCard'

export default {
	name: 'lesson-greeting',
	title: 'Greeting',
	components: { GreetingMessage, UserCard },
	data() {
		return {
			age: 20
		}
	},
	methods: {
		onEmitChange(value) {
			this.age += value
		}
	}
}
</script>