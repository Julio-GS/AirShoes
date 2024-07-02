// pages/index.js
import "@/app/globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { getSheetData } from "@/lib/googleSheets";

export async function getStaticProps() {
  const products = await getSheetData();
  console.log(products);
  return {
    props: { products },
    revalidate: 60,
  };
}

const HomePage = ({ products }) => {
  console.log(products);

  const featuredProducts = products.slice(0, 4);
  return (
    <div className="flex flex-col min-h-[100dvh] w-screen">
      <Header />
      <Main products={products} />
      <Footer />
      {/* <h1>Productos</h1>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <h2>Productos Destacados</h2>
      <div>
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
              
      </div> */}
    </div>
  );
};

export default HomePage;