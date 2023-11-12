import React, { useState } from "react";
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

export function Comment({ comment, level, indices, replyHandler }) {
  const [input, setInput] = useState('');

  const handleReply = (e) => {
    e.preventDefault();
    replyHandler(e, indices, input);
    setInput('');
  }

  const handler = (e) => {

  }

  return (
    <div style={{ paddingLeft: '15px' }}>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleReply}>Reply</button>
      {comment.comment}
      {
        comment.replies.length > 0 &&
            comment.replies.map((reply, subIndex) => (
            <Comment
                comment={reply}
                level={level + 1}
                key={reply.comment}
                indices={[...indices, subIndex]}
                replyHandler={replyHandler}
            />
            ))
      }
    </div>
  )
}

