import Hero from "../components/Hero";
import Features from "../components/Features";
import GettingStarted from "../components/GettingStarted";
import Reviews from "../components/Reviews";
import Waitlist from "../components/Waitlist";
import ForEveryone from "../components/ForEveryone";
import Intro from "../components/Introduction";
import MeetTheTeam from "../components/MeetTheTeam";

const Home = () => {
  return (
    <main>
      <Hero />
      <Intro />
      <Features />
      <ForEveryone />
      <GettingStarted />
      <Reviews />
      <MeetTheTeam />
      <Waitlist />
    </main>
  );
};

export default Home;
