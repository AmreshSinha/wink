export default function Link({ mouseOverEvent, mouseOutEvent, src }) {
    return (
      <img onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} src={src} />
    );
};