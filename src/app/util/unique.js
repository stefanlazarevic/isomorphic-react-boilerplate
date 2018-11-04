export default function uniqueID() {
  return (
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9) +
    '_'
  );
}
