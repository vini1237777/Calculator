import React, { useState } from "react";
import Wrapper from "./components/wrapper/wrapper";
import Screen from "./components/wrapper/screen/screen";
import Button from "./components/button/button";
import ButtonBox from "./components/buttonBox/buttonBox";
const btnVal = [7, 8, 9, "CLR", 4, 5, 6, "-", 3, 2, 1, "/", 0, "=", "*", "+"];
const App = () => {
  let [input, setInput] = useState("");
  let [output, setOutput] = useState("");
  let [prevNumber, setPrevNumber] = useState("");

  const allClickmeHandler = (e) => {
    let x = e.target.innerHTML;
    setPrevNumber(prevNumber + x);
    setInput(prevNumber + x);
    console.log(input);
  };
  const equalClickHandler = () => {
    let display = Number(eval(input));
    setOutput(display);
    console.log(display);
    setInput(display);
    if (output === "undefined") {
      return "not valid";
    }
  };
  const reset = () => {
    setInput("");
    setOutput("");
    setPrevNumber("");
  };

  const deleteNum = () => {
    setInput(input.toString().splice(0, -1));
    console.log(input);
  };
  const onClickHandler = () => {};
  // let [calc, setCalc] = useState({
  //   signClicked: "",
  //   numEntered: 0,
  //   res: 0,
  // });
  //

  // const removeSpaces = (num) => num.toString().replace(/\s/g, "");

  // const numClickHandler = (e) => {
  //   const value = e.target.innerHTML;
  //   if (
  //     removeSpaces(calc.numEntered).length < 10 &&
  //     calc.numEntered.length >= 0
  //   ) {
  //     setCalc({
  //       ...calc,
  //       numEntered:
  //         calc.numEntered === 0 && value === "0"
  //           ? "0"
  //           : removeSpaces(calc.numEntered) % 1 === 0
  //           ? toLocaleString(Number(removeSpaces(calc.numEntered) + value))
  //           : toLocaleString(calc.numEntered + value),
  //       res: !calc.signClicked ? 0 : calc.res,
  //     });
  //   }
  // };

  // const resetClickHandler = () => {
  //   setCalc({
  //     ...calc,
  //     signClicked: "",
  //     numEntered: 0,
  //     res: 0,
  //   });
  // };

  // const addClickHandler = (e) => {
  //   const value = e.target.innerHTML;
  //   if (value === "+") {
  //     setCalc({
  //       ...calc,
  //       signClicked: value,
  //       numEntered: 0,
  //       res: !calc.res && calc.num ? calc.num : calc.res,
  //     });
  //   }
  // };
  // const subtractClickHandler = (e) => {
  //   const value = e.target.innerHTML;
  //   if (value === "-") {
  //     setCalc({
  //       ...calc,
  //       signClicked: value,
  //       numEntered: 0,
  //       res: !calc.res && calc.num ? calc.num : calc.res,
  //     });
  //   }
  // };
  // const divideClickHandler = (e) => {
  //   const value = e.target.innerHTML;
  //   if (value === "÷") {
  //     setCalc({
  //       ...calc,
  //       signClicked: value,
  //       numEntered: 0,
  //       res: !calc.res && calc.num ? calc.num : calc.res,
  //     });
  //   }
  // };

  // const fullstopClickHandler = (e) => {
  //   const value = e.target.innerHTML;

  //   setCalc({
  //     ...calc,
  //     num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
  //   });
  // };
  // const equalClickHandler = () => {
  //   if (calc.signClicked && calc.numEntered) {
  //     const math = (a, b, signClicked) =>
  //       signClicked === "+"
  //         ? a + b
  //         : signClicked === "-"
  //         ? a - b
  //         : signClicked === "X"
  //         ? a * b
  //         : a / b;

  //     setCalc({
  //       ...calc,
  //       res:
  //         calc.numEntered === "0" && calc.signClicked === "/"
  //           ? "Can't divide with 0"
  //           : toLocaleString(
  //               math(
  //                 Number(removeSpaces(calc.res)),
  //                 Number(removeSpaces(calc.numEntered)),
  //                 calc.signClicked
  //               )
  //             ),
  //       signClicked: "",
  //       numEntered: 0,
  //     });
  //   }
  // };
  return (
    <Wrapper>
      <Screen value={input} />
      <ButtonBox>
        {btnVal.map((btn, i) => {
          return (
            <Button
              key={btn}
              value1={btn}
              className1={`item${i}`}
              onClick1={
                btn === "="
                  ? equalClickHandler
                  : btn === "DEL"
                  ? deleteNum
                  : btn === "CLR"
                  ? reset
                  : btn === "ON"
                  ? onClickHandler
                  : allClickmeHandler
              }
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
