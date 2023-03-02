import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardBody,
  Text,
  Input,
  Select,
  Flex,
  Button,
  useToast,
} from "@chakra-ui/react";

const Filters = ({ filteredExpenses, setFilteredExpenses }) => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");

  const store = useSelector((state) => state);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "month") setMonth(value);
    else if (name === "year") setYear(value);
    else if (name === "type") setType(value);
  };
  const toast = useToast();
  const handleFilters = () => {
    if (!type || !month || !year) {
      // alert("Please select type, month, and year to filter expenses.");
      toast({
        title: "Please select type, month, and year to filter expenses.",
        duration: 5000,
        position: "top",
        status: "error",
        isClosable: true,
      });
      return;
    }
    const newData = store.filter((expenseObj) => {
      // console.log("Date",expenseObj.date);
      const expenseDate = new Date(expenseObj.date);
      const expenseMonth = expenseDate.getMonth() + 1;
      const expenseYear = expenseDate.getFullYear();
      if (
        expenseObj.expenseType === type.toUpperCase() &&
        expenseMonth === parseInt(month) &&
        expenseYear === parseInt(year)
      ) {
        return expenseObj;
      }
    });
    console.log("newData", newData);
    setFilteredExpenses(newData);
  };

  const handleResetFilters = () => {
    setFilteredExpenses(store);
  };

  return (
    <Card size="md" mr={12} ml={12} mb={30}>
      <CardBody>
        <Flex justifyContent="space-around">
          <Flex flexDirection="column" mr={2} ml={2}>
            <Text mb="8px">Month</Text>
            <Input
              value={month}
              name="month"
              onChange={handleChange}
              size="md"
            />
          </Flex>
          <Flex flexDirection="column" mr={2} ml={2}>
            <Text mb="8px">Year</Text>
            <Input value={year} name="year" onChange={handleChange} size="md" />
          </Flex>
          <Flex flexDirection="column" mr={2} ml={2}>
            <Text mb="8px">Expense Type</Text>
            <Select name="type" value={type} onChange={handleChange}>
              <option value="EXPENSE">Expense</option>
              <option value="INCOME">Income</option>
            </Select>
          </Flex>
          <Button mt={4} ml={40} colorScheme="twitter" onClick={handleFilters}>
            Filter Expense
          </Button>
          <Button
            mt={4}
            ml={40}
            colorScheme="twitter"
            onClick={handleResetFilters}
          >
            Reset
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Filters;

// const handleFilters = () => {
//   const newData = store.filter((expenseObj) => {
//     if (expenseObj.expenseType === type.toUpperCase()) {
//       return expenseObj;
//     }
//   });
//   console.log("newData" , newData);
//   setFilteredExpenses(newData);
// };
