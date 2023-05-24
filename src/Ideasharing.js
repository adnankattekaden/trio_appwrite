import React, { useState } from 'react';
import './Ideasharing.css';

function IdeaSharing() {
  const [idea, setIdea] = useState('');
  const [selectedAttribute, setSelectedAttribute] = useState('');

  const handleIdeaChange = (event) => {
    setIdea(event.target.value);
  };

  const handleAttributeChange = (event) => {
    setSelectedAttribute(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the idea submission here
    console.log('Idea:', idea);
    console.log('Attribute:', selectedAttribute);
    // Reset the form
    setIdea('');
    setSelectedAttribute('');
  };

  return (
    <div className="idea-sharing">
      <h2 className="idea-sharing__title">Idea Sharing</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="idea-sharing__textarea"
          placeholder="Enter your idea..."
          value={idea}
          onChange={handleIdeaChange}
        ></textarea>
        <select
          className="idea-sharing__dropdown"
          value={selectedAttribute}
          onChange={handleAttributeChange}
        >
          <option value="">Select Attribute</option>
          <option value="Productivity">Productivity</option>
          <option value="Social">Social</option>
          <option value="Tech">Tech</option>
          <option value="Education">Education</option>
          <option value="Health">Health</option>
          <option value="Tool">Tool</option>
          <option value="Fun">Fun</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Extension">Extension</option>
          <option value="Business">Business</option>
          <option value="Design">Design</option>
          <option value="Others">Others</option>
        </select>
        <button type="submit" className="idea-sharing__button">Submit</button>
      </form>
    </div>
  );
}

export default IdeaSharing;
