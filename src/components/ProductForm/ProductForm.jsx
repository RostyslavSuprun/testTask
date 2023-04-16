import { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './ProductForm.module.css';

class ProductForm extends Component {
  // Стейт форми з початковим пустим значенням
  state = {
    id: '',
    name: '',
    quantity: '',
    imgUrl: '',
    width: '',
    height: '',
    weight: '',
  };

  // Метод, що наблюдає за інпутами і що записує в state їх значення
  hanldeChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  // Метод на відправці форми, що формує зі state product і передає до зовнішного методу
  hanldeSubmit = event => {
    event.preventDefault();

    const product = {
      id: nanoid(),
      name: this.state.name,
      quantity: this.state.quantity,
      imgUrl: this.state.imgUrl,
      width: this.state.width,
      height: this.state.height,
      weight: this.state.weight,
    };

    this.props.onSubmit(product);

    this.resetForm();
  };

  // Очищення поля форми після сабміта
  resetForm = () => {
    this.setState({
      id: '',
      name: '',
      quantity: '',
      imgUrl: '',
      width: '',
      height: '',
      weight: '',
    });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.hanldeSubmit}>
        <h1 className={styles.title}>New Product</h1>
        <label className={styles.label}>
          Product Name
          <input
            type="text"
            name="name"
            className={styles.input}
            value={this.state.name}
            onChange={this.hanldeChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
          />
        </label>
        <label className={styles.label}>
          Quantity
          <input
            type="number"
            name="quantity"
            className={styles.input}
            value={this.state.quantity}
            onChange={this.hanldeChange}
            pattern="/^[0-9]*$/"
            title="Quantity may contain only digits"
            required
          />
        </label>
        <label className={styles.label}>
          Image
          <input
            type="text"
            name="imgUrl"
            className={styles.input}
            value={this.state.imgUrl}
            onChange={this.hanldeChange}
            title="Please add Image Url"
          />
        </label>
        <label className={styles.label}>
          Width
          <input
            type="text"
            name="width"
            className={styles.input}
            value={this.state.width}
            onChange={this.hanldeChange}
          />
        </label>
        <label className={styles.label}>
          Height
          <input
            type="text"
            name="height"
            className={styles.input}
            value={this.state.height}
            onChange={this.hanldeChange}
          />
        </label>
        <label className={styles.label}>
          Weight
          <input
            type="text"
            name="weight"
            className={styles.input}
            value={this.state.weight}
            onChange={this.hanldeChange}
          />
        </label>
        <div className={styles.button__wrapper}>
          <button type="submit" className={styles.button}>
            Add Product
          </button>
        </div>
      </form>
    );
  }
}

export default ProductForm;
