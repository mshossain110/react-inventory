interface Base {
    id: number;
    created_at?: Date;
    updated_at?: Date;
}

export interface User extends Base {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export interface Company extends Base {
    name: string;
    tax_number?: string;
    tin_number?: string;
    logo?: string;
    product_visibilty?: boolean;
    manager?: User;
    warehouses?: Warehouse[]
}

export interface Warehouse extends Base {
    name: string
    mobile_number?: string
    address?: string
}

export interface Provider extends Base {
    name: string;
    email?: string;
    contract_name?: string;
    phone_number?: string;
    address?: string;
}

export interface Product extends Base {
    category_id: number;
    name: string;
    slug: string;
    SKU: string;
    description: string;
    quantity: number;
    buy_price: number;
    sell_price: number;
    details: any;
    productItems: Productitem[]
}

export interface Productitem extends Base {
    identity?: string;
    status: string;
    buy_price: number;
    sell_price?: number;
    profit?: number;
    sold_at?: Date;
    provider?: Provider;
    warehouse?: Warehouse;
    product?: Product;
}

export interface Applog extends Base {
    log_type: string;
    log: any;
    user: User;
    company: Company;
}

export const  ProductSatus =  {
    AVAILAVLE: 'available',
    COURIER: 'courier',
    BAD: 'bad',
    SOLD: 'sold',
    SERVICE: 'service',
    PROVIDER: 'provider',
}

export type productTable = Omit<Product, 'id' | 'productItems'> & Omit<Productitem, 'provider' | 'warehouse' | 'product'> & {warehouse_name: string}