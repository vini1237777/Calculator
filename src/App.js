import React from "react";
import Wrapper from "./components/wrapper/wrapper";
import Screen from "./components/wrapper/screen/screen";
import Button from "./components/button/button";
import ButtonBox from "./components/buttonBox/buttonBox";

const btnVal = [7, 8, 9, "DEL", 4, 5, 6, "÷", 1, 2, 3, "*", 0, ".", "=", "+"];
const App = () => {
  return (
    <Wrapper>
      <Screen value="0." />
      <ButtonBox>
        {btnVal.map((btn, i) => {
          console.log(btn, i);
          return (
            <Button
              key={i}
              value={btn}
              className1={`item${i}`}
              onClick={() => {
                console.log(`${btn}clicked`);
              }}
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
