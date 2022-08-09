import Header from "./Header/Header";
import Footer from "./Footer";

function Layout(props: { children: React.ReactNode }) {
  return (
    <div>
      <Header />

      <main className="mt-[54px] overflow-hidden">{props.children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
