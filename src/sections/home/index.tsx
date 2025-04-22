import { HomeCapabilities } from "./components/Capabilities";
import { ContactUs } from "./components/Contacts";
import { HomeHero } from "./components/Hero";
import { HomeProjects } from "./components/Projects";

export function HomePageView() {
    return (
        <main className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
            <HomeHero />
            <HomeCapabilities />
            <HomeProjects />
            <ContactUs />
        </main>
    );
}
