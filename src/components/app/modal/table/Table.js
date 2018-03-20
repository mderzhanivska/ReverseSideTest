
import React, {Component} from 'react';


const $ = require('jquery');
$.DataTable = require('datatables.net');



function reloadTableData(names) {
    const table = $('.data-table-wrapper').find('table').DataTable();
    table.clear();
    table.rows.add(names);
    table.draw();
}

function updateTable(names) {
    const table = $('.data-table-wrapper').find('table').DataTable();
    let dataChanged = false;
    table.rows().every(function () {
        const oldNameData = this.data();
        const newNameData = names.find((nameData) => {
            return nameData.name === oldNameData.name;
        });
        if (oldNameData.nickname !== newNameData.nickname) {
            dataChanged = true;
            this.data(newNameData);
        }
        return true;
    });

    if (dataChanged) {
        table.draw();
    }
}


function getDate(d) {
    const days = ('0' + d.getDate()).slice(-2);
    const month = ('0' + (d.getMonth() + 1)).slice(-2);
    const year = d.getFullYear();
    const hours = ('0' + d.getHours()).slice(-2);
    const minutes = ('0' + d.getMinutes()).slice(-2);
    return `${days}.${month}.${year}<br/>${hours}:${minutes}`;
}


function getStatus(st) {
    switch (st) {
        case 'status':
            return '<span class="ready"></span>';
            break;
    }
}


class Table extends Component {

    componentDidMount() {

        const data = this.props.data.map(row => Object.keys(row).reduce((o, cell) => {
            let result;

            switch(cell) {
                case 'preview':
                    result = `<span class="preview"></span>`;
                    break;

                case 'time':
                    result = getDate(row[cell]);
                    break;

                case 'status':
                    result = getStatus(row[cell]);
                    break;


                case 'activity':
                    const obj = row[cell];
                    result = `<span>${obj.likes}</span>
                            <span>${obj.reposts}</span>
                            <span>${obj.comments}</span>`;
                    break;

                default:
                    result = row[cell];
                    break;
            }

            o[cell] = result;
            return o;
        }, {}));

        console.log(data)

        $(this.refs.main).DataTable({
            dom: '<"data-table-wrapper"t>',
            data,
            columns: this.props.columns,
            ordering: false
        });
    }

    componentWillUnmount(){
        $('.data-table-wrapper').find('table').DataTable().destroy(true);
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.data.length !== this.props.data.length) {
            reloadTableData(nextProps.data);
        } else {
            updateTable(nextProps.data);
        }
        return false;
    }



    render() {
        return (
            <div>
                <table  className="table" ref="main" />
            </div>);
    }
}


export default Table;