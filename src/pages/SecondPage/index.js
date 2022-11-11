import { useState } from "react";
import { redirect } from "react-router-dom";
import { Button } from "../../components/Button";
import { PageName } from "../../components/PageName";

import {Sum} from "../../components/Sum"

const SecondPage = () => {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");

  return (
    <section>
      <PageName text={"B"}></PageName>
      <Button onClick={redirect("/thirdpage")}></Button>
      <Sum firstNum={firstNum} setFirstNum={setFirstNum} secondNum={secondNum} setSecondNum={setSecondNum}></Sum>
    </section>
  );
};

export { SecondPage };
