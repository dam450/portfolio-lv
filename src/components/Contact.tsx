export const Contact = () => {
  return (
    <section id="contact" className="py-32  text-center">
      <p className="mb-16 lg:text-lg content-show">Vamos conversar?</p>
      <h2 className="font-bold text-5xl lg:text-6xl mb-3 content-show">
        Contrate-me e descubra
      </h2>
      <p className="pb-16 text-lg content-show">
        Como vamos não apenas programar, mas criar um projeto incrível.
      </p>
      <a
        className="border rounded-full px-8 py-4 font-bold hover:bg-secondary-50 hover:text-secondary-900 transition-colors duration-300 content-show"
        href="mailto:"
      >
        Entre em contato
      </a>
    </section>
  );
};
