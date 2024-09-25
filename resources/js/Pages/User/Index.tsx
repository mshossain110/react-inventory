import { PageProps } from "@/types";
import UsersTable from "./Partials/UsersTable";

function Index({ auth }: PageProps) {
    return (
        <UsersTable />
    )
}