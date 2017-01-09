import React, { Component } from 'react'
import { connect } from 'react-redux'

import Form from "react-jsonschema-form";

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {
        type: "string",
        title: "Title",
        default: "A new task"
    },
    "integerRange": {
      "title": "Integer range",
      "type": "integer",
      "minimum": 42,
      "maximum": 100
    },
    done: {
        type: "boolean",
        title: "Done?",
        default: false
    }
  }
}

// const widgets = {
//   myCustomWidget: MyCustomWidget
// }

const uiSchema = {
    "integerRange": {
        "ui:widget": "range"
    }
}

const formData = {
  title: "First task",
  done: true
}


class IntakeAdd extends Component {
  constructor(props){
      super(props)
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleError(){
      console.log("there is an error!")
      console.log(arguments)
  }

  handleSubmit(formData){
      console.log("form submitted!")
      console.log(formData)
  }

  render() {
    return (
        <div>
            <Form
                schema={ schema }
                uiSchema={ uiSchema }
                onError={ this.handleError }
                onSubmit={ this.handleSubmit } />
        </div>
    );
  }
}

export default IntakeAdd