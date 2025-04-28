import bannerImage from './image.jpg';
import bannerStyle from './banner.module.css';

export default function Banner() {
  return (
    <figure className={bannerStyle.container}>
      <img className={bannerStyle.image} src={bannerImage} alt="Img"/>
      <figcaption className={bannerStyle.caption}>Аннотация</figcaption>
    </figure>
  );
}
