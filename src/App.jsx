import ReactImage from "./assets/react-core-concepts.png";
import ComponentsImage from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";

// destructor instead of props
// property names must match the object keys
function CoreConcept({ title, description, image }) {
  return (
    <li>
      <img src={image} alt="..." />
      <h3>{title}</h3>
      <p>{description}</p>
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
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            /> */}

            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}

            {/* alternative way using map function  */}
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components </TabButton>
            <TabButton>JSX </TabButton>
            <TabButton>Props </TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
