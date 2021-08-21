export default function counterReducer(
  state = {
    clicks: 0,
  },
  action
) {
  console.log(action);
  switch (action.type) {
    case "INCREASE_COUNT":
      console.log("Current state.clicks to %s", state.clicks);
      console.log("Updating state.clicks to %s", state.clicks + 1);
      return {
        clicks: state.clicks + 1,
      };
    default:
      console.log("Initial state.clicks: %s", state.clicks);
      return state;
  }
}

//QUESTIONS:
//how do we have the 0 number for the count of clicks showing on the page right away at page refresh without having a bad action type dispatched such as store.dispatch({type: "@@INIT"})
//i do see the below in the console logged on page refresh so maybe the lab or redux gave an INIT type of action to get the 0 to show?
//{type: "@@redux/INITa.o.5.z.o.5"}
//what is the %s used for?
//maybe a set up a screenshare to ask what else I should know about redux dev tools.
