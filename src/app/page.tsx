"use client"
import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { getBusinesses } from './Service/ServiceApi'
import { BusinessDTO } from './Service/ServiceDto'
import { IoMdCloseCircle } from "react-icons/io";

interface Column {
  id: 'no' | 'bizId' | 'bizName' | 'path' | 'service' | 'addService';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'no', label: 'ลำดับ', minWidth: 50 },
  { id: 'bizId', label: 'Business ID', minWidth: 100 },
  { id: 'bizName', label: 'ชื่อบัญชีนิติบุคคล', minWidth: 200 },
  { id: 'path', label: 'Path', minWidth: 70 },
  { id: 'service', label: 'บริการที่เชื่อมต่อ', minWidth: 300 },
  { id: 'addService', label: 'เพิ่มบริการ', minWidth: 170 },
];

function createData(
  no: number,
  bizId: string,
  bizName: string,
  path: string,
  service: string[],
  addService: string
): Data {
  return { no, bizId, bizName, path, service, addService };
}

interface Data {
  no: number;
  bizId: string;
  bizName: string;
  path: string;
  service: string[];
  addService: string;
}
function Home() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState<Data[]>([]);
  // const [listBiz, setListBiz] = React.useState([])
  const fetchBusinesses = async () => {
    try {
      const response = await getBusinesses();
      console.log(response.data);
      const businessData = response.data as BusinessDTO[];
      // setListBiz(response.data);
      const formattedRows = businessData.map((item: BusinessDTO, index: number) => createData(
        index + 1,
        item.businessID || "",
        item.businessName || "",
        item.themes?.prefix || "",
        item.services || [],
        'เพิ่มบริการ'
      ));
      // console.log('object formattedRows', formattedRows)
      setRows(formattedRows);
    } catch (error) {
      console.error('Error fetching businesses:', error);
    }
  };

  React.useEffect(() => {
    fetchBusinesses(); 
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div className="max-w-full h-[1290px]">
        <h1 className="text-2xl">จัดการบัญชีนิติบุคคล</h1>
        <div className="m-5 flex align-center justify-center rounded-[10px]">
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 650 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow className="bg-blue-400">
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        className="text-white font-bold"
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                              {column.id === 'service' && Array.isArray(value) ? (
                                <div>
                                  {value.map((service: string, index: number) => (
                                    <div key={index}>
                                      <div className='flex justify-center align-center'>
                                        <p className='flex align-center justify-between rounded-[20px] font-[16px] p-2 m-1 bg-[#C7CEEF] text-[#000]'>
                                         <span> {service}     </span>                                      
                                          <span className='cursor-pointer flex align-center text-[20px] ml-[5px]'><IoMdCloseCircle  className='text-[#5A6ACF] rounded-full hover:text-[#3A4397] transition-colors' /></span>
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              ) : column.format && typeof value === 'number' ? (
                                column.format(value)
                              ) : (
                                value
                              )}
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
              rowsPerPageOptions={[10, 25, 50, 75, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </div>
    </>
  );
}
export default Home;