import React, { useState, useEffect } from "react";
import { Comment } from "./Comment";
import { fetchCommentData, addCommmentAPI } from "../Functions/functions";

export function CommentSection() {
  const [commentData, setCommentData] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    if(!commentData.length) {
      fetchCommentData('http://localhost:3000/commentData', setCommentData)
    }
  }, [commentData])
  

  if(!Array.isArray(commentData)) {
    return (
      <div>
        <div>
          <input value={input} onChange={e => setInput(e.target.value)} />
          <button onClick={e => addCommmentAPI(e,'http://localhost:3000/addComment', input, setInput, setCommentData)}>Add a comment</button>
        </div>
        {
          commentData
        }
      </div>
    )
  }

  return (
    <div>
      <div>
        <input value={input} onChange={e => setInput(e.target.value)} />
        <button onClick={e => addCommmentAPI(e,'http://localhost:3000/addComment', input, setInput, setCommentData)}>Add a comment</button>
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
