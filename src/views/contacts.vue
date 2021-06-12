<template>
		<MainContainer>
			<Contacts></Contacts>
		</MainContainer>
</template>

<script>
	// @ is an alias to /src
	import MainContainer from '../components/MainContainer.vue'
	import Contacts from '../components/Contacts.vue'
	export default {
		name: 'contacts',
		components: {
			MainContainer,
			Contacts,
		},
	}
</script>