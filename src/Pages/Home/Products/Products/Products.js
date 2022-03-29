
import { Container, Row } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import Product from "../Product/Product";
import "./Products.css";
const Products = () => {

  const { products } = useAuth();

  console.log(products);

  return (
    <Container className="mt-5">
      <Row className="gy-4">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
