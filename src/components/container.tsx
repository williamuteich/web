import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode}) {
    return(
        <div className="max-w-7xl mx-auto px-2 w-full sm:px-6 lg:px-8">
            { children }
        </div>
    )
}