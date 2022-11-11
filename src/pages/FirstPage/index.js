import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { PageName } from "../../components/PageName";

const FirstPage = () => {
  const navigate = useNavigate();

  return (
    <section>
      <PageName text={"A"}></PageName>
      <Button onClick={() => navigate.push("/secondpage")}></Button>
    </section>
  );
};

export { FirstPage };
