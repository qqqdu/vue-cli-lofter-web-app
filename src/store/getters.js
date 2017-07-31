
export default {
	doneObj :state=> {
			return state.count.filter(obj => obj.done)  
	},
	doneAny : state => {
		return state
	}
}