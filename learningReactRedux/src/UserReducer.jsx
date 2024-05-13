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
        },
        deleteUser: (state, action) => {
            const { id } = action.payload;
            const userToDelete = state.find(user => user.id === parseInt(id));
            if(userToDelete) {
                return state.filter(f => f.id !== id);
            }

        }
    }
});

export const { addUser, editUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;
