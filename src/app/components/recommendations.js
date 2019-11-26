import React, { Fragment } from 'react'
import { Row, Col} from 'antd';
import 'antd/dist/antd.css';
import './recommendations.css';
import { Select,Tabs,DatePicker,Checkbox } from 'antd';
import TableContainer from './buildingblocks/TableContainer';
const { TabPane } = Tabs;
const {Option} = Select;
const{RangePicker} = DatePicker;

const Recommendations = () => {
    
    return (
       <Fragment>
            <Row className="greeter">
                <Col sm={10}><h2>Welcome, <span>Arkaprabha</span></h2></Col>
                <Col sm={14}><h4>5 November 2019 | Data updated at: <strong>22:30</strong></h4></Col>
            </Row>
            
            <Row className="admin-settings">
                <Col md={8}>
                    <label>Select Strategy: </label>
                    <Select className="select-box-admin" defaultValue="lucy">
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </Col>
                <Col md={8}>
                    <label>Select date range: </label>
                    <RangePicker className="select-box-admin"/>
                </Col>
                <Col md={8}>
                    <label>Select Underlying: </label>
                    <Select className="select-box-admin" defaultValue="lucy">
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </Col>
            </Row>
            <Checkbox.Group style={{ width: '100%' }}>
                <Row>
                    <Col xs={5} md={3}>
                        <label>Filter 1: </label>
                    </Col>
                    <Col xs={5} md={4}>
                        <Checkbox value="A">A</Checkbox>
                    </Col>
                    <Col xs={5} md={4}>
                        <Checkbox value="B">B</Checkbox>
                    </Col>
                    <Col xs={5} md={4}>
                        <Checkbox value="C">C</Checkbox>
                    </Col>
                    <Col xs={4} md={4}>
                        <Checkbox value="D">D</Checkbox>
                    </Col>
                </Row>
            </Checkbox.Group>

            <Checkbox.Group style={{ width: '100%' }}>
                <Row>
                    <Col xs={5} md={3}>
                        <label>Filter 2: </label>
                    </Col>
                    <Col xs={5} md={4}>
                        <Checkbox value="sdaA">A</Checkbox>
                    </Col>
                    <Col xs={5} md={4}>
                        <Checkbox value="Bsad">B</Checkbox>
                    </Col>
                    <Col xs={5} md={4}>
                        <Checkbox value="Cdsf">C</Checkbox>
                    </Col>
                    <Col xs={4} md={4}>
                        <Checkbox value="Dgd">D</Checkbox>
                    </Col>
                </Row>
            </Checkbox.Group>

            <Checkbox.Group style={{ width: '100%', marginBottom:"10px" }}>
                <Row>
                    <Col xs={5} md={3}>
                        <label>Filter 3: </label>
                    </Col>
                    <Col xs={5} md={4}>
                        <Checkbox value="Adg">A</Checkbox>
                    </Col>
                    <Col xs={5} md={4}>
                        <Checkbox value="Bgh">B</Checkbox>
                    </Col>
                    <Col xs={5} md={4}>
                        <Checkbox value="Css">C</Checkbox>
                    </Col>
                    <Col xs={4} md={4}>
                        <Checkbox value="Dwqe">D</Checkbox>
                    </Col>
                </Row>
            </Checkbox.Group>

            <TableContainer/>
       
       </Fragment> 
    );
}

export default Recommendations;