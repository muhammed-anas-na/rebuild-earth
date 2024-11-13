import About from "./About";
import Counter from "./Counter";
import Events from "./Events";
import Footer from "./Footer";
import Header from "./Header";
import VideoPlayer from "./VideoPlayer";

export default function LandingPage(){
  return(
    <>
      <Header/>
      <VideoPlayer/>
      <About/>
      <Counter/>
      <Events/>
      <Footer/>
    </>
  )
}