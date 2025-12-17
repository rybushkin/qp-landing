import React, {useEffect, useState} from "react";
import "./styles/globals.css";
import Header from "./components/header/header";
import TrainSlider from "./components/trainSlider/trainSlider";
// import Footer from "./components/footer/footer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import QPCalculator from './components/calculator';
import Loader from "./components/loader";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap";
// import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);

if (window.innerWidth <= 768) {
    ScrollTrigger.config({
        ignoreMobileResize: true,
        fastScrollEnd: true,
        autoRefreshEvents: "DOMContentLoaded,load"
    });

    ScrollTrigger.normalizeScroll({
        allowNestedScroll: false,
        momentum: 0.6,
        allowTouchScrolling: 0.7,
        debounce: 40,
    });
}

function App() {
    const [isLoading, setIsLoading] = useState(true);

    return (
    <div className="App">
      <Loader onComplete={!isLoading} />
      <div>
                <Header />
                <TrainSlider setIsLoading={setIsLoading} />
                <QPCalculator />
      </div>
    </div>
  );
}

export default App;
