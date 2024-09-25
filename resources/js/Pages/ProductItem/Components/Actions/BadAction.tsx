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
export default function BadAction() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { data, setData, post, processing, errors } = useForm<badFrom>({
        note: '',
        warehouse: 0,
    });
    return (
        <>
            <Button radius="none" size="sm" onPress={onOpen}>
                Bad
            </Button>
            <Modal radius="none" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form>
                            <ModalHeader className="flex flex-col gap-1">
                                Find a folt
                            </ModalHeader>
                            <ModalBody>


                                <Input
                                    id="note"
                                    name="note"
                                    label="Note"
                                    type="text"
                                    radius="none"
                                    isRequired
                                    onChange={(e) =>
                                        setData(
                                            "note",
                                            e.target.value
                                        )
                                    }
                                />
                                <Input
                                    id="warehouse"
                                    name="warehouse"
                                    label="Warehouse"
                                    type="number"
                                    radius="none"
                                    isRequired
                                    onChange={(e) =>
                                        setData(
                                            "warehouse",
                                            parseInt(e.target.value)
                                        )
                                    }
                                    
                                />
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
