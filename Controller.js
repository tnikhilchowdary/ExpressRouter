let feedbacks = [
    { id: 1, text: 'Awesome app!' },
    { id: 2, text: 'Nice work!' }
  ];
  
  const getFeedbacks = (req, res) => {
    res.json(feedbacks);
  };
  
  const createFeedback = (req, res) => {
    const { text } = req.body;
    const newFeedback = {
      id: feedbacks.length + 1,
      text
    };
    feedbacks.push(newFeedback);
    res.status(201).json(newFeedback);
  };
  
  module.exports = { getFeedbacks, createFeedback };
  