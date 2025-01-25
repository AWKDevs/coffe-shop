// app/components/Layout.tsx
import Footer from './footer';
import Header from './Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <Header />
            <main style={{ padding: '20px' }}>
                <h2>Bienvenido a Coffee Shop</h2>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
