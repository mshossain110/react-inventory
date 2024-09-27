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
import { ChangeEvent } from "react";
type SellForm = {
    sell_price: number;
    benefit: number;
    invoice: number;
};
export default function SellAction() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { data, setData, post, processing, errors } = useForm<SellForm>({
        sell_price: 0,
        benefit: 0,
        invoice: 0,
    });
    const setSellPrice = (e: ChangeEvent<HTMLInputElement>) => {
        setData("sell_price", parseInt(e.target.value));
    };

    return (
        <>
            <Button radius="none" size="sm" onPress={onOpen}>
                Sell
            </Button>
            <Modal radius="none" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form>
                            <ModalHeader className="flex flex-col gap-1">
                                New Sell
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
