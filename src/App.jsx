import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import UseStateExample from "./components/UseStateExample";
import UseEffectExample from "./components/UseEffectExample";
import UseMemoExample from "./components/UseMemoExample";
import UseCallbackExample from "./components/UseCallbackExample";
import EventHandlingExample from "./components/EventHandlingExample";
import ThemeToggleButton from "./components/ThemeToggleButton";
import "./styles.css";

function App() {
  const { theme, themeStyles } = useContext(ThemeContext);

  return (
    <div style={{ ...themeStyles[theme], minHeight: "100vh" }}>
      {/* Header Section */}
      <header className="header">
        <h1>React Hooks & Events — Week 03</h1>
        <p className="student-info">
          Assignment 03_B00123710 — <strong>Mohana Akhil Verma</strong>
        </p>
        <ThemeToggleButton />
      </header>

      {/* Main Content */}
      <main className="content">
        <section className="card">
          <UseStateExample />
        </section>
        <section className="card">
          <UseEffectExample />
        </section>
        <section className="card">
          <UseMemoExample />
        </section>
        <section className="card">
          <UseCallbackExample />
        </section>
        <section className="card">
          <EventHandlingExample />
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 | Built with ❤️ using React Hooks</p>
      </footer>
    </div>
  );
}

export default App;
