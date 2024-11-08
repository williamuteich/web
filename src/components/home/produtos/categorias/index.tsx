import { FaShoppingCart, FaBox, FaGift, FaTshirt } from 'react-icons/fa'; // Ícones

// Defina o array de categorias
const categorias = [
  { id: 1, icon: <FaShoppingCart size={40} className="text-gray-700" />, name: 'Carrinho' },
  { id: 2, icon: <FaBox size={40} className="text-gray-700" />, name: 'Caixas' },
  { id: 3, icon: <FaGift size={40} className="text-gray-700" />, name: 'Presentes' },
  { id: 4, icon: <FaTshirt size={40} className="text-gray-700" />, name: 'Moda' },
  { id: 5, icon: <FaGift size={40} className="text-gray-700" />, name: 'Presentes' },
  { id: 6, icon: <FaTshirt size={40} className="text-gray-700" />, name: 'Moda' },
  { id: 7, icon: <FaGift size={40} className="text-gray-700" />, name: 'Presentes' },
];

export function Categorias() {
  return (
    <section className="w-full px-4 mt-10">
      <div className="flex flex-col items-center gap-4 mb-6">
          <h1 className="text-2xl text-slate-700 font-semibold ">Categorias</h1>
          <span className="bg-blue-700 p-[2px] w-[50px]"></span>
      </div>
      <div className="overflow-x-auto">
        <div className="flex gap-4 md:gap-6 min-w-max justify-center">
          {categorias.map(({ id, icon, name }) => (
            <div key={id} className="flex flex-col items-center cursor-pointer">
              <div className="bg-gray-100 rounded-lg shadow-lg flex items-center justify-center w-[80px] h-[80px] lg:w-[80px] lg:h-[80px] hover:border-2 hover:scale-105">
                {icon} 
              </div>
              <h3 className="mt-2 text-lg text-slate-600 text-center">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
