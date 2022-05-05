<template>
	<h1>Slots</h1>
	<app-form>
		<template v-slot:help>
			<h2>Sign in</h2>
		</template>
		<template v-slot:fields>
			<input type="email" placeholder="Email" autocomplete="on" />
			<input type="text" placeholder="User name" autocomplete="on" />
			<input type="password" placeholder="Password" autocomplete="on" />
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
			<input type="email" placeholder="Name" autocomplete="on" />
			<input type="text" placeholder="Message" autocomplete="off" />
		</template>
		<template vslot:buttons>
			<button type="submit">Submit</button>
		</template>
	</app-form>
</template>

<script>
import AppForm from '@/components/AppForm'
export default {
	name: 'lesson-slots',
	title: 'Slots',
	components: { AppForm },
}
</script>