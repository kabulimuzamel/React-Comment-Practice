import React, { useState } from "react";

export function Comment({ comment, level, index, replyHandler }) {
  const [input, setInput] = useState('');

  const handleReply = (e) => {
    e.preventDefault();
    replyHandler(e, input, level, index);
    setInput('');
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
                index={[...index, subIndex]}
                replyHandler={replyHandler}
            />
            ))
      }
    </div>
  )
}

