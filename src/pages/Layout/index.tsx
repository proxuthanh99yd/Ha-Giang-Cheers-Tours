import Footer from "@/components/compound/Footer";
import Header from "@/components/compound/Header";
import { Outlet } from "react-router-dom";
import { MENU } from "./constants";

export default function Layout() {
  return (
    <>
      <Header data={MENU} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
