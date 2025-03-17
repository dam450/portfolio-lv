export const Header = () => {
  return (
    <header className="bg-secondary-800 text-secondary-50 sticky top-0 p-6 drop-shadow-xl border-b-2 border-b-secondary-600 z-10">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <a href="#">
          <h1 className="font-black text-3xl">Luís Vinícius</h1>
        </a>
        <nav className="text-lg leading-none hidden md:block">
          <ul className="flex flex-row gap-8">
            <li>
              <a href="#">Home</a>
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
          <div className="border-2 px-4 py-2 rounded-full border-primary-500 text-primary-500 font-medium text-lg leading-none hover:bg-primary-500 hover:text-secondary-800 transition-colors duration-300">
            Contrate-me
          </div>
        </a>
      </div>
    </header>
  );
};
