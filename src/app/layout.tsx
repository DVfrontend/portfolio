import "./globals.scss";
import Layout from "@/components/layout/Layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>
          <main className="mt-5 text-black">{children}</main>
        </Layout>
      </body>
    </html>
  );
}
