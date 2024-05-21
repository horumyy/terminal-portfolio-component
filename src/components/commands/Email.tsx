import { Wrapper } from "../styles/Output.styled";
import { Link } from "../styles/Welcome.styled";

const Email: React.FC = () => {
  /* ===== get current command ===== */

  return (
    <Wrapper>
      <span>
        reach me @ <Link>hello@horumy.dev</Link>!
      </span>
    </Wrapper>
  );
};

export default Email;
