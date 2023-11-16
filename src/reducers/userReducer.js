import { ADD_USER, REMOVE_USER, EDIT_USER } from './actionTypes';

// Khởi tạo state ban đầu
const initialState = {
    users: [],
};

// Định nghĩa reducer
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        case REMOVE_USER:
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload),
            };
        case EDIT_USER:
            const updatedUsers = state.users.map((user) => {
                if (user.id === action.payload.id) {
                    return {
                        ...user,
                        name: action.payload.name,
                        age: action.payload.age,
                        // Các trường thông tin khác của người dùng
                    };
                }
                return user;
            });
            return {
                ...state,
                users: updatedUsers,
            };
        default:
            return state;
    }
};

export default userReducer;
