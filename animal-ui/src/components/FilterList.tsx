import {
  Box,
  Checkbox,
  CheckboxGroup,
  VStack,
  Divider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ViewFavorites from "./ViewFavorites";

interface Props {
  animalType: string[];
  setAnimalType: (value: string[]) => void;
  animalBehavior: string[];
  setAnimalBehavior: (value: string[]) => void;
}

const FilterList = ({
  animalType,
  setAnimalType,
  animalBehavior,
  setAnimalBehavior,
}: Props) => {
  const cardBackgroundColor = useColorModeValue("gray.100", "gray.700");
  const cardBorderColor = useColorModeValue("gray.350", "white");

  return (
    <Box
      width="200px"
      padding="20px"
      border="1px"
      borderRadius="md"
      position="sticky"
      top="0"
      bg={cardBackgroundColor}
      borderColor={cardBorderColor}
    >
      <VStack spacing={4} align="stretch">
        <Text fontSize="lg" fontWeight="bold">
          Animal Type:
        </Text>
        <CheckboxGroup
          colorScheme="teal"
          value={animalType}
          onChange={(values) => {
            setAnimalType(values as string[]);
          }}
        >
          <Checkbox value="cat" mb="2">
            Cat
          </Checkbox>
          <Checkbox value="dog" mb="2">
            Dog
          </Checkbox>
          <Checkbox value="other" mb="2">
            Other
          </Checkbox>
        </CheckboxGroup>
        <Divider borderWidth="1px" borderColor="gray.500" />
        <Text fontSize="lg" fontWeight="bold">
          Animal Behavior:
        </Text>
        <CheckboxGroup
          colorScheme="teal"
          value={animalBehavior}
          onChange={(values) => {
            setAnimalBehavior(values as string[]);
          }}
        >
          <Checkbox value="Good with other animals" mb="2">
            Good with other animals
          </Checkbox>
          <Checkbox value="Good with children" mb="2">
            Good with children
          </Checkbox>
          <Checkbox value="Animal must be leashed at all times" mb="2">
            Animal must be leashed at all times
          </Checkbox>
        </CheckboxGroup>
      </VStack>
      <ViewFavorites />
    </Box>
  );
};

export default FilterList;
