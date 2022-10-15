import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import AddClient from "./AddClient";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AppDrawer from "./Drawer/AppDrawer";
import columns from "./Config/Confix";
import { fetchData } from "../utils/utils";
import { clientDataUrl } from "../constants/constants";
import useFetch from "../customHooks/useFetch";

const Client = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [openDetail, setDetail] = useState(true);
  const [btnIndex, setBtnIndex] = useState(0);
  const allclient = useFetch(clientDataUrl);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleAdd = (text, index) => () => {
    console.log(index);
    setBtnIndex(index);
    if (index === 0) {
      setDetail(true);
    }

    if (index === 1) {
      setDetail(false);
    }
  };

  return (
    <>
      <AppDrawer
        btnIndex={btnIndex}
        handleAdd={handleAdd}
        openDetail={openDetail}
      />
      {openDetail ? (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {allclient
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[8, 20, 50]}
            component="div"
            count={allclient.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      ) : (
        <>
          <AddClient />
        </>
      )}
    </>
  );
};

export default Client;
