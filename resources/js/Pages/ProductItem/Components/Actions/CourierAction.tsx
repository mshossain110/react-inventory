import { productTable } from "@/types";
import { router, useForm } from "@inertiajs/react";
import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from "@nextui-org/react";
import axios from "axios";
import { ChangeEvent, FormEvent } from "react";

type SellForm = {
    sell_price: number;
    profit: number;
    invoice?: number;
    courier_number?: string;
    paid: number;
};

export default function CourierAction({ item }: { item: productTable }) {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
    const { data, setData, post, processing, errors } = useForm<SellForm>({
        sell_price: 0,
        profit: 0,
        invoice: 0,
        courier_number: "",
        paid: 0,
    });
    const setSellPrice = (e: ChangeEvent<HTMLInputElement>) => {
        let sell = parseInt(e.target.value)
        setData({
            ...data,
            ...{ sell_price: sell, profit: sell - item.buy_price },
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios
            .put(route("api.product-item.actions.courier", { id: item.id }), data)
            .then((res) => {
                onClose();
                router.reload();
            });
    };


    return (
        <>
            <Button radius="none" size="sm" onPress={onOpen}>
                Courier
            </Button>
            <Modal radius="none" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form onSubmit={handleSubmit}>
                            <ModalHeader className="flex flex-col gap-1">
                                Courier
                            </ModalHeader>
                            <ModalBody>
                                <div>
                                    <p>Item: {item.name}</p>
                                    <p>Buying Price: {item.buy_price}</p>
                                    <p>Identity: {item.identity}</p>
                                </div>
                                <Input
                                    id="sell_price"
                                    name="sell_price"
                                    label="Sell Price"
                                    type="number"
                                    radius="none"
                                    onChange={setSellPrice}
                                    isRequired
                                />

                                <Input
                                    id="profit"
                                    name="profit"
                                    label="Profit"
                                    type="number"
                                    radius="none"
                                    value={data.profit.toString()}
                                    onChange={(e) =>
                                        setData(
                                            "profit",
                                            parseInt(e.target.value)
                                        )
                                    }
                                    isRequired
                                />
                                <Input
                                    id="paid"
                                    name="paid"
                                    label="Paid"
                                    type="number"
                                    radius="none"
                                    onChange={(e) =>
                                        setData(
                                            "paid",
                                            parseInt(e.target.value)
                                        )
                                    }
                                    isRequired
                                />
                                <Input
                                    id="invoice"
                                    name="invoice"
                                    label="Invoice"
                                    type="number"
                                    radius="none"
                                    onChange={(e) =>
                                        setData(
                                            "invoice",
                                            parseInt(e.target.value)
                                        )
                                    }
                                />
                                <Input
                                    id="courier_number"
                                    name="courier_number"
                                    label="Courier number"
                                    type="text"
                                    radius="none"
                                    onChange={(e) =>
                                        setData(
                                            "courier_number",
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
                                    Courier Action
                                </Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
