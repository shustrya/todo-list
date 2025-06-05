import { NavLink } from 'react-router-dom';
import styleMenu from './menu.module.css';
import linksStyle from './links.module.css';

const useLinkClassName = (module) => {
  const link = `${module.link}`;
  const active = `${module.link} ${module.active}`;
  const pending = `${module.link} ${module.pending}`;

  return ({isActive, isPending}) => {
      return isActive ? active : isPending ? pending : link;
  }
}

export default function Menu() {
  const appNavLinkClassName = useLinkClassName(linksStyle);

  return(
    <nav>
      <ul className={styleMenu.menu}>
        <li>
        <NavLink
          to={'/'}
          className={appNavLinkClassName}
        >главная</NavLink>
        </li>
        <li>
        <NavLink
          to={'/about'}
          className={appNavLinkClassName}
        >about</NavLink>
        </li>
      </ul>
    </nav>
  );
}
