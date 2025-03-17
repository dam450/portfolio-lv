import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Offer } from "./components/Offer";
import { Projects } from "./components/Projects";
import { Stacks } from "./components/Stacks";
import { Layout } from "./layouts/BaseLayout";

export function App() {
  return (
    <>
      <Layout>
        <Hero />
        <Offer />
        <Stacks />
        <About />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
