import React, { useState, useCallback } from "react";
import "./styles.css";
import Checkbox from "./components/Checkbox";
import Input from "./components/Input";
import Radio from "./components/Radio";

const data = [
  {
    label: "ダウンジャケット",
    id: "padded",
    type: "radio",
    options: [
      {
        label: "無い",
        value: "none",
        mapping: {
          outer: "PN",
          top: "PN",
          "blouse/shirt": "PN",
          sportswear: "PN",
          onepiece: "PN",
        },
      },
      {
        label: "軽い",
        value: "light",
        mapping: {
          outer: "PL",
          top: "PL",
          "blouse/shirt": "PL",
          sportswear: "PL",
          onepiece: "PL",
        },
      },
      {
        label: "重い",
        value: "heavy",
        mapping: {
          outer: "PH",
          top: "PH",
          "blouse/shirt": "PH",
          sportswear: "PH",
          onepiece: "PH",
        },
      },
    ],
  },
  {
    label: "季節",
    id: "season",
    type: "checkbox",
    values: [],
    options: [
      { label: "春", value: "spring" },
      { label: "夏", value: "summer" },
      { label: "秋", value: "fall" },
      { label: "冬", value: "winter" },
    ],
  },
  {
    label: "厚さ",
    id: "thickness",
    type: "radio",
    options: [
      { label: "薄い", value: "light" },
      { label: "並み", value: "regular" },
      { label: "厚い", value: "thick" },
    ],
  },
  {
    label: "メッセージ",
    id: "message",
    type: "input",
  },
  {
    label: "生地",
    id: "texture",
    type: "radio",
    options: [
      { label: "柔らかい", value: "soft" },
      { label: "並み", value: "regular" },
      { label: "粗い", value: "rough" },
    ],
  },
];

function App() {
  console.log("App Render");
  const [result, setResult] = useState({});

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(result)
  }, [result]);

  const onChangeValues = useCallback((id) => (values) => {
    setResult((prevResult) => {
      return {
        ...prevResult,
        [id]: {
          values
        }
      };
    });
  }, []);

  const onChangeValue = useCallback((id) => (value) => {
    setResult((prevResult) => {
      return {
        ...prevResult,
        [id]: {
          value
        }
      };
    });
  }, []);

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        {data.filter((v) => ["message", "texture", "season"].includes(v.id)).map((v) => {
          if (v.type === "checkbox") {
            return (
              <Checkbox 
                data={v}
                values={result[v.id]?.values}
                onChange={onChangeValues(v.id)}
              />
            );
          } else if (v.type === "radio") {
            return (
              <Radio                 
                data={v}
                value={result[v.id]?.value}
                onChange={onChangeValue(v.id)}
              />
            );
          } else if (v.type === "input") {
            return (
              <Input 
                data={v}
                value={result[v.id]?.value}
                onChange={onChangeValue(v.id)} 
              />
            );
          } else {
            return null;
          }
        })}
        <button type="submit">Show</button>
      </form>
    </div>
  );
}

export default App;