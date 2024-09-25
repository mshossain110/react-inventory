import { useRef, FormEventHandler } from 'react';
import { useForm } from '@inertiajs/react';
import { Button, Input } from '@nextui-org/react';

export default function UpdatePasswordForm({ className = '' }: { className?: string }) {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword: FormEventHandler = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Update Password</h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Ensure your account is using a long, random password to stay secure.
                </p>
            </header>

            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                <Input
                    id="current_password"
                    type='password'
                    name="current_password"
                    radius='none'
                    value={data.current_password}
                    className="my-y block w-full"
                    autoComplete="current-password"
                    onChange={(e) => setData('current_password', e.target.value)}
                    label="Current Password"
                    errorMessage={errors.current_password}
                    isRequired
                />

                <Input
                    id="password"
                    type='password'
                    name="password"

                    ref={passwordInput}
                    radius='none'
                    value={data.password}
                    className="my-y block w-full"
                    autoComplete="current-password"
                    onChange={(e) => setData('password', e.target.value)}
                    label="Password"
                    errorMessage={errors.password}
                    isRequired
                />


                <Input
                    id="password_confirmation"
                    type='password'
                    name="password_confirmation"
                    radius='none'
                    value={data.password_confirmation}
                    className="my-y block w-full"
                    autoComplete="current-password"
                    onChange={(e) => setData('password_confirmation', e.target.value)}
                    label="Password"
                    errorMessage={errors.password_confirmation}
                    isRequired
                />

                <div className="flex items-center gap-4">
                    <Button color='primary' type='submit' disabled={processing}>Save</Button>
                </div>
            </form>
        </section>
    );
}
