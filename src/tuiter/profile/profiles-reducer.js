import { createSlice } from "@reduxjs/toolkit";
import profiles from "./profiles.json";

const profilesSlice = createSlice({
    name: 'profiles',
    initialState: profiles,
    reducers: {
        updateProfile(state, action) {
            return state = action.payload
        }
    }
})

export const {updateProfile} = profilesSlice.actions;
export default profilesSlice.reducer;