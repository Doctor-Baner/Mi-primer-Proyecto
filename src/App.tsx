import Navbar from './components/Navbar';
import CategoryBar from './components/CategoryBar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';

const featuredProducts = [
  {
    image:
      'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80',
    name: 'Monitor Gaming Ultra Wide 34" QHD 144Hz',
    price: 499999,
    oldPrice: 599999,
    discount: 17,
  },
  {
    image:
      'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&q=80',
    name: 'Laptop Gamer RTX 4070 32GB RAM',
    price: 1299999,
    oldPrice: 1499999,
    discount: 13,
  },
  {
    image:
      'https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?auto=format&fit=crop&q=80',
    name: 'Teclado Mecánico RGB Switch Blue',
    price: 89999,
  },
  {
    image:
      'https://images.unsplash.com/photo-1600375104627-c94c416deefa?auto=format&fit=crop&q=80',
    name: 'Mouse Gaming Inalámbrico 20000 DPI',
    price: 69999,
    oldPrice: 79999,
    discount: 12,
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <CategoryBar />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Productos Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas ayuda?</h2>
          <p className="text-lg mb-6">
            Nuestro equipo de expertos está disponible para asesorarte en tu
            compra
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Contactar ahora
          </button>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TechVenta</h3>
              <p className="text-gray-400">
                Tu tienda de confianza para productos tecnológicos
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contacto</h3>
              <p className="text-gray-400">
                Email: ventas@BYTE.com
                <br />
                Tel: (123) 456-7890
                <br />
                Dirección: Av. Tecnología 123
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Horario</h3>
              <p className="text-gray-400">
                Lunes a Viernes: 9:00 - 18:00
                <br />
                Sábados: 9:00 - 13:00
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            © 2024 BYTES. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
