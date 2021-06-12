<template>
	<div class="home">
		<MainContainer>
			<HomeContent></HomeContent>
		</MainContainer>
	</div>
</template>

<script>
	import MainContainer from '../components/MainContainer.vue'
	import HomeContent from '../components/HomeContent.vue'
	export default {
		name: 'Home',
		components: {
			MainContainer,
			HomeContent,
		},
	}
</script>