import Navigation from "./navigation";  
import Footer from "./footer";

export default function Home() {
  return (
    <main>
      <div className="appBody">
        <Navigation/>
          <h1>SaveYoung</h1>
          <p>
            App for parents to help prevent their children from interacting with
            online predators.
          </p>
        <Footer/>
      </div>
    </main>
  );
}
