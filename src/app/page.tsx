import NavCard from "@/components/NavCard/NavCard";
import NavigationCards from "@/components/NavigationCards";

export default function Home() {
  return (
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <h1>Te doy la bienvenida 🧟</h1>
        <p>A dónde vas?</p>
      </div>
      <NavigationCards />
    </div>
  );
}
