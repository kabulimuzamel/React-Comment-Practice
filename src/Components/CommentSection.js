import React, { useState } from "react";
import { Comment } from "./Comment";
import { commentHandler } from "../Functions/functions";

export function CommentSection() {
  const [commentData, setCommentData] = useState([]);
  const [input, setInput] = useState('');
  
  return (
    <div>
      <div>
        <input value={input} onChange={e => setInput(e.target.value)} />
        <button onClick={e => commentHandler(e, setCommentData, input, setInput)}>Add a comment</button>
      </div>
      <div>
        {
          commentData.map((comment, index) => 
            <Comment
              comment={comment}
              key={comment.comment}
              indices={[index]}
              commentData={commentData}
              setCommentData={setCommentData}
            />
          )
        }
      </div>
    </div>
  )
}
