// app/components/Navbar.tsx
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="flex gap-4 p-4 bg-gray-200">
            <Link href="/" className="text-blue-600 hover:underline">Landing</Link>
            <Link href="/catalog" className="text-blue-600 hover:underline">Catálogo</Link>
            <Link href="/cart" className="text-blue-600 hover:underline">Carrito</Link>
        </nav>
    );
};

export default Navbar;
