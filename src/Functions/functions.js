  
  export const commentHandler = (e, setCommentData, input, setInput) => {
    e.preventDefault();
    setCommentData(prev => [...prev, { comment: input, replies: [] }]);
    setInput('');
  }

  export const replyHandler = (e, indices, input, setInput,commentData, setCommentData) => {
    e.preventDefault();
    let data = [...commentData];
    let replies = data;
    indices.forEach(index => {
      replies = replies[index].replies; 
    });
    replies.push({comment: input, replies: []});
    setInput('');
    setCommentData(data);
  }