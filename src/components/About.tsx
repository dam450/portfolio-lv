export const About = () => {
  return (
    <section id="about" className="pt-9 pb-9">
      <div>
        <p className="text-lg font-light text-primary-500 mb-4">
          Luís Vinícius
        </p>
        <h2 className="font-bold text-4xl mb-7">Sobre</h2>
      </div>

      <div className="text-left grid lg:grid-cols-2 gap-x-12 gap-y-6">
        <div>
          <p>
            Desenvolvedor Front-End com sólido conhecimento em TypeScript,
            JavaScript e React, além de experiência prática no desenvolvimento
            de aplicações interativas e colaborativas. Atualmente, está
            ampliando suas habilidades técnicas com estudos em Go e Python.
            Busca contribuir em equipes ágeis e colaborativas, trabalhando em
            ambientes diversos e desafiadores para criar soluções de software
            impactantes, com foco em comunicação clara e melhoria contínua.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Habilidades Técnicas:</h3>
          <ul className="list-disc pl-6">
            <li>
              <span className="font-bold text-primary-500">Linguagens: </span>{" "}
              TypeScript, JavaScript, Go, Python
            </li>
            <li>
              <span className="font-bold text-primary-500">
                Frameworks/Bibliotecas:{" "}
              </span>
              React, Next.JS, Styled-Components, TailwindCSS
            </li>
            <li>
              <span className="font-bold text-primary-500">
                Controle de Versão:{" "}
              </span>{" "}
              Git, GitHub
            </li>
            <li>
              <span className="font-bold text-primary-500">
                Outras Habilidades:{" "}
              </span>
              Inglês intermediário, conhecimento em arquitetura de software,
              metodologias ágeis (Scrum, Kanban).
            </li>
          </ul>
        </div>

        <div className="*:mb-3">
          <h3 className="text-lg font-bold">Experiência Profissional:</h3>

          <div>
            <h4 className="font-bold text-primary-500">
              Lab Yes! - Front-End Developer & QA
            </h4>
            <p>Trabalho voluntário | Dezembro/2024 até o presente</p>
            <p>
              Atuou como desenvolvedor Front-End utilizando Next.js e React,
              também desempenhando funções de Garantia de Qualidade (QA).
              Responsável por aprovar commits, escrever casos de teste de
              usuário e implementar a biblioteca Cypress para testes de ponta a
              ponta (E2E).
            </p>
          </div>

          <div>
            <h4 className="font-bold text-primary-500">
              GoodVibe - Front-End Developer
            </h4>
            <p>Estágio | Marco/2024 à Novembro/2024</p>
            <p>
              Desenvolveu um site utilizando Next.JS, implementando componentes
              interativos e responsivos com Styled-Components. Projetou o design
              no Figma enquanto seguia todo o ciclo de vida do desenvolvimento
              de aplicações e aderiu às metodologias ágeis (Scrum e Kanban).
            </p>
          </div>
        </div>

        <div className="*:mb-8">
          <div>
            <h3 className="text-lg font-bold mb-2">Outras Experiencias:</h3>
            <p>
              <span className="font-bold text-primary-500">PlantAI </span>-
              Brazilian Artificial Intelligence (AI) Hackathon - Junho à Julho
              de 2024.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Educação:</h3>
            <p>
              <span className="font-bold text-primary-500">
                Universidade de Salvador (UNIFACS)
              </span>{" "}
              - Bacharel em Ciência da Computação. Iniciado em 2021 com
              graduação esperada para 2025.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
