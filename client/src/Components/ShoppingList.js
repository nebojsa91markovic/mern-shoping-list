import React, { useState, useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";
import store from "../store";
import { getItems, deleteItem } from "../actions/itemActions";
import ItemModal from "./ItemModal";

const ShoppingList = () => {
  const [items, setItems] = useState([]);

  const addNewItem = () => {
    const name = prompt("Enter Item");
    name && setItems((prevState) => [...prevState, { id: uuidv4(), name }]);
  };

  const removeItem = (id) => {
    store.dispatch(deleteItem(id));
  };

  store.subscribe(() => setItems(store.getState().item.items));

  useEffect(() => {
    setItems(store.dispatch(getItems()));
  }, []);

  return (
    <Container>
      <ItemModal />
      {items && (
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    color="danger"
                    size="small"
                    style={{ marginRight: "0.5rem" }}
                    onClick={() => removeItem(_id)}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      )}
    </Container>
  );
};

export default ShoppingList;
