import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaStar } from 'react-icons/fa';
import Link from "next/link";

const produtos = [
    {
        id: 1,
        titulo: "Sunga Slip Canelada Ferrugem Olivia",
        imagem: "/produto2.jpg",
        descricao: "Com 3% de desconto",
        preco: "R$ 76,63",
        precoAnterior: "R$ 79,00",
        precoParcelado: "38,32",
    },
    {
        id: 2,
        titulo: "Tênis Nike Air Max 2021",
        imagem: "/produto2.jpg",
        descricao: "Com 5% de desconto",
        preco: "R$ 599,99",
        precoAnterior: "R$ 630,00",
        precoParcelado: "300,00",
    },
    {
        id: 3,
        titulo: "Relógio Casio Vintage preto e branco e vermelho",
        imagem: "/produto2.jpg",
        descricao: "Com 10% de desconto",
        preco: "R$ 200,00",
        precoAnterior: "R$ 220,00",
        precoParcelado: "100,00",
    },
    {
        id: 4,
        titulo: "Camiseta Adidas Original",
        imagem: "/produto2.jpg",
        descricao: "Com 8% de desconto",
        preco: "R$ 129,90",
        precoAnterior: "R$ 140,00",
        precoParcelado: "65,00",
    },
    {
        id: 5,
        titulo: "Jaqueta North Face Puffer",
        imagem: "/produto2.jpg",
        descricao: "Com 12% de desconto",
        preco: "R$ 399,00",
        precoAnterior: "R$ 450,00",
        precoParcelado: "199,50",
    },
    {
        id: 6,
        titulo: "Fone de Ouvido JBL Xtreme",
        imagem: "/produto2.jpg",
        descricao: "Com 7% de desconto",
        preco: "R$ 350,00",
        precoAnterior: "R$ 375,00",
        precoParcelado: "175,00",
    },
];


export function Promocao() {
    return (
        <div className=" h-[550px] bg-gradient-to-r from-black 15% via-blue-700 to-black [background-size:400%_100%] flex justify-center items-center">
            <Container>
                <div className="flex gap-24 items-center">
                    <div>
                        <div className="flex flex-col gap-6">
                            <h1 className="text-green-400 text-4xl font-bold uppercase">Promoções</h1>
                            <p className="uppercase text-white text-sm">
                                Descontos imperdíveis em diversos produtos + Frete grátis em compras selecionadas!
                            </p>
                            <Button className="uppercase text-white bg-green-400">
                                Aproveite já!
                            </Button>
                        </div>
                    </div>
                    <div className="w-full">
                        <Carousel
                            opts={{
                                align: "start",
                            }}
                            className="w-full"
                        >
                            <CarouselContent>
                                {produtos.map((produto) => (
                                    <CarouselItem key={produto.id} className="md:basis-1/2 lg:basis-1/3">
                                        <div className="p-1">
                                            <Card className="min-h-[370px]">
                                                <CardContent className="flex aspect-square items-center hover:scale-[1.02] transition-all justify-center px-1 py-1">
                                                    <Link href={`/produtos/${produto.titulo}`} >
                                                    <div className="w-full h-full flex flex-col items-center">
                                                        {/* Imagem do Produto */}
                                                        <Image
                                                            src={produto.imagem}
                                                            alt={produto.titulo}
                                                            width={400}
                                                            height={400}
                                                            className="object-cover w-full h-full mb-2 "
                                                        />
                                                        {/* Título do Produto */}
                                                        <div className="text-center leading-5 text-base mb-1">
                                                            {produto.titulo}
                                                        </div>

                                                        <div className="list-star flex justify-center mb-3 mt-1">
                                                            {[...Array(5)].map((_, index) => (
                                                                <FaStar key={index} className="text-yellow-500 w-4 h-4 mr-1" />
                                                            ))}
                                                        </div>

                                                        <div className="product-price">
                                                            {produto.precoAnterior ? (
                                                                <div className="price-before text-center">
                                                                    <span className="line-price text-sm text-gray-600 line-through">
                                                                        De: {produto.precoAnterior}
                                                                    </span>
                                                                </div>
                                                            ) : null}
                                                            <div className="price-off">
                                                                <span className="por text-base text-blue-500 font-semibold">Por</span>
                                                                <span className="text-xl font-bold text-blue-500"> {produto.preco}</span>
                                                            </div>
                                                        </div>

                                                        <div className="product-payment text-center mt-2">
                                                            {produto.precoParcelado ? (
                                                                <span className="txt-corparcelas text-sm">
                                                                    ou até
                                                                    <strong className="color text-sm text-blue-500"> 2x</strong>
                                                                    <span className="preco-de"> de </span>
                                                                    <strong className="preco-parc2 text-sm text-blue-500">R$ {produto.precoParcelado}</strong>
                                                                    <span className="operadora text-sm"> Sem juros</span>
                                                                </span>
                                                            ) : (
                                                                <span className="txt-corparcelas text-sm">
                                                                    Pagamento à vista
                                                                </span>
                                                            )}
                                                        </div>

                                                    </div>
                                                    </Link>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </div>
            </Container>
        </div>
    );
}
