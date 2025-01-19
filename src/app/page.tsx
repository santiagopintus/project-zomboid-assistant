import NavigationCards from "@/components/NavigationCards";

export default function Home() {
  return (
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <h1>Welcome survivor! 🧟</h1>
        <p>Where are you headed?</p>
      </div>
      <NavigationCards />
    </div>
  );
}
