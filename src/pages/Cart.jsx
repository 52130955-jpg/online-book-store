import { useEffect } from "react";

export default function Cart({ cart, setCart }) {
  // Sync cart with localStorage when the component mounts
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, [setCart]);

  const removeItem = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-5xl mx-auto px-6 mt-10">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      <div className="bg-white shadow rounded-xl p-6">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b py-2"
              >
                <span>
                  {item.title} – ${item.price}
                </span>
                <button
                  onClick={() => removeItem(index)}
                  className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="mt-4 text-right">
              <span className="font-bold">Total: ${total.toFixed(2)}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
