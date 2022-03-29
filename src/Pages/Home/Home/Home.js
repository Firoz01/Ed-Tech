
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Banner from '../Banner/Banner';
import Product from '../Products/Product/Product';
import Reviews from '../Reviews/Reviews';

const Home = () => {
   
  const { products } = useAuth();
    
    return (
      <div>
        <Banner></Banner>
        <h2 className="my-5">Our New Online Courses</h2>
        <Container className="mt-5">
          <Row className="gy-4">
            {products.slice(0, 6).map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </Row>
        </Container>
        <Reviews></Reviews>
      </div>
    );
};

export default Home;