import { Container } from "@/components/container";
import Destaques from "./destaques";
import Novidades from "./novidades";
import { Categorias } from "./categorias";
import CatalogoPromo from "./catalogo";

export default function Produtos() {
    return(
        <Container>
            <Categorias />
            <Destaques />
            <Novidades />
            <CatalogoPromo />
        </Container>
    )
}