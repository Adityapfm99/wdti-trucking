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

const monitoringVehicleList = [
    {
        vehicleName: 'MITSUBISHI, CANTER',
        driverName: 'DRIVER A',
        licensePlate: 'B 7710 QWE',
        status: 'active',
        fuel: 100,
        weight: 730,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER B',
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
        status: 'active',
        fuel: 110,
        weight: 810,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER D',
        licensePlate: 'B 7001 GWO',
        status: 'active',
        fuel: 101,
        weight: 790,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER E',
        licensePlate: 'B 7492 HJW',
        status: 'active',
        fuel: 110,
        weight: 840,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER F',
        licensePlate: 'B 7887 IOP',
        status: 'active',
        fuel: 100,
        weight: 812,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER G',
        licensePlate: 'B 7201 FGS',
        status: 'active',
        fuel: 100,
        weight: 810,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER H',
        licensePlate: 'B 7769 UJI',
        status: 'active',
        fuel: 80,
        weight: 833,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER I',
        licensePlate: 'B 7013 ULO',
        status: 'active',
        fuel: 120,
        weight: 820,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'TOYOTA, DYNA',
        driverName: 'DRIVER J',
        licensePlate: 'B 7291 GHW',
        status: 'active',
        fuel: 120,
        weight: 810,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, CANTER',
        driverName: 'DRIVER K',
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

    return (
        <Box width="100%" overflow="auto">
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Vehicle Name</TableCell>
                        <TableCell>Driver Name</TableCell>
                        <TableCell>License Plate</TableCell>
                        <TableCell>Last Position</TableCell>
                        <TableCell>Weight (kg)</TableCell>
                        <TableCell>Fuel (ltr)</TableCell>
                        <TableCell>Live Location</TableCell>
                        <TableCell>Video Cam</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {monitoringVehicleList
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        .map((vehicle, index) => (
                            <TableRow key={index}>
                                <TableCell align="left">
                                    {vehicle.vehicleName}
                                </TableCell>
                                <TableCell align="left">
                                    {vehicle.driverName}
                                </TableCell>
                                <TableCell alignItems="left">
                                    {vehicle.licensePlate}
                                </TableCell>
                                <TableCell>{vehicle.lastPosition}</TableCell>
                                <TableCell align = "left">{vehicle.weight}</TableCell>
                                <TableCell align = "left">{vehicle.fuel}</TableCell>
                                <TableCell>
                                    <IconButton>
                                        <Icon color="info">my_location</Icon>
                                    </IconButton>
                                </TableCell>
                                <TableCell>
                                    <IconButton>
                                        <Icon color="info">videocam</Icon>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </StyledTable>

            <TablePagination
                sx={{ px: 2 }}
                rowsPerPageOptions={[10, 20, 30]}
                component="div"
                count={monitoringVehicleList.length}
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
