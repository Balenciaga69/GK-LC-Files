namespace S2727 {
  type JSONValue =
    | null
    | boolean
    | number
    | string
    | JSONValue[]
    | { [key: string]: JSONValue }
  type Obj = Record<string, JSONValue> | JSONValue[]
  const x: number[] = []

  // 記住: Array也能作為 Object操作
  function isEmpty(obj: Obj): boolean {
    if (Array.isArray(obj)) return obj.length === 0
    return Object.keys(obj).length === 0
  }
}
