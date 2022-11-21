import React, { useState, useMemo, useEffect } from "react";
import BreadCrumbUI from './BreadCrumbUI';
import DataTable from "react-data-table-component";
// import data from "../Api/Data";
import FilterComponent from "./FilterComponent";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Form } from 'react-bootstrap';
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://52.56.232.213:9091/spotify-socket');

function InstagramDashboardUI() {

  const [dataSoundCloud, setdataSoundCloud] = useState([]);

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      setdataSoundCloud(dataFromServer);
      console.log(dataFromServer);
    };
  }, []);

  const onButtonClicked = () => {
    client.send(JSON.stringify({
      user: "username",
      search: "search",
      result_type: "Instagram_Links"
    }));
  }

  const columns = [
    {
      name: "Url",
      selector: row => row.url,
      value: 'url',
      sortable: true
    }
  ];

  const [filterText, setFilterText] = useState("");

  const [filterTextclick, setFilterTextclick] = useState("");

  const filteredItemsArray = [];
  const filteredItemsArrayRowsData = dataSoundCloud.map((item,index) =>
    filteredItemsArray[index] = item.data
  );

  const filteredItems = filteredItemsArrayRowsData.filter(
    item => JSON.stringify(item).toLowerCase().indexOf(filterTextclick.toLowerCase()) !== -1
  );

  const onFilterTextOnClick = (e) => {
    setFilterTextclick(filterText);
  }

  const FilterValueOnClick = (event) => {
    console.log(event.target.value)
  }

  const onFilterOnClick = (e) => {
    if(e.target.value === '') {
      setFilterText(e.target.value);
      setFilterTextclick('');
    }
    else {
      setFilterText(e.target.value);
    }
  }

  const subHeaderComponent = useMemo(() => {

    return (
      <FilterComponent
        onFilter={onFilterOnClick}
        filterText={filterText}
        filterTextclick={onFilterTextOnClick}
      />
    );
  }, [filterText]);

  const column_data_for_export = ["Facebook", "Followers", "Instagram", "Name", "Twitter", "Url", "Wikipedia"];

  const rows_data_for_export = filteredItems.map((d1) =>
      columns.slice(0, columns.length).map((d2) => d2.value).map((d3) => d1[d3])
  );

  const  download_pdf = () => {
    const doc = new jsPDF();

    const columns_data_for_export = columns.slice(0, columns.length).map((d) => d.name);

    const temp_rows = filteredItems.map((d1) =>
      columns.slice(0, columns.length).map((d2) => d2.value).map((d3) => d1[d3])
    );

    doc.autoTable({
      head: [columns_data_for_export],
      body: temp_rows
    });

    doc.save("SoundCloudlist.pdf");
  }

  setTimeout(() => {
    onButtonClicked();
  }, 1000);

  return (
    <React.Fragment>
      <div className='margin-left-right'>
        <BreadCrumbUI />
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12 container-fuild-margin'>
            <h1>Dashboard</h1>
          </div>
        </div>
        {subHeaderComponent}
        <div className='row container-fuild-margin'>
          <div className='col-lg-12 col-md-12 col-sm-12 container-padding'>
            <div className={'filter-div'}>
              <Form.Select className='filter-select'>
                <option>Ed Sheeran...</option>
                <option>Previous List</option>
                <option>Previous List</option>
                <option>Previous List</option>
                <option>Previous List</option>
                <option>Previous List</option>
                <option>Previous List</option>
              </Form.Select>
              <Form.Select className='filter-select' onChange={FilterValueOnClick}>
                <option value={''}>Filter</option>
                <option value={'By_Date'}>By Date</option>
                <option value={'By_Group'}>By Group</option>
                <option value={'By_Ascending_Order'}>By Ascending Order</option>
                <option value={'By_Descending_Order'}>By Descending Order</option>
              </Form.Select>
            </div>
              <DataTable columns={columns} data={filteredItems} defaultSortField="name" defaultSortFieldID={1} striped pagination />
              <button style={{marginTop: '20px'}} className='flaot-import-button flaot-border-radius float-button' onClick={download_pdf}>Download List PDF</button>
              <CSVLink style={{textDecoration: 'none', marginTop: '20px'}} className='flaot-import-button flaot-border-radius float-button' data={rows_data_for_export} headers={column_data_for_export} filename={"client_list.csv"}>Download List CSV</CSVLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default InstagramDashboardUI;
