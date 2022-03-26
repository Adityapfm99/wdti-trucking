import React from 'react'
import PaginationTable from './MasterSupplierTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'

import TotalFuelPayloadChart from '../../dashboard/shared/TotalFuelPayloadChart'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Container = styled('div')(({ theme }) => ({
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
}))
  
const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const AppTable = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Master Supplier' },
                    ]}
                />
                <StyledButton component={Link} to="/material/add-supplier" variant="contained" color="primary">
                + Add Supplier
            </StyledButton>
            <input
                accept="image/*"
                className="input"
                id="contained-button-file"
                multiple
                hidden
                type="file"
            />
            <label htmlFor="contained-button-file">
                
                <StyledButton variant="contained" color="secondary" component="span">
                    Upload
                </StyledButton>
            </label>
            </div>

            <SimpleCard title="Master Supplier">
                <PaginationTable />
            </SimpleCard>
        </Container>
    )
}

export default AppTable
