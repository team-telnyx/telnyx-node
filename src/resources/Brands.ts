import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const Brands = TelnyxResource.extend({
  path: 'brand',
  basePath: '/10dlc/',
  includeBasic: ['create', 'list'],

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/brand/{brandId}',
    urlParams: ['brandId'],
  }),

  update: telnyxMethod({
    method: 'PUT',
    path: '/brand/{brandId}',
    urlParams: ['brandId'],
  }),

  del: telnyxMethod({
    method: 'DELETE',
    path: '/brand/{brandId}',
    urlParams: ['brandId'],
  }),

  resend2faEmail: telnyxMethod({
    method: 'POST',
    path: '/brand/{brandId}/2faEmail',
    urlParams: ['brandId'],
  }),

  listExternalVettings: telnyxMethod({
    method: 'GET',
    path: '/brand/{brandId}/externalVetting',
    urlParams: ['brandId'],
    methodType: 'list',
  }),

  exportExternalVettings: telnyxMethod({
    method: 'PUT',
    path: '/brand/{brandId}/externalVetting',
    urlParams: ['brandId'],
  }),

  orderExternalVettings: telnyxMethod({
    method: 'POST',
    path: '/brand/{brandId}/externalVetting',
    urlParams: ['brandId'],
  }),

  revet: telnyxMethod({
    method: 'PUT',
    path: '/brand/{brandId}/revet',
    urlParams: ['brandId'],
  }),

  feedback: telnyxMethod({
    method: 'GET',
    path: '/brand/feedback/{brandId}',
    urlParams: ['brandId'],
  }),
});
