import React from 'react';
import ReactDOM from 'react-dom';
import shopping from './zadanie02';


class ReceiptItem extends React.Component{
    render(){
        return <tr>
            <td>{this.props.name}</td>
            <td>{this.props.price}</td>
            <td>{this.props.count}</td>
            <td>{(Number(this.props.price) * Number(this.props.count)).toFixed(2)}</td>
        </tr>
    }
}

class ReceiptItems extends React.Component{
    render(){
        const row = this.props.items.map(el => {
            return <ReceiptItem name={el.name}
                                price={el.price}
                                count={el.count}/>
        });

        return <tbody>
                    {row}
                </tbody>
    }
}

class ReceiptHeader extends React.Component{
    render(){
        return <thead>
        <tr>
            <td>Nazwa</td>
            <td>Cena / 1</td>
            <td>Ilość</td>
            <td>Łączna Cena</td>
        </tr>
        </thead>
    }
}

class ReceiptFooter extends React.Component{
    render(){
        return <tfoot>
                    <tr>
                        <td>RAZEM</td>
                        <td> - </td>
                        <td> - </td>
                        <td> {this.props.price} </td>
                    </tr>
                </tfoot>
    }
}

class Receipt extends React.Component{
    render(){

        const prices = this.props.items.map(el=> el.price * el.count).reduce((a,b)=> a+b);
        return <div>
                <table>
                    <ReceiptHeader/>
                    <ReceiptItems items={this.props.items}/>
                    <ReceiptFooter price={prices}/>
                </table>
            </div>
    }
}


class App extends React.Component{
    render(){
        return <Receipt items={shopping}/>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});