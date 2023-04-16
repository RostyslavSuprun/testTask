import ProductListItem from './ProductListItem/ProductListItem';
import styles from './ProductList.module.css';

// Приймає всі наявні продукти в єдиний ul і підключає метод для можливості видалення продукту
const ProductList = ({ products, onDeleteProduct }) => {
  return (
    <ul className={styles.list}>
      {products.map(product => (
        <ProductListItem
          product={product}
          onDeleteProduct={onDeleteProduct}
          key={product.id}
        />
      ))}
    </ul>
  );
};

export default ProductList;
