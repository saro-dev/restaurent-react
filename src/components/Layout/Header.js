import {Fragment} from 'react';
import Image from '../../Assets/back-customers.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header=props=>{
    return <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={Image} alt='meal' loading='lazy'/>
        </div>
    </Fragment>
}
export default Header;