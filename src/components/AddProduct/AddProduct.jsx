import { useState } from 'react';
export default function AddProduct() {
  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current);
  };
  return (
    <button className={styles.button} type="button" onClick={handleClick}>
      Create New Product
    </button>
  );
}
