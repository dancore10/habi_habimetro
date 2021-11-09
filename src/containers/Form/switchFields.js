/* eslint-disable no-undef */
import React from "react";
import { useDispatch } from "react-redux";

export default function Switch_fields(field) {
  const dispatch = useDispatch();
  const value = {};
  const handdleChange = (e) => {
    value[e.target.name] = e.target.value;
    dispatch({
      type: "@form/save",
      payload: value,
    });
  };
  switch (field.type) {
    case "text":
      return (
        <div>
          <input
            required={field.required}
            name={field.class}
            type={field.type}
            className="hasInput"
            onChange={handdleChange}
          ></input>
          <label htmlFor={field.label}>{field.label}</label>
        </div>
      );
    case "email":
      return (
        <div>
          <input
            required={field.required}
            name={field.class}
            type={field.type}
            className="hasInput"
            onChange={handdleChange}
          ></input>
          <label htmlFor={field.label}>{field.label}</label>
        </div>
      );
    case "checkbox":
      return (
        <div>
          <input
            required={field.required}
            name={field.class}
            type={field.type}
            className="hasInput"
          ></input>
          <label htmlFor={field.label}>{field.label}</label>
        </div>
      );
    case "select":
      return (
        <div>
          <select name={field.class} className="hasInput">
            {field.options.map((opt, i) => {
              return (
                <option key={i} value={opt.value}>
                  {opt.name}
                </option>
              );
            })}
          </select>
          <label htmlFor={field.label}>{field.label}</label>
        </div>
      );
    case "number":
      return (
        //   number.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })
        <div>
          <input
            required={field.required}
            name={field.class}
            type={field.type}
            min={field.min ? field.min : ""}
            max={field.max ? field.max : ""}
            className="hasInput"
          ></input>
          <label htmlFor={field.label}>{field.label}</label>
        </div>
      );
    case "file":
      return (
        <div>
          <input
            required={field.required}
            name={field.class}
            type={field.type}
            accept={field.accept}
            className="hasInput"
          ></input>
          <label htmlFor={field.label}>{field.label}</label>
        </div>
      );
    default:
      return "";
  }
}
