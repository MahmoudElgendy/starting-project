export default function TabButton({ children }) {
  function handleClick() {
    console.log(`You clicked on ${children} button`);
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
