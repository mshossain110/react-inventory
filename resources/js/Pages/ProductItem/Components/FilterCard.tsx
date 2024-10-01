import { Card, CardBody, DateRangePicker, Input } from "@nextui-org/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { ChangeEvent, ChangeEventHandler } from "react";
import { useState, useEffect } from "react";
import { usePage, router } from "@inertiajs/react";

export default function FilterCard() {

  const params = route().params;
  const [search, setSearch] = useState(params.search??'')
  const page = usePage();


  useEffect(() => {
    let time = undefined;
    // if (search) {
    //   time = setTimeout(() => {
    //     router.get(page.url, { search: search }, { replace: true })
    //   }, 3000);
    // }
    
    // const time = setInterval(() => {
    //   router.get(page.url, { search: search }, { replace: true })
    // }, 300)

    return () => clearTimeout(time);
  }, [search]);

  return (
    <Card className="mb-8">
      <CardBody>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input
            type="text"
            label="Search"
            placeholder="Search Product"
            labelPlacement="outside"
            radius="none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            startContent={
              <MagnifyingGlassIcon className="w-6 h-6" />
            }
          />
        </div>

      </CardBody>
    </Card>
  );
}