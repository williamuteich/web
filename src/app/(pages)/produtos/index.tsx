
import Destaques from "./destaques";
import { Categorias } from "./categorias";
import { Container } from "@/components/container";

export default function Produtos() {
    return(
        <Container>
            <Categorias />
            <Destaques />
        </Container>
    )
}