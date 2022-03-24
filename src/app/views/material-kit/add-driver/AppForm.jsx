import React from 'react'
import SimpleForm from './DriverForm'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'

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
                        { name: 'Master', path: '/material/master-driver' },
                        { name: 'Form' },
                    ]}
                />
            </div>
            <SimpleCard title="Add Driver">
                <SimpleForm />
            </SimpleCard>
            <Box py="12px" />

        </Container>
    )
}

export default AppForm
