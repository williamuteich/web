import Image from "next/image";

// Defina o array de categorias com imagens
const categorias = [
  { id: 1, img: "/produto.jpg", name: 'Carrinho' },
  { id: 2, img: "/produto2.jpg", name: 'Caixas' },
  { id: 3, img: "/produto.jpg", name: 'Presentes' },
  { id: 4, img: "/produto2.jpg", name: 'Moda' },
  { id: 5, img: "/produto.jpg", name: 'Presentes' },
  { id: 6, img: "/produto2.jpg", name: 'Moda' },
  { id: 7, img: "/produto.jpg", name: 'Presentes' },
];

export function Categorias() {
  return (
    <section className="w-full px-4 pt-20">
      <div className="overflow-x-auto">
        <div className="flex gap-4 md:gap-6 min-w-max justify-center">
          {categorias.map(({ id, img, name }) => (
            <div key={id} className="flex flex-col items-center cursor-pointer">
              <div className="bg-gray-100 rounded-full shadow-lg flex items-center justify-center w-[95px] h-[95px] lg:w-[95px] lg:h-[95px] hover:border-2 hover:scale-105">
                <Image 
                  src={img}
                  width={50}
                  height={50} 
                  alt={name} 
                  className="w-full h-full object-cover rounded-full" 
                />
              </div>
              <h3 className="mt-2 text-lg text-slate-600 text-center">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
