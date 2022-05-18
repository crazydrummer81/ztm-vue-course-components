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

	<h1 v-if="lessons">{{ lessonsByName[selectedLesson] }}</h1>
	<keep-alive>
		<component :is="selectedLesson"></component>
	</keep-alive>
</template>

<script lang="javascript">
import LessonGreeting from '@/Lessons/LessonGreeting'
import LessonSlots from '@/Lessons/LessonSlots'
import LessonDynamicComponents from '@/Lessons/LessonDynamicComponents'
import LessonAnimationWithCssTransitions from '@/Lessons/LessonAnimationWithCssTransitions'
import LessonAnimationWithJavaScript from '@/Lessons/LessonAnimationWithJavaScript'
export default {
	name: 'App',
	components: {
		LessonGreeting,
		LessonSlots,
		LessonDynamicComponents,
		LessonAnimationWithCssTransitions,
		LessonAnimationWithJavaScript
	},
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
		lessonsByName() {
			let res = {}
			Object.keys(this.$options.components).forEach(key => res[this.$options.components[key].name] = this.$options.components[key])
			return res
		},
	},
	mounted() {
		console.debug(this.$options.components);
	}
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