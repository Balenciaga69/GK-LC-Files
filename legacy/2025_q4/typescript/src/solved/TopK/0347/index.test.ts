import { topKFrequent } from './index'

describe('347. Top K Frequent Elements', () => {
  it('範例一', () => {
    expect(topKFrequent([1,1,1,2,2,3], 2).sort()).toEqual([1,2])
  })
  it('範例二', () => {
    expect(topKFrequent([1], 1)).toEqual([1])
  })
})
