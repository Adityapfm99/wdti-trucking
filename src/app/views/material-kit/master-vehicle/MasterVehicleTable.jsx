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

const VehicleList = [
    {
        vehicleName: 'FUSO',
        vehicleBrand: 'MITSUBISHI',
        nik: '354928129366001',
        pic: 'KOORDINATOR A',
        licensePlate: 'B 7710 QWE',
        year: '2015',
        status: 'Rent',
        active: 'active',
        sensorFuel:'SJ0312',
        sensorLoad: 'SL4032',
        sensorTank: 'ST322',
    },
    {
        vehicleName: 'FUSO',
        vehicleBrand: 'MITSUBISHI',
        nik: '354928129366001',
        pic: 'KOORDINATOR B',
        licensePlate: 'B 7921 IOP',
        year: '2013',
        status: 'Own',
        active: 'active',
        sensorFuel:'SJ0312',
        sensorLoad: 'SL4032',
        sensorTank: 'ST322',
    },
    {
        vehicleName: 'FUSO',
        vehicleBrand: 'MITSUBISHI',
        licensePlate: 'B 7121 GHB',
        year: '2013',
        status: 'Own',
        active: 'active',
        sensorFuel:'SJ0312',
        sensorLoad: 'SL4032',
        sensorTank: 'ST322',
    },
    {
        vehicleName: 'FUSO',
        vehicleBrand: 'MITSUBISHI',
        licensePlate: 'B 7001 GWO',
        year: '2013',
        status: 'Own',
        active: 'active',
        sensorFuel:'SJ0312',
        sensorLoad: 'SL4032',
        sensorTank: 'ST322',
    },
    {
        vehicleName: 'CANTER',
        vehicleBrand: 'MITSUBISHI',
        nik: '354928129366001',
        pic: 'KOORDINATOR E',
        licensePlate: 'B 7492 HJW',
        year: '2010',
        status: 'Own',
        active: 'active',
        sensorFuel:'SJ0312',
        sensorLoad: 'SL4032',
        sensorTank: 'ST322',
    },
    {
        vehicleName: 'FUSO',
        vehicleBrand: 'MITSUBISHI',
        nik: '354928129366001',
        pic: 'KOORDINATOR F',
        licensePlate: 'B 7887 IOP',
        year: '2010',
        status: 'Own',
        active: 'active',
        sensorFuel:'SJ0312',
        sensorLoad: 'SL4032',
        sensorTank: 'ST322',
    },
    {
        vehicleName: 'FUSO',
        vehicleBrand: 'MITSUBISHI',
        nik: '354928129366001',
        pic: 'KOORDINATOR G',
        licensePlate: 'B 7201 FGS',
        year: '2010',
        status: 'Own',
        active: 'active',
        sensorFuel:'SJ0312',
        sensorLoad: 'SL4032',
        sensorTank: 'ST322',
    },
    {
        vehicleName: 'FUSO',
        vehicleBrand: 'MITSUBISHI',
        licensePlate: 'B 7769 UJI',
        year: '2002',
        status: 'Own',
        active: 'active',
        sensorFuel:'SJ0312',
        sensorLoad: 'SL4032',
        sensorTank: 'ST322',
    },
    {
        vehicleName: 'FUSO',
        vehicleBrand: 'MITSUBISHI',
        licensePlate: 'B 7013 ULO',
        year: '2010',
        status: 'Own',
        active: 'active',
        sensorFuel:'SJ0312',
        sensorLoad: 'SL4032',
        sensorTank: 'ST322',
    },
    {
        vehicleName: 'DYNA',
        vehicleBrand: 'TOYOTA',
        licensePlate: 'B 7291 GHW',
        year: '2010',
        status: 'Own',
        active: 'active',
        sensorFuel:'SJ0312',
        sensorLoad: 'SL4032',
        sensorTank: 'ST322',
    },
    {
        vehicleName: 'CANTER',
        vehicleBrand: 'MITSUBISHI',
        licensePlate: 'B 7772 HUK',
        year: '2010',
        status: 'Rent',
        active: 'active',
        sensorFuel:'SJ0312',
        sensorLoad: 'SL4032',
        sensorTank: 'ST322',
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


    return (
        <Box width="100%" overflow="auto">
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{
                            padding: "0px 0px",
                            // borderRight: "1px solid black",
                            backgroundColor: "#e0e0df",
                            fontSize: "1 rem"
                        }}
                        > VEHICLE BRAND</TableCell>
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
                            fontSize: "1 rem"
                        }}
                        > LICENSE PLATE</TableCell>
                        <TableCell sx={{
                            padding: "0px 0px",
                            // borderRight: "1px solid black",
                            backgroundColor: "#e0e0df",
                            align: "center",
                            fontSize: "1 rem"
                        }}
                        > VEHICLE STATUS</TableCell>
                        <TableCell sx={{
                            padding: "0px 0px",
                            // borderRight: "1px solid black",
                            backgroundColor: "#e0e0df",
                            fontSize: "1 rem"
                        }}
                        > TAHUN PEMBUATAN</TableCell>
                         <TableCell sx={{
                            padding: "0px 0px",
                            // borderRight: "1px solid black",
                            backgroundColor: "#e0e0df",
                            fontSize: "1 rem"
                        }}
                        > SENSOR FUEL</TableCell>
                         <TableCell sx={{
                            padding: "0px 0px",
                            // borderRight: "1px solid black",
                            backgroundColor: "#e0e0df",
                            fontSize: "1 rem"
                        }}
                        > SENSOR LOAD</TableCell>
                         <TableCell sx={{
                            padding: "0px 0px",
                            // borderRight: "1px solid black",
                            backgroundColor: "#e0e0df",
                            fontSize: "1 rem"
                        }}
                        > SENSOR TANK</TableCell>
                         <TableCell sx={{
                            padding: "0px 0px",
                            // borderRight: "1px solid black",
                            backgroundColor: "#e0e0df",
                            fontSize: "1 rem"
                        }}
                        > ACTIVE</TableCell>
                         <TableCell sx={{
                            padding: "0px 0px",
                            // borderRight: "1px solid black",
                            backgroundColor: "#e0e0df",
                            fontSize: "1 rem"
                        }}
                        > ACTION</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {VehicleList
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        .map((vehicle, index) => (
                            <TableRow key={index}>
                                <TableCell>{vehicle.vehicleBrand}</TableCell>
                                <TableCell> {vehicle.vehicleName} </TableCell>
                                <TableCell>{vehicle.licensePlate}</TableCell>
                                <TableCell>{vehicle.status}</TableCell>
                                <TableCell align = "left">{vehicle.year}</TableCell>
                                <TableCell align = "left">{vehicle.sensorFuel}</TableCell>
                                <TableCell align = "left">{vehicle.sensorLoad}</TableCell>
                                <TableCell align = "left">{vehicle.sensorTank}</TableCell>
                                <TableCell align = "left">{vehicle.active}</TableCell>
                                <TableCell >
                                 <IconButton>
                                    <Icon tooltip="edit" color="info">create</Icon>
                                 </IconButton>
                                <IconButton>
                                    <Icon color="error">cancel</Icon>
                                </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </StyledTable>

            <TablePagination
                sx={{ px: 5 }}
                rowsPerPageOptions={[10, 20, 30]}
                component="div"
                count={VehicleList.length}
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
