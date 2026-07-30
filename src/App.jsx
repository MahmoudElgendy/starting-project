import ReactImage from "./assets/react-core-concepts.png";
import ComponentsImage from "./assets/components.png";
const reactDescriptions = ["Fundamentals", "Crusial", "Core"];
function GetRandonInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header() {
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

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt="..." />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcept
              title="Components"
              description="Reusable building blocks of the UI."
              image={ComponentsImage}
            />
            <CoreConcept title="props" />
            <CoreConcept />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
