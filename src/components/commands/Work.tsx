import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Work: React.FC = () => {
  return (
    <Wrapper data-testid="work">
      <EduIntro>Some background on my work experience</EduIntro>
      {workBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const workBg = [
  {
    title: "Pefai",
    desc: "Frontend Developer | 2025",
  },
  {
    title: "Lolasux",
    desc: "Frontend Team Lead | 2024 ~ 2025",
  },
  {
    title: "HP Labs",
    desc: "Research & Development Intern | 2023 ~ 2024",
  },
  {
    title: "Lizza",
    desc: "Frontend Developer | 2023",
  },
  {
    title: "Mis Fans",
    desc: "Jr. Frontend Developer | 2022",
  },
];

export default Work;
