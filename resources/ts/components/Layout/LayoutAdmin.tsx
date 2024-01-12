import React from "react"

interface PropsLayout {
    children: React.ReactNode
}

export default function LayoutAdmin({ children }: PropsLayout) {
  return (
    <div className="bg-[#d4d1ff] dark:bg-zinc-900">
        { children }
    </div>
  )
}
