import React from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

type RegisterModalProps = {
  isOpen: boolean;
  onClose: () => void;
  address: string;
};

const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  address,
}) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Register {address}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <FormControl>
          <FormLabel textAlign="center">Registration Time (Years)</FormLabel>
          <Input size="lg" placeholder="1" />
          <FormHelperText>How long you want to register for</FormHelperText>
        </FormControl>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme="orange">Save</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default RegisterModal;
