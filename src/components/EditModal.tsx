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

type EditModalProps = {
  isOpen: boolean;
  onClose: () => void;
  domain: string;
};

const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, domain }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Edit {domain}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <FormControl>
          <FormLabel textAlign="center">Assigned Address</FormLabel>
          <Input size="lg" placeholder="0xAjFiefe9fe129" />
          <FormHelperText>The address {domain} points too</FormHelperText>
        </FormControl>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme="orange">Save</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default EditModal;
