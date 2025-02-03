// pages/detail/[id].tsx
import { useRouter } from 'next/router';

const Detail: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    return <h1>Detalle del Producto {id}</h1>;
};

export default Detail;
