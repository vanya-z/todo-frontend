import todos from './todos'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_TASK', () => {
    expect(
      todos([], {
        type: 'ADD_TASK',
        task: {
          title: 'Run the tests',
          id: 0
        }
      })
    ).toEqual([
      {
        id: 0,
        title: "Run the tests"
      }
    ]
    )

    expect(
      todos([
        {
          title: 'Run the tests',
          completed: false,
          id: 0
        }
      ], {
        type: 'ADD_TASK',
        task: {
          title: 'Use Redux',
          completed: false,
          id: 1
        }
      })
    ).toEqual([
      {
        title: 'Use Redux',
        completed: false,
        id: 1
      }, {
        title: 'Run the tests',
        completed: false,
        id: 0
      }
    ])

    expect(
      todos([
        {
          title: 'Run the tests',
          completed: false,
          id: 0
        }, {
          title: 'Use Redux',
          completed: false,
          id: 1
        }
      ], {
        type: 'ADD_TASK',
        task: {
          title: 'Fix the tests',
          completed: false,
          id: 2
        }
      })
    ).toEqual([
      {
        title: 'Fix the tests',
        completed: false,
        id: 2
      }, {
        title: 'Run the tests',
        completed: false,
        id: 0
      }, {
        title: 'Use Redux',
        completed: false,
        id: 1
      }
    ])
  })

  it('should handle TOGGLE_TASK', () => {
    expect(
      todos([
        {
          title: 'Run the tests',
          completed: false,
          id: 1
        }, {
          title: 'Use Redux',
          completed: false,
          id: 0
        }
      ], {
        type: 'TOGGLE_TASK',
        task: {
          title: 'Run the tests',
          completed: true,
          id: 1
        }
      })
    ).toEqual([
      {
        title: 'Run the tests',
        completed: true,
        id: 1
      }, {
        title: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  })

})
