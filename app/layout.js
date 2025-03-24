// app/layout.js
import './globals.css'; // Import global styles

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Techrity</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
