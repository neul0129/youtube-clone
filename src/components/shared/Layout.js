import styles from './Layout.module.css';
import Header from './Header';
import Menu from './Menu';
import { useState } from 'react';

function Layout({ children, activeMenu }) {
	const [menu,setMenu] = useState(true);
  return (
    <div className={styles.container}>
      <Header menu={menu} setMenu={setMenu} />
      <div className={styles.layout}>
        <Menu activeMenu={activeMenu} menu={menu}/>
        <div className={styles.contents}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;