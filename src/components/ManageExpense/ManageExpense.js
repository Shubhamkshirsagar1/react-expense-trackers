import React, { useState ,useEffect } from "react";
import uniqid from "uniqid";
import { useSelector, useDispatch } from "react-redux";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Card,
  CardBody,
  Badge,
  Button,
} from "@chakra-ui/react";

import Filters from "./Filters";
import { DELETE_EXPENSE } from "../../store/action";
import Nav from "../Nav/Nav";

const filterStyle = {
  width: "100%",
  height: "100vh",
  background: "dodgerblue",
};

const ManageExpense = () => {
  const store = useSelector((state) => state);
  // console.log("MAnageExpenses",store);
  const [filteredExpenses, setFilteredExpenses] = useState(store);
  // console.log("filtereddd",filteredExpenses);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   setFilteredExpenses(store)
  // }, [store.length])

  useEffect(() => {
    setFilteredExpenses(store)
  }, [store])
  
  const handleDelete = (id) => {
    dispatch({ type: DELETE_EXPENSE, id: id });
  };

  return (
    <div style={filterStyle}>
      <Nav />
      <Filters
        filteredExpenses={filteredExpenses}
        setFilteredExpenses={setFilteredExpenses}
      />

      <Card size="md" mr={12} ml={12} mb={30}>
        <CardBody>
          <TableContainer>
            <Table variant="striped" colorScheme="twitter">
              <Thead>
                <Tr>
                  <Th>Sr. No</Th>
                  <Th>Title</Th>
                  <Th>Amount</Th>
                  <Th>Expense Type</Th>
                  <Th>Date</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {/* {
                  console.log("stringggg" , filteredExpenses , store)
                } */}
                {filteredExpenses.map((expenseobj, idx) => {

                  return (
                    <Tr key={uniqid()}>
                      <Td>{idx + 1}</Td>
                      <Td>{expenseobj.title}</Td>
                      <Td>INR {expenseobj.amount}</Td>
                      <Td>
                        <Badge
                          colorScheme={
                            expenseobj.expenseType === "EXPENSE"
                              ? "red"
                              : "green"
                          }
                        >
                          {" "}
                          {expenseobj.expenseType}
                        </Badge>
                      </Td>
                      <Td>{expenseobj.date}</Td>
                      <Td>
                        {" "}
                        <Button
                          leftIcon={<DeleteIcon />}
                          colorScheme="red"
                          onClick={() => {
                            handleDelete(expenseobj.id);
                          }}
                        >
                          Delete
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </div>
  );
};

export default ManageExpense;
