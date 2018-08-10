import React , { Component } from 'react';
import './style.css';
import Cart from '../Cart';
class ShopList extends Component {
 state ={
    item: []
  }
//   onAdd = (product) =>{
//     let arr = [];
//     arr.push(product.name)
// this.setState({
// item: [...this.state.item, arr]
// })}
  onAdd = (product) => {
    const items =[...this.state.item];
    items.push(product.name);
    this.setState({
      item: items
    })
  }
  onDelete = (index) => {
    const items = [...this.state.item];
    if(items.lastIndexOf(index)){
      items.splice(index, 1)
    }

    this.setState({
      item: items
    })
  }
  render(){
  return(
    <div>
      <h1>Shop:</h1>
    {
      this.props.products.map( (product, index) =>
        (
          <div  className='wrapper x'>
        <h3>{product.name}</h3>
          <img
            height={100}
            title={product.name}
            src={`/products/${product.image}`} alt='img'
            />
            <p>${product.price}</p>
            <button onClick={ () => this.onAdd(product) }>Add</button>
            </div>
          ))}
          <Cart item={this.state.item} className='cart' delItem={this.onDelete} />
      </div>
)}}
export default ShopList;
