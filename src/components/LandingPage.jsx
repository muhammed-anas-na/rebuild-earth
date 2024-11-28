import About from "./About";
import CoinComponent, { CoinCard } from "./CoinCard";
import Counter from "./Counter";
import Event from "./Event";
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
      <CoinComponent/>
      <Footer/>
    </>
  )
}