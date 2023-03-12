import './globals.css'

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio of Abhrajit Ray',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
