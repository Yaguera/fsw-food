import Image from "next/image";
import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import Search from "./_components/search";

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <div className="px-3 pt-4">
        <CategoryList />
      </div>
      <div className="pt-6">
        <Image
          src="/promo-banner-01.png"
          alt="Até 30% de desconto em pizza"
          width={0}
          height={0}
          sizes="100vh"
          quality={100}
          className="h-auto w-full object-contain"
        />
      </div>
    </>
  );
};

export default Home;
