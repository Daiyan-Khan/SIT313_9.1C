import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

const TextAreaMinimumHeight = (props) => (
  <Form>
    <TextArea placeholder={props.text} />
  </Form>
)

export default TextAreaMinimumHeight;