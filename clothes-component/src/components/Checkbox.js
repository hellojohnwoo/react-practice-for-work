import React, { useCallback } from "react";

const Checkbox = ({ data, onChange, values = [] }) => {
	console.log("-Checkbox Render");

	const onChangeAll = useCallback((e) => {
		const { checked } = e.target;
		if (checked) {
			onChange(data.options.map((d) => d.value));
		} else {
			onChange([]);
		}
	}, [data, onChange]);

	const onChangeValue = useCallback((e) => {
		onChange(e.target.value);
	}, [onChange]);

	return (
		<div>
			<b>{data.label}: </b>
			<label key={data.id}>
				<span>ALL</span>
				<input
					type="checkbox"
					name="all"
					value="all"
					checked={values}
					onChange={onChangeAll}
				/>
			</label>
			{data.options.map((o) => (
				<label key={o.label}>
					<span>{o.label}</span>
					<input 
						type="checkbox" 
						name={o.label} 
						value={o.value}
						checked={values.includes(o.value)}
						onChange={onChangeValue}
					/>
				</label>
			))}
		</div>
	);
};

export default Checkbox;