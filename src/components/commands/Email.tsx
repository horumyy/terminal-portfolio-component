import { Wrapper } from "../styles/Output.styled";
import { Link } from "../styles/Welcome.styled";
import React from "react";

const Email: React.FC = () => {
  return (
    <Wrapper>
      <span>
        reach me @{" "}
        <Link
          className="cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText("hello@horumy.dev");
          }}
        >
          hello@horumy.dev
        </Link>
        !
      </span>
    </Wrapper>
  );
};

export default Email;
