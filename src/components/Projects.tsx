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
      <div className="grid gap-9 *:animate-scroll_review">
        <div className="border rounded-2xl min-h-1/2 p-9 bg-[url(/img/goodvibe.webp)] bg-cover aspect-video">
          <p></p>
        </div>

        <div className="border rounded-2xl min-h-1/2 p-9 bg-[url(/img/labyes.webp)] bg-cover aspect-video">
          <p></p>
        </div>
      </div>
    </section>
  );
};
