import Header from '../components/Header';
import Carousel from '../components/Carousel';
import ListProducts from '../components/ListProducts';
import BarFilter from '../components/BarFilter';

function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <BarFilter />
      <ListProducts />
    </>
  );
}

export default Home;
