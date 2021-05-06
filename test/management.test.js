'use strict'

const H = require('./harness')

describe('#management-apis', function () {
  it('should successfully timeout operations', async function () {
    var bmgr = H.c.buckets()
    await H.throwsHelper(async () => {
      await bmgr.flushBucket('default', { timeout: 1 })
    }, H.lib.TimeoutError)
  }).timeout(1 * 1000)
})
