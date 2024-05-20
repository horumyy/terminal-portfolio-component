import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hello! i'm <HighlightSpan className="text-purple-500">h</HighlightSpan>
        <HighlightSpan className="text-blue-500">o</HighlightSpan>
        <HighlightSpan className="text-green-500">r</HighlightSpan>
        <HighlightSpan className="text-yellow-500">u</HighlightSpan>
        <HighlightSpan className="text-orange-500">m</HighlightSpan>
        <HighlightSpan className="text-red-500">y</HighlightSpan>
      </p>
      <p>
        I'm a <HighlightAlt>software engineer</HighlightAlt> based in{" "}
        <HighlightSpan className="text-green-500">Me</HighlightSpan>
        <HighlightSpan className="text-white">xi</HighlightSpan>
        <HighlightSpan className="text-red-500">co</HighlightSpan>,
      </p>
      <p>
        I love creating <HighlightAlt>experiences</HighlightAlt> mostly on web,
        <br /> i've been working as a{" "}
        <HighlightAlt>front-end developer</HighlightAlt> for 3 years, <br /> and
        recently i've been working with three.js and react-three-fiber
      </p>
    </AboutWrapper>
  );
};

export default About;
