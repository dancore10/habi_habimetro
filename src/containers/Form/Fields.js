/* eslint-disable array-callback-return */
import React from "react";
import { stepsJson } from "./steps";
import { useDispatch, useSelector } from "react-redux";
import SwitchFields from "./switchFields";

function Fields() {
  const [step, setStep] = React.useState(1);
  const [description, setDescription] = React.useState("");
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const previusStep = () => {
    const newStep = step - 1;
    setStep(newStep);
    dispatch({
      type: "@form/step",
      payload: {
        step: newStep,
      },
    });
  };
  const nextStep = () => {
    const newStep = step + 1;
    setStep(newStep);
    dispatch({
      type: "@form/step",
      payload: {
        step: newStep,
      },
    });
  };
  React.useEffect(() => {
    setDescription(stepsJson[step - 1]["description"]);
  }, [state, step]);

  return (
    <div>
      <h1>{description}</h1>
      <form name="form-step-1">
        {stepsJson.map((input, i) => {
          if (!!input.fields) {
            if (input.step === step) {
              return input.fields.map((field, i) => {
                return (
                  <div key={i} className="fieldgroup">
                    <SwitchFields {...field} />
                  </div>
                );
              });
            }
          }
        })}
        <div className="buttons">
          <button
            type="button"
            className="btn btn-alt js-reset"
            onClick={previusStep.bind()}
          >
            Previus
          </button>
          <button type="button" className="btn" onClick={nextStep.bind()}>
            Continue
          </button>
        </div>
      </form>
      {step + "/" + stepsJson.length}
    </div>
  );
}

export default Fields;
