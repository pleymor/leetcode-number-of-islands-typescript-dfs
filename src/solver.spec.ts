import Solver, { Cell } from './solver'

describe('Solver', () => {
  describe('countIslands', () => {
    it('should return 0 if no the is no Land cell', () => {
      const grid = [
        [Cell.Water, Cell.Water, Cell.Water],
        [Cell.Water, Cell.Water, Cell.Water],
        [Cell.Water, Cell.Water, Cell.Water],
        [Cell.Water, Cell.Water, Cell.Water]
      ]
      const solver = new Solver(grid)

      expect(solver.countIslands()).toEqual(0)
    })
    it('should return 1 if all Land cells are linked vertically or horizontally', () => {
      const grid = [
        [Cell.Water, Cell.Land, Cell.Land],
        [Cell.Water, Cell.Land, Cell.Water],
        [Cell.Water, Cell.Water, Cell.Water],
        [Cell.Water, Cell.Water, Cell.Water]
      ]
      const solver = new Solver(grid)

      expect(solver.countIslands()).toEqual(1)
    })
    it('should count 2 if Land cells are in diagonal only', () => {
      const grid = [
        [Cell.Water, Cell.Water, Cell.Land],
        [Cell.Water, Cell.Land, Cell.Water],
        [Cell.Water, Cell.Water, Cell.Water],
        [Cell.Water, Cell.Water, Cell.Water]
      ]
      const solver = new Solver(grid)

      expect(solver.countIslands()).toEqual(2)
    })
    it('should count 2 if Land cells are not linked', () => {
      const grid = [
        [Cell.Water, Cell.Water, Cell.Land],
        [Cell.Water, Cell.Land, Cell.Water],
        [Cell.Water, Cell.Water, Cell.Water],
        [Cell.Water, Cell.Water, Cell.Water]
      ]
      const solver = new Solver(grid)

      expect(solver.countIslands()).toEqual(2)
    })
    it('should solve complex grids', () => {
      const grid = [
        [Cell.Water, Cell.Land, Cell.Land, Cell.Land, Cell.Land],
        [Cell.Water, Cell.Land, Cell.Land, Cell.Water, Cell.Land],
        [Cell.Water, Cell.Land, Cell.Land, Cell.Land, Cell.Land],
        [Cell.Water, Cell.Water, Cell.Water, Cell.Water, Cell.Land],
        [Cell.Water, Cell.Land, Cell.Land, Cell.Land, Cell.Land],
        [Cell.Water, Cell.Land, Cell.Land, Cell.Land, Cell.Land],
        [Cell.Land, Cell.Water, Cell.Water, Cell.Land, Cell.Water],
        [Cell.Water, Cell.Water, Cell.Water, Cell.Water, Cell.Water],
        [Cell.Water, Cell.Water, Cell.Water, Cell.Water, Cell.Water],
        [Cell.Water, Cell.Water, Cell.Water, Cell.Water, Cell.Water],
        [Cell.Water, Cell.Water, Cell.Water, Cell.Water, Cell.Water],
        [Cell.Water, Cell.Water, Cell.Water, Cell.Water, Cell.Water],
        [Cell.Water, Cell.Water, Cell.Water, Cell.Land, Cell.Land],
        [Cell.Water, Cell.Water, Cell.Land, Cell.Land, Cell.Water],
        [Cell.Water, Cell.Land, Cell.Land, Cell.Land, Cell.Water],
        [Cell.Water, Cell.Water, Cell.Land, Cell.Land, Cell.Land],
        [Cell.Water, Cell.Water, Cell.Land, Cell.Water, Cell.Land],
        [Cell.Water, Cell.Water, Cell.Land, Cell.Water, Cell.Land],
        [Cell.Water, Cell.Water, Cell.Water, Cell.Water, Cell.Water],
        [Cell.Water, Cell.Water, Cell.Water, Cell.Water, Cell.Water],
        [Cell.Water, Cell.Water, Cell.Water, Cell.Water, Cell.Water],
        [Cell.Water, Cell.Water, Cell.Water, Cell.Water, Cell.Water]
      ]
      const solver = new Solver(grid)
      expect(solver.countIslands()).toEqual(3)
    })
  })
})
