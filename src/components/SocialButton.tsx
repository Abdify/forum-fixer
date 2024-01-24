'use client';

import React, { useState } from 'react';

const SocialIcons = () => {
  const [showReplyForm, setShowReplyForm] = useState(false);

  const toggleReplyForm = () => {
    setShowReplyForm((prev) => !prev);
  };

  return (
    <div className='flex items-center space-x-4'>
      <div className='flex items-center' onClick={toggleReplyForm}>
        {/* Like Icon */}
        <span className='text-blue-500'>
          <i className='fas fa-thumbs-up'></i>
        </span>
        <span className='ml-1'>Like</span>
      </div>

      <div className='flex items-center' onClick={toggleReplyForm}>
        {/* Dislike Icon */}
        <span className='text-red-500'>
          <i className='fas fa-thumbs-down'></i>
        </span>
        <span className='ml-1'>Dislike</span>
      </div>

      <div className='flex items-center' onClick={toggleReplyForm}>
        {/* Reply Icon */}
        <span className='text-green-500'>
          <i className='fas fa-reply'></i>
        </span>
        <span className='ml-1'>Reply</span>
      </div>

      {showReplyForm && (
        <div className='flex items-center'>
          {/* Your reply form component can go here */}
          <textarea
            placeholder='Type your reply...'
            className='border p-2'
          ></textarea>
          <button
            className='ml-2 bg-blue-500 px-4 py-2 text-white'
            onClick={toggleReplyForm}
          >
            Submit
          </button>
        </div>
      )}

      <div className='flex items-center'>
        {/* Share Icon */}
        <span className='text-indigo-500'>
          <i className='fas fa-share'></i>
        </span>
        <span className='ml-1'>Share</span>
      </div>

      <div className='flex items-center'>
        {/* Flag Icon */}
        <span className='text-yellow-500'>
          <i className='fas fa-flag'></i>
        </span>
        <span className='ml-1'>Flag</span>
      </div>
    </div>
  );
};

export default SocialIcons;
