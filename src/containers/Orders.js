import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { FilePicker } from 'react-file-picker'
import { CsvToHtmlTable } from 'react-csv-to-table';
import "./Orders.css";

export default class Orders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sampleData: `
      Order ID,Email,Financial Status,Paid at,Fulfillment Status,Fulfilled at,Currency,Subtotal,Shipping,Taxes,Amount Refunded,Total,Discount Code,Discount Amount,Shipping Method,Created at,Lineitem quantity,Lineitem name,Lineitem price,Lineitem sku,Lineitem variant,Lineitem requires shipping,Lineitem taxable,Lineitem fulfillment status,Billing Name,Billing Address1,Billing Address2,Billing City,Billing Zip,Billing Province,Billing Country,Billing Phone,Shipping Name,Shipping Address1,Shipping Address2,Shipping City,Shipping Zip,Shipping Province,Shipping Country,Shipping Phone,Cancelled at,Private Notes,Payment Method,Payment Reference
      1,henrismail@gmail.com,PAID,7/25/2018 21:06,pending,,USD,20,10,0,0,30,,0,Flat rate,7/25/2018 21:06,1,Washed Colombian Coffee,10,SQ0509144,200g,TRUE,TRUE,pending,Henri Pietila,869 Lewis Avenue,,Sunnyvale,94086,CA,United States,,Henri Pietila,869 Lewis Avenue,,Sunnyvale,94086,CA,United States,,,,Stripe,ch_1Cs0jnLjGdjc8rbZ4qjuMRNp
      1,,,,,,,,,,,,,,,,1,Washed Ethiopian Coffee,10,SQ0030016,200g,TRUE,TRUE,pending,,,,,,,,,,,,,,,,,,,,
      3,cavepaintercoffee@gmail.com,PAID,8/4/2018 19:26,pending,,USD,240,0,0,0,240,,0,,8/4/2018 19:26,1,3 month subscription,240,SQ7673338,400g/2/Every other week,FALSE,TRUE,pending,Cave Painter,4848 Northeast 7th Avenue,,Portland,97211,OR,United States,,Cave Painter,,,,,,,,,,Stripe,ch_1CvbxKLjGdjc8rbZOw3r6oT0
      4,cavepaintercoffee@gmail.com,PAID,8/4/2018 19:28,pending,,USD,40,10,0,0,50,,0,Flat rate,8/4/2018 19:28,1,Washed Colombian Coffee,10,SQ0509144,200g,TRUE,TRUE,pending,cave painter,4848 Northeast 7th Avenue,,Portland,97211,OR,United States,,cave painter,4848 Northeast 7th Avenue,,Portland,97211,OR,United States,,,,Stripe,ch_1CvbyjLjGdjc8rbZKEVHb7k7
      4,,,,,,,,,,,,,,,,1,3 month subscription,30,SQ7103073,200g/1/Monthly,FALSE,TRUE,pending,,,,,,,,,,,,,,,,,,,,
      2,hackjar2000@yahoo.com,refunded,7/25/2018 22:12,cancelled,,USD,10,10,0,20,20,,0,Flat rate,7/25/2018 22:12,1,Washed Guatemalan Coffee,10,SQ9095169,200g,TRUE,TRUE,cancelled,Dirk Orthmeyer,6819 SE Belmont St.,,Portland,97215,OR,United States,8583350579,Sirk Grigneyer,6819 SE Belmont St.,,Portland,97215,OR,United States,8583350579,7/26/2018 12:32,,Stripe,ch_1Cs1mILjGdjc8rbZPDKev2eP
      ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
      ,,,,,,,,  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
      `
    };
  }

  validateForm() {
    return this.state;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Orders">
        <form onSubmit={this.handleSubmit}>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Load Data
          </Button>
        </form>
        <CsvToHtmlTable
          data={this.state.sampleData}
          csvDelimiter=","
          tableClassName="table table-striped table-hover"
        />
      </div>
    );
  }
}
