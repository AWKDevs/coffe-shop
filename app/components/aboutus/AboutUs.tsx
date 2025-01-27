import React from 'react';
import Image from 'next/image';

const AboutUs: React.FC = () => {
    return (
        <section style={{ margin: '0 auto', maxWidth: '1200px', padding: '40px 20px' }}>
            <h2
                style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    fontFamily: 'Judson, serif',
                    color: '#7C593C',
                    marginBottom: '20px',
                }}
            >
                Nosotros
            </h2>
            <p style={{ fontFamily: 'Judson, serif', color: '#7C593C', marginBottom: '20px' }}>
                En Dulces Recuerdos Café, llevamos 10 años endulzando la vida de quienes nos visitan. Desde 2015, hemos
                sido más que una cafetería: somos el lugar donde los momentos mágicos cobran vida. Cada sorbo, cada
                bocado, está diseñado para crear experiencias inolvidables que se conviertan en deliciosos recuerdos.
            </p>
            <p style={{ fontFamily: 'Judson, serif', color: '#7C593C', marginBottom: '20px' }}>
                Nuestra misión ha sido siempre ser el responsable de esos instantes únicos que marcan el corazón, ya sea
                disfrutando de una reconfortante bebida caliente, un postre irresistible o una charla con seres queridos
                en un ambiente acogedor.
            </p>
            <h3
                style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    fontFamily: 'Judson, serif',
                    color: '#7C593C',
                    marginBottom: '20px',
                }}
            >
                Nuestros valores:
            </h3>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '20px',
                    marginBottom: '40px',
                }}
            >
                {[
                    {
                        title: 'Calidad',
                        text: 'Utilizamos los mejores ingredientes para ofrecerte sabores auténticos y excepcionales.',
                    },
                    {
                        title: 'Tradición',
                        text: 'Respetamos y honramos recetas y técnicas que evocan las raíces y la cultura.',
                    },
                    {
                        title: 'Calidez',
                        text: 'Creamos un espacio donde todos son bienvenidos y se sienten como en casa.',
                    },
                ].map((value, index) => (
                    <div
                        key={index}
                        style={{
                            flex: 1,
                            backgroundColor: '#7C593C69',
                            borderRadius: '15px',
                            padding: '20px',
                            textAlign: 'center',
                            color: '#FFF',
                            fontFamily: 'Judson, serif',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '10px' }}>{value.title}</h4>
                        <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>{value.text}</p>
                    </div>
                ))}
            </div>
            <p style={{ fontFamily: 'Judson, serif', color: '#7C593C', marginBottom: '40px', textAlign: 'center' }}>
                Gracias por ser parte de nuestra historia y permitirnos ser parte de tus momentos más especiales.
            </p>
            <div style={{ textAlign: 'center' }}>
                <Image
                    src="/images/aboutus/aboutus.png"
                    alt="Nosotros - Pastel"
                    width={1200}
                    height={500}
                    style={{
                        borderRadius: '15px',
                        objectFit: 'cover',
                    }}
                />
            </div>
        </section>
    );
};

export default AboutUs;
