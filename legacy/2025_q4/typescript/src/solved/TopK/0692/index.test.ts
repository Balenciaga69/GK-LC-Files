import { topKFrequent } from './index'

describe('692. Top K Frequent Words', () => {
  it('範例一', () => {
    expect(topKFrequent(["i","love","leetcode","i","love","coding"], 2)).toEqual(["i","love"])
  })
  it('範例二', () => {
    expect(topKFrequent(["the","day","is","sunny","the","the","the","sunny","is","is"], 4)).toEqual(["the","is","sunny","day"])
  })
})
