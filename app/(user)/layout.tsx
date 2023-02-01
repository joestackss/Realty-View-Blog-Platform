import Banner from "@/components/banner";
import Header from "@/components/header";
import "../../styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="m-auto max-w-7xl">
          <Header />
          <Banner />
          {children}
        </div>
      </body>
    </html>
  );
}
