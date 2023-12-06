import React from "react"

interface PropsLayout {
    children: React.JSX.Element
}

export default function Layout({ children }: PropsLayout) {
  return (
    <div className="bg-[#d4d1ff] dark:bg-zinc-900 w-full h-[100vh] flex justify-center items-center">
        { children }
    </div>
  )
}
