import React from 'react';

const Topic = ({ topic, sentences }) => {
  return <div>
    <div className="row section-title-3 my-2">
      <div className="col">{topic}</div>
    </div>
    <div className="row my-2">
      <div className="col">
        {sentences.map((sentence, i) => (
          <div key={i}>&#8226; {sentence}</div>
        ))}
      </div>
    </div>
  </div>;
};

export default Topic;