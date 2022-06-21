const initialState = {
  cards: [
    {
      title: "Task 1",
      description: "Some description goes here",
    },
    {
      title: "Task 2",
      description: "Some description goes here",
    },
    {
      title: "Task 3",
      description: "Some description goes here",
    },
  ],
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "create":
      return {
        ...state,
      };

    case "update":
      return {
        ...state,
      };
    default:
      break;
  }
};
