import initialState from './initialState'

export default function courseReducer(state = initialState.course, action){
	switch (action.type){
		case 'CREATE_COURSE':
			//return state.push(action.course);
			return [...state,
			Object.assign({}, action.course)
			];
		default: 
			return state;
	}
}