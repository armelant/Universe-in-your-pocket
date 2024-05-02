import React from 'react';

const AdminPage = () => {
  return (
    <div className="instructions">
        <div className="instructionsText"> 
            <h2>Add New News Instructions</h2>
            <p>
                In order to add new news, you will need the Postman or Insomnia application to create API requests to the server to add new news.
            </p>
            <p>
                You will need to create a POST request to <code>localhost:3000/news</code>, and your request should also contain a JSON body.
            </p>
            <div className="codeBlock">
                <pre>
                    {`{
    "title": "Test title",
    "text": "Text example\\n\\n Next paragraph",
    "imageUrl": "test.url.com"
}`}
                </pre>
            </div>
        </div>
    </div>
  );
};

export default AdminPage;
