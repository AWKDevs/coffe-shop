// app/page.tsx
import AboutUs from './components/sections/AboutUs';
import Hero from './components/common/Hero';
import FeaturesSection from './components/common/FeatureSection';
import SEO from "./components/seo/SEO";

export default function LandingPage() {
    return (
        <>

            <SEO
                title="Coffee Shop - Dulces Recuerdos Café"
                description="Disfruta de la mejor experiencia en nuestro Coffee Shop."
                canonical="https://www.tusitio.com/"
                openGraph={{
                  url: "https://www.tusitio.com/",
                  title: "Coffee Shop - Dulces Recuerdos Café",
                  description: "Disfruta de la mejor experiencia en nuestro Coffee Shop.",
                  images: [
                    {
                      url: "https://www.tusitio.com/images/og-image.jpg",
                      width: 800,
                      height: 600,
                      alt: "Coffee Shop",
                    },
                  ],
                }}
            />
            <main>
                <Hero />
                <FeaturesSection />
                <AboutUs/>
            </main>
        </>
    );
}
