import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AppRoutes from "./routes/app-routes";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}
