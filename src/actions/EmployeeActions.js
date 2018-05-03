import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    return (dispatch) => {
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
        .then(() => {
            dispatch({ type: EMPLOYEE_CREATE });
            Actions.main({ type: 'reset' });
        });
    };
};

export const employeesFetch = () => {
    return (dispatch) => {
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snaphost => {
            dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snaphost.val() });
        });
    };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
    return (dispatch) => {
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({ name, phone, shift })
        .then(() => {
            dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
            Actions.main({ type: 'reset' });
        });
    };
};
