import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, Button, Text, Flex , useToast} from "@chakra-ui/react";
import { PATHS } from "../../paths";

const Nav = () => {
  const navigate = useNavigate();
  const toast = useToast()
  return (
    <div>
      <Card mb={50} background="ButtonShadow">
        <CardBody>
          <Flex justifyContent="space-between" alignItems="center">
            <Text color="dodgerblue" fontWeight="800" fontSize="2em">
              Money Movement Tracker
            </Text>
            <Button
              colorScheme="blue"
              onClick={() => {
                navigate(PATHS.ADD_EXPENSE);
              }}
            >
              Add Expense
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                navigate(PATHS.MANAGE_EXPENSE);
              }}
            >
              Manage Expense
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                window.localStorage.clear();
                navigate(PATHS.LOGIN);
                toast({
                  title: "Succesfully Logged Out!",
                  duration: 3000,
                  position: 'top',
                  status:'success',
                  isClosable: true,
                });
              }}
            >
              Logout
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </div>
  );
};

export default Nav;
