import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

const data = [
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
];

const addReply = (data, indices, reply) => {
  data = [...data];
  let replies = data;
  indices.forEach(index => {
    replies = replies[index].replies; 
  });
  replies.push({comment: reply, replies: []});
  return data;
}

test('renders learn react link', () => {

  const updatedData = addReply(data, [0, 0], 'hi')
  expect(updatedData).toEqual([
    {
      comment: '',
      replies: [
        {
          comment: '',
          replies: [
            {
              comment: '',
              replies: []
            },
            {
              comment: 'hi',
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
  ]);
});