import { FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Button, Input } from '@nextui-org/react';
import { Head, useForm } from '@inertiajs/react';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.confirm'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Confirm Password" />

            <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                This is a secure area of the application. Please confirm your password before continuing.
            </div>

            <form onSubmit={submit}>
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
                <div className="flex items-center justify-end mt-4">
                    <Button color='primary' className="ms-4" disabled={processing}>
                        Confirm
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
