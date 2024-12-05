import * as React from "react"
import Link from 'next/link';
import { FaShoppingBag, FaStar } from 'react-icons/fa';

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
    <div className="p-6 w-[370px] sm:w-full ">
      <div className=" hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
        {produtos.map((produto) => (
          <div key={produto.id} className="bg-white border border-gray-200 rounded-xl shadow-md p-2 flex flex-col justify-between items-center">
            {/* Link agora envolve todo o produto */}
            <Link href={`/produtos/${produto.titulo}`} className="group w-full hover:scale-[1.02] transition-all">
              {/* Imagem do produto */}
              <img
                src={produto.imagem}
                alt={produto.titulo}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              {/* Nome do produto */}
              <div className="product-name text-center text-xl font-semibold text-blue-600 mb-3 group-hover:text-blue-700 transition-colors">
                {produto.titulo}
              </div>

              {/* Avaliação de estrelas */}
              <div className="list-star flex justify-center mb-3 mt-4">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500 w-4 h-4 mr-1" />
                ))}
              </div>

              {/* Preço com desconto e preço anterior */}
              <div className="box-price w-full mb-3">
                <div className="price text-center">
                  <div className="product-price">
                    <div className="price-before">
                      <span className="line-price text-sm text-gray-400 line-through">De: {produto.precoAnterior}</span>
                    </div>
                    <div className="price-off">
                      <span className="por text-base text-blue-500 font-semibold">Por</span>
                      <span className="text-xl font-bold text-blue-500"> {produto.preco}</span>
                    </div>
                  </div>
                </div>

                {/* Parcelamento */}
                <div className="product-payment text-center mt-2">
                  <span className="txt-corparcelas text-sm">
                    ou até
                    <strong className="color text-sm text-blue-500"> 2x</strong>
                    <span className="preco-de"> de </span>
                    <strong className="preco-parc2 text-sm text-blue-500">R$ {produto.precoParcelado}</strong>
                    <span className="operadora text-sm"> Sem juros</span>
                  </span>
                </div>
              </div>
            </Link>

            {/* Botão de compra  */}
            <Link href={`/produtos/${produto.titulo}`} className="w-full bg-gradient-to-r from-green-400 to-green-500 rounded-sm hover:from-green-500 hover:to-green-700 transition-all duration-300">
              <div className="w-full flex items-center justify-center p-1">
                <button className="flex items-center justify-center w-full h-full bg-transparent text-white font-semibold py-2 rounded-sm transition-colors duration-300">
                  <FaShoppingBag className="mr-2" />
                  Comprar
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>



      <Carousel className="w-full p-4 sm:p-4 sm:hidden max-w-sm">
  <CarouselContent>
    {produtos.map((produto) => (
      <CarouselItem
        key={produto.id}
        className="pl-3 basis-2/3 sm:basis-2/3 lg:basis-1/3 flex"
      >
        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-2 flex flex-col justify-between items-center flex-grow">
          {/* Link agora envolve todo o produto */}
          <Link href={`/produtos/${produto.titulo}`} className="group w-full hover:scale-[1.02] transition-all">
            {/* Imagem do produto */}
            <img
              src={produto.imagem}
              alt={produto.titulo}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            {/* Nome do produto */}
            <div className="product-name text-center text-xl font-semibold text-blue-600 mb-3 group-hover:text-blue-700 transition-colors">
              {produto.titulo}
            </div>

            {/* Avaliação de estrelas */}
            <div className="list-star flex justify-center mb-3 mt-4">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500 w-4 h-4 mr-1" />
              ))}
            </div>

            {/* Preço com desconto e preço anterior */}
            <div className="box-price w-full mb-3">
              <div className="price text-center">
                <div className="product-price">
                  <div className="price-before">
                    <span className="line-price text-sm text-gray-400 line-through">De: {produto.precoAnterior}</span>
                  </div>
                  <div className="price-off">
                    <span className="por text-base text-blue-500 font-semibold">Por</span>
                    <span className="text-xl font-bold text-blue-500"> {produto.preco}</span>
                  </div>
                </div>
              </div>

              {/* Parcelamento */}
              <div className="product-payment text-center mt-2">
                <span className="txt-corparcelas text-sm">
                  ou até
                  <strong className="color text-sm text-blue-500"> 2x</strong>
                  <span className="preco-de"> de </span>
                  <strong className="preco-parc2 text-sm text-blue-500">R$ {produto.precoParcelado}</strong>
                  <span className="operadora text-sm"> Sem juros</span>
                </span>
              </div>
            </div>
          </Link>

          {/* Botão de compra */}
          <Link href={`/produtos/${produto.titulo}`} className="w-full bg-gradient-to-r from-green-400 to-green-500 rounded-sm hover:from-green-500 hover:to-green-700 transition-all duration-300">
            <div className="w-full flex items-center justify-center p-1">
              <button className="flex items-center justify-center w-full h-full bg-transparent text-white font-semibold py-2 rounded-sm transition-colors duration-300">
                <FaShoppingBag className="mr-2" />
                Comprar
              </button>
            </div>
          </Link>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>



    </div>
  );
}