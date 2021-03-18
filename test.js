const telnyx = require('telnyx')('KEY017701FEE4E0F34990DC70109E2F27CA_mCPVsB7e2bv1V3VehdYKmb');

telnyx.numberOrdersnod.list(
  {
  },
  function(err, response) {
    // asynchronously called
    console.log(response);
  }
);

