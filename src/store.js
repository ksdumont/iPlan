export default {
    lists: [
      {
        id: 1,
        header: 'To Do',
        cards: [1, 2, 3],
      },
      {
        id: 2,
        header: 'Working on It',
        cards: [4, 3],
      },
      {
        id: 3,
        header: 'Taken Care Of',
        cards: [1, 2],
      },
    ],
    allCards: {
        1: {
            id: 1,
            task: 'beer',
            member: 'keith',
            trip: 1
        },
        2: {
            id: 2,
            task: 'book house',
            member: 'mika',
            trip: 1
        },
        3: {
            id: 3,
            task: 'rent car',
            member: 'joe',
            trip: 2
        },
        4: {
            id: 4,
            task: 'food',
            member: 'rebecca',
            trip: 3
        }
    },
    trips: [
        {
            id: 1,
            title: 'Trip one',
            members: ['keith', 'mika', 'joe', 'rebecca']
        },
        {
            id: 2,
            title: 'trip two',
            members: ['kyle', 'mika', 'joe', 'chickpea']
        },
        {
            id: 3,
            title: 'trip three',
            members: ['kevin', 'mika', 'joe', 'chickpea']
        }
    ]
}