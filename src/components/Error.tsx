import { ReactNode } from "react";


export default function Error({children}: {children: ReactNode}) {
  return (
    <p className="p-2 mt-1 mb-4 text-sm font-bold text-center text-red-500 uppercase bg-red-100 rounded-sm">{children}</p>
  )
}
