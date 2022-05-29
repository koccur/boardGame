import { createSlice } from "@reduxjs/toolkit";
export interface User {
    id: string;
    name: string;
    email: string;
}

const initialStateValue = [];

export const users = createSlice({
    name: 'users',
    initialState: {
        value: initialStateValue
    },
    reducers: {
        addUser(state, action) {
            state.value = [...state.value, action.payload];
        },
        removeUser(state, action) {
            state.value = state.value.filter(users => users.id !== action.payload);
        },
        editUser(state, action) {
            return Object.assign({}, state, {
                value: state.value.map(user => {
                    if (user.id !== action.payload.id) {
                        return user;
                    }
                    return Object.assign({}, user, action.payload);
                })
            })
        }
    },

});

export const { addUser, removeUser, editUser } = users.actions;