// components/Navbar.js
const Navbar = () => {
    return (
      <nav className="h-full bg-gray-800 text-white p-4">
        <ul>
          <li className="mb-4"><a href="/control" className="text-lg">Control</a></li>
          <li className="mb-4"><a href="/formulario" className="text-lg">Formulario</a></li>
          <li className="mb-4"><a href="/users" className="text-lg">Usuarios</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  