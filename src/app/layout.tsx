import "./globals.scss";
import Layout from "@/components/layout/layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>
          <main className="mt-13">{children}</main>
        </Layout>
      </body>
    </html>
  );
}
