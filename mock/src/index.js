import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    )
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ? product.name :
                  <span style={{color: 'red'}}>
                    {product.name}
                  </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    )
  }
}

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;
    
    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow category={product.category}
          key={product.category}></ProductCategoryRow>
        );
      }
      rows.push(<ProductRow product={product} key={product.name}></ProductRow>);
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
   this.props.onStockChange(e.target.checked);
 }
  render() {
    
     
     

    return (
      <form>
        <input type = "text"
        placeholder = "Search..."
        value = {this.props.filterText} onChange={this.handleFilterTextChange}/>
        
        <p>
          <input type = "checkbox"
          checked={this.props.inStockOnly} onChange = {this.handleInStockChange}/> 
            {' '}Only show products in stock
         
        </p>
      </form>
    )
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
       filterText : '',
       inStockOnly: false
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

    handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }

    handleInStockChange(inStockOnly) {
      this.setState({
        inStockOnly: inStockOnly
      })
    }

  
  render() {
    return (
      <div>
        <SearchBar filterText = {this.state.filterText}
                  inStockOnly = {this.state.inStockOnly}
                  onFilterTextChange = {this.handleFilterTextChange}
                  onStockChange = {this.handleInStockChange}>
        </SearchBar>
        <ProductTable products= {this.props.products}
        filterText = {this.state.filterText}
        inStockOnly = {this.state.inStockOnly}>
        </ProductTable>
      </div>
    );
  }
} 


const PRODUCTS = [
  {category: 'sports', price:'50', stocked: true, name: 'football'},
  {category: 'sports', price:'50', stocked: false, name: 'basketball'},
  {category: 'ele', price:'500', stocked: true, name: 'iphone'},
  {category: 'ele', price:'509', stocked: true, name: 'ipd'},
]

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS}></FilterableProductTable>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
