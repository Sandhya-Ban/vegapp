import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products";
import PlaceOrder from "./pages/PlaceOrder";
import TrackOrder from "./pages/TrackOrder";
import AdminOrders from "./pages/AdminOrders";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav style={{ padding: "10px" }}>
          <Link to="/">Products</Link> |{" "}
          <Link to="/order">Place Order</Link> |{" "}
          <Link to="/track">Track Order</Link> |{" "}
          <Link to="/admin">Admin</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/track" element={<TrackOrder />} />
          <Route path="/admin" element={<AdminOrders />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
