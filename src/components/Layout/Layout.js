import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDeawer from '../Navigation/SideDeawer/SideDeawer';

const Layout = props => (
  <Aux>
    <Toolbar />
    <SideDeawer />
    <main className={classes.App}>{props.children}</main>
  </Aux>
);

export default Layout;
