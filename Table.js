import React, { Component } from "react";
import "/Components/TStyle.css";

class Table extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      employee: [
        { name: "Charlie", job: "Janitor" },
        { name: "Mac", job: "Bouncer" },
        { name: "Dee", job: "Aspiring actress" },
        { name: "Dennis", job: "Bartender" }
      ]
    };
  }

  renderTableData() {
    // return this.state.employee.map((employee, index) => {
    //   const { id, name } = employee; //destructuring
    //   return (
    //     <tr key={id}>

    return this.state.employee.map((employee) => {
      const { name, job } = employee; //destructuring
      return (
        <tr>
          <td>{name}</td>
          <td>{job}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table id="employee">
          <th>Employee </th>
          <th>Job </th>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
