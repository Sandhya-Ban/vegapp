import { useState } from "react";

function PlaceOrder() {
  const [form, setForm] = useState({
    product: "",
    quantity: "",
    buyer: "",
    address: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitOrder = () => {
    alert("Order placed (backend will be connected later)");
  };

  return (
    <div>
      <h2>Place Bulk Order</h2>

      <input name="product" placeholder="Product Name" onChange={handleChange} /><br />
      <input name="quantity" placeholder="Quantity (kg)" onChange={handleChange} /><br />
      <input name="buyer" placeholder="Buyer Name" onChange={handleChange} /><br />
      <textarea name="address" placeholder="Delivery Address" onChange={handleChange} /><br />

      <button onClick={submitOrder}>Place Order</button>
    </div>
  );
}

export default PlaceOrder;
