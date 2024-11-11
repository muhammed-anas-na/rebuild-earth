import About from "./About";
import Counter from "./Counter";
import Header from "./Header";
import VideoPlayer from "./VideoPlayer";

export default function LandingPage(){
  return(
    <>
      <Header/>
      <VideoPlayer/>
      <About/>
      <Counter/>
    </>
  )
}