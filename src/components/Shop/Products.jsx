import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY = [
  { id: 'p1', price: 6, title: 'my first book', des: 'i have written' },
  { id: 'p2', price: 7, title: 'my second book', des: 'i have written' },
  { id: 'p3', price: 8, title: 'my third book', des: 'i have written' },
  { id: 'p4', price: 9, title: 'my fourth book', des: 'i have written' }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.des}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
