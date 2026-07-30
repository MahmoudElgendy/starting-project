import "./Header.css";
import ReactImage from "../../assets/react-core-concepts.png";
const reactDescriptions = ["Fundamentals", "Crusial", "Core"];
function GetRandonInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
export default function Header() {
  const description =
    reactDescriptions[GetRandonInt(reactDescriptions.length - 1)];
  return (
    <header>
      <img src={ReactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
