import React from "react";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import menuItems from "./data";

function App() {
  const [currentOrder, setCurrentOrder] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const addToOrder = (item) => {
    setCurrentOrder([...currentOrder, item]);
    setTotalCost((prevTotal) => prevTotal + item.price);
  };

  const removeFromOrder = (item) => {
    const updatedOrder = currentOrder.filter((orderItem) => orderItem !== item);
    setCurrentOrder(updatedOrder);
    setTotalCost((prevTotal) => prevTotal - item.price);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <table>
            <tbody>
              {menuItems.map((item) => (
                <tr key={item.id} onClick={() => addToOrder(item)}>
                  <td>{item.image}</td>
                  <td className="item-name">
                    <span>{item.name}</span>
                    <br />
                    <span>{'🌶️'.repeat(item.spiceLevel)}</span>
                  </td>
                  <td>${item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </aside>
        <section>
          <div>
            <h2>Current Order</h2>
            <ul>
              {currentOrder.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price}{" "}
                  <button onClick={() => removeFromOrder(item)}>❌</button>
                </li>
              ))}
            </ul>
            <h4>Total: ${totalCost}</h4>
            <div>
              <button onClick={() => setCurrentOrder([])}>Tidy order</button>
              <button onClick={() => {setCurrentOrder([]); setTotalCost(0);}}>Close order</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;