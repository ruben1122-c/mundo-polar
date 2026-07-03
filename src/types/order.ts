export type ShippingMethod = "delivery" | "store_pickup";
export type PaymentMethod = "card" | "yape" | "plin";

export interface CreateOrderPayload {
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  shipping_method: ShippingMethod;
  shipping_address?: Record<string, string>;
  payment_method: PaymentMethod;
  notes?: string;
  items: Array<{
    product_reference: string;
    quantity: number;
  }>;
}

export interface OrderResponse {
  id: string;
  order_number: string;
  status: "pending" | string;
  payment_status: "unpaid" | string;
  total: number | string;
}
