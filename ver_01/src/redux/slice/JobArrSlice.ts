import { createSlice } from "@reduxjs/toolkit";

type JobArrType = {
    jobArray : Array<number|string>
}
const JobArrInitialState:JobArrType = {
    jobArray: []
}

const JobSlice = createSlice({
    name:"job",
    initialState: JobArrInitialState,
    reducers: {
        getStateArrJob: (state, actions) => {
            state.jobArray = actions.payload
        }
    }
})

export const {
    getStateArrJob
} = JobSlice.actions

export default JobSlice.reducer