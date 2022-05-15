export default {
	template: `
		<div class="flex gap-2">
			<button 
				@click="$emit('update:modelValue', tag)"
				v-for="tag in tags" 
				class="border rounded px-1 py-px text-xs"
				:class="{
					'border-blue-500 text-blue-500': tag === modelValue
				}"
			>{{ tag }}</button>
		</div>
	`,	// name of the event must be '[update]:[v-model's prop name]'

	props: {
		initialTags: Array,
		modelValue: String 	// default prop name when using v-model 
							// on custom component
	},

	computed: {
		tags() {
			return ['all', ...new Set(this.initialTags)];
		}
	}
}