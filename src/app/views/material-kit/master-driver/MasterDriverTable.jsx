import {
    IconButton,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Icon,
    TablePagination,
} from '@mui/material'
import React from 'react'
import { Box, styled } from '@mui/system'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)(({ theme }) => ({
    whiteSpace: 'pre',
    '& thead': {
        '& tr': {
            '& th': {
                paddingLeft: 0,
                paddingRight: 0,
            },
        },
    },
    '& tbody': {
        '& tr': {
            '& td': {
                paddingLeft: 0,
                textTransform: 'capitalize',
            },
        },
    },
}))

const driverList = [
    {
        vehicleName: 'MITSUBISHI, CANTER',
        driverName: 'DRIVER A',
        nik: '354928129366001',
        pic: 'KOORDINATOR A',
        licensePlate: 'B 7710 QWE',
        status: 'active',
        fuel: 100,
        weight: 730,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER B',
        nik: '354928129366001',
        pic: 'KOORDINATOR B',
        licensePlate: 'B 7921 IOP',
        status: 'active',
        fuel: 90,
        weight: 770,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER C',
        licensePlate: 'B 7121 GHB',
        nik: '354928129366001',
        pic: 'KOORDINATOR C',
        status: 'active',
        fuel: 110,
        weight: 810,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER D',
        nik: '354928129366001',
        pic: 'KOORDINATOR D',
        licensePlate: 'B 7001 GWO',
        status: 'active',
        fuel: 101,
        weight: 790,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER E',
        nik: '354928129366001',
        pic: 'KOORDINATOR E',
        licensePlate: 'B 7492 HJW',
        status: 'active',
        fuel: 110,
        weight: 840,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER F',
        nik: '354928129366001',
        pic: 'KOORDINATOR F',
        licensePlate: 'B 7887 IOP',
        status: 'active',
        fuel: 100,
        weight: 812,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER G',
        nik: '354928129366001',
        pic: 'KOORDINATOR G',
        licensePlate: 'B 7201 FGS',
        status: 'active',
        fuel: 100,
        weight: 810,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER H',
        nik: '354928129366001',
        pic: 'KOORDINATOR H',
        licensePlate: 'B 7769 UJI',
        status: 'active',
        fuel: 80,
        weight: 833,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER I',
        nik: '354928129366001',
        pic: 'KOORDINATOR I',
        licensePlate: 'B 7013 ULO',
        status: 'active',
        fuel: 120,
        weight: 820,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'TOYOTA, DYNA',
        driverName: 'DRIVER J',
        nik: '354928129366001',
        pic: 'KOORDINATOR J',
        licensePlate: 'B 7291 GHW',
        status: 'active',
        fuel: 120,
        weight: 810,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, CANTER',
        driverName: 'DRIVER K',
        nik: '354928129366001',
        pic: 'KOORDINATOR K',
        licensePlate: 'B 7772 HUK',
        status: 'active',
        fuel: 110,
        weight: 823,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
]

const MonitoringTable = () => {
    const [rowsPerPage, setRowsPerPage] = React.useState(10)
    const [page, setPage] = React.useState(0)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }
    const AppButtonRoot = styled('div')(({ theme }) => ({
        margin: '30px',
        [theme.breakpoints.down('sm')]: {
            margin: '16px',
        },
        '& .breadcrumb': {
            marginBottom: '30px',
            [theme.breakpoints.down('sm')]: {
                marginBottom: '16px',
            },
        },
        '& .button': {
            margin: theme.spacing(1),
        },
        '& .input': {
            display: 'none',
        },
    }))
    
    const StyledButton = styled(Button)(({ theme }) => ({
        margin: theme.spacing(1),
    }))

    return (

        <Box width="100%" overflow="auto">
                <StyledButton component={Link} to="/material/monitoring-vehicle" variant="contained" color="primary">
                    Add Driver
                </StyledButton>
            <StyledTable>

                <TableHead>
                    <TableRow>
                        <TableCell sx={{
                            padding: "0px 0px",
                            // borderRight: "1px solid black",
                            backgroundColor: "#e0e0df",
                            fontSize: "1 rem"
                        }}
                        > DRIVER NAME</TableCell>
                        <TableCell sx={{
                            padding: "0px 0px",
                            // borderRight: "1px solid black",
                            backgroundColor: "#e0e0df",
                            fontSize: "1 rem"
                        }}
                        > NIK</TableCell>
                        <TableCell sx={{
                            padding: "0px 0px",
                            // borderRight: "1px solid black",
                            backgroundColor: "#e0e0df",
                            fontSize: "1 rem"
                        }}
                        > VEHICLE NAME</TableCell>
                        <TableCell sx={{
                            padding: "0px 0px",
                            // borderRight: "1px solid black",
                            backgroundColor: "#e0e0df",
                            align: "center",
                            fontSize: "1 rem"
                        }}
                        > PIC</TableCell>
                        <TableCell sx={{
                            padding: "0px 0px",
                            // borderRight: "1px solid black",
                            backgroundColor: "#e0e0df",
                            fontSize: "1 rem"
                        }}
                        > TOTAL LOAD (kg)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {driverList
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        .map((vehicle, index) => (
                            <TableRow key={index}>
                                <TableCell align="left">
                                    {vehicle.driverName}
                                </TableCell>
                                <TableCell align="left">
                                    {vehicle.nik}
                                </TableCell>
                                <TableCell alignItems="left">
                                    {vehicle.vehicleName}
                                </TableCell>
                                <TableCell>{vehicle.pic}</TableCell>
                                <TableCell align = "left">{vehicle.weight}</TableCell>
                               
                            </TableRow>
                        ))}
                </TableBody>
            </StyledTable>

            <TablePagination
                sx={{ px: 5 }}
                rowsPerPageOptions={[10, 20, 30]}
                component="div"
                count={driverList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                backIconButtonProps={{
                    'aria-label': 'Previous Page',
                }}
                nextIconButtonProps={{
                    'aria-label': 'Next Page',
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Box>
    )
}

export default MonitoringTable
