import { Container } from "@/components/container";
import Catalogo from "./catalogo";
import Destaques from "./destaques";
import Novidades from "./novidades";
import { Categorias } from "./categorias";

export default function Produtos() {
    return(
        <Container>
            <Categorias />
            <Novidades />
            <Destaques />
            <Catalogo />
        </Container>
    )
}