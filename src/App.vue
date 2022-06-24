<template>
	<nav>
		<ul>
			<li
				v-for="lesson in lessons"
				:key="lesson.name"
				@click="selectedLessonName = lesson.name"
				:class="{active: selectedLessonName === lesson.name}"
			>{{ lesson.title || lesson.name }}</li>
		</ul>
	</nav>

	<h1 v-if="lessons">{{ getLessonByName(selectedLessonName).title }}</h1>
	<keep-alive>
		<component :is="selectedLessonName"></component>
	</keep-alive>

</template>

<script lang="javascript">
import LessonGreeting from '@/Lessons/LessonGreeting'
import LessonSlots from '@/Lessons/LessonSlots'
import LessonDynamicComponents from '@/Lessons/LessonDynamicComponents'
import LessonAnimationWithCssTransitions from '@/Lessons/LessonAnimationWithCssTransitions'
import LessonAnimationWithJavascript from '@/Lessons/LessonAnimationWithJavascript'
export default {
	name: 'App',
	components: {
		LessonGreeting,
		LessonSlots,
		LessonDynamicComponents,
		LessonAnimationWithCssTransitions,
		LessonAnimationWithJavascript
	},
	data() {
		return {
			selectedLessonName: localStorage.selectedLessonName || 'lesson-greeting',
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
		},
		getLessonByName(name) {
			return Object.values(this.$options.components).find(lesson => lesson.name === name)
		},
	},
	watch: {
		selectedLessonName(lessonName) {
			localStorage.selectedLessonName = lessonName;
		}
	},
	computed: {
		lessons() {
			return this.$options.components
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
	nav li.active {
		border-bottom: 1px solid #000;
	}
</style>