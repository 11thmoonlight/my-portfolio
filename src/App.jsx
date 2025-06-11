import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import Navbar from "./components/Navbar.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

function App() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <ShowcaseSection/>
            <FeatureCards/>
            <TechStack/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App
