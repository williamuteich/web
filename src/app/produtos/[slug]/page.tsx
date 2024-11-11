import { FaCreditCard } from 'react-icons/fa'; // Ícones de cartão de crédito
import { AiOutlineShopping } from 'react-icons/ai'; // Ícone da sacola de compras
import Image from 'next/image'; // Para imagens otimizadas no Next.js

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
  // Adicione mais produtos conforme necessário
];

export default function ShowProduct() {
  // Pegando o primeiro produto da lista para efeito de layout
  const produto = produtos[0];

  return (
    <div className="p-6 max-w-[1400px] mx-auto pt-48">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Coluna da esquerda: Imagens menores à esquerda e a imagem principal à direita */}
        <div className="flex gap-4 justify-start items-start">
          {/* Imagens pequenas */}
          <div className="flex flex-col gap-2">
            <img
              src={produto.imagem}
              alt={`Imagem de ${produto.titulo}`}
              className="w-24 h-24 object-cover rounded-md border border-gray-200 shadow-sm cursor-pointer"
            />
            <img
              src={produto.imagem}
              alt={`Imagem 2 de ${produto.titulo}`}
              className="w-24 h-24 object-cover rounded-md border border-gray-200 shadow-sm cursor-pointer"
            />
            <img
              src={produto.imagem}
              alt={`Imagem 3 de ${produto.titulo}`}
              className="w-24 h-24 object-cover rounded-md border border-gray-200 shadow-sm cursor-pointer"
            />
          </div>

          {/* Imagem principal do produto */}
          <div className="flex justify-center w-full">
            <img
              src={produto.imagem}
              alt={produto.titulo}
              className="w-full h-auto max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Coluna da direita: Título e dados do produto */}
        <div>
          {/* Título do produto */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 pb-6 border-slate-300">{produto.titulo}</h1>

          {/* Preço e Descrição */}
          <div className="mb-4">
            <p className="text-5xl font-bold text-gray-800 tracking-tight">{produto.preco} <span className='text-lg text-slate-500'>no Pix</span></p>
            <p className="text-lg text-gray-500 mt-2 mb-4">{produto.descricao}</p>
            <div className='flex gap-2 items-center'>
              <p className="text-xl text-gray-400 line-through">{produto.precoAnterior}</p>
              <span className='text-gray-800 text-xl font-semibold'>R$100</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              ou até <b>2x</b> de <b>R$ {produto.precoParcelado}</b> SEM JUROS
            </p>
          </div>

          {/* Cartão de crédito */}
          <div className="flex flex-col w-1/2 justify-center border-t p-4 shadow-md rounded-sm">
            <h2 className="text-lg font-semibold text-gray-800">Forma de Pagamento</h2>
            
            {/* Cartão de Crédito */}
            <div className="flex gap-4 mt-4">
              <FaCreditCard size={30} className="text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Cartão de Crédito</p>
                <p className="text-sm text-gray-500">1x de R$ 99,00 sem juros</p>
                <p className="text-sm text-gray-500">2x de R$ 49,50 sem juros</p>
                <p className="text-sm text-gray-500">3x de R$ 33,00 sem juros</p>
              </div>
            </div>
          </div>

          {/* Pix */}
          <div className="flex flex-col mt-6">
            <h2 className="text-lg font-semibold text-gray-800">Pagar com Pix</h2>
            <div className="flex items-center gap-2 mt-4">
              <Image src="/pix-icon.svg" alt="Pix" width={30} height={30} className="object-cover" />
              <p className="text-2xl font-semibold text-gray-800">R$ 96,03</p>
            </div>
          </div>

          {/* Adicionar ao Carrinho */}
          <div className="flex items-center gap-4 mt-8">
            <button
              className="flex items-center px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300"
              aria-label="Adicionar ao carrinho"
            >
              <AiOutlineShopping size={20} className="mr-2" />
              Adicionar à Sacola
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
