<template lang="">
	<div>

		<b-button @click="getData()">Get Data</b-button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	methods: {
			getData() {
				console.log(this.$store.state.test);
				this.$store.dispatch('stream/getData');
			}
	}
}
</script>