import descriptionStyle from './description.module.css';

export default function description({description}) {
  return (
    <div className={descriptionStyle.container}>
      {description}
    </div>
  );
}