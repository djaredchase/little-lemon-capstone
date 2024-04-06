import { HeroSection } from "../HeroSection/HeroSection";
import { Specials } from '../Specials/Specials';
import { Testimonials } from "../Testimonials/Testimonials";
import { About } from "../AboutSection/About";
import { Footer } from "../Footer/Footer";
import { ScreenSection } from "../ScreenSection";

export const HomePage = () => {
    return (
        <>
            <main>
                <ScreenSection backgroundColor='#495E57' marginBottom='5rem'>
                    <HeroSection />
                </ScreenSection>
                <ScreenSection marginBottom='5rem'>
                    <Specials />
                </ScreenSection>
                <section>
                    {/* <Testimonials /> */}
                    {/* <article>
                        one article for each review
                    </article> */}
                </section>
                <section>
                    {/* <About /> */}
                </section>
            </main>
            <footer>
                {/* <Footer /> */}
            </footer>
        </>
    );
}