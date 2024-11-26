import CardProdutos from "../components/cardProdutos";

export default function Destaques() {
    return (
        <div className="mt-16 flex flex-col justify-center items-center">
            <div className="flex flex-col items-center gap-2 mb-4">
                <h1 className="text-3xl text-slate-700 font-semibold ">Produtos em Destaques</h1>
                <span className="bg-blue-800 p-[1.5px] w-[50px]"></span>
            </div>
            <section>
                <CardProdutos />
            </section>
        </div>
    )
}