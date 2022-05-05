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

	<component :is="selectedLesson"></component>

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
			selectedLesson: 'lesson-greeting'
		}
	},
	computed: {
		lessons() {
			return this.$options.components
		}
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