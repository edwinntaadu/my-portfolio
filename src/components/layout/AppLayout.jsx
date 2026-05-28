import Header from "./Header";
import Footer from "./Footer";

function AppLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default AppLayout;
