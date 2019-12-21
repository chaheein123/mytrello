import uuid from "uuid/v4";

export const CARD_DATA = [
  {
    id: uuid(),
    title: "Things to do",
    items: [
      {
        id: uuid(),
        content: "Brush teeth"
      },
      {
        id: uuid(),
        content: "Wash face"
      },
      {
        id: uuid(),
        content: "Go to dojo"
      },
      {
        id: uuid(),
        content: "aaaaaa"
      },
      {
        id: uuid(),
        content: "bbbb"
      }
    ]
  },
  {
    id: uuid(),
    title: "Doing",
    items: [
      {
        id: uuid(),
        content: "Study"
      },
      {
        id: uuid(),
        content: "Debugging"
      },
      {
        id: uuid(),
        content: "Eating"
      }
    ]
  },
  {
    id: uuid(),
    title: "Done",
    items: [
      {
        id: uuid(),
        content: "Project #2"
      }
    ]
  }
]
