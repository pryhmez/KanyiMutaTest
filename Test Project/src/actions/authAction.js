import axios from 'axios';
import { apiConfig, client } from '../config/axios';



export const addUser = (token, userId, email, name) => {
    console.log("dispatching user")
    return {
        type: 'ADD_USER',
        token,
        userId,
        email,
        name
    }
}

export const signInUser = ({ email, password }) => {

    return (dispatch) => {
        return new Promise((resolve, reject) => {
            // console.warn(email, password, apiConfig.baseUrl + 'user/login')
            axios.post(apiConfig.baseUrl + 'signin',
                {
                    email,
                    password
                })
                .then((response) => {
                    let res = response.data;

                    // console.log(res);
       
                    dispatch(addUser(
                        res.token,
                        res.id,
                        res.data.email,
                        res.firstName + res.lastName
                    ));


                    // console.warn(response.data.message)
                    if (response) {
                        return resolve(response.data)
                    }


                })
                .catch(err => {

                    // dispatch({ type: SIGNUP_USER_FAILED, payload: true });
                    return reject({ message: "something went wrong" + String(err) })
                })
        })

    }
}

export const signUpUser = ({ firstname, lastname, username, email, password }) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            // console.warn(email, password, lastname, firstname, gender, phone)
            axios.post(apiConfig.baseUrl + 'register',
                {
                    email,
                    password,
                    firstname,
                    lastname,
                    username,
                })
                .then((response) => {
                    let res = response.data;
                    console.log(res);
                    dispatch(addUser(
                        res.token,
                        res.id,
                        res.data.email,
                        res.data.firstname + res.data.lastname
                    ));


                    // console.warn(response.data.message)
                    if (response) {
                        return resolve(response.data)
                    }


                })
                .catch(err => {

                    // dispatch({ type: SIGNUP_USER_FAILED, payload: true });
                    return reject({ message: "something went wrong" + String(err) })
                })
        })

    }
}
