import {useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
    const sectionRef = useRef(null);
    const todoRef = useRef(null);
    const bookRef = useRef(null);
    const beckRef = useRef(null);

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            {opacity: 0},
            {opacity: 1, duration: 1.5}
        );

        // Animations for each app showcase
        const cards = [todoRef.current, bookRef.current, bookRef.current];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    <div ref={todoRef} className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="Todo app screenshot"/>
                        </div>
                        <div className="text-content">
                            <h2>
                                TaskVerse – Full-Feature To-Do App
                            </h2>

                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={bookRef}>
                            <div className="image-wrapper bg-[#FFEFDB]">
                                <img
                                    src="/images/project2.png"
                                    alt="bookstore screenshot"
                                />
                            </div>
                            <h2>Hinode – Online full-stack book store</h2>
                        </div>

                        <div className="project" ref={bookRef}>
                            <div className="image-wrapper bg-[#FFE7EB]">
                                <img src="/images/project3.png" alt="beck depression test screenshot"/>
                            </div>
                            <h2>MindCheck – Beck Depression Test App</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppShowcase;