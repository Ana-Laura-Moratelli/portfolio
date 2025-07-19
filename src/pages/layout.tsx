import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "../context/ThemeContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ana Laura Moratelli - Frontend Developer",
  description:
    "Portfolio pessoal de Ana Laura Moratelli, Frontend Developer especializada em React, TypeScript e desenvolvimento web moderno.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
