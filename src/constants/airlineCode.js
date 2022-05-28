export const airlineCode = [
   {
      code: 'VJ',
      name: 'Vietjet Air',
      logo: 'https://static.wixstatic.com/media/9d8ed5_aae4d32e8b1c4dfcb9f22daea096e435~mv2.jpg/v1/fill/w_1339,h_837,al_c,q_85/9d8ed5_aae4d32e8b1c4dfcb9f22daea096e435~mv2.jpg',
   },
   {
      code: 'VN',
      name: 'Vietnam Airline',
      logo: 'https://static.mservice.io/img/momo-upload-api-210913165837-637671491179599537.jpg',
   },
   {
      code: 'QH',
      name: 'Bamboo Airways',
      logo: 'https://www.frankfurt-airport.com/content/dam/fraport-travel/airport/fl%C3%BCge-und-airlines/airlines/airline-icons_1_1/QH_Bamboo%20Airways.png/_jcr_content/renditions/original./QH_Bamboo%20Airways.png',
   },
];

export default function getAirlineByCode(code) {
   return airlineCode.find((l) => l.code === code);
}
