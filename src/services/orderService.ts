import { API_BASE_URL } from "@/config/api";
import type { CreateOrderPayload, OrderResponse } from "@/types/order";

export async function createPendingOrder(
  payload: CreateOrderPayload,
  accessToken: string,
): Promise<OrderResponse> {
  const response = await fetch(`${API_BASE_URL}/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = (await response.json().catch(() => null)) as {
      detail?: string;
    } | null;
    throw new Error(
      errorBody?.detail ??
        `No se pudo registrar el pedido (HTTP ${response.status}).`,
    );
  }

  return (await response.json()) as OrderResponse;
}
