import React from "react";
import "./Form.css";
import { useSelector } from "react-redux";
import Fields from "./Fields";
import { stepsJson } from "./steps";

function Form() {
  const [counterProgress, setCounterProgress] = React.useState(1);
  const state = useSelector((state) => state);
  const step_active = state.stepsCounter.payload
    ? state.stepsCounter.payload.step
    : counterProgress;
  return (
    <div>
      <section>
        <h3>
          La información que nos brindes nos ayudará a darte el mejor resultado
          posible.
        </h3>
        <div className="form-progress">
          <progress
            className="form-progress-bar"
            min="1"
            max="100"
            value={step_active * 10}
            step="33"
            aria-labelledby="form-progress-completion"
          ></progress>
          {stepsJson.map((item, ind) => {
            const active = step_active === item.step ? "active" : "";
            setCounterProgress.bind(step_active);
            return (
              <div
                className={
                  "form-progress-indicator " + item.lit_step + " " + active
                }
              >
                {item.step}
              </div>
            );
          })}
          <p
            id="form-progress-completion"
            className="js-form-progress-completion sr-only"
            aria-live="polite"
          ></p>
        </div>
        <div className="animation-container">
          <Fields />
        </div>
      </section>
    </div>
  );
}

export default Form;
