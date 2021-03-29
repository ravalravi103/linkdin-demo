import { Button, Modal } from '@material-ui/core'
import React,{useState} from 'react'

function CreateModal() {

    const[visible,setVisible] = useState(true)
   
    return (
        <div>
              <Button type="primary" onClick={this.showModal}>
          Open Modal with customized footer
        </Button>
        <Modal
          visible={visible}
          title="Craete a Post"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
         
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        </div>
    )
}

export default CreateModal
