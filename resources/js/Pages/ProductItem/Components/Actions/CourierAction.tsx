import { useForm } from "@inertiajs/react";
import { Productitem } from "@/types";
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
type SellForm = {
    sell_price: number;
    benefit: number;
    invoice: number;
    courier_number?:string;
};
export default function CourierAction({ item }: { item: Productitem }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { data, setData, post, processing, errors } = useForm<SellForm>({
        sell_price: 0,
        benefit: 0,
        invoice: 0,
        courier_number: ''
    });
    const setSellPrice = (e) => {
        setData("sell_price", parseInt(e.target.value));
    };

    return (
        <>
            <Button radius="none" size="sm" onPress={onOpen}>
                Courier
            </Button>
            <Modal radius="none" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form>
                            <ModalHeader className="flex flex-col gap-1">
                                Courier
                            </ModalHeader>
                            <ModalBody>
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
                                    id="benefit"
                                    name="benefit"
                                    label="Benefit"
                                    type="number"
                                    radius="none"
                                    onChange={(e) =>
                                        setData(
                                            "benefit",
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
                                    isRequired
                                />
                                <Input
                                    id="courier_number"
                                    name="courier_number"
                                    label="Invoice"
                                    type="text"
                                    radius="none"
                                    onChange={(e) =>
                                        setData(
                                            "courier_number",
                                            e.target.value
                                        )
                                    }
                                    isRequired
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
