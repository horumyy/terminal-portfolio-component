import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";
import { Link } from "../styles/Welcome.styled";

const Email: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  if (rerender && currentCommand[0] === "email" && currentCommand.length <= 1) {
    window.open("mailto:" + "hello@horumy.dev", "_self");
  }

  return (
    <Wrapper>
      <span>
        reach me @ <Link>hello@horumy.dev</Link>!
      </span>
    </Wrapper>
  );
};

export default Email;
