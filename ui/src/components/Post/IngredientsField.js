import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./Post.module.css";
import { Draggable, DragDropContext, Droppable } from "react-beautiful-dnd";

const IngredientsField = ({ register, useFieldArray }) => {
  const { fields, append, remove, move } = useFieldArray;

  useEffect(() => {
    append({});
  }, [append]);

  return (
    <DragDropContext
      onDragEnd={result => {
        if (result.destination)
          move(result.source.index, result.destination.index);
        else return;
      }}
    >
      <Row className="mx-2 mt-3">
        <h3 className="d-inline-block m-0">Ingredients</h3>
        <Button
          onClick={() => fields.length < 50 && append({})}
          className="btn-secondary ml-3 py-1"
          style={{ padding: "5px 12px" }}
        >
          +
        </Button>
      </Row>
      <Droppable droppableId="ingredientsList">
        {providedDroppable => (
          <div
            ref={providedDroppable.innerRef}
            {...providedDroppable.droppableProps}
          >
            {fields.map((item, index) => (
              <Draggable draggableId={item.id} index={index} key={item.id}>
                {providedDraggable => (
                  <Form.Group
                    className="mx-2 my-0 py-3 d-flex"
                    ref={providedDraggable.innerRef}
                    {...providedDraggable.dragHandleProps}
                    {...providedDraggable.draggableProps}
                    tabIndex={undefined}
                  >
                    <Form.Control
                      className={styles.Fluid}
                      name={`ingredientsDto[${index}].name`}
                      placeholder={`Ingredient ${index + 1}`}
                      // isInvalid={errors[`ingredient${item.id}`]}
                      ref={register()}
                    />
                    {fields.length > 1 && (
                      <Button
                        className="ml-3 py-1 cancel"
                        style={{ padding: "2px 13px" }}
                        onClick={() => remove(index)}
                        tabIndex={-1}
                      >
                        x
                      </Button>
                    )}
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

export default IngredientsField;
