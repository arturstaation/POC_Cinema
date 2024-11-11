export const metadata = {
  title: 'Cinema',
  description: 'POC que Representa a reserva de ingressos em um cinema com API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="darkMode">{children}</body>
    </html>
  )
}
