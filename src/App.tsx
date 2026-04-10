import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AppRoutes from "./routes/app-routes";
import { ThemeProvider } from "./providers/theme-provider";
import ScrollToTop from "./components/scroll-to-top";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="printglasta-theme">
      <div
        className="flex flex-col min-h-screen"
        style={{ background: "var(--bg-primary)" }}
      >
        <ScrollToTop />
        <Navbar />
        <main className="flex-1">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
