// app/layout.tsx
import './styles/globals.css';
import Navbar from './components/NavBar/ResponsiveNav';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
