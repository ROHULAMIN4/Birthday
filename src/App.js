import "./App.css";
import Typist from "react-typist";
import ReactDOM from "react-dom";
import img1 from "./images/Group 8450(1).png";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);
  return (
    <>
      <div className="typist">
        {count ? (
          <>
            <div>
              <div class="block">
                <div class="riti">
                  <div>
                    <p className="typis-head">Happy birthday </p>
                    <Typist
                      avgTypingDelay={50}
                      onTypingDone={() => setCount(0)}
                    >
                      <span className="typis-display">Fokinni </span>
                      <Typist.Backspace count={30} delay={1000} />
                      <span className="typis-display">bolod</span>
                      <Typist.Backspace count={30} delay={1000} />
                      <span className="typis-display">
                        Give the treat early{" "}
                      </span>
                      <Typist.Backspace count={30} delay={1000} />
                    </Typist>
                  </div>
                  <img src={img1} alt="" />
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
