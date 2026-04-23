'use client';

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

interface PayPalButtonProps {
  amount: string;
  currency: string;
  onSuccess: (details: any) => void;
}

export default function PayPalComponent({ amount, currency, onSuccess }: PayPalButtonProps) {
  return (
    <PayPalScriptProvider options={{ "client-id": "test" }}>
      <PayPalButtons
        style={{ layout: "vertical", shape: "pill", color: "gold", label: "checkout" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                amount: {
                  currency_code: currency,
                  value: amount,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          if (actions.order) {
            const details = await actions.order.capture();
            onSuccess(details);
          }
        }}
      />
    </PayPalScriptProvider>
  );
}
