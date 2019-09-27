import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-medkit"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1 style={{color:'#D76B73'}}>Cuidándote Siempre</h1>
                <p>Servicios integrales para el cuidado de enfermería a domicilio en la V Región.
                {/* A fully responsive site template designed by <a href="https://html5up.net">HTML5 UP</a> and released<br />
                for free under the <a href="https://html5up.net/license">Creative Commons</a> license. */}
                </p>
            </div>
        </div>
        <nav>
            <ul>
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li> */}
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Servicios</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Precios</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contáctame</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
