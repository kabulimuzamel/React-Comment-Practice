/*
  We have a nested array:
    [
      {
        comment: '',
        replies: [
          {
            comment: '',
            replies: [
              {
                comment: '',
                replies: []
              }
            ]
          }
        ]
      },
      {
        comment: '',
        replies: []
      }
  ]

  If a reply is added to index[0][1][2], it should change the third reply of
  the second reply of the first reply.
  After each destructuring of a reply array, we need to propogate the change to the parent array.
*/


//  Its data architecture sample is like this: 
    // const commentData = [
    //     {
    //         comment: 'comment',
    //         replies: [
    //             {
    //                 comment: 'comment',
    //                 replies: [
    //                     {
    //                         comment: 'comment',
    //                         replies: [
                                
    //                         ]
    //                     }
    //                 ]
    //             },
    //             {
    //                 comment: 'comment',
    //                 replies: [
                        
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         comment: 'comment',
    //         replies: [
    //             {
    //                 comment: 'comment',
    //                 replies: [
                        
    //                 ]
    //             }
    //         ]
    //     }
    // ]
    //  Its function should be as following
    // To reply to a comment, it takes the parameters as are in the function. 
    // it takes the index which determines where the root comment is in the commentData.
    // Next, it finds the level of the comment the user wants to reply to, and dives deep into it.
    // After that it adds the reply to the comment and then update the commentData.