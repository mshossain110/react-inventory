import { useForm } from "@inertiajs/react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
} from "@nextui-org/react";
type badFrom = {
    note: string;
    warehouse: number;
};
export default function ReplaceAction() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { data, setData, post, processing, errors } = useForm<badFrom>({
        note: '',
        warehouse: 0,
    });
    return (
        <>
            <Button radius="none" size="sm" onPress={onOpen}>
                Replace
            </Button>
            <Modal radius="none" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form>
                            <ModalHeader className="flex flex-col gap-1">
                                Replace
                            </ModalHeader>
                            <ModalBody>


                                <p>Replace Wtih sold mobile and give option receive money</p>
                                <p>Replace with</p>
                                <p>if it is defferent mobile</p>
                                <p>sell price</p>
                                <p>Receive Money</p>
                                <p>Value of returned mobile</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    radius="none"
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                <Button
                                    radius="none"
                                    color="primary"
                                    type="submit"
                                >
                                    Bad
                                </Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
