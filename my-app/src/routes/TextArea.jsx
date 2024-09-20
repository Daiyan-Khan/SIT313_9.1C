import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import '../css/TextArea.css'

const TextAreaMinimumHeight = (props) => (
  <Form class='TextForm'>
    <TextArea placeholder={props.text} />
  </Form>
)

export default TextAreaMinimumHeight;