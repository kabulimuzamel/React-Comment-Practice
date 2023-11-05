import React, { useState } from "react";
import { Comment } from "./Comment";

export function CommentSection() {
  const [commentData, setCommentData] = useState([]);
  const [input, setInput] = useState('');

  const commentHandler = (e) => {
    e.preventDefault();
    setCommentData(prev => [...prev, { comment: input, replies: [] }]);
  }

  const replyHandler = (e, replyText, level, index) => {
    e.preventDefault();
    const updatedCommentData = [...commentData];
    let targetComment = updatedCommentData[index[0]];

    for (let i = 1; i < level; i++) {
      targetComment = targetComment.replies[index[i + 1]];
    }

    targetComment.replies = [
      ...targetComment.replies,
      { comment: replyText, replies: [] },
    ];

    setCommentData(updatedCommentData);

  }

  return (
    <div>
      <div>
        <input value={input} onChange={e => setInput(e.target.value)} />
        <button onClick={commentHandler}>Add a comment</button>
      </div>
      <div>
        {
            commentData.map((comment, index) => 
            <Comment
                comment={comment}
                level={1}
                key={comment.comment}
                index={[index]}
                replyHandler={replyHandler}
            />
            )
        }
      </div>
    </div>
  )
}
