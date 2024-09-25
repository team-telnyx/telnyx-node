import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const Brands = TelnyxResource.extend({
  path: 'brand',
  basePath: '/10dlc/',
  includeBasic: ['create', 'list', 'retrieve', 'update', 'delete'],

  ListExternalVettings: telnyxMethod({
    method: 'GET',
    path: '/brand/{brandId}/externalVetting',
    urlParams: ['brandId'],
  }),
  GetBrands: telnyxMethod({
    method: 'GET',
    path: '/brand',
  }),
  RevetBrand: telnyxMethod({
    method: 'PUT',
    path: '/brand/{brandId}/revet',
    urlParams: ['brandId'],
  }),
  DeleteBrand: telnyxMethod({
    method: 'DELETE',
    path: '/brand/{brandId}',
    urlParams: ['brandId'],
  }),
  GetBrandFeedbackById: telnyxMethod({
    method: 'GET',
    path: '/brand/feedback/{brandId}',
    urlParams: ['brandId'],
  }),
});
