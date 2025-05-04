import styleMenu from './menu.module.css';

export default function Menu() {
  return  (
    <nav>
      <ul className={styleMenu.menu}>
        <li>
          home
        </li>
        <li>
          about
        </li>
      </ul>
    </nav>
  );
}