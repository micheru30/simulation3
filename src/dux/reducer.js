const intialState = {
    id: null,
    username: '',
    profilePic: '',
}

const UPDATE_USER = 'UPDATE_USER'

export function updateUser(id,username,profilePic) {
    return {
        type: UPDATE_USER,
        payload: {id,username,profilePic}
    }
}

export default function Reducer(state = intialState,action){
    switch (action.type) {
        case UPDATE_USER:
            return Object.assign({}, state, { 
                id: action.payload.id,
                username: action.payload.username,
                profilePic: action.payload.profilePic
            })
        default:
            return state;
    }
}