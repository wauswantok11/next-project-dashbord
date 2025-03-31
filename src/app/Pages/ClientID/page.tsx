"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Button,
} from "@mui/material";
// import { MdDeleteOutline } from "react-icons/md";
import { TiUserDeleteOutline } from "react-icons/ti";

function ClientIDPage() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  interface ClientData {
    _id: string;
    serviceName: string;
    clientId: string;
    secretKey: string;
    scopes: string[];
    createdAt: string;
    updatedAt: string;
  }
  const clientData: ClientData[] = [
    {
      _id: "64635a7a71e93b729c87638a",
      serviceName: "One Authorize",
      clientId: "a2762c85-e43a-438c-a38a-3582a9f7e699",
      secretKey:
        "5GTe2xGcPCLmJM61MfzrdRINTpFvsdhGZM8EQB60cwJBO6llJiAwQZ0SUC9tun2PEArH3YqNpl5OTQEOCVSv1XH5qOM1PocqTlxLVKzWFJNCvPbEs0YRKESeSk1Zokoa",
      scopes: [],
      createdAt: "2023-05-16T10:27:06.678Z",
      updatedAt: "2023-05-16T10:27:06.678Z",
    },
    // Add more sample data as needed
  ];
  return (
    <>
      <div className="max-w-full h-[835px]">
        <h1 className="text-2xl mb-4">จัดการ Client</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="client table">
            <TableHead>
              <TableRow>
                <TableCell>ลำดับ</TableCell>
                <TableCell>Service Name</TableCell>
                <TableCell>Client ID</TableCell>
                <TableCell>Secret Key</TableCell>
                <TableCell>Scopes</TableCell>
                <TableCell>Created Date</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clientData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row._id}>
                    <TableCell>{row._id}</TableCell>
                    <TableCell>{row.serviceName}</TableCell>
                    <TableCell>{row.clientId}</TableCell>
                    <TableCell>{row.secretKey}</TableCell>
                    <TableCell>{row.scopes.join(", ")}</TableCell>
                    <TableCell>{row.createdAt}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        startIcon={<TiUserDeleteOutline />}
                        sx={{
                          fontWeight: "bold",
                          minWidth: "100px",
                          "&:hover": {
                            backgroundColor: "#dc2626",
                          },
                        }}
                      >
                        Reject
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={100} // Replace with actual total count
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </div>
    </>
  );
}

export default ClientIDPage;
