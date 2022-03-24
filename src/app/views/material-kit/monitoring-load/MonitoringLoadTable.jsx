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

const monitoringLoad = [
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER A',
        licensePlate: 'B 7192 YUI',
        lastSync: '2022-03-22 09:40:00',
        status: 'active',
        weight: '900 Kg',
    },
    {
        vehicleName: 'MITSUBISHI, CANTER',
        driverName: 'DRIVER B',
        licensePlate: 'B 7690 GHO',
        lastSync: '2022-03-22 09:44:00',
        status: 'active',
        weight: '880 Kg',
    },
    {
        vehicleName: 'TOYOTA, DYNA',
        driverName: 'DRIVER C',
        licensePlate: 'B 7299 AAI',
        lastSync: '2022-03-22 09:42:00',
        status: 'active',
        weight: '970 Kg',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER D',
        licensePlate: 'B 7716 VBU',
        lastSync: '2022-03-22 09:45:00',
        status: 'active',
        weight: '870 Kg',
    },
    {
        vehicleName: 'MITSUBISHI, CANTER',
        driverName: 'DRIVER E',
        licensePlate: 'B 7991 JKO',
        lastSync: '2022-03-22 09:48:00',
        status: 'active',
        weight: '910 Kg',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER F',
        licensePlate: 'B 7010 TUI',
        lastSync: '2022-03-22 09:40:00',
        status: 'active',
        weight: '930 Kg',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER G',
        licensePlate: 'B 7662 TYU',
        lastSync: '2022-03-22 09:40:00',
        status: 'active',
        weight: '900 Kg',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER H',
        licensePlate: 'B 7090 BHU',
        lastSync: '2022-03-22 09:40:00',
        status: 'active',
        weight: '900 Kg',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER I',
        licensePlate: 'B 7712 QWE',
        lastSync: '2022-03-22 09:40:00',
        status: 'active',
        weight: '400 Kg',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER J',
        licensePlate: 'B 7302 DJI',
        lastSync: '2022-03-22 09:40:00',
        status: 'active',
        weight: '820 Kg',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER A',
        licensePlate: 'B 7299 AAI',
        lastSync: '2022-03-22 09:40:00',
        status: 'active',
        weight: '650 Kg',
    },
]

const MonitoringLoadTable = () => {
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
                        <TableCell>Last Sync</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Weight</TableCell>
                     
                    </TableRow>
                </TableHead>
                <TableBody>
                    {monitoringLoad
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
                                <TableCell>{vehicle.lastSync}</TableCell>
                                <TableCell>{vehicle.status}</TableCell>
                                <TableCell>{vehicle.weight}</TableCell>
                                {/* <TableCell>
                                    <IconButton>
                                        <Icon color="info">my_location</Icon>
                                    </IconButton>
                                </TableCell>
                                <TableCell>
                                    <IconButton>
                                        <Icon color="info">videocam</Icon>
                                    </IconButton>
                                </TableCell> */}
                            </TableRow>
                        ))}
                </TableBody>
            </StyledTable>

            <TablePagination
                sx={{ px: 2 }}
                rowsPerPageOptions={[10, 20, 30]}
                component="div"
                count={monitoringLoad.length}
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

export default MonitoringLoadTable
