import React, {Component} from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';

export class Credit extends Component {
    render(){
        return(
            <div>
                <Nav></Nav>
                <div id="main"></div>
                <Footer></Footer>
            </div>
        );
    }
};

export default Credit;
