import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, usePage } from "@inertiajs/react";
import { PageProps, Product, Productitem, productTable } from "@/types";
import ProductItemsTable from './Components/ProductItemsTable';
import FilterCard from "./Components/FilterCard";
import { useEffect, useState } from "react";

export default function Index({
    auth,
    items,
}: PageProps<{ items: productTable[] }>)
{

    return (
        <AuthenticatedLayout>
            <Head title="Companies" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <FilterCard />
                    <ProductItemsTable items={items}></ProductItemsTable>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}


