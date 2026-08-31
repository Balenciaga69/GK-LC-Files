import { TreeNode } from '../../utils/treeUtils'

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const stack: Array<[TreeNode | null, TreeNode | null]> = [[p, q]]

  while (stack.length) {
    const [a, b] = stack.pop()!

    if (a === null && b === null) continue
    if (a === null || b === null) return false
    if (a.val !== b.val) return false

    stack.push([a.left, b.left])
    stack.push([a.right, b.right])
  }

  return true
}
