import { FaCreditCard } from 'react-icons/fa'; // Ícones de cartão de crédito
import { AiOutlineShopping } from 'react-icons/ai'; // Ícone da sacola de compras
import { SiVisa, SiMastercard, SiAmericanexpress } from "react-icons/si"; // Visa, MasterCard, American Express
import Image from 'next/image';

const produtos = [
  {
    id: 1,
    titulo: "Sunga Slip Canelada Ferrugem Olivia",
    imagem: "/produto.jpg",
    descricao: "Com 3% de desconto",
    preco: "R$ 76,63",
    precoAnterior: "R$ 149,00",
    precoParcelado: "R$ 39,50",
    descricaoDetalhada: "Sunga slip canelada da marca Olivia, feita em tecido de alta qualidade. Ideal para quem busca conforto e estilo. Produto com ótimo caimento e resistência.",
    caracteristicas: [
      { nome: "Material", valor: "Poliéster e Elastano" },
      { nome: "Cor", valor: "Ferrugem" },
      { nome: "Tamanho", valor: "P, M, G" },
      { nome: "Modelo", valor: "Sunga Slip" },
      { nome: "Marca", valor: "Olivia" },
    ]
  },
  // Adicione mais produtos conforme necessário
];

export default function ShowProduct() {
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
          <h1 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 pb-2 border-slate-300">{produto.titulo}</h1>

          {/* Preço e Descrição */}
          <div className="mb-4">
            <p className="text-5xl font-bold text-gray-800 tracking-tight">{produto.preco} <span className='text-lg text-slate-500'>no Pix</span></p>
            <p className="text-lg text-gray-600 font-medium mb-4">{produto.descricao}</p>
            <div className='flex gap-2 items-center'>
              <p className="text-xl text-gray-400 line-through">{produto.precoAnterior}</p>
              <span className='text-gray-800 text-xl font-semibold'>R$100</span>
            </div>
            <p className="text-sm text-gray-600">
              ou até <b>2x</b> de <b>R$ {produto.precoParcelado}</b> SEM JUROS
            </p>
          </div>

          {/* Formas de pagamento */}
          <div className="flex flex-col w-full justify-center border-t p-4 shadow-md rounded-xl">
            <h4 className='font-semibold pb-2'>Formas de pagamento</h4>
            <div className="flex gap-4 mt-2 pb-4 border-b-2 border-slate-300">
              <FaCreditCard size={30} className="text-blue-600" />
              <div>
                <p className="text-sm text-gray-900 font-bold mb-2">Cartão de Crédito</p>
                <p className="text-sm text-gray-500"><span className='text-black font-bold'>1x</span> de R$ 99,00 sem juros</p>
                <p className="text-sm text-gray-500"><span className='text-black font-bold'>2x</span> de R$ 49,50 sem juros</p>
                <p className="text-sm text-gray-500"><span className='text-black font-bold'>3x</span> de R$ 33,00 sem juros</p>
              </div>
            </div>

            <div className='flex justify-between items-center mt-4'>
              <div className='flex gap-1 items-center'>
                <Image 
                  src="/pix.png" 
                  alt="Método de pagamento"
                  width={30}
                  height={30}
                />
                <span className='font-bold text-slate-700'>
                  PIX
                </span>
              </div>
              <span className='font-bold text-base'>
                R$ 76,63
              </span>
            </div>
          </div>

          {/* Campo para Cálculo de Frete */}
          <div className="flex flex-col w-full justify-center mt-6 mb-6">
            <p className="text-lg font-semibold text-gray-800 mb-2">Digite seu CEP para calcular o frete:</p>
            <input
              type="text"
              placeholder="CEP (ex: 12345-678)"
              className="p-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Adicionar ao Carrinho */}
          <div className="flex items-center gap-4 mt-8">
            <button
              className="flex items-center px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300"
              aria-label="Adicionar ao carrinho"
            >
              <AiOutlineShopping size={20} className="mr-2 text-white" />
              Adicionar à Sacola
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        {/* Botões de Alternância */}
        <div className="flex items-center justify-start gap-4 mb-0">
          <button
            className="px-6 py-3 text-3xl font-semibold text-gray-700 border-b-4 border-transparent hover:border-blue-600 transition-all duration-300 focus:outline-none focus:border-blue-600 active:text-blue-600"
          >
            Detalhes
          </button>
          <button
            className="px-6 py-3 text-3xl font-semibold text-gray-700 border-b-4 border-transparent hover:border-blue-600 transition-all duration-300 focus:outline-none focus:border-blue-600 active:text-blue-600"
          >
            Especificações
          </button>
        </div>

        {/* Conteúdo: Detalhes */}
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h4 className="text-3xl font-bold text-gray-800 mb-6">Descrição do Produto</h4>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">{produto.descricaoDetalhada}</p>
        </div>

        {/* Conteúdo: Especificações - Oculto por enquanto */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200 hidden">
          <h5 className="text-2xl font-semibold text-gray-800 mb-4">Características</h5>
          <ul className="space-y-4">
            {produto.caracteristicas.map((item, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <strong className="font-semibold">{item.nome}:</strong> {item.valor}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
