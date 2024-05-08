import { createSlice } from "@reduxjs/toolkit";
import { userList } from './Data';

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        editUser: (state, action) => {
            const { id, step, description } = action.payload;
            const userToUpdate = state.find(user => user.id === parseInt(id));
            if (userToUpdate) {
                userToUpdate.step = step; // Corrected from `==` to `=`
                userToUpdate.description = description; // Corrected from `==` to `=`
            }
        }
    }
});

export const { addUser, editUser } = userSlice.actions;
export default userSlice.reducer;
