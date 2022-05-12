<template>
	<h3>Hey!</h3>
	<greeting-message :age="age"/>
	<user-card :age="age" @age-change="onEmitChange" :ageChangeFn="updateAgeCB"/>
</template>

<script>
import GreetingMessage from '@/components/GreetingMessage'
import UserCard from '@/components/UserCard'
import AppForm from '@/components/AppForm'
export default {
	name: 'App',
	components: { GreetingMessage, UserCard, AppForm },
	data() {
		return {
			age: 20,
			help: 'Sing in'
		}
	},
	methods: {
		onEmitChange(num) {
			this.age += num
		},
		updateAgeCB(num) {
			this.age += num
		}
	}
}
</script>
