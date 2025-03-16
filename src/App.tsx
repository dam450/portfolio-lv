import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Layout } from "./layouts/BaseLayout";

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
