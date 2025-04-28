import Logo from '../logo/Logo';
import Menu from '../menu/Menu';
import styleHeader from './header.module.css';

export default function Header() {
  return  (
    <header className={styleHeader.container}>
      <Logo/>
      <Menu/>
    </header>
  );
}
