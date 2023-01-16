import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Counter = {
    count: number
}

const initialState: Counter = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.count = state.count + 1
        }
    }
})

export const { increment } = counterSlice.actions;
export default counterSlice.reducer