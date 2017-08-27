import initialState from './initialState'
export default function adminReducer(state = initialState.admin, action){
	switch (action.type){
		case 'UPDATE_INPUT':
			//return state.push(action.admin);
			return [...state,
			Object.assign({}, action.admin)
			];
		default: 
			return state;
	}
}