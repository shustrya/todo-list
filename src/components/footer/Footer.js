import Menu from '../menu/Menu';
import styleFooter from './footer.module.css';

export default function Footer() {
  return  (
    <footer>
      <div className={styleFooter.menu}>
        <Menu/>
      </div>
      <div className={styleFooter.copyright}>
        &copy; 2025
      </div>
    </footer>
  );
}
