// 'use strict';

// var utils = require('../../testUtils');
// var telnyx = utils.getTelnyxMock();
// var expect = require('chai').expect;

// var TEST_AUTH_KEY = utils.getUserTelnyxKey();

// var addressData = {
//   address_book: true,
//   administrative_area: 'IL',
//   borough: 'Guadalajara',
//   neighborhood: 'Ciudad de los deportes',
//   business_name: 'Kon',
//   country_code: 'us',
//   extended_address: 'Suite 123',
//   first_name: 'Alfred',
//   last_name: 'Foster',
//   locality: 'Chicago',
//   postal_code: '2904',
//   street_address: '311 W Superior Street',
// };

// describe('Address', function () {
//   describe('list', function () {
//     function responseFn(response) {
//       expect(response).to.be.an('array');
//       for (let index = 0; index < response.length; index++) {
//         const row = response[index];
//         expect(row).to.have.property('first_name');
//         expect(row).to.have.property('last_name');
//         expect(row).to.have.property('phone_number');
//         expect(row).to.have.property('business_name');
//         expect(row).to.have.property('street_address');
//         expect(row).to.have.property('extended_address');
//         expect(row).to.have.property('locality');
//         expect(row).to.have.property('administrative_area');
//         expect(row).to.have.property('postal_code');
//         expect(row).to.have.property('country_code');
//         expect(row).to.have.property('address_book');
//       }
//     }

//     it('Sends the correct request', function () {
//       return telnyx.addresses.list().then(responseFn);
//     });

//     it('Sends the correct request [with specified auth]', function () {
//       return telnyx.addresses
//         .list(
//           {
//             page: 1,
//           },
//           TEST_AUTH_KEY
//         )
//         .then(responseFn);
//     });
//   });

//   describe('create', function () {
//     function responseFn(response) {
//       expect(response).to.have.property('id');
//       expect(response).to.have.property('first_name');
//       expect(response).to.have.property('last_name');
//       expect(response).to.have.property('business_name');
//       expect(response).to.have.property('street_address');
//       expect(response).to.have.property('extended_address');
//       expect(response).to.have.property('locality');
//       expect(response).to.have.property('administrative_area');
//       expect(response).to.have.property('postal_code');
//       expect(response).to.have.property('country_code');
//       expect(response).to.have.property('address_book');
//     }

//     it('Sends the correct request', function () {
//       return telnyx.addresses.create(addressData).then(responseFn);
//     });

//     it('Sends the correct request [with specified auth]', function () {
//       return telnyx.addresses
//         .create(addressData, TEST_AUTH_KEY)
//         .then(responseFn);
//     });
//   });

//   describe('retrieve', function () {
//     function responseFn(response) {
//       expect(response).to.have.property('id');
//       expect(response).to.have.property('first_name');
//       expect(response).to.have.property('last_name');
//       expect(response).to.have.property('business_name');
//       expect(response).to.have.property('street_address');
//       expect(response).to.have.property('extended_address');
//       expect(response).to.have.property('locality');
//       expect(response).to.have.property('administrative_area');
//       expect(response).to.have.property('postal_code');
//       expect(response).to.have.property('country_code');
//       expect(response).to.have.property('address_book');
//     }

//     it('Sends the correct request', function () {
//       return telnyx.addresses.retrieve('1').then(responseFn);
//     });

//     it('Sends the correct request [with specified auth]', function () {
//       return telnyx.addresses.retrieve('1', TEST_AUTH_KEY).then(responseFn);
//     });
//   });

//   describe('del', function () {
//     function responseFn(response) {
//       expect(response).to.have.property('id');
//       expect(response).to.have.property('first_name');
//       expect(response).to.have.property('last_name');
//       expect(response).to.have.property('business_name');
//       expect(response).to.have.property('street_address');
//       expect(response).to.have.property('extended_address');
//       expect(response).to.have.property('locality');
//       expect(response).to.have.property('administrative_area');
//       expect(response).to.have.property('postal_code');
//       expect(response).to.have.property('country_code');
//       expect(response).to.have.property('address_book');
//     }

//     it('Sends the correct request', function () {
//       return telnyx.addresses.del('1').then(responseFn);
//     });

//     it('Sends the correct request [with specified auth]', function () {
//       return telnyx.addresses.del('1', TEST_AUTH_KEY).then(responseFn);
//     });
//   });

//   describe('Nested', function () {
//     function responseFn(response) {
//       if (response.data) {
//         expect(response.data).to.have.property('id');
//         expect(response.data).to.have.property('street_address');
//         expect(response.data).to.have.property('postal_code');
//         expect(response.data).to.have.property('first_name');
//         expect(response.data).to.have.property('last_name');
//         expect(response.data).to.have.property('locality');
//         expect(response.data).to.include({record_type: 'address'});
//       }
//     }

//     describe('del', function () {
//       it('Sends the correct request', function () {
//         return telnyx.addresses.create(addressData).then(function (response) {
//           const mp = response.data;
//           return mp.del().then(responseFn);
//         });
//       });
//       it('Sends the correct request [with specified auth]', function () {
//         return telnyx.addresses.retrieve('123').then(function (response) {
//           const mp = response.data;
//           return mp.del(TEST_AUTH_KEY).then(responseFn);
//         });
//       });
//     });
//   });
// });
