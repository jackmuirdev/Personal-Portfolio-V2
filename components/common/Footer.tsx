export default function Footer() {
  return (
    <footer className="relative text-white bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 pt-16">
        {/* Logo and Name */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-blue-300 mb-4 tracking-wide">
            Jack Muir
          </h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto">
            Full Stack Developer passionate about building modern web
            applications and delivering high-quality solutions.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center space-x-8 mb-12">
          <a
            href="#home"
            className="text-gray-300 hover:text-blue-300 transition-all text-lg"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-blue-300 transition-all text-lg"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-blue-300 transition-all text-lg"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-blue-300 transition-all text-lg"
          >
            Contact
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-12">
          <a
            href="https://github.com"
            className="text-gray-300 hover:text-blue-300 transition-all transform hover:scale-110"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 fill-current"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.042-1.416-4.042-1.416-.546-1.385-1.333-1.754-1.333-1.754-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.24 1.838 1.24 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.96-.267 1.985-.399 3.005-.404 1.02.005 2.045.137 3.005.404 2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.241 2.873.118 3.176.768.84 1.234 1.911 1.234 3.221 0 4.609-2.804 5.624-5.475 5.921.43.371.823 1.103.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.594 24 12.297c0-6.627-5.373-12-12-12"></path>
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-300 hover:text-blue-300 transition-all transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 fill-current"
            >
              <path d="M22.23 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.46c.97 0 1.77-.77 1.77-1.73V1.73C24 .77 23.2 0 22.23 0zm-13.82 20.452H4.615v-8.728h3.794v8.728zm-1.897-9.923c-1.216 0-2.2-.99-2.2-2.209 0-1.218.984-2.207 2.2-2.207s2.2.99 2.2 2.207c0 1.219-.984 2.209-2.2 2.209zM20.452 20.45h-3.795v-4.387c0-1.045-.02-2.386-1.454-2.386-1.456 0-1.679 1.137-1.679 2.311v4.462H9.731v-8.728h3.641v1.191h.052c.506-.956 1.742-1.964 3.584-1.964 3.834 0 4.542 2.521 4.542 5.796v4.705z"></path>
            </svg>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-400 border-t border-gray-700 py-4">
          <p>© 2024 Jack Muir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
