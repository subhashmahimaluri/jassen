import React, { Component } from 'react';

class Header extends Component {
    clickHandler = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <header className="wrapper header" >
                <div className="insidewrapper">
                    <div className="chainwrapper">
                    </div>
                    <a href="" onClick={this.clickHandler} className="mobilemenubutton" title="Menu" ><span></span><span></span><span></span></a>
                </div>
            </header>
        );
    }
}

export default Header;