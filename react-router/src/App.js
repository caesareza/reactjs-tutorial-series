import { Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <>
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact">Contact</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
