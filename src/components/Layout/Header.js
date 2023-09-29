import React, {Fragment} from 'react';
import mealsImg from '../../assets/meals7.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return <Fragment>
    <header className={classes.header}>
        <h1>Restro Food</h1>
        {/* <button>Cart</button> */}
        <HeaderCartButton onClick={props.onShowCart} />
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImg} alt='A table full of delicious food!' />
    </div>
  </Fragment>
};

export default Header;