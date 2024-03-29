import React, { useState } from "react";
import styles from "./index.module.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Card from "./Card";

const itemsFromBackend = {
  Backlog: [
    { id: "adfad", content: "Deploy the app" },
    { id: "gdsdas", content: "Make the code efficient" },
    { id: "vjnfss", content: "Merge the branches" },
  ],
  InProgress: [
    { id: "fkanf", content: "Fix the UI bug" },
    { id: "nadfj", content: "Review with client" },
    { id: "asod", content: "Add dark mode" },
  ],
  Done: [
    { id: "jaskkk", content: "Setup developer account" },
    { id: "ooanjksf", content: "Beta testing" },
    { id: "asdjnas", content: "Add bluetooth module" },
  ],
  "Parking Lot": [
    { id: "jhghu", content: "Personalisation" },
    { id: "ouihgjb", content: "Community" },
    { id: "erty", content: "Virtual Assistant" },
  ],
};
const Data = {
  Backlog: { title: "Backlog", items: itemsFromBackend.Backlog },
  InProgress: { title: "InProgress", items: itemsFromBackend.InProgress },
  Done: { title: "Done", items: itemsFromBackend.Done },
  "Parking Lot": {
    title: "Parking Lot",
    items: itemsFromBackend["Parking Lot"],
  },
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function TaskBoard() {
  const [columns, setColumns] = useState(Data);
  return (
    <div className={styles.container}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([id, column]) => {
          return (
            <Droppable droppableId={id} key={id}>
              {(provided, snapshot) => {
                return (
                  <div
                    className={styles.list}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      background: snapshot.isDraggingOver
                        ? "lightgrey"
                        : "#ebebeb",
                    }}
                  >
                    <p className={styles.title}>{column.title}</p>
                    {column.items.map((item, index) => {
                      return (
                        <Draggable
                          key={item.id}
                          draggableId={item.id.toString()}
                          index={index}
                        >
                          {(provided, snapshot) => {
                            return (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <Card text={item.content} />
                              </div>
                            );
                          }}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default TaskBoard;
