import React from 'react';
import ReactDOM from 'react-dom';

const basket = [
    {
        title   :   'Mysz komputerowa',
        image   :   'https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg'
    },
    {
        title   :   'Klawiatura',
        image   :   'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png'
    },
    {
        title   :   'Laptop programisty',
        image   :   'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg'
    }
]

class ShopItemHeader extends React.Component {
    render() {
        return   <div>
            <h1>{this.props.title}</h1>
            <img src={this.props.url}/>
        </div>
    }
}


class ShopItem extends React.Component {
    render() {
        console.log("tutaj", this.props)
        return  <div>
            <ShopItemHeader title={this.props.itemFromBasket.title}
                            url={this.props.itemFromBasket.image} />
        </div>
    }
}


class ShopItemList extends React.Component {
    render() {
        console.log(this.props)
        const elements = this.props.items.map( el => {
            return <ShopItem itemFromBasket={el}/>
        })
        return  <div>
            {elements}
        </div>
    }
}


class App extends React.Component {
    render() {
        return  <ShopItemList items={this.props.items}/>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App items={basket}/>,
        document.getElementById('app')
    );
});