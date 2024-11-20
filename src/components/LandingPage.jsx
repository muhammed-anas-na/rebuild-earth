import About from "./About";
import { CoinCard } from "./CoinCard";
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
      {/* <div className="flex flex-wrap justify-around">
      <CoinCard title={"Basic"} desc={"Coin"} image={"/coin05.jpeg"}/>
      <CoinCard title={"Basic"} desc={"Coin"} image={"/coin10.jpeg"}/>
      <CoinCard title={"Basic"} desc={"Coin"} image={"/coin50.jpeg"}/>
      </div> */}
      <Footer/>
    </>
  )
}