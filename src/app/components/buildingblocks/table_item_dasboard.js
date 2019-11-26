import React from 'react';
import { Modal } from 'antd';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';

const TableItemDashboard = (props) => {
    
    return(
        <Modal
            title="Basic Modal"
            visible={props.visible}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    )
}
const mapStateToProps = (state) => {
    return{
        visible: state.show_item_modal
    }
}

export default connect(mapStateToProps)(TableItemDashboard);