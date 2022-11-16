<template>
	<!-- <transition
		@before-enter="beforeEnter"
		@enter="enter"
		@after-enter="afterEnter"
		@before-leave="beforeLeave"
		@leave="leave"
		@after-leave="afterLeave"
		:css="true"
		name="fade"
	>
		<h2 v-if="flag">Hey</h2>
	</transition> -->

	<button @click="addItem">Add</button>

	<ul>
		<transition-group name="fade"
			enter-active-class="animate__animated animate_flipInX"
			leave-active-class="animate__animated animate_flipOutX"
		>
			<li v-for="(number, index) in numbers" :key="number"
				@click="removeItem(index)"
			>
			{{ number }}</li>
		</transition-group>
	</ul>
</template>
<script>
export default {
	name: 'lesson-animating-list',
	title: 'Animating list',
	data() {
		return {
			flag: true,
			numbers: [1, 2, 3, 4, 5],

		}
	},
	methods: {
		addItem() {
			const num = Math.floor(Math.random() * 100 + 1);
			const index = Math.floor(Math.random() * this.numbers.length);
			this.numbers.splice(index, 0, num);
		},
		removeItem(index) {
			this.numbers.splice(index, 1);
		},

		beforeEnter(el) { console.debug(`beforeEnter`, el); },
		enter(el) { console.debug(`enter`, el); },
		afterEnter(el) { console.debug(`afterEnter`, el); },
		beforeLeave(el) { console.debug(`beforeLeave`, el); },
		leave(el) { console.debug(`leave`, el); },
		afterLeave(el) { console.debug(`afterLeave`, el); },

	}
}
</script>
<style lang="scss">
.animate {
	&__flipOutX {
		position: absolute;
	}

	__animated {
		animation-duration: 1.5s;
	}
}
li {
	font-size: 22px;
	cursor: pointer;
}
.fade-move {
	transition: all 1s linear;
}
.fade-leave-active {
	position: absolute;
}
</style>