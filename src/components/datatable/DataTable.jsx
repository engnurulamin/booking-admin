import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
// import { userColumns, userRows } from "../../sources/dtsource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const DataTable = ({ columns }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState([]);
  const { data, loading, error } = useFetch(
    `http://localhost:8800/api/${path}`
  );

  useEffect(() => {
    setList(data);
  }, [data]);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/api/${path}/${id}`);
      setList(list.filter((item) => item._id != id));
    } catch (error) {
      console.log(error);
    }
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="cell-action">
            <Link to="/users" style={{ textDecoration: "none" }}>
              <div className="view-button">View</div>
            </Link>
            <div
              className="delete-button"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="data-table">
      <div className="data-table-title">
        Add New {path.substr(0, path.length - 1)}
        <Link
          to="/users/new"
          className="link"
          style={{ textDecoration: "none" }}
        >
          Add {path.substr(0, path.length - 1)}
        </Link>
      </div>
      <DataGrid
        className="data-grid"
        rows={list}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default DataTable;
