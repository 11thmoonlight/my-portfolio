import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import Navbar from "./components/Navbar.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import Experience from "./sections/Experience.jsx";
import TechStack from "./sections/TechStack.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

function App() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <ShowcaseSection/>
            <FeatureCards/>
            <Experience/>
            <TechStack/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App
