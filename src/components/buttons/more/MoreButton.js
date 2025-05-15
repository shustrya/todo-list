export default function MoreButton({label,text, onLeftClick}) {
    return (
        <div>
            <span>{label}&nbsp;</span>
            <button onClick={onLeftClick}>{text}</button>
        </div>);
}