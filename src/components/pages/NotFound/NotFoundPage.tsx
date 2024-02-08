import { useNavigate } from "react-router-dom";
import { BackToHomePage } from "../../../utils/utils";
import { Button } from "../../button/button.style";
import { NotFoundDiv } from "./NotFound.style";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <NotFoundDiv>
      <h1>Page not found!</h1>
      <br />
      <Button type="button" onClick={() => BackToHomePage(navigate)}>
          Back
        </Button>
    </NotFoundDiv>
  );
};

export default NotFound;