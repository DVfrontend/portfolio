import "./globals.scss";
import Layout from "@/components/layout/layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <Layout>
          <main className="mt-7 text-black">{children}</main>
        </Layout>
      </body>
    </html>
  );
}
