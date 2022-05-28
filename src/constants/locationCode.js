export const locationCode = [
   {
      code: 'SGN',
      city: 'Ho Chi Minh City',
      airport: 'Tansonnhat Intl',
   },
   {
      code: 'HPH',
      city: 'Hai Phong City',
      airport: 'Cat Bi Airport',
   },
];

export default function getLocationByCode(code) {
   return locationCode.find((l) => l.code === code);
}
