import "./listList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ListContext } from "../../context/listContext/ListContext";
import { getLists } from "../../context/listContext/apiCalls";

export default function ListList() {
  const { lists, dispatch } = useContext(ListContext);
  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {};

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "title", headerName: "title", width: 120 },
    { field: "type", headerName: "type", width: 120 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: "/list/" + params.row._id }}
              state={{ list: params.row }}
            >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
