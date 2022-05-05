<template>
	<div v-if="0">
		<h3>Hey!</h3>
		<greeting-message :age="age"/>
		<user-card :age="age" @age-change="onEmitChange"/>
	</div>
	<app-form>
		<template v-slot:help>
			<h2>{{ help }}</h2>
		</template>
		<template v-slot:fields>
			<input type="email" placeholder="Email" autocomplete="on">
			<input type="text" placeholder="User name" autocomplete="on">
			<input type="password" placeholder="Password" autocomplete="on">
		</template>
		<template vslot:buttons>
			<button type="submit">Submit</button>
		</template>
		<p>Dummy text</p>
	</app-form>

	<app-form>
		<template v-slot:help>
			<h2>Contact</h2>
		</template>
		<template v-slot:fields>
			<input type="email" placeholder="Name" autocomplete="on">
			<input type="text" placeholder="Message" autocomplete="off">
		</template>
		<template vslot:buttons>
			<button type="submit">Submit</button>
		</template>
	</app-form>
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
		onEmitChange(value) {
			this.age += value
		}
	}
}
</script>
