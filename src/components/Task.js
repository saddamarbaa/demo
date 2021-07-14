/** @format */

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Task.module.css";
import {
	setIncrementCounterState,
	selectCounter,
} from "../features/counter/counterSlice";

const Task = () => {
	const [lastSelectedValue, SetLastSelectedValue] = useState(0);
	const dispatch = useDispatch();
	const counter = useSelector(selectCounter);

	const changeCounterValueHandler = (event) => {
		const selectedValue = parseInt(event.target.value);
		SetLastSelectedValue(selectedValue);
		dispatch(setIncrementCounterState(selectedValue));
	};

	return (
		<div className={styles.task}>
			<div className={styles.header}>
				<span>{counter}</span>
				<p>Latest select value = {lastSelectedValue}</p>
				<div className={styles.arrowContent}>
					<div className={styles.firstArrow}></div>
					<div className={styles.secondArrow}></div>
				</div>
			</div>
			<div className={styles.dropDown}>
				<select onChange={changeCounterValueHandler} id='dropdown'>
					<option value='Select Value'>Select Value</option>
					<option value='2'>value: 2</option>
					<option value='3'>value: 3</option>
					<option value='4'>value: 4</option>
					<option value='5'>value: 5</option>
					<option value='6'>value: 6</option>
					<option value='7'>value: 7</option>
					<option value='8'>value: 8</option>
					<option value='9'>value: 9</option>
					<option value='10'>value: 10</option>
					<option value='11'>value: 11</option>
				</select>
			</div>
		</div>
	);
};

export default Task;
