<template>
	<nav>
		<ul>
			<li
				v-for="lesson in lessons"
				:key="lesson.name"
				@click="selectedLesson = lesson.name"
			>{{ lesson.title || lesson.name }}</li>
		</ul>
	</nav>

	<keep-alive v-if="keepAlive">
		<component :is="selectedLesson"></component>
	</keep-alive>

	<component :is="selectedLesson" v-if="!keepAlive"></component>
</template>

<script>
import LessonGreeting from '@/Lessons/LessonGreeting'
import LessonSlots from '@/Lessons/LessonSlots'
import LessonDynamicComponents from '@/Lessons/LessonDynamicComponents'
export default {
	name: 'App',
	components: {  LessonGreeting, LessonSlots, LessonDynamicComponents },
	data() {
		return {
			selectedLesson: 'lesson-greeting',
			keepAlive: true
		}
	},
	methods: {
		setKeepAlive(value) {
			console.log(value)
			this.keepAlive = value
		}
	},
	computed: {
		lessons() {
			return this.$options.components
		},
	},
}
</script>

<style>
	nav {
		margin-bottom: 1rem;
	}
	nav ul {
		cursor: pointer;
	}
</style>