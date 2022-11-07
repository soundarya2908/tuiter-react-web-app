import { createSlice } from "@reduxjs/toolkit";
import profiles from "./profiles.json";

const profilesSlice = createSlice({
    name: 'profiles',
    initialState: profiles
})

export default profilesSlice.reducer;