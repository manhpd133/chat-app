import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      )}
      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        
          <ModalContent h="410px">
            <ModalHeader>
              <div style={{display: "flex", justifyContent: "center", fontSize: "40px", fontFamily: "Work sans"}}>
              {user.name}
              </div>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div style={{display: "flex", justifyContent: "space-between",  flexDirection: "column",  alignItems: "center"}}>
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  src={user.pic}
                  alt={user.name}
                />
                <Text
                  fontSize={{ base: "28px", md: "30px" }}
                  fontFamily="Work sans"
                >
                  Email: {user.email}
                </Text>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
