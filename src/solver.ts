export enum Cell {
  Water = '0',
  Land = '1'
}

/**
 * This class is responsible for counting the number of islands in a grid.
 * An island is a group of Land cells that are linked horizontally or vertically.
 * Diagonal links are not considered.
 * Use Deep First Search to visit an island.
 * Does not modify the grid.
 * Time complexity: O(n*n) where n is the number of cells in the grid
 * Space complexity: O(n) where n is the number of cells in the grid (for the visitedCells array)
 */
export default class Solver {
  private readonly visitedCells: boolean[][]

  constructor(private readonly grid: Cell[][]) {
    this.visitedCells = []
  }

  public countIslands(): number {
    let nb = 0

    const rowNb = this.grid.length
    const colNb = this.grid[0].length
    for (let i = 0; i < rowNb; i++) {
      for (let j = 0; j < colNb; j++) {
        if (this.visitIslandDfs(i, j)) nb++
      }
    }

    return nb
  }

  /**
   * Use Deep First Search to visit all the cells of the island.
   * Only horizontal and vertical neighbors are considered.
   * Returns true if the initially given cell is part of an island.
   */
  private visitIslandDfs(i: number, j: number): boolean {
    if (this.grid[i]?.[j] !== Cell.Land) return false
    if (this.isVisited(i, j)) return false

    this.markAsVisited(i, j)

    this.visitIslandDfs(i + 1, j) // visit the right cell
    this.visitIslandDfs(i, j + 1) // visit the bottom cell
    this.visitIslandDfs(i - 1, j) // visit the left cell
    this.visitIslandDfs(i, j - 1) // visit the top cell
    return true
  }

  private markAsVisited(i: number, j: number): void {
    this.visitedCells[i] ||= []
    this.visitedCells[i][j] = true
  }

  private isVisited(i: number, j: number): boolean {
    return this.visitedCells[i]?.[j]
  }
}
