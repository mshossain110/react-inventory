import { router, useForm } from "@inertiajs/react";
import { productTable } from "@/types";
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
import { FormEvent, useCallback } from "react";
type SellForm = {
    sell_price: number;
    profit: number;
    invoice: number;
};
export default function SellAction({ item }: { item: productTable }) {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
    const defaultData = {
        sell_price: 0,
        profit: 0,
        invoice: 0,
    }
    const { data, setData, post, processing, errors } = useForm<SellForm>(defaultData);

    const handelSellPirce = useCallback((sell: number) => {
        setData( { ...defaultData, ...{sell_price: sell, profit: (sell - item.buy_price)} });
    }, [])


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios.put(route('api.product-item.actions.sold', {id: item.id}), data)
            .then(res => {
                onClose()
                router.reload()
            })
    }

    return (
        <>
            <Button radius="none" size="sm" onPress={onOpen}>
                Sell
            </Button>
            <Modal radius="none" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form onSubmit={handleSubmit}>
                            <ModalHeader className="flex flex-col gap-1">
                                New Sell
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
                                    value={data.sell_price.toString()}
                                    onChange={(e) => handelSellPirce(parseInt(e.target.value))}
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
                                    Sell Action
                                </Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
