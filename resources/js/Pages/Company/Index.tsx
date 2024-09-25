import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps, Company } from "@/types";

export default function Index({
    auth,
    companies,
}: PageProps<{ companies: Company[] }>) {
    const columns =[
        {
            key: 'name'
        },
        {
            key: 'action'
        }
    ];
    return (
        <AuthenticatedLayout>
            <Head title="Companies" />

            <div className="py-12">
                {JSON.stringify(companies, null, 2)}
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
