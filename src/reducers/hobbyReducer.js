import { ADD_HOBBY, REMOVE_HOBBY } from './actionTypes';

// Khởi tạo state ban đầu
const initialState = {
    hobbies: [], 
};

// Định nghĩa reducer
const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_HOBBY:
            return {
                ...state,
                hobbies: [...state.hobbies, action.payload],
            };
        case REMOVE_HOBBY:
            return {
                ...state,
                hobbies: state.hobbies.filter((hobby) => hobby.hobbyId !== action.payload),
            };
        default:
            return state;
    }
};

export default hobbyReducer;
