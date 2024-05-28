import React, { useState } from "react";
import { RiMenu3Fill, RiUser3Line, RiAddLine, RiPieChartLine, RiCloseLine } from "react-icons/ri";
import Sidebar from "./components/shared/Sidebar";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";
import Card from "./components/shared/Card";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  const addToCart = (description, img, price) => {
    const itemIndex = cartItems.findIndex(item => item.description === description);
    if (itemIndex > -1) {
      const newCartItems = [...cartItems];
      newCartItems[itemIndex].quantity += 1;
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, { description, img, price, quantity: 1 }]);
    }
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <div className="bg-[#f0f8ff] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Car cartItems={cartItems} removeFromCart={removeFromCart} />
      <nav className="bg-[#007bff] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-white py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          <Header />
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-[#1a1a1a]">Nuestros Productos</h2>
            <button className="flex items-center gap-4 text-white bg-[#007bff] py-2 px-4 rounded-lg hover:bg-[#0056b3]"></button>
          </div>
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Sillas */}
            <Card
              img="silla1.png"
              description="Silla de madera"
              price={150000}
              inventory={20}
              addToCart={() => addToCart("Silla de madera", "silla1.png", 150000)}
            />
            <Card
              img="silla2.png"
              description="Silla de plástico"
              price={80000}
              inventory={15}
              addToCart={() => addToCart("Silla de plástico", "silla2.png", 80000)}
            />
            <Card
              img="silla3.png"
              description="silla "
              price={100000}
              inventory={10}
              addToCart={() => addToCart("Silla de metal", "silla3.png", 100000)}
            />
            <Card
              img="silla4.png"
              description="Silla Comoda"
              price={100000}
              inventory={10}
              addToCart={() => addToCart("Silla de metal", "silla3.png", 100000)}
            />
            {/* Camas */}
            <Card
              img="cama1.png"
              description="Cama doble"
              price={600000}
              inventory={3}
              addToCart={() => addToCart("Cama doble", "cama1.png", 600000)}
            />
            <Card
              img="cama2.png"
              description="Cama individual"
              price={400000}
              inventory={6}
              addToCart={() => addToCart("Cama individual", "cama2.png", 400000)}
            />
            <Card
              img="cama3.png"
              description="Cama king size"
              price={800000}
              inventory={2}
              addToCart={() => addToCart("Cama king size", "cama3.png", 800000)}
            />

            <Card
              img="cama4.png"
              description="Cama king size"
              price={800000}
              inventory={2}
              addToCart={() => addToCart("Cama king size", "cama3.png", 800000)}
            />
            {/* Sofás */}
            <Card
              img="sofa1.png"
              description="Sofá de Cuero"
              price={700000}
              inventory={5}
              addToCart={() => addToCart("Sofá de Cuero", "sofa1.png", 700000)}
            />
            <Card
              img="sofa2.png"
              description="Sofá de Tela"
              price={600000}
              inventory={7}
              addToCart={() => addToCart("Sofá de Tela", "sofa2.png", 600000)}
            />
            <Card
              img="sofa3.png"
              description="Sofá Reclinable"
              price={800000}
              inventory={3}
              addToCart={() => addToCart("Sofá Reclinable", "sofa3.png", 800000)}
            />
            <Card
              img="sofa4.png"
              description="Sofá Modular"
              price={950000}
              inventory={5}
              addToCart={() => addToCart("Sofá Modular", "sofa4.png", 950000)}
            />
            {/* Sofá Camas */}
            <Card
              img="Sofacama1.png"
              description="Sofá Cama Clásico"
              price={650000}
              inventory={8}
              addToCart={() => addToCart("Sofá Cama Clásico", "sofacama1.png", 650000)}
            />
                        <Card
              img="sofacama2.png"
              description="Sofá Cama Contemporáneo"
              price={750000}
              inventory={10}
              addToCart={() => addToCart("Sofá Cama Contemporáneo", "sofacama2.png", 750000)}
            />
            <Card
              img="sofacama3.png"
              description="Sofá Cama Moderno"
              price={700000}
              inventory={6}
              addToCart={() => addToCart("Sofá Cama Moderno", "sofacama3.png", 700000)}
            />
            <Card
              img="sofacama4.png"
              description="Sofá Cama de Cuero"
              price={850000}
              inventory={4}
              addToCart={() => addToCart("Sofá Cama de Cuero", "sofacama4.png", 850000)}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

