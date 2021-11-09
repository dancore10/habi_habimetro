export const informationSell = (state = [], action) => {
  switch (state.type) {
    case "@form/save":
      return state;
    default:
      return action;
  }
};
