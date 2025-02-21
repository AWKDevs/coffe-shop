// app/layout.tsx
import './styles/globals.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
