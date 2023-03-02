import React, { useState } from "react";
import Nav from "../Nav/Nav";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  CardBody,
  Card,
  Input,
  Select,
  InputGroup,
  InputLeftElement,
  Heading,
  Button,
  useToast,
} from "@chakra-ui/react";

import { ADD_EXPENSE } from "../../store/action";
import { PATHS } from "../../paths";

const filterStyle = {
  width: "100%",
  height: "130vh",
  background: "dodgerblue",
};

const AddExpense = () => {
  const [formData, setFormData] = useState({
    title: "",
    Description: "",
    expenseType: "",
    amount: 0,
    date: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const Toast = useToast();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (
      formData.title !== "" &&
      formData.Description !== "" &&
      formData.expenseType !== "" &&
      formData.amount !== "" &&
      formData.date !== ""
    ) {
      dispatch({ type: ADD_EXPENSE, data: formData });
      navigate(PATHS.MANAGE_EXPENSE);
      Toast({
        title: "Added Expense Succesfully!!",
        duration: 4000,
        position: 'top',
        status:'success',
        isClosable: true,
      });
    } else {
      Toast({
        title: "Fill all the inputs!!!",
        duration: 4000,
        position: 'top',
        status:'error',
        isClosable: true,
      });
    }
  };

  return (
    <div style={filterStyle} mb={20} >
      <Nav />
      <Card size="md" mr={60} ml={60} >
        <CardBody >
          <Heading>Add Expense</Heading>
          <FormControl mt={3}>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={3}>
            <FormLabel>Desc</FormLabel>
            <Input
              type="text"
              name="Description"
              value={formData.Description}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={3}>
            <FormLabel>Expense Type</FormLabel>
            <Select
              name="expenseType"
              value={formData.expenseType}
              onChange={handleChange}
            >
              <option value="EXPENSE">Expense</option>
              <option value="INCOME">Income</option>
            </Select>
          </FormControl>
          <FormControl mt={3}>
            <FormLabel>Amount</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="green"
                fontSize="0.9em"
                children="INR"
              />
              <Input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
              />
            </InputGroup>
          </FormControl>

          <FormControl mt={3}>
            <FormLabel>Date</FormLabel>
            <Input
              placeholder="Select Date and Time"
              size="md"
              name="date"
              value={formData.date}
              onChange={handleChange}
              type="date"
            />
          </FormControl>
          <FormControl mt={3} mb={30}>
            <Button colorScheme="twitter" onClick={handleSubmit}>
              + Add
            </Button>
          </FormControl>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddExpense;
