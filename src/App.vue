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

	<keep-alive>
		<component :is="selectedLesson"></component>
	</keep-alive>
</template>

<script lang="javascript">
import LessonGreeting from '@/Lessons/LessonGreeting'
import LessonSlots from '@/Lessons/LessonSlots'
import LessonDynamicComponents from '@/Lessons/LessonDynamicComponents'
export default {
	name: 'App',
	components: {  LessonGreeting, LessonSlots, LessonDynamicComponents },
	data() {
		return {
			selectedLesson: 'lesson-greeting',
			keepAlive: false
		}
	},
	methods: {
		setKeepAlive(value) {
			console.log('setKeepAlive(value)', value)
			this.keepAlive = value
		},
		onKeepAliveChanged(value) {
			console.log('onKeepAliveChanged(value)', value)
			this.setKeepAlive(value)
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