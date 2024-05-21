import { Wrapper } from "../styles/Output.styled";
import { Link } from "../styles/Welcome.styled";
import React from "react";

const Email: React.FC = () => {
  /* ===== get current command ===== */
  const [copyAlert, setCopyAlert] = React.useState(false);

  React.useEffect(() => {
    if (copyAlert) {
      setTimeout(() => {
        setCopyAlert(false);
      }, 2000);
    }
  }, [copyAlert]);

  return (
    <Wrapper>
      <span>
        reach me @{" "}
        <Link
          className="cursor-pointer"
          onClick={
            // copy to clipboard
            () => {
              navigator.clipboard.writeText("hello@horumy.dev");
              setCopyAlert(true);
            }
          }
        >
          hello@horumy.dev
        </Link>
        !
      </span>
      {copyAlert ? (
        <span className="ml-2 text-sm text-gray-500">copied to clipboard!</span>
      ) : null}
    </Wrapper>
  );
};

export default Email;
