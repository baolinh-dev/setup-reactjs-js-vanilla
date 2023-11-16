import { ADD_USER, REMOVE_USER, EDIT_USER } from '../reducers/actionTypes';

export const addUser = (user) => ({
    type: ADD_USER,
    payload: user,
});

export const removeUser = (userId) => ({
    type: REMOVE_USER,
    payload: userId,
});

export const editUser = (userId, updatedInfo) => ({
    type: EDIT_USER,
    payload: {
        id: userId,
        ...updatedInfo,
    },
});
