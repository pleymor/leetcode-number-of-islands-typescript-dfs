import Solver, { Cell } from './solver'

/**
 * Count the number of islands in a rectangle grid
 */
export function numIslands(grid: string[][]): number {
  const solver = new Solver(grid as Cell[][])
  return solver.countIslands()
}
