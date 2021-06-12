<template>
<div class="biography">
	<MainContainer>
    <BiographyContent></BiographyContent>
    </MainContainer>
</div>
</template>
<script>
	import MainContainer from '../components/MainContainer.vue'
	import BiographyContent from '../components/BiographyContent.vue'
	export default {
		name: 'biography',
		components: {
			MainContainer,
			BiographyContent,
		},
	}
</script>