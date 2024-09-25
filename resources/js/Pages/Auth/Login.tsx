import React from 'react'; 
import { FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button, Checkbox, Input } from '@nextui-org/react';
import {EyeIcon} from '@heroicons/react/24/solid'
import {EyeSlashIcon} from '@heroicons/react/24/solid'



export default function Login({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <Input 
                    id='email'
                    type='email'
                    name='email'
                    radius='none'
                    value={data.email}
                    className="my-4 block w-full"
                    autoComplete="username"
                    label="Email"
                    errorMessage={errors.email}
                    onChange={(e) => setData('email', e.target.value)}
                />

                <Input
                    id="password"
                    type={isVisible ? "text" : "password"}
                    name="password"
                    radius='none'
                    value={data.password}
                    className="my-y block w-full"
                    autoComplete="current-password"
                    onChange={(e) => setData('password', e.target.value)}
                    label="Password"
                    errorMessage={errors.password}
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                          {isVisible ? (
                            <EyeSlashIcon className="text-2xl text-default-400 pointer-events-none" />
                          ) : (
                            <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
                          )}
                        </button>
                      }
                />



                <div className="block mt-4">
                    <Checkbox
                        name="remember"
                        checked={data.remember}
                        onChange={(e) => setData('remember', e.target.checked)}
                    >
                        Remember me
                    </Checkbox>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                            Forgot your password?
                        </Link>
                    )}
                    <Button color='primary' type='submit' className='ml-4' radius='none' disabled={processing}> Log in </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
