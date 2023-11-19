import React, { useState } from "react";
import { addReplyAPI } from "../Functions/functions";

export function Comment({ comment, indices, commentData, setCommentData }) {
  const [input, setInput] = useState('');

  return (
    <div style={{ paddingLeft: '15px' }}>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={e => addReplyAPI(e, 'http://localhost:3000/setComment', indices, input, setInput, setCommentData)}>Reply</button>
      {comment.comment}
      {
        comment.replies.length > 0 &&
          comment.replies.map((reply, subIndex) => (
            <Comment
              comment={reply}
              key={reply.comment}
              indices={[...indices, subIndex]}
              commentData={commentData}
              setCommentData={setCommentData}
            />
          ))
      }
    </div>
  )
}

