import React, {PureComponent, Fragment} from 'react';
import { Table,Tag,Modal } from 'antd';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import './TableContainer.css';
import TableItemDashboard from './table_item_dasboard';

class TableContainer extends PureComponent{
    
    titleArr = ['Recommendation Date & Time', 'StrategyID', 'Underlying', 'Strike', 'PE/CE', 'Expiry', 'Premium(LTP)', 'Buy/Sell', 'Moneyness', 'Margin/Investment', 'Project Profit', 'Strategy Name', 'Consistency', 'Pin To Tracker', 'Dashboard'];
    dataIndexArr = ['recomendations','strategyID','underlying','strike','PECE','expiry','premium','buysell', 'moneyness','margin','projectProfit','strategyname','consistency','pin','dashboard'];
    columns =[];
    
    data1 = [
        {
          recomendations: '10AUG2019',
          strategyID: '#243232',
          underlying: 20,
          strike: 20,
          PECE: 20,
          expiry: '12AUG2019',
          premium: 20,
          buysell: 'BUY',
          moneyness: 20,
          margin: 'Rs 120122323.43',
          projectProfit: '20%',
          strategyname: '20',
          consistency: '23',
          pin:<Tag color="orange">Pin To Tracker</Tag>,
          dashboard: <Tag color="green" onClick={()=>this.showStrategyDashboard()}>Dashboard</Tag>,
          key:'data1_1'
        },
        {
          key:'2',
          recomendations: '10AUG2019',
          strategyID: '#243232',
          underlying: 20,
          strike: 20,
          PECE: 20,
          expiry: '12AUG2019',
          premium: 20,
          buysell: 'BUY',
          moneyness: 20,
          margin: 'Rs 120122323.43',
          projectProfit: '20%',
          strategyname: '20',
          consistency: '23',
          pin:<Tag color="orange">Pin To Tracker</Tag>,
          dashboard: <Tag color="green" onClick={()=>this.showStrategyDashboard()}>Dashboard</Tag>,
          key:'data1_2'
        },
        {
          key:'3',
          recomendations: '10AUG2019',
          strategyID: '#243232',
          underlying: 20,
          strike: 20,
          PECE: 20,
          expiry: '12AUG2019',
          premium: 20,
          buysell: 'BUY',
          moneyness: 20,
          margin: 'Rs 120122323.43',
          projectProfit: '20%',
          strategyname: '20',
          consistency: '23',
          pin:<Tag color="orange">Pin To Tracker</Tag>,
          dashboard: <Tag color="green" onClick={()=>this.showStrategyDashboard()}>Dashboard</Tag>,
          key:'data1_3'
        }
      ] 
    
    showStrategyDashboard = () => {
     // this.setState({visible:true})
      this.props.dispatch({type:'SHOW_UNSHOW_ITEM_DASHBOARD'})
    }

    render(){

      if(this.titleArr.length === this.dataIndexArr.length){
        console.log("entered");
        this.titleArr.map((__,i)=>{
          this.columns.push({title: this.titleArr[i], dataIndex: this.dataIndexArr[i], key: this.dataIndexArr[i]});
      }); 

      return (
        <Fragment>
          <TableItemDashboard/>
          <div className="data-table-admin">
            <Table columns={this.columns} dataSource={this.data1} scroll={{ x: 2250, y: 350 }}/>
          </div>
        </Fragment>

      );
    }
  }
}

const mapStateToProps = (state) => {
  return{
      visible: state.show_item_modal
  }
}
export default connect(mapStateToProps)(TableContainer);