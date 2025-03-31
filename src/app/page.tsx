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
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { getBusinesses } from './Service/ServiceApi'
import { BusinessDTO } from './Service/ServiceDto'
import { IoMdCloseCircle } from "react-icons/io";
import { IoAddCircleSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

interface Column {
  id: 'no' | 'bizId' | 'bizName' | 'path' | 'service' | 'addService';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}
interface styleService {
  color: string;
  name: string;
}
const serviceName: styleService[] = [
  { name: "manage-business-enrollment", color: "#FFB3B3" },
  { name: "id-connect", color: "#B3D9FF" },
  { name: "edu-student-pre-register", color: "#FFB3D9" },
  { name: "edu-officer-pre-register", color: "#B3FFB3" },
  { name: "edu-teacher-pre-register", color: "#E6B3FF" },
  { name: "edu-portal-management", color: "#B3FFF9" },
  { name: "medical-pre-register", color: "#FFE6B3" },
  { name: "dipchip-management", color: "#B3C6FF" },
  { name: "ca", color: "#B3FFFF" },
  { name: "time-attendance-pre-register", color: "#B3FFB3" },
  { name: "moph-caregiver-pre-register", color: "#E6B3FF" },
  { name: "corporation-pre-register", color: "#FFB3E6" },
  { name: "contract-no", color: "#D9B3FF" },
  { name: "e-stamp", color: "#FFE6B3" },
  { name: "digital-workflow", color: "#FFB3B3" },
  { name: "edu-student-pre-register-combine", color: "#FFB3D9" },
  { name: "one-id", color: "#B3B3FF" },
  { name: "one-id-ra", color: "#E6B3FF" },
  { name: "one-id-pmuc", color: "#FFB3FF" }
];

const columns: readonly Column[] = [
  { id: 'no', label: 'ลำดับ', minWidth: 50 },
  { id: 'bizId', label: 'Business ID', minWidth: 100 },
  { id: 'bizName', label: 'ชื่อบัญชีนิติบุคคล', minWidth: 200 },
  { id: 'path', label: 'Path', minWidth: 70 },
  { id: 'service', label: 'บริการที่เชื่อมต่อ', minWidth: 200 },
  { id: 'addService', label: 'เพิ่มบริการ', minWidth: 50 },
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
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredRows, setFilteredRows] = React.useState<Data[]>([]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filtered = rows.filter(row => 
      row.bizId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.bizName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.path.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRows(filtered);
  }; 

  const fetchBusinesses = async () => {
    try {
      const response = await getBusinesses();
      console.log(response.data);
      const businessData = response.data as BusinessDTO[];
      // setListBiz(response.data);
      const formattedRows = businessData.map((item: BusinessDTO, index: number) => createData(
        index + 1,
        item.businessID || "-",
        item.businessName || "-",
        item.themes?.prefix || "-",
        item.services || ["-"],
        ""
      ));
      setRows(formattedRows);
    } catch (error) {
      console.error('Error fetching businesses:', error);
    }
  };

  React.useEffect(() => {
    console.log('filteredRows : ', filteredRows)
  }, [filteredRows]);

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
      <div className="max-w-full h-[805px]">
        <h1 className="text-2xl">จัดการบัญชีนิติบุคคล</h1>
       
        <div className="m-5 block  rounded-[10px]">
          <div className='mb-5 mt-5'>
            <form className='gap gap-2' onSubmit={handleSearch}>
            <TextField
              placeholder="ค้นหา"
              variant="outlined"
              size="small"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px',
                  backgroundColor: '#fff',
                  width: '600px',
                }
              }}
            />
            <Button
              type="submit"
              variant="contained"
              id="submit"
              sx={{
                borderRadius: '10px',
                backgroundColor: '#5A6ACF',
                '&:hover': {
                  backgroundColor: '#3A4397'
                },
                height: '40px',
                width: '40px',
                marginLeft: '20px',
              }}
            >
              <IoSearch  className='text-2xl' />
            </Button>
            </form>
          </div>
          <div className="flex align-center justify-center" >
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
                    {(filteredRows.length > 0 ? filteredRows : rows)
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row, index) => {
                        return (
                          <TableRow hover role="checkbox" tabIndex={-1} key={index} className='font-roboto'>
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.id === 'service' && Array.isArray(value) ? (
                                    <div>
                                      {value.map((service: string, index: number) => (
                                        <div key={index} className='inline-block'>
                                          <div className='flex justify-center align-center'>
                                            <p className="flex items-center justify-between rounded-[20px] font-[16px] p-2 m-1 text-[#000]"
                                              style={{
                                                backgroundColor: serviceName.find((item: styleService) => item.name === service)?.color || '#C7CEEF'
                                              }}>
                                              <span> {service} </span>
                                              <span className='cursor-pointer flex align-center text-[20px] ml-[5px]'>
                                                <IoMdCloseCircle className='text-[#5A6ACF] rounded-full hover:text-[#3A4397] transition-colors' />
                                              </span>
                                            </p>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  ) : column.id === 'addService' ? (
                                    <IoAddCircleSharp className='cursor-pointer text-[#5A6ACF] rounded-full hover:text-[#3A4397] transition-colors text-4xl' />
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
      </div>
    </>
  );
}
export default Home;