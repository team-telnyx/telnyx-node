'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

var fakeRefreshToken = 'eyJhbGciOiJFZDI1NTE5IiwidHlwIjoiSldUIn0.eyJhdWQiOiJ0ZWxueXhfYWNjZXNzX3Rva2VuIiwiZXhwIjoxNjE4NTcyNzI2LCJncmFudHMiOlt7ImFjdGlvbnMiOlsiam9pbiJdLCJyZXNvdXJjZXMiOlsidGVsbnl4OnZpZGVvOnJvb21zOmNkM2E0MTk3LWM5YzYtNDlmNC04YWQ3LTdhYWI4MzMyODZjYyJdLCJzdWJqZWN0cyI6WyJ0ZWxueXg6dXNlcnM6YjI4ZGZkYWMtMzQyYS00MDc4LWFiM2QtMjhiNWEwMjNkMzJmIl19XSwiZ3JhbnRzX3ZlcnNpb24iOiIxLjAuMCIsImlhdCI6MTYxODQ4NjMyNiwiaXNzIjoidGVsbnl4X2FjY2Vzc190b2tlbiIsImp0aSI6IjZkNGQyNjE1LWVhZTctNDRjOC1hMjkzLTZkMWNlYThiNjIwYiIsIm5iZiI6MTYxODQ4NjMyNSwic3ViIjoibnVsbCIsInR5cCI6InJlZnJlc2gifQ.GKyyPIsZHgtiqOuJlt6K-m9IsCVzzZSNZX4LIYuuc1-pz54NyDza-eiLhiJsF8VfjaJuYMv2QTd72A8INsqVCg'

describe('AccessTokens Resource', function () {
  describe('create', async function () {
    const response = await telnyx.accessTokens.create({
      grants: [
        {
          actions: ['join'],
          resources: ['telnyx:video:rooms:cd3a4197-c9c6-49f4-8ad7-7aab833286cc'],
        }
      ],
      ttl_secs: 600,
      refresh_token_ttl_secs: 86400
    });

    expect(response.data).to.have.property('access_token');
    expect(response.data).to.have.property('access_token_expires_at');
    expect(response.data).to.have.property('refresh_token');
    expect(response.data).to.have.property('refresh_token_expires_at');
  })

  describe('refresh', async function () {
    const response = await telnyx.accessTokens.refresh({refresh_token: fakeRefreshToken);

    expect(response.data).to.have.property('access_token');
    expect(response.data).to.have.property('access_token_expires_at');
  })
})
