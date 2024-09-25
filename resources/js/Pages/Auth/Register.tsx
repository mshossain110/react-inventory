import React, { FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button, Input } from '@nextui-org/react';
import {EyeIcon} from '@heroicons/react/24/solid'
import {EyeSlashIcon} from '@heroicons/react/24/solid'

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);


    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <Input
                    id='name'
                    name='name'
                    radius='none'
                    value={data.name}
                    className="my-4 block w-full"
                    autoComplete='name'
                    onChange={(e) => setData('name', e.target.value)}
                    label="Name"
                    required
                    errorMessage={errors.name}
                />
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
                    isRequired
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
                    isRequired
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


                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        Already registered?
                    </Link>
                    <Button color='primary' className='ms-4' disabled={processing} >Register</Button>
                </div>
            </form>
        </GuestLayout>
    );
}
