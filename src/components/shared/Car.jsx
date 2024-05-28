import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Car = ({ cartItems, removeFromCart }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handleConfirmPurchase = () => {
    setShowConfirmation(true);
  };

  const subtotal = calculateSubtotal();
  const total = subtotal; //asume que no hay otros cargos adicionales.

  return (
    <div className="fixed top-0 right-0 bg-[#f0f8ff] w-96 h-full text-[#1a1a1a] shadow-lg">
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-4">CARRITO DE COMPRAS</h2>
        <ul className="divide-y divide-gray-200 h-[400px] md:h-[700px] lg:h-[540px] overflow-scroll">
          {cartItems.map((item, index) => (
            <li key={index} className="bg-[#e6f7ff] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                <div className="col-span-4 flex items-center gap-3">
                  <img src={item.img} className="w-10 h-10 object-cover" alt={item.description} />
                  <div>
                    <h5 className="text-sm">{item.description}</h5>
                    <p className="text-xs text-gray-500">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div>
                  <span>{item.quantity}</span>
                </div>
                <div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#f0f8ff] py-2 px-4 rounded-lg outline-none"
                    placeholder="Order note..."
                  />
                </form>
                <div>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="border border-red-500 p-2 rounded-lg"
                  >
                    <RiDeleteBin6Line className="text-red-500" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="bg-[#e6f7ff] p-4 rounded-lg mt-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-700">Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-700">Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={handleConfirmPurchase}
            className="bg-[#007bff] text-white w-full py-2 px-4 rounded-lg hover:bg-[#0056b3]"
          >
            Continuar con el pago
          </button>
        </div>
      </div>
      {showConfirmation && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#ffffff] p-8 rounded-lg text-center text-[#1a1a1a] shadow-lg">
            <h2 className="text-2xl mb-4">Compra Realizada</h2>
            <ul className="mb-4">
              {cartItems.map((item, index) => (
                <li key={index} className="mb-2">
                  <p className="text-sm">{item.description} - ${item.price.toFixed(2)} x {item.quantity}</p>
                </li>
              ))}
            </ul>
            <div className="mb-4">
              <p className="text-gray-700">Subtotal: ${subtotal.toFixed(2)}</p>
              <p className="text-gray-700">Total: ${total.toFixed(2)}</p>
            </div>
            <button
              onClick={() => setShowConfirmation(false)}
              className="bg-[#007bff] text-white py-2 px-4 rounded-lg hover:bg-[#0056b3]"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Car;
