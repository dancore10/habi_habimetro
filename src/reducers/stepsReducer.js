export const stepsCounter = (state = {}, action) => {
  switch (state.type) {
    case "@form/step":
      return action;
    default:
      return action;
  }
};
