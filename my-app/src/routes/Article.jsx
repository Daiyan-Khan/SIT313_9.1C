import React from 'react';
import TitleBox from './TitleBox';
import { TextArea, Form } from 'semantic-ui-react';
import Tags from './Tags';
import '../css/PostPage.css';

const Article = () => {
  return (
    <div className='PostSection'>
      <TitleBox style = {{backgroundColor: 'rgba(255, 255, 255, 0.8)',borderRadius: '12px'}}text="Enter a descriptive title" />
      
      <Form>
        <Form.Field>
          <label>Abstract</label>
          <TextArea placeholder="Enter a 1 paragraph abstract" style={{ minHeight: 50, width: '100%',backgroundColor: 'rgba(255, 255, 255, 0.8)',borderRadius: '12px' }} />
        </Form.Field>

        <Form.Field >
          <label>Article Text</label>
          <TextArea placeholder="Enter the full article text" style={{ minHeight: 400, width: '100%',backgroundColor: 'rgba(255, 255, 255, 0.8)',borderRadius: '12px'}} />
        </Form.Field>
      </Form>
      
      <Tags style={{backgroundColor: 'rgba(255, 255, 255, 0.8)',borderRadius: '12px'}} text="article" />
    </div>
  );
};

export default Article;
