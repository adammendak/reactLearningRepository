import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class ShopItem extends React.Component {
        handleClick = () => {
            this.props.onBuy(this.props.title)
        }
        render(){
            return <div>
                <h1>{this.props.title}</h1>
                <button onClick={this.handleClick}>Kup</button>

            </div>
        }
    }
    class Shop extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                list: []
            }
        }
        addProduct = (product) => { //let product = "skarpetki"
            const tempArr = [...this.state.list];
            tempArr.push(product);
            this.setState({
                list: tempArr
            });
        }

        removeProduct = (i)=>{
            const tempArr = [...this.state.list];
            tempArr.splice(i ,1);
            // chodzi o pozycje 0 i ilosc 1
            this.setState({
                list: tempArr
            });
        }

        render(){
            const items = this.state.list.map( (elem,i) => {
                return <div>
                    <li>{elem}</li>
                    <button onClick={elem=>this.removeProduct(i)}>usun</button>
                </div>
            })
            return <div>
                <ShopItem title="skarpetki" onBuy={this.addProduct}/>
                <ShopItem title="koszula" onBuy={this.addProduct}/>
                <ShopItem title="pończochy" onBuy={this.addProduct}/>
                <ShopItem title="majtki" onBuy={this.addProduct}/>
                <ul>
                    {items}

                </ul>
            </div>
        }
    }

    ReactDOM.render(
        <Shop />,
        document.getElementById('app')
    );
});