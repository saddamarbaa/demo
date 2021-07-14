/** @format */

import { createSlice } from "@reduxjs/toolkit";

// initial State
// const [value, setValue] = useState(0);
const initialState = {
	value: 0,
};

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		setIncrementCounterState: (state, action) => {
			state.value += action.payload;
		},
	},
});

export const { setIncrementCounterState } = counterSlice.actions;

export const selectCounter = (state) => state.counter.value;

export default counterSlice.reducer;
