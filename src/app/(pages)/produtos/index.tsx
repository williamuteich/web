
import Destaques from "./destaques";
import { Categorias } from "./categorias";
import { Container } from "@/components/container";
import { Promocao } from "./promocao/promocao";

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