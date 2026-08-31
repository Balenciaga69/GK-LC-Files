function removeElement(array: number[], val: number): number {
  let countRemovedElements = 0
  let originalArrayLength = array.length
  for (let i = array.length - 1; i > -1; i--) {
    if (array[i] === val) {
      array.splice(i, 1)
      countRemovedElements++
    }
  }
  return originalArrayLength - countRemovedElements
}

type F = (...p: any[]) => any

function debounce(fn: F, t: number): F {
  let id: ReturnType<typeof setTimeout>
  return function (...args) {
    clearTimeout(id)
    id = setTimeout(() => fn(...args), t)
  }
}
