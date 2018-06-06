import React from 'react';
import ReactDOM from 'react-dom';

const product = {
    title: "Komputer",
    description: "Super komputer czarny",
    url: "/img/product.png",
    price: "20zł"
}

class ShopItemHeader extends React.Component {
    render() {
        return   <div>
            <h1>{this.props.title}</h1>
            <img src={this.props.url}/>
        </div>
    }
}

class ShopItemDescription extends React.Component {
    render() {
        return  <article>
            <p>{this.props.description}</p>
        </article>
    }
}

class ShopItemPricing extends React.Component {
    render() {
        return     <div>
            Cena: {this.props.price}
            <button>Kup!</button>
        </div>
    }
}

class ShopItem extends React.Component {
    render() {

        return  <div>
            <ShopItemHeader title={this.props.itemFromBasket.title}
                            url={this.props.itemFromBasket.url} />
            <ShopItemDescription description={this.props.itemFromBasket.description} />
            <ShopItemPricing price={this.props.itemFromBasket.price}/>
        </div>
    }
}

class App extends React.Component {
    render() {
        console.log(this.props)
        return  <ShopItem itemFromBasket={this.props.item}/>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App item={product}/>,
        document.getElementById('app')
    );
});