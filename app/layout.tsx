// app/layout.tsx
import './styles/globals.css';
import Navbar from './components/Navbar';
import Header from './components/Header';

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
            </body>
        </html>
    );
}
