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

const ItemsList = [
    {
        category: 'Service',
        itemName: 'Routine Service',
        
    },
    {
        category: 'Service',
        itemName: 'Oil Engine Change',
    },
    {
        category: 'SpareParts',
        itemName: 'Brake Pad(s) Replacement',
    },
    {
        category: 'Service',
        itemName: 'Engine Belt Inspection',
    },
    {
        category: 'SpareParts',
        itemName: 'Fuel Injector Replacement',
    },
    {
        category: 'Service',
        itemName: 'Oil Transmission change',
    },
    {
        category: 'Service',
        itemName: 'Other Maintenance',
    },
    {
        category: 'SpareParts',
        itemName: 'Wheel Bearing Replacement',
    },
    {
        category: 'SpareParts',
        itemName: 'Water Pump Replacement',
    },
    {
        category: 'SpareParts',
        itemName: 'Tie Rod End Replacement',
    },
    {
        category: 'Service',
        itemName: 'Routine Service',
    },
]

const ServiceItemsTable = () => {
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
                        > CATEGORY</TableCell>
                        <TableCell sx={{
                            padding: "0px 0px",
                            // borderRight: "1px solid black",
                            backgroundColor: "#e0e0df",
                            fontSize: "1 rem"
                        }}
                        > ITEM NAME</TableCell>
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
                    {ItemsList
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        .map((service, index) => (
                            <TableRow key={index}>
                                <TableCell>{service.category}</TableCell>
                                <TableCell> {service.itemName} </TableCell>
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
                count={ItemsList.length}
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

export default ServiceItemsTable
