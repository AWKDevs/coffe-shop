// app/page.tsx
import AboutUs from './components/aboutus/AboutUs';
import Hero from './components/Hero';
import FeaturesSection from './components/sections/FeatureSection';

export default function LandingPage() {
    return (
        <div>
            <Hero />
            <FeaturesSection />
            <AboutUs/>
        </div>
    );
}
