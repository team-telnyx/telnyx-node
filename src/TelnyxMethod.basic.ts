import telnyxMethod from './TelnyxMethod';

export const create = telnyxMethod({
  method: 'POST',
});

export const list = telnyxMethod({
  method: 'GET',
  methodType: 'list',
});

export const retrieve = telnyxMethod({
  method: 'GET',
  path: '/{id}',
  urlParams: ['id'],
});

export const update = telnyxMethod({
  method: 'PATCH',
  path: '{id}',
  urlParams: ['id'],
});

// Avoid 'delete' keyword in JS
export const del = telnyxMethod({
  method: 'DELETE',
  path: '{id}',
  urlParams: ['id'],
});
