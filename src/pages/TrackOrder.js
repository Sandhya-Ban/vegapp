import { useState } from "react";

function TrackOrder() {
  const [orderId, setOrderId] = useState("");

  const trackOrder = () => {
    alert(`Tracking order ID: ${orderId}`);
  };

  return (
    <div>
      <h2>Track Order</h2>
      <input
        placeholder="Enter Order ID"
        onChange={(e) => setOrderId(e.target.value)}
      />
      <button onClick={trackOrder}>Track</button>
    </div>
  );
}

export default TrackOrder;
