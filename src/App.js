import { createRef, useEffect } from "react";
import "./styles.css";

export default function App() {
  const ref = createRef();
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);
  return (
    <div className="App">
      <input type="text" ref={ref} />{" "}
    </div>
  );
}
