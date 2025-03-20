export const Projects = () => {
  return (
    <section className="py-8 bg-repeat" id="projects">
      <p className="text-lg font-light text-primary-400 mb-4 animate-scroll_review">
        Portfólio
      </p>
      <h2 className="font-bold text-4xl mb-7 animate-scroll_review">
        Trabalhos Selecionados
      </h2>

      {/* projetos */}
      <div className="grid gap-9 *:animate-scroll_review *:outline-2 *:outline-offset-4 *:border *:border-secondary-900 *:rounded-2xl *:min-h-1/2 *:p-9 *:bg-cover *:aspect-video">
        <div className="bg-[url(/img/goodvibe.webp)]">
          <p></p>
        </div>

        <div className="bg-[url(/img/labyes.webp)]">
          <p></p>
        </div>
      </div>
    </section>
  );
};
