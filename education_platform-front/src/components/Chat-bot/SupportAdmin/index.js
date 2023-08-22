import React from 'react';

import  ChatEngine from './../SupportEngine/SupportWindow/ChatEngine'

const SupportAdmin = () => {
  console.log('',process.env.REACT_APP_CE_PROJECT_ID)
  return (
    <div>
        <ChatEngine 
          visible={true}
          projectID={process.env.REACT_APP_CE_PROJECT_ID}    
          userName='Mazen'
          userSecret='12345678'
          height='calc(100vh - 12px)'
        />
    </div>
  );
}
export default SupportAdmin;
