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
export default function ReturnAction() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { data, setData, post, processing, errors } = useForm<badFrom>({
        note: '',
        warehouse: 0,
    });
    return (
        <>
            <Button radius="none" size="sm" onPress={onOpen}>
                Return
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
                                <p>Return Product</p>
                                <p>Show Sell Price</p>
                                <p>Given Amount</p>
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
