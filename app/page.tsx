// app/page.tsx
import AboutUs from './components/aboutus/AboutUs';
import Hero from './components/Hero';
import FeaturesSection from './components/sections/FeatureSection';

export default function LandingPage() {
    return (
        <div>
            {/* Aquí va el Hero */}
            <Hero />
            <FeaturesSection />
            <AboutUs/>
            {/* Aquí va la sección Sobre Nosotros y el Footer */}
        </div>
    );
}
