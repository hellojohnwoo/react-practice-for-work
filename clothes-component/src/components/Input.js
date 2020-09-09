import React, { memo, useCallback } from "react";

const Input = memo(({ data, onChange, value }) => {
	console.log("-Input Render");

	const onChangeValue = useCallback((e) => {
		onChange(e.target.value);
	}, [onChange]);

  return (
		<div>
			<label><b>{data.label}: </b></label>
			<input 
				key={data.id} 
				name={data.id}
				onChange={onChangeValue}
				value={value}
			/>
	</div>
  );
});

export default Input;