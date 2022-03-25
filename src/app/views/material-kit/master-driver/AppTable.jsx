import React from 'react'
import MasterDriverTable from './MasterDriverTable'
import TotalFuelPayloadChart from '../../dashboard/shared/TotalFuelPayloadChart'
import DriverChart from './DriverChart'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
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
                        { name: 'Master Driver' },
                    ]}
                />
                <StyledButton component={Link} to="/material/add-driver" variant="contained" color="primary">
                    + Add Driver
                </StyledButton>
                <input
                    accept="csv/*"
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

            <SimpleCard title="Top 5 Drivers">
                 <DriverChart height="200px"/>
            </SimpleCard>

            <br></br>
            <SimpleCard title="Master Driver">
                 <MasterDriverTable /> 
            </SimpleCard>
          

        </Container>
    )
}

export default AppTable
