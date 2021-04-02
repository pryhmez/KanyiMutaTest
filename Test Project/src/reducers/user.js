/**
 * Created by stan229 on 5/27/16.
 */
const initialState = {
    token: '',
    userId: '5e7a5fbfe8763909af2975a3',
    email: 'isaacprime@gmail.com',
    name: 'isaac prime'
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case 'ADD_USER' :
            console.log(JSON.stringify(state) + "wngboirbgsobgibsiob")
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                email: action.email,
                name: action.name
            }

        default:
            return state;
    }
};