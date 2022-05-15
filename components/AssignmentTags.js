export default {
	template: `
		<div class="flex gap-2">
			<button 
				@click="currentTag = tag"
				v-for="tag in tags" 
				class="border rounded px-1 py-px text-xs"
				:class="{
					'border-blue-500 text-blue-500': tag === currentTag
				}"
			>{{ tag }}</button>
		</div>
	`,

	props: {
		initialTags: Array
	},

	data() {
		return {
			currentTag: 'all'
		}
	},

	computed: {
		tags() {
			return ['all', ...new Set(this.initialTags)];
		}
	}
}