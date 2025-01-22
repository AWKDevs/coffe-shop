// app/components/Layout.tsx
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <Navbar />
            <main style={{ padding: '20px' }}>
                <h2>Bienvenido a Coffee Shop</h2>
                {children}
            </main>
        </>
    );
};

export default Layout;
