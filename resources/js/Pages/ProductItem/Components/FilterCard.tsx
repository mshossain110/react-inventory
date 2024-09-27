import {Card, CardBody, DateRangePicker, Input} from "@nextui-org/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function FilterCard() {
  return (
    <Card className="mb-8">
      <CardBody>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <DateRangePicker 
                label="Date Range"
                radius="none"
                labelPlacement="outside"
            />
            <Input
                type="text"
                label="Search"
                placeholder="Search Product"
                labelPlacement="outside"
                radius="none"
                startContent={
                    <MagnifyingGlassIcon className="w-6 h-6" />
                }
                />
        </div>
        
      </CardBody>
    </Card>
  );
}