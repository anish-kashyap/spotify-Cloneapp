export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQBR2nWm-fI7JT-z9TaziVKKA0DpM_dqWb9csy8oJLMr42LJkFIYGCni4lbJMxy5MhaElf_NHM1hrOxB68fnK0NtogqIlRFU0iDrL0alEUivtaJz_Hos1-MBgZQ7QeRVDQe3yPCsZDQDE7IFOLMg3qKejx4xTTO9yAjgsWUgnU7nAeLK",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
