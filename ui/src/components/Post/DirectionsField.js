import React, { useEffect } from "react";
// import { ErrorMessage } from "@hookform/error-message";
import styles from "./Post.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { dirsName } from "./postFieldNames";
import { Draggable, DragDropContext, Droppable } from "react-beautiful-dnd";

const DirectionsField = ({ register, useFieldArray, setValue }) => {
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray;
  useEffect(() => {
    append({});
  }, []);

  return (
    <DragDropContext
      onDragEnd={result => {
        if (result.destination) {
          move(result.source.index, result.destination.index);
        } else return;
      }}
    >
      <Row className="mx-2 mt-3">
        <h3 className="d-inline-block m-0">Directions</h3>
        <Button
          className="btn-secondary ml-3 py-1"
          onClick={() => append({})}
          style={{ padding: "5px 12px" }}
        >
          +
        </Button>
      </Row>

      <Droppable droppableId="directionsList">
        {providedDroppable => (
          <div
            className="mb-5"
            ref={providedDroppable.innerRef}
            {...providedDroppable.droppableProps}
          >
            {fields.map((item, index) => (
              <Draggable draggableId={item.id} index={index} key={item.id}>
                {providedDraggable => (
                  <Form.Group
                    className="mx-2 mt-2 ds d-flex py-3 my-0"
                    ref={providedDraggable.innerRef}
                    {...providedDraggable.dragHandleProps}
                    {...providedDraggable.draggableProps}
                    tabIndex={undefined}
                  >
                    <Form.Control
                      className={styles.Fluid}
                      as="textarea"
                      rows="2"
                      name={`directions[${index}].description`}
                      placeholder={`Step ${index + 1}`}
                      ref={register()}
                    />
                    <Button
                      className="btn-secondary ml-3 py-1"
                      onClick={() => remove(index)}
                      style={{ padding: "2px 13px" }}
                      tabIndex={-1}
                    >
                      x
                    </Button>
                  </Form.Group>
                )}
              </Draggable>
            ))}
            {providedDroppable.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DirectionsField;
