export const Offer = () => {
  return (
    <section id="offer" className="grid lg:grid-cols-2 gap-x-2.5 pt-9 pb-9 ">
      <div className="text-left">
        <p className="text-lg font-light text-primary-400 mb-4 animate-scroll_review">
          O que ofereço
        </p>
        <h2 className="font-bold text-4xl mb-7 animate-scroll_review">
          Design, Desenvolvimento e Qualidade. Tudo em um.
        </h2>
        <p className="text-base mb-8 animate-scroll_review">
          Desenvolvimento inteligente, design inovador e qualidade impecável:
          juntos, criando experiências que transformam!
        </p>
      </div>
      <ol className="flex flex-col gap-6 *:border *:border-secondary-50 *:flex *:flex-row *:text-left *:p-5 *:rounded-sm *:gap-7 list-decimal *:animate-scroll_review">
        <li className="">
          <span className="text-primary-500 font-bold text-2xl">01</span>
          <div className="flex flex-col gap-2.5">
            <span className="font-bold text-2xl">Design</span>
            <span className="text-lg/snug font-light">
              Combinando criatividade e técnica para criar sites atraentes,
              intuitivos e funcionais.
            </span>
          </div>
        </li>

        <li className="">
          <span className="text-primary-500 font-bold text-2xl">02</span>
          <div className="flex flex-col gap-2.5">
            <span className="font-bold text-2xl">Desenvolvimento</span>
            <span className="text-lg/snug font-light">
              Transformando ideias em soluções funcionais, sites eficientes,
              dinâmicos e escaláveis.
            </span>
          </div>
        </li>
        <li className="">
          <span className="text-primary-500 font-bold text-2xl">03</span>
          <div className="flex flex-col gap-2.5">
            <span className="font-bold text-2xl">QA</span>
            <span className="text-lg/snug font-light">
              Garantindo excelência nos produtos digitais e assegurando a melhor
              experiência para o usuário.
            </span>
          </div>
        </li>
      </ol>
    </section>
  );
};
