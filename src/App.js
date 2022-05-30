import './App.css';
import Header from './bitis/header';
import Carousel from './bitis/carousel';
import Banner from './bitis/banner';
import BitisShop from './bitis/BitisShop';
import Footer from './bitis/footer';
import data from "./bitis/data.json"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Carousel></Carousel>
      <Banner></Banner>
      <BitisShop products={data}></BitisShop>
      <Footer></Footer>
    </div>
  );
}

export default App;
