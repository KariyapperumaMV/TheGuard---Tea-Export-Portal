import "./App.css";
import {
  CallToAction,
  ContactUs,
  Downloads,
  LiteratureSurvey,
  MainHeader,
  MeetOurTeam,
  Methodology,
  Navbar,
  ProjectTimeline,
  ResearchGap,
  ResearchObjectives,
  ResearchProblemSolution,
  ScrollToTop,
  Technologies,
} from "./components";

const App: React.FC = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <MainHeader />
      <LiteratureSurvey />
      <ResearchGap />
      <ResearchProblemSolution />
      <ResearchObjectives />
      <Methodology />
      <Technologies />
      <ProjectTimeline />
      <Downloads />
      <MeetOurTeam />
      <ContactUs />
      <CallToAction />
    </div>
  );
};

export default App;
