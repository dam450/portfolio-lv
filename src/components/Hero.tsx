import Foto from "../assets/luis-vinicius.webp";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="grid lg:grid-cols-2 gap-32 justify-center text-secondary-50 py-20"
    >
      <div className="">
        <h2 className="font-titles font-black text-5xl mb-8 animate-scroll_review">
          Desenvolvedor Full&#8209;Stack Criando soluções Digitais
        </h2>
        <p className="mb-11 text-2xl text-primary-400 font-light animate-scroll_review">
          Devenvolvimento - Design - QA
        </p>
        <p className="text-2xl/tight font-light animate-scroll_review">
          Olá, eu sou <span className="font-black">Luís Vinícius</span>.
          Transformo ideias em realidade com expertise em{" "}
          <span className="font-black animate-scroll_review">React</span>,{" "}
          <span className="font-black animate-scroll_review">Node</span>,{" "}
          <span className="font-black animate-scroll_review">Tailwind</span> e
          muito mais. Explore meu portfólio para ter um vislumbre da minha
          jornada no mundo do código.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <img
          className="rounded-[25%_75%_25%_75%_/_43%_29%_71%_57%] animate-scroll_review  transition-all duration-500 aspect-square animate-blob"
          src={Foto}
          alt="foto do desenvolvedor"
        />
      </div>
    </section>
  );
};
