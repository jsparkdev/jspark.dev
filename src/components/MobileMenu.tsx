import { useState } from "preact/hooks";
import { Menu, X } from "lucide-preact";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isMenuOpen && (
        <nav className="absolute right-0 left-0 mt-2 bg-white shadow-md">
          <ul className="flex flex-col items-center py-4">
            <li className="py-2">
              <a href="/" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li className="py-2">
              <a href="/blog" className="hover:text-blue-600">
                Blog
              </a>
            </li>
            <li className="py-2">
              <a href="/projects" className="hover:text-blue-600">
                Projects
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileMenu;
