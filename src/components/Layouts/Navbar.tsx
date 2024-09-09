import AddProduct from "../products/AddProduct";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto max-w-6xl flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Crud MERN</h1>
        <AddProduct />
      </div>
    </nav>
  );
};

export default Navbar;
