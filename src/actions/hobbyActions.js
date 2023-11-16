import { ADD_HOBBY, REMOVE_HOBBY } from '../reducers/actionTypes';

export const addHobby = (hobby) => ({
    type: ADD_HOBBY,
    payload: hobby,
});

export const removeHobby = (hobby) => ({
    type: REMOVE_HOBBY,
    payload: hobby,
});
