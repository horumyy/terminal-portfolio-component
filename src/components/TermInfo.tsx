import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>user</User>@<WebsiteName>terminal.satnaing.dev</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
