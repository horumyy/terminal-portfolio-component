import { generateTabs } from "../../utils/funcs";
import { AboutWrapper } from "../styles/About.styled";
import { Cmd, CmdDesc, CmdList } from "../styles/Help.styled";
import { Link } from "../styles/Welcome.styled";

const people = [
  {
    name: "merlinnmoon",
    desc: (
      <CmdDesc className="items-center ">
        <div className=" inline">
          the amazing artist behind my avatar, follow her on{" "}
          <Link href="https://www.instagram.com/merlinnmoon/" target="_blank">
            Instagram
          </Link>
          !
        </div>
      </CmdDesc>
    ),
    tabs: 5,
  },
  {
    name: "sh1zuku",
    desc: (
      <CmdDesc className="items-center ">
        she created the winxp in original react,{" "}
        <Link href="https://winxp.vercel.app/" target="_blank">
          check it out
        </Link>
        !
      </CmdDesc>
    ),
    tabs: 9,
  },

  {
    name: "Sat Naing",
    desc: (
      <CmdDesc className="items-center ">
        the creator of this{" "}
        <Link href="https://terminal.satnaing.dev/" target="_blank">
          awesome terminal
        </Link>
        !
      </CmdDesc>
    ),
    tabs: 7,
  },
];
const Thanks: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p className="mb-2">
        I want to thank some people who made this project possible.
      </p>
      {people.map(({ name, desc, tabs }) => (
        <CmdList key={name}>
          <div className="sm:flex">
            <Cmd>{name}</Cmd>
            {generateTabs(tabs)}-<div className="ml-2">{desc}</div>
          </div>
        </CmdList>
      ))}
    </AboutWrapper>
  );
};

export default Thanks;
