import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

describe('Test endpoint response', () => {
  let originalTimeout = 0
  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000
  })

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
  })
  it('gets api/images/resize endpoint', async () => {
    const response = await request.get(
      '/api/images/resize?filename=pyramid&width=300&height=300'
    )
    expect(response.status).toBe(200)
  })
})
