// app/components/Navbar.tsx
import { Button } from 'antd';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav style={{ padding: '10px', backgroundColor: '#f4f4f4', display: 'flex', gap: '20px' }}>
            <Link href="/">Landing</Link>
            <Link href="/catalog">Catálogo</Link>
            <Link href="/cart">Carrito</Link>
            <Button type="primary">Botón Ant</Button>
        </nav>
    );
};

export default Navbar;
