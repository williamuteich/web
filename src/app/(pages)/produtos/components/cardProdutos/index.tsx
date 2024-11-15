import Link from 'next/link';
import { FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa'; // Ícones

const produtos = [
  {
    id: 1,
    titulo: "Sunga Slip Canelada Ferrugem Olivia",
    imagem: "/produto.jpg",
    descricao: "Com 3% de desconto",
    preco: "R$ 76,63",
    precoAnterior: "R$ 149,00",
    precoParcelado: "R$ 39,50",
  },
  {
    id: 2,
    titulo: "Tênis Nike Air Max 2021",
    imagem: "/produto2.jpg",
    descricao: "Com 5% de desconto",
    preco: "R$ 599,99",
    precoAnterior: "R$ 799,00",
    precoParcelado: "R$ 299,99",
  },
  {
    id: 3,
    titulo: "Relógio Casio Vintage",
    imagem: "/produto.jpg",
    descricao: "Com 10% de desconto",
    preco: "R$ 200,00",
    precoAnterior: "R$ 250,00",
    precoParcelado: "R$ 100,00",
  },
  {
    id: 4,
    titulo: "Camiseta Adidas Original",
    imagem: "/produto2.jpg",
    descricao: "Com 8% de desconto",
    preco: "R$ 129,90",
    precoAnterior: "R$ 140,00",
    precoParcelado: "R$ 64,95",
  },
  {
    id: 5,
    titulo: "Jaqueta North Face Puffer",
    imagem: "/produto.jpg",
    descricao: "Com 12% de desconto",
    preco: "R$ 399,00",
    precoAnterior: "R$ 455,00",
    precoParcelado: "R$ 199,50",
  },
  {
    id: 6,
    titulo: "Fone de Ouvido JBL Xtreme",
    imagem: "/produto2.jpg",
    descricao: "Com 7% de desconto",
    preco: "R$ 350,00",
    precoAnterior: "R$ 400,00",
    precoParcelado: "R$ 175,00",
  },
  {
    id: 7,
    titulo: "Cadeira Gamer DXRacer",
    imagem: "/produto.jpg",
    descricao: "Com 15% de desconto",
    preco: "R$ 999,99",
    precoAnterior: "R$ 1.200,00",
    precoParcelado: "R$ 499,99",
  },
  {
    id: 8,
    titulo: "Smartphone Samsung Galaxy S20",
    imagem: "/produto2.jpg",
    descricao: "Com 10% de desconto",
    preco: "R$ 2.899,00",
    precoAnterior: "R$ 3.200,00",
    precoParcelado: "R$ 1.449,50",
  },
];

export default function CardProdutos() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {produtos.map((produto) => (
          <div key={produto.id} className="bg-white border border-gray-200 rounded-xl shadow-md p-4 flex flex-col items-center">
            {/* Link diretamente sem a tag <a> */}
            <Link href={`/produtos/${produto.titulo}`} className="group w-full">
              <img
                src={produto.imagem}
                alt={produto.titulo}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              
              {/* Aplica a cor azul no hover sobre o link */}
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-3 group-hover:text-blue-500 transition-colors">
                {produto.titulo}
              </h3>
              
              <p className="text-sm text-gray-500 text-center mb-2">
                {produto.descricao}
              </p>

              <p className="text-lg text-center font-semibold text-gray-800 mb-1">
                {produto.preco} <span className="text-sm text-center text-gray-400">no PIX</span>
              </p>

              <p className="text-sm text-center text-gray-400 line-through mb-2">
                {produto.precoAnterior}
              </p>
              
              <p className="text-sm text-gray-800 mb-4 text-center">
                ou até 2x de <b>R$ {produto.precoParcelado}</b> SEM JUROS
              </p>
            </Link>
            <div className="w-full border-t border-gray-200 pt-3 mt-4">
              <div className="flex items-center justify-between w-full border border-gray-200 rounded-lg p-2">
                <button 
                  className="flex items-center justify-center p-2"
                  aria-label="Diminuir quantidade"
                >
                  <FaMinus size={18} className="text-blue-900" />
                </button>
                
                <button 
                  className="flex items-center justify-center px-4 border-x border-gray-400"
                  aria-label="Ver carrinho"
                >
                  <FaShoppingCart size={18} className="text-blue-900" />
                </button>
                
                <button 
                  className="flex items-center justify-center p-2"
                  aria-label="Aumentar quantidade"
                >
                  <FaPlus size={18} className="text-blue-900" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
