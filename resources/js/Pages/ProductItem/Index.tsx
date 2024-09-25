import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps, Product, Productitem } from "@/types";
import ProductItemsTable from './Components/ProductItemsTable';

export default function Index({
    auth,
    items,
}: PageProps<{ items: Productitem[] }>)
{

    return (
        <AuthenticatedLayout>
            <Head title="Companies" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <ProductItemsTable items={items}></ProductItemsTable>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}


