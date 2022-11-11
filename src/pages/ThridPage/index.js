import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { PageName } from "../../components/PageName";
import { Sum } from "../../components/Sum";

const ThridPage = () => {
  let navigate = useNavigate();

  return (
    <section>
      <PageName text={"C"}></PageName>
      <Button onClick={() => navigate("/fourthpage")}></Button>
      <Sum></Sum>
      <input></input>
    </section>
  );
};

export { ThridPage };