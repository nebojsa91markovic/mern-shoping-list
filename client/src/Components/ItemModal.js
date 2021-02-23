import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import store from "../store";
import { addItem } from "../actions/itemActions";

const ItemModal = () => {
  const [itemName, setItemName] = useState("");
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const onSubmit = (e) => {
    e.preventDefault();
    store.dispatch(addItem(itemName));
    toggle();
  };

  return (
    <div>
      <Button color="dark" style={{ marginBottom: "2rem" }} onClick={toggle}>
        Add Item
      </Button>
      <Modal isOpen={modal}>
        <ModalHeader toggle={toggle}>Add To Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input
                type="text"
                name="itemName"
                id="item"
                placeholder="Add shopping item"
                onChange={(e) => setItemName(e.target.value)}
              />
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ItemModal;
