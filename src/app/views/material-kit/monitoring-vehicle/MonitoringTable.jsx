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

const subscribarList = [
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER A',
        licensePlate: 'B 7299 AAI',
        status: 'active',
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER A',
        licensePlate: 'B 7299 AAI',
        status: 'active',
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER A',
        licensePlate: 'B 7299 AAI',
        status: 'active',
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER A',
        licensePlate: 'B 7299 AAI',
        status: 'active',
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER A',
        licensePlate: 'B 7299 AAI',
        status: 'active',
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER A',
        licensePlate: 'B 7299 AAI',
        status: 'active',
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER A',
        licensePlate: 'B 7299 AAI',
        status: 'active',
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER A',
        licensePlate: 'B 7299 AAI',
        status: 'active',
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER A',
        licensePlate: 'B 7299 AAI',
        status: 'active',
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER A',
        licensePlate: 'B 7299 AAI',
        status: 'active',
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER A',
        licensePlate: 'B 7299 AAI',
        status: 'active',
        lastPosition: 'SPBU 3900 Kalimantan',
    },
]

const MonitoringTable = () => {
    const [rowsPerPage, setRowsPerPage] = React.useState(5)
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
                        <TableCell>Status</TableCell>
                        <TableCell>GPS</TableCell>
                        <TableCell>Video Cam</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {subscribarList
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
                                <TableCell align="left">
                                    {vehicle.licensePlate}
                                </TableCell>
                                <TableCell>{vehicle.lastPosition}</TableCell>
                                <TableCell>{vehicle.status}</TableCell>
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
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={subscribarList.length}
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
