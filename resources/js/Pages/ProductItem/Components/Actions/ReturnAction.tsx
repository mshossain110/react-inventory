import { useForm, router } from "@inertiajs/react";
import { Productitem, productTable } from "@/types";
import {FormEvent} from 'react'
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
    Textarea,
} from "@nextui-org/react";
import axios from "axios";
type returnFrom = {
    note: string;
    amount: number;
};
export default function ReturnAction({ item }: { item: productTable }) {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
    const { data, setData, put, processing, errors } = useForm<returnFrom>({
        note: '',
        amount: 0,
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios.put(route("api.product-item.actions.return", { id: item.id }))
            .then(() => {
                    onClose();
                    router.reload();
                
            })
    };
    return (
        <>
            <Button radius="none" size="sm" onPress={onOpen}>
                Return
            </Button>
            <Modal radius="none" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form onSubmit={handleSubmit}>
                            <ModalHeader className="flex flex-col gap-1">
                                Return
                            </ModalHeader>
                            <ModalBody>
                                <p>Product: {item.name}</p>
                                <p>Sell Price: {item.sell_price}</p>
                                <p>Sell Date: {item.sold_at}</p>
                                <p>profit: {item.profit}</p>
                                <p>Sold from: {item.warehouse_name}</p>
                                <p>Given Amount</p>
                                <Input
                                    id="amount"
                                    name="amount"
                                    label="Given Amount"
                                    type="number"
                                    radius="none"
                                    isRequired
                                    onChange={(e) =>
                                        setData(
                                            "amount",
                                            parseInt(e.target.value)
                                        )
                                    }
                                />
                                <Textarea
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
                                    Return
                                </Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
