import { Productitem } from "@/types";
import { router, useForm } from "@inertiajs/react";
import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Textarea,
    useDisclosure,
} from "@nextui-org/react";
import axios from "axios";
import { FormEvent } from "react";
type From = {
    note: string;
};
export default function BadAction({ item }: { item: Productitem }) {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
    const { data, setData } = useForm<From>({
        note: '',
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios.put(route('api.product-item.actions.bad', {id: item.id}), data)
            .then(() => {
                onClose()
                router.reload()
            })
    }

    return (
        <>
            <Button radius="none" size="sm" onPress={onOpen}>
                Bad
            </Button>
            <Modal radius="none" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form onSubmit={handleSubmit}>
                            <ModalHeader className="flex flex-col gap-1">
                                Find a folt
                            </ModalHeader>
                            <ModalBody>

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
