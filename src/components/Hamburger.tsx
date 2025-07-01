type HamburgerProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const Hamburger = ({ isOpen, toggleMenu }: HamburgerProps) => {
  return (
    <button onClick={toggleMenu} className="md:hidden flex flex-col gap-1 focus:outline-none" aria-label="Toggle menu">
      <span className={`block h-0.5 w-6 bg-gray-800 transition-transform ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
      <span className={`block h-0.5 w-6 bg-gray-800 transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`} />
      <span className={`block h-0.5 w-6 bg-gray-800 transition-transform ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
    </button>
  );
};

export default Hamburger;
