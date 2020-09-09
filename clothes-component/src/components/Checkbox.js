import React, { useCallback } from "react";

const Checkbox = ({ data, onChange, values = [] }) => {
	console.log("-Checkbox Render");

	const onChangeAll = useCallback((e) => {
		const { checked } = e.target;
		if (checked) {
			onChange(data.options.map((d) => d.value).sort());
		} else {
			onChange([]);
		}
	}, [data, onChange]);

	const onChangeValue = useCallback((e) => {
		const { checked } = e.target;
		if (checked) {
			const newValues = values.concat(e.target.value).sort();
			onChange(newValues);
		} else {
			const newValues = values.filter((v) => v !== e.target.value);
			onChange(newValues);
		}
	}, [onChange, values]);

	return (
		<div>
			<b>{data.label}: </b>
			<label key={data.id}>
				<span>ALL</span>
				<input
					type="checkbox"
					name="all"
					value="all"
					checked={values.join() === data.options.map((d) => d.value).sort().join()}
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