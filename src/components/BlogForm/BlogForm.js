import React, { Component } from "react";
import { Button, Modal, Form, Input } from "antd";
import { connect } from "react-redux";
import * as blogsActions from "./../../actions/blog";

const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a new Post"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="ID">
              {getFieldDecorator("id", {
                rules: [
                  {
                    required: true,
                    message: "Please input the title of collection!"
                  }
                ]
              })(<Input name="id" />)}
            </Form.Item>
            <Form.Item label="Owner">
              {getFieldDecorator("owner", {
                rules: [
                  {
                    required: true,
                    message: "Please input the title of collection!"
                  }
                ]
              })(<Input name="owner" />)}
            </Form.Item>
            <Form.Item label="Title">
              {getFieldDecorator("title", {
                rules: [
                  {
                    required: true,
                    message: "Please input the title of collection!"
                  }
                ]
              })(<Input name="title" />)}
            </Form.Item>
            <Form.Item label="Content">
              {getFieldDecorator("content", {
                rules: [
                  {
                    required: true,
                    message: "Please input the title of collection!"
                  }
                ]
              })(<Input type="textarea" name="content" />)}
            </Form.Item>
            {/* <Form.Item label="Create at">
              {getFieldDecorator("Create at", {
                rules: [
                  {
                    required: true,
                    message: "Please input the title of collection!"
                  }
                ]
              })(<Input type="textarea" name="created_at" />)}
            </Form.Item> */}
            <Form.Item label="Tag">
              {getFieldDecorator("tag", {
                rules: [
                  {
                    message: "Please input the title of collection!"
                  }
                ]
              })(<Input type="textarea" name="tags" />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      id: "",
      owner: "",
      title: "",
      content: "",
      created_at: "",
      tags: []
    };
  }

  componentDidMount(){
      this.props.createPost();
  }

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      this.props.createPost({ ...values, created_at: (new Date()).getTime() })

      console.log("Received values of form: ", values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };
  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div style={{marginTop:5}}>
        <Button type="primary" onClick={this.showModal}>
          New Post
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
      createPost: (data) => {
          dispatch(blogsActions.createPost(data))
      }
  }
};

export default connect(
  null,
  mapDispatchToProps
)(BlogForm);
