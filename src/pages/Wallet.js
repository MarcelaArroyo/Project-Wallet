import React from 'react';
import Header from '../components/Header';
import FormAdd from '../components/FormAdd';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <FormAdd />
        <Table />
      </>
    );
  }
}

export default Wallet;
