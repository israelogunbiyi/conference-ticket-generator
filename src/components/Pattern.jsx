function Pattern({ pattern, top, bottom, lineTop, circle }) {
  return (
    <img
      className={`squiggle ${top || bottom || lineTop || circle}`}
      src={
        (top && pattern) ||
        (bottom && pattern) ||
        (lineTop && pattern) ||
        (circle && pattern)
      }
    />
  );
}
export default Pattern