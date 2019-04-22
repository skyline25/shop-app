import React from 'react'
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'

import Home from './components/Home'
import { 
  CartContainer, 
  CatalogContainer,
  ModalContainer, 
  ProductContainer 
} from './containers'
import Page404 from './components/Page404'
import './styles/common/common.scss'

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/catalog" component={CatalogContainer}></Route>
            <Route path="/catalog/:productId" component={ProductContainer}></Route>
            <Route path="/cart" component={CartContainer}></Route>
            <Route component={Page404}></Route>
            
            {/* TODO: Перенести фильтр из состояния в роутер */}
            {/* <Route exact path="/catalog" component={()=>(
              <Switch>
                <Route path="/catalog" component={CatalogContainer}></Route>
                <Route path="/catalog/sort/:sort" component={CatalogContainer}></Route>
              </Switch>
            )} /> */}
          </Switch>
          <ModalContainer/>
        </div>
      </HashRouter>
    </Provider>
  )    
}

// class App extends Component {
//   constructor(props) {
//     super(props)

    // this.state = {
      // products: productsBase,
      // products: [],
      // productPage: {},
      // displayedProducts: productsBase
    // }

    // this.handleCatalogSearch = this.handleCatalogSearch.bind(this)
    // this.handleBuyButtonClick = this.handleBuyButtonClick.bind(this)
    // this.handleProductClick = this.handleProductClick.bind(this)
    // this.handleRemoveFromCartClick = this.handleRemoveFromCartClick.bind(this)
  // }

  // handleCatalogSearch(event) {
  //   let searchQuery = event.target.value.toLowerCase();
  //   let displayedProducts = this.state.products.filter(function(element) {
  //       let searchValue = element.title.toLowerCase() + element.description.toLowerCase()
  //       return searchValue.indexOf(searchQuery) !== -1
  //   })

  //   this.setState({
  //       displayedProducts: displayedProducts
  //   })
  // }

  // handleBuyButtonClick(event,productId) {
  //   event.stopPropagation()

  //   let products = this.state.products

  //   products.find(product => product.id === productId).inCart = true

  //   this.setState({ products: products })
  // }

  // handleProductClick(history,productId) {
  //   let products = this.state.products

  //   this.setState({
  //     productPage: products.find(product => product.id === productId)
  //   })
  
  //   history.push(`/catalog/${productId}`)
  // }

  // handleRemoveFromCartClick(productId) {
  //   let products = this.state.products

  //   products.find(product => product.id === productId).inCart = false

  //   this.setState({
  //     products: products
  //   })      
  // }

  // componentDidMount() {
  //   let products = JSON.parse(localStorage.getItem('products'))
    
  //   if (products) {
  //     this.setState({ products: products, displayedProducts: products })
  //   } else {
  //     this.setState({ products: productsBase, displayedProducts: productsBase })
  //   }
  // }

  // componentDidUpdate() {
  //     this._updateLocalStorage()
  // }

  // _updateLocalStorage() {
  //   let products = JSON.stringify(this.state.products)
  //   localStorage.setItem('products', products)
  // }

  // render() {
    // const catalogProps = {
      // productList: this.state.displayedProducts,
      // onSearch: this.handleCatalogSearch,
      // onBuyButtonClick: this.handleBuyButtonClick,
      // onProductClick: this.handleProductClick
    // }

    // const cartProps = {
      // products: this.state.products.filter(product=>product.inCart===true),
      // onRemoveClick: this.handleRemoveFromCartClick
    // }

    // const productProps = {
      // product: this.state.productPage,
      // onBuyButtonClick: this.handleBuyButtonClick
    // }

//     return (
//       <Provider store={store}>
//         <HashRouter>
//           <div className="app">
//             <Switch>
//               <Route exact path='/' component={Home}></Route>
//               {/* <Route 
//                 exact 
//                 path='/catalog' 
//                 render={()=><Catalog {...catalogProps}/>}
//               ></Route>     */}
//               <Route exact path='/catalog' component={CatalogContainer}></Route>
//               <Route path='/catalog/:productId' component={ProductContainer}></Route>
//               {/* <Route 
//                 path='/catalog/:productId' 
//                 render={()=><Product {...productProps}/>}
//               ></Route> */}
//               {/* <Route 
//                 path='/cart'
//                 render={()=><Cart {...cartProps}/>}  
//               ></Route> */}
//               <Route path="/cart" component={CartContainer}></Route>
//               <Route component={Page404}></Route>
//             </Switch>
//           </div>
//         </HashRouter>
//       </Provider>
//     )
//   }
// }

export default App