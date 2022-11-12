import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
   ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react'

function Modals() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <h2 onClick={onOpen}  style={{color:"blue"}} >More</h2>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Slow Horse</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <h4>This quick-witted spy drama follows a dysfunctional team of MI5 agents—and their obnoxious boss, the notorious Jackson Lamb—as they navigate the espionage world’s smoke and mirrors to defend England from sinister forces.</h4>
            </ModalBody>
  
           
          </ModalContent>
        </Modal>
      </>
    )
  }

  export {Modals}