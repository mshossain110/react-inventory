import WarehouseSelect from "@/Components/WarehouseSelect";
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
    warehouse: number;
};
export default function TransferAction({ item }: { item: Productitem }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const { data, setData, post, processing, errors } = useForm<badFrom>(
        {
            warehouse: 0,
        }
    );

    return (
        <>
            <Button radius="none" size="sm" onPress={onOpen}>
                Transfer
            </Button>
            <Modal radius="none" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form>
                            <ModalHeader className="flex flex-col gap-1">
                                Transfer to a Warehouse
                            </ModalHeader>
                            <ModalBody>
                                <WarehouseSelect warehouse={data.warehouse} setWarehouse={(e) => setData('warehouse', parseInt(e.target.value))}></WarehouseSelect>
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
                                    Transfer
                                </Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
