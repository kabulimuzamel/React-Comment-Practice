  
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
  
  // export const replyHandler = (e, indices, input, setInput,commentData, setCommentData) => {
  //   e.preventDefault();
  //   fetch('')
  //   setInput('');
  //   setCommentData(data);
  // }
  
  export const fetchCommentData = (arr, apiURL, setter) => {
    if(!arr.length) {
      fetch(apiURL)
        .then(res => res.json())
        .then(res => {
          setter(res);
          console.log(res);
        })
        .catch(err => console.log(err.message));
    }
  }

  export const addCommmentAPI = (e,apiURL, input, setInput, setCommentData, setSubmit) => {
    e.preventDefault();
    fetch(apiURL, 
      {
        method: 'POST',
        
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          input
        })
      }
    )
    .then(res => {
      if(res.status === 200) {
        console.log(input)
        setInput('');
        console.log(input)
        setCommentData([]);
        setSubmit(prev => {
          if(prev) return false;
           return true
        })
      }
    })

  }

  export const addReplyAPI = (e, apiURL, indices, input, setInput, setCommentData, setSubmit) => {
    e.preventDefault();
    fetch(apiURL, 
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          indices,
          input
        })
      }
    ).then(res => {
      setInput('');
      console.log(input)
      setCommentData([]);
      setSubmit(prev => {
        if(prev) return false;
         return true
      })
    })
  }