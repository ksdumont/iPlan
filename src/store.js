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
    allCards: [
        {
            id: 1,
            task: 'beer',
            member: 'keith',
            list: 1,
            trip: 1
        },
        {
            id: 2,
            task: 'book house',
            member: 'mika',
            list: 1,
            trip: 1
        },
        {
            id: 3,
            task: 'rent car',
            member: 'joe',
            list: 1,
            trip: 1
        },
        {
            id: 4,
            task: 'food',
            member: 'rebecca',
            list: 1,
            trip: 1
        }
    ],
    trips: [
        {
            id: 1,
            title: 'trip one',
            members: ['keith', 'mika', 'joe', 'rebecca']
        },
        // {
        //     id: 2,
        //     title: 'trip two',
        //     members: ['keith', 'mika', 'joe', 'chickpea']
        // },
        // {
        //     id: 3,
        //     title: 'trip three',
        //     members: ['keith', 'mika', 'joe', 'chickpea']
        // }
    ]
}