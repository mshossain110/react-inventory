import WarehouseSelect from "@/Components/WarehouseSelect";
import { productTable } from "@/types";
import { router, useForm } from "@inertiajs/react";
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
import axios from "axios";
import { FormEvent } from "react";
type badFrom = {
    warehouse: number;
};
export default function TransferAction({ item }: { item: productTable }) {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

    const { data, setData, post, processing, errors } = useForm<badFrom>(
        {
            warehouse: 0,
        }
    );

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios
            .put(route("api.product-item.actions.transfer", { id: item.id }), data)
            .then((res) => {
                onClose();
                router.reload();
            });
    };

    return (
        <>
            <Button radius="none" size="sm" onPress={onOpen}>
                Transfer
            </Button>
            <Modal radius="none" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form onSubmit={handleSubmit}>
                            <ModalHeader className="flex flex-col gap-1">
                                Transfer to a Warehouse
                            </ModalHeader>
                            <ModalBody>
                                <WarehouseSelect warehouse={data.warehouse} setWarehouse={(e) => setData('warehouse', parseInt(e.target.value))}></WarehouseSelect>
                            </ModalBody>
                            <ModalFooter>
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
