import React, { Component } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import "./navbar.scss"

class Navbar extends Component {

    links = [
        { link: "/", name: "Home" },
        { link: "/things", name: "Things" },
        { link: "/stuff", name: "Stuff" },
        { link: "/aboot", name: "Aboot" }
    ];

    constructor(props) {
        super(props);

        this.node = React.createRef();

        this.state = {
            expanded: !this.isMobile()
        }
    }

    componentDidMount = () => {
        window.addEventListener("resize", this.resizeHandler);
        window.addEventListener("click", this.clickHandler);
    }

    componentWillUnmount = () => {
        window.removeEventListener("resize", this.resizeHandler);
        window.removeEventListener("click", this.clickHandler);
    }

    isMobile = () => {
        return window.innerWidth <= 600;
    }

    /**
     * Collapses and expands navbar items depending on screen size.
     */
    resizeHandler = () => {
        let value;
        if (this.isMobile() && this.state.expanded) {
            value = false;
        } else if (!this.isMobile() && !this.state.expanded) {
            value = true;
        }

        if (value !== undefined) {
            this.setState({
                expanded: value
            })
        }
    }

    /**
     * Handling cases where we click out of the navbar when it is expanded.
     */
    clickHandler = (e) => {
        const node = ReactDOM.findDOMNode(this.node);
        if (node && node.contains(e.target)) {
            this.toggleExpansion();
        } else if(this.state.expanded && !node.contains(e.target)) {
            this.toggleExpansion();
        }

    }

    toggleExpansion = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    getOptionsAll = () => {
        return this.links.map((link, index) => {
            return (
                <NavLink key={index} className="navbar-item" to={link.link}>
                    <p>{link.name}</p>
                </NavLink>
            )
        })
    }

    getOptions = () => {
        if (!this.isMobile() || this.state.expanded) {
            return this.getOptionsAll();
        } else {
            return (
                <li className="navbar-item">
                    <p>Menu</p>
                </li>
            );
        }
    }

    render() {
        return (
            <ul ref={(node) => (this.node = node)}className="navbar">
                {this.getOptions()}
            </ul>
        );
    }
}

export default Navbar;