import {createSlice, nanoid} from '@reduxjs/toolkit'
import { Tasks } from '../tasks';
import { filteredTasks } from './getdata';

const initialState = {
    tasks: Tasks,
    filter: null
}

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        create: {
            reducer: (state, action) => {
                state.tasks.push(action.payload);
            },
            prepare: (description) => {
                const id = nanoid();
                return {payload: {id, description}}
            },
        },
        clear(state) {
            state.tasks = [];
        },
        deleteById: {
            reducer: (state, action) => {
                state.tasks = state.tasks.filter(item => item.id !== action.payload);
            },
            prepare: (id) => {
                return {payload: id}
            },
        },
    },
    selectors: {
        allTasks: (state, params, filtersInit) => filteredTasks(state.tasks, params, filtersInit)
    },
})

export const {create, clear, deleteById} = taskSlice.actions;
export const {allTasks} = taskSlice.selectors;
export default taskSlice.reducer;
