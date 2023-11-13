import React, { useState } from "react";
import { replyHandler } from "../Functions/functions";

export function Comment({ comment, indices, commentData, setCommentData }) {
  const [input, setInput] = useState('');

  return (
    <div style={{ paddingLeft: '15px' }}>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={e => replyHandler(e, indices, input, setInput,commentData, setCommentData)}>Reply</button>
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

