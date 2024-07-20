import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const ecommerceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <Header />
      <main className="grow flex justify-center items-center">{children}</main>
      <Footer />
    </div>
  );
};

export default ecommerceLayout;
