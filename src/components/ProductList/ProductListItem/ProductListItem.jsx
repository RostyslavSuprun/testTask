import styles from './ProductListItem.module.css';

const ProductListItem = ({ product, onEditProduct, onDeleteProduct }) => {
  return (
    <li className={styles.item}>
      <p className={styles.name}>Product name: {product.name} </p>
      <p className={styles.name}>quantity: {product.quantity} </p>
      <a className={styles.url} href={product.imgUrl} target="blank">
        full size picture
      </a>
      <img
        src={product.imgUrl}
        alt="product image"
        className={styles.image}
      ></img>
      <p className={styles.name}>width: {product.width} </p>
      <p className={styles.name}>height: {product.height} </p>
      <p className={styles.name}>weight: {product.weight} </p>
      <button
        className={styles.button}
        type="button"
        // Метод на кліку, приймає ID продукта
        onClick={() => onEditProduct(product.id)}
      >
        Edit
      </button>
      <button
        className={styles.button}
        type="button"
        // Метод на кліку, приймає ID продукта
        onClick={() => onDeleteProduct(product.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ProductListItem;
