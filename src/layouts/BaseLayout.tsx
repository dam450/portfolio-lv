import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="">
        <Header />
        <main className="flex-1 min-h-svh max-w-5xl mx-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
};
