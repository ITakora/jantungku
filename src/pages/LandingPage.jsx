
import Navbar from "../components/navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import AboutSection from "../components/AboutSection.jsx";
import FeatureSection from "../components/FeatureSection.jsx";

const LandingPage = () => {
    return (
        <div>

        <Navbar/>
        <HeroSection/>
            <AboutSection/>
            <FeatureSection/>
        </div>
    )
}


export default LandingPage