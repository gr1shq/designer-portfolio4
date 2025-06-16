import Footer from "./(components)/Footer";
import Header from "./(components)/Header";
import About from "./(sections)/About";
import Contact from "./(sections)/Contact";
import Hero from "./(sections)/Hero";
import Projects from "./(sections)/Projects";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Contact />
      <About />
      <Footer />
    </div>
  );
}
