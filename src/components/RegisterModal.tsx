import React, { useState } from "react";
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
import { encodeNameAsFelt } from "src/utils/felts";
import { useSNSContract } from "~/hooks/sns";
import { useStarknet, useStarknetInvoke } from "@starknet-react/core";

type RegisterModalProps = {
  isOpen: boolean;
  onClose: () => void;
  name: string;
};

const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  name,
}) => {
  const { contract } = useSNSContract();
  const { account } = useStarknet();
  const { invoke, reset, ...status } = useStarknetInvoke({
    contract,
    method: "sns_register",
  });
  const [result, setResult] = useState("");

  const handleRegister = () => {
    console.log("search:");
    console.log(name);
    const encodedName = encodeNameAsFelt(name);
    console.log("encoded search:");
    console.log(encodedName);
    (async () => {
      const res = await invoke({ args: [encodedName] });
      onClose();
      setResult(JSON.stringify(res));
    })();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Register {name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel textAlign="center">Registration Time (Years)</FormLabel>
            <Input size="lg" placeholder="1" />
            <FormHelperText>
              How long do you want to register for?
            </FormHelperText>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="orange" onClick={handleRegister}>
            Register
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RegisterModal;
