import { mockService } from '@/data'

describe('Fetching data', () => {
  test('testing load data', () => {
    const data = mockService

    expect.assertions(1)
    const res = mockService()
    expect(Promise.resolve(res)).resolves.toBe(data)
  })
})
