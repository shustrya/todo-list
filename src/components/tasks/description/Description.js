import descriptionStyle from './description.module.css';

export default function description({description}) {
  return (
          <tr>
            <td></td>
            <td className={descriptionStyle.row} colSpan="4">{description}</td>
            <td></td>
        </tr>
  );
}
