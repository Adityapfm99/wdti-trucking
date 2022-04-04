import React from 'react'
import SimpleForm from './ServiceItemForm'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Card } from '@material-ui/core'

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

const AppForm = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Master', path: '/material/service-items' },
                        { name: 'Form' },
                    ]}
                />
            </div>
            <SimpleCard title="Add Items">
                <SimpleForm />
            </SimpleCard>
            <br></br>
            <Box py="12px" />

        </Container>
    )
}

export default AppForm
