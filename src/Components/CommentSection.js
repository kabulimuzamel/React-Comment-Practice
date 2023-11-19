import React, { useState, useEffect } from "react";
import { Comment } from "./Comment";
import { commentHandler, fetchCommentData, addCommmentAPI } from "../Functions/functions";

export function CommentSection() {
  const [commentData, setCommentData] = useState([]);
  const [input, setInput] = useState('');
  const [submit, setSubmit] = useState(false)

  useEffect(() => {
    fetchCommentData(commentData, 'http://localhost:3000/commentData', setCommentData)
  }, [submit])
  
  return (
    <div>
      <div>
        <input value={input} onChange={e => setInput(e.target.value)} />
        <button onClick={e => addCommmentAPI(e,'http://localhost:3000/addComment', input, setInput, setCommentData, setSubmit)}>Add a comment</button>
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
              setSubmit={setSubmit}
            />
          )
        }
      </div>
    </div>
  )
}
