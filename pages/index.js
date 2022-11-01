import { BestSeller, Category, Footer, Header, Hero, HeroBtm, Layout, NewProducts, Popup, Product, Reviews, TrendingProducts } from "../components";

export default function Home() {
  return (
    <Layout title={"Kita Nyaman"}>
      <Popup/>
      <Header/>
      <Hero/>
      <NewProducts/>
      <Category/>
      <BestSeller/>
      <HeroBtm/>
      <TrendingProducts/>
      <Reviews/>
      <Footer/>
    </Layout>
  )
}
