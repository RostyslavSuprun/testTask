import { Component } from 'react';
import ProductForm from './ProductForm/ProductForm';
import Filter from './Filter/Filter';
import ProductList from './ProductList/ProductList';
import styles from 'App.module.css';

class App extends Component {
  state = {
    products: [],
    filter: '',
  };

  // Перевірка наявності збережених продуктів в локалсториджі
  componentDidMount() {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      this.setState({ products: JSON.parse(savedProducts) });
    }
  }
  // зміна збережених product після апдейту стейту
  componentDidUpdate() {
    const { products } = this.state;
    localStorage.setItem('products', JSON.stringify(products));
  }

  // Метод, що додає product
  addProduct = newProduct => {
    // Перевірка на дублювання
    const duplicateName = this.state.products.find(
      product => product.name === newProduct.name
    );

    if (duplicateName) {
      alert(`${newProduct.name} is already on products`);
      return;
    }

    this.setState(({ products }) => ({
      products: [newProduct, ...products],
    }));
  };

  // Метод, що спостерігає за полем фільтрації і пише в стейт
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  // Метод для фільтрування контактів по введеним у полі пошука і повернення результату фільтру
  filterProducts = () => {
    const { products, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return products.filter(product =>
      product.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // Метод для видалення контакту
  deleteProduct = id => {
    if (
      window.confirm('Are you sure you want to delete this product from list?')
    ) {
      this.setState(prevState => ({
        products: prevState.products.filter(product => product.id !== id),
      }));
    }
  };
  editProduct = id => {};
  render() {
    const { filter } = this.state;
    const filteredResults = this.filterProducts();

    return (
      <>
        {/* <button className={styles.button} type="button">
          Create New Product
        </button> */}
        <ProductForm onSubmit={this.addProduct} />
        <h2 className={styles.title}>ProductList</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ProductList
          products={filteredResults}
          onDeleteProduct={this.deleteProduct}
          onEditProduct={this.editProduct}
        />
      </>
    );
  }
}

export default App;
