import React, { memo, useCallback } from "react";

const Radio = memo(({ data, onChange, value }) => {
	console.log("-Radio Render");

	const onChangeValue = useCallback((e) => {
		onChange(e.target.value);
	}, [onChange]);

  return (
    <div>
      <b>{data.label}: </b>
      {data.options.map((o) => (
        <label key={o.label}>
          <span>{o.label}</span>
					<input 
						type="radio"
						name={data.id}
						value={o.value}
						onChange={onChangeValue}
						checked={value === o.value}
					/>
        </label>
      ))}
    </div>
  );
});

export default Radio;
