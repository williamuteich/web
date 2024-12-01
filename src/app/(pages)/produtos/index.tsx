
import { Container } from "@/components/container";
import Destaques from "@/components/home/produtos/destaques";
import { Promocao } from "@/components/home/produtos/promocao/promocao";

export default function Produtos() {
    return (
        <>
            <Promocao />
            <Container>
                {/*  <Categorias /> */} 
                <Destaques />
            </Container>
        </>
    )
}