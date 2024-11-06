"use client"

import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay';

export function Banner() {
    return (
        <div className="bg-slate-800 pt-[148px] md:pt-[124px]">
            <Carousel
                opts={{
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 3000,
                    })
                ]}
            >
                <CarouselContent>
                    <CarouselItem>
                        <div className="relative opacity-85 w-full h-[500px] md:h-[600px]">  {/* Ajuste a altura conforme necessário */}
                            <Image
                                className='object-cover'
                                src="/banner1.jpg"
                                alt="Banner"
                                fill 
                                quality={100}
                            />
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="relative opacity-85 w-full h-[500px] md:h-[600px]">  {/* Ajuste a altura conforme necessário */}
                            <Image 
                                className='object-cover'
                                src="/banner1.jpg"
                                alt="Banner de Limpeza" 
                                fill
                                quality={100}
                            />
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-6 md:left-20"/>
                <CarouselNext className="right-6 md:right-20"/>
            </Carousel>
        </div>
    );
}
