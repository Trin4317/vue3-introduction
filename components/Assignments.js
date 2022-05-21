import AssignmentList from "./AssignmentList.js"
import AssignmentCreate from "./AssignmentCreate.js"

export default {
	components: {
		AssignmentList,
		AssignmentCreate
	},

	template: `
		<section class="flex gap-8">
			<assignment-list :assignments="filters.inProgress" title="In Progress" footer="More works to be done!">
				<assignment-create @add="add"></assignment-create>
			</assignment-list>
			<assignment-list 
				v-if="showCompleted"
				:assignments="filters.completed" 
				title="Completed" 
				footer="Great jobs!"
				can-toggle
				@toggle="showCompleted = !showCompleted"
			></assignment-list>
		</section>
	`,

	created() {
		fetch('http://localhost:3000/assignments')
			.then(response => response.json())
			.then(assignments => {
				this.assignments = assignments;
			});
	},

	data() {
		return {
			assignments: [],
			showCompleted: true
		}
	},

	computed: {
		filters() {
			return {
				inProgress: this.assignments.filter( assignment => !assignment.complete ),
				completed: this.assignments.filter( assignment => assignment.complete ),
			}
		}
	},

	methods: {
		add(name) {
			this.assignments.push({
				name: name,
				complete: false,
				id: this.assignments.length + 1
			});
		}
	}
}