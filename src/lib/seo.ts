export interface JSONLDProps {
  type: 'Product' | 'WebSite' | 'Organization';
  data: any;
}

export function generateJSONLD({ type, data }: JSONLDProps) {
  const base = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return JSON.stringify(base);
}

export const sportsKitSchema = {
  name: 'sportsKit',
  url: 'https://sportskit.example',
  logo: 'https://sportskit.example/logo.png',
  description: 'Premium Sports Apparel and Kits with global 15-day delivery.',
  shippingDetails: {
    '@type': 'OfferShippingDetails',
    'deliveryTime': {
      '@type': 'ShippingDeliveryTime',
      'handlingTime': {
        '@type': 'QuantitativeValue',
        'minValue': 1,
        'maxValue': 3,
        'unitCode': 'd'
      },
      'transitTime': {
        '@type': 'QuantitativeValue',
        'minValue': 7,
        'maxValue': 12,
        'unitCode': 'd'
      }
    }
  }
};
