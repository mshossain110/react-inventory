import { useRef, FormEventHandler } from 'react';
import { useForm } from '@inertiajs/react';
import { Button, Input } from '@nextui-org/react';
import {
    Modal,
    ModalContent,
    ModalBody,
    ModalFooter,
    useDisclosure
} from "@nextui-org/react";

export default function DeleteUserForm({ className = '' }: { className?: string }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const passwordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });


    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => onOpenChange(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };



    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Delete Account</h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Once your account is deleted, all of its resources and data will be permanently deleted. Before
                    deleting your account, please download any data or information that you wish to retain.
                </p>
            </header>

            <Button color='primary' className='ms-4' onClick={onOpen}>Delete Account</Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form onSubmit={deleteUser} className="p-6">
                            <ModalBody >Modal Title

                                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                                    Are you sure you want to delete your account?
                                </h2>

                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    Once your account is deleted, all of its resources and data will be permanently deleted. Please
                                    enter your password to confirm you would like to permanently delete your account.
                                </p>

                                <Input
                                    id="password"
                                    type='password'
                                    name="password"
                                    radius='none'
                                    value={data.password}
                                    className="my-y block w-full"
                                    autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    label="Password"
                                    errorMessage={errors.password}
                                    isRequired
                                />

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose} disabled={processing}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose} disabled={processing} type='submit'>
                                    Action
                                </Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>

            </Modal>
        </section>
    );
}
