import type { PropsWithChildren } from "react";

type CheckoutSectionProps = PropsWithChildren<{
  description?: string;
  title: string;
}>;

export function CheckoutSection({
  children,
  description,
  title,
}: CheckoutSectionProps) {
  return (
    <section className="checkout-card">
      <header className="checkout-card-header">
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </header>
      {children}
    </section>
  );
}
