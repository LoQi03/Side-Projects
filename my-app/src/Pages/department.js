import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Button, ButtonToolbar } from 'react-bootstrap'
import AddDepModal from "../components/Modal/AddDepModal";
import EditDepModal from "../components/Modal/EditDepModal";

class Department extends Component {
    constructor(props) {
        super(props);
        this.state = { deps: [], addModalShow: false, editModalShow: false }
    }
    refreshList() {
        fetch(process.env.REACT_APP_API + 'Department')
            .then(response => response.json())
            .then(data => {
                this.setState({ deps: data });
            });

    }

    componentDidMount() {
        this.refreshList();
    }

    deleteDep(depid) {
        if (window.confirm('Are you sure?')) {
            fetch(process.env.REACT_APP_API + 'Department/' + depid,
                {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                this.refreshList();
        }

    }

    render() {
        const { deps, depid, depname } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false },this.refreshList());
        let editModalClose = () => this.setState({ editModalShow: false },this.refreshList());
        return (
            <div className="container">
                <Table className="mt4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>DepartmentId</th>
                            <th>DepartmentName</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep =>
                            <tr key={dep.DepartmentId}>
                                <td>{dep.DepartmentId}</td>
                                <td>{dep.DepartmentName}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info" onClick={() => this.setState({ editModalShow: true, depid: dep.DepartmentId, depname: dep.DepartmentName },this.refreshList())}>
                                            Edit
                                        </Button>
                                        <Button className="mr-2" variant="danger" onClick={() => this.deleteDep(dep.DepartmentId)}>
                                            Delete
                                        </Button>
                                        <EditDepModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            depid={depid}
                                            depname={depname} />
                                    </ButtonToolbar>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true },this.refreshList())}>
                        Add
                    </Button>
                    <AddDepModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
            </div>
        );
    }

}

export default Department;