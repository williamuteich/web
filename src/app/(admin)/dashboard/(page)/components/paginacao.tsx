import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from "@/components/ui/pagination";

export default function Paginacao({ currentPage, totalPages, handleNextPage, handlePreviousPage, setCurrentPage }: any) {
    return (
        <Pagination className="mt-10">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href="#"
                        onClick={handlePreviousPage}
                    />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, index) => (
                    <PaginationItem key={index}>
                        <PaginationLink
                            href="#"
                            onClick={() => setCurrentPage(index + 1)}
                            isActive={currentPage === index + 1}
                        >
                            {index + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationNext
                        href="#"
                        onClick={handleNextPage}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}