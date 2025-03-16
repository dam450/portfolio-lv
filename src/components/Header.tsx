export const Header = () => {
  return (
    <header className="bg-secondary-800 text-secondary-50 sticky top-0 p-6">
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        <h1>Luís Vinícius</h1>
        <nav className="app-navigation">
          <ul className="flex flex-row gap-8">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
          </ul>
        </nav>

        <a href="#contact">
          <div className="border-2 px-4 py-2 rounded-full border-primary-500 text-primary-500">
            Contrate-me
          </div>
        </a>
      </div>
    </header>
  );
};
