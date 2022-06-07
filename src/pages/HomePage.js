import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

function HomePage() {
  return (
    <div>
      <Header />
      {/* <Outlet /> */}
      <div className="main">
        <Banner />
        <ProductList />
      </div>
    </div>
  );
}

export default HomePage;
