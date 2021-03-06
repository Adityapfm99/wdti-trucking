import React, { Fragment } from 'react'
import RowCards from './shared/RowCards'
import StatCards from './shared/StatCards'
import Campaigns from './shared/Campaigns'
import { Grid, Card } from '@mui/material'
import StatCards2 from './shared/StatCards2'
import DoughnutChart from './shared/Doughnut'
import ServiceReminder from './shared/serviceReminder'
import UpgradeCard from './shared/UpgradeCard'
import { styled, useTheme } from '@mui/system'
import TopDriversChart from './shared/topDriverChart'
import TotalFuelPayloadChart from './shared/TotalFuelPayloadChart'
import MapSection from '../material-kit/map/Map' // import the map here

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
}))

const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
}))

const SubTitle = styled('span')(({ theme }) => ({
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
}))

const H4 = styled('h4')(({ theme }) => ({
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '16px',
    textTransform: 'capitalize',
    color: theme.palette.text.primary,
}))

const Analytics = () => {
    const { palette } = useTheme()

    return (
        <Fragment>
            <ContentBox className="analytics">
                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <StatCards />
                        <H4>Total Payloads - Total Fuels</H4>
                        <TotalFuelPayloadChart
                                height="200px"
                              
                            />
                            {/* <MapSection  height="200px"/> */}
                        <H4>Drivers Performance</H4>
                        <TopDriversChart   height="200px"/>
                        
                        {/* <StatCards2 /> */}
                        {/* <H4>Ongoing Projects</H4>
                        <RowCards /> */}
                       
                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card sx={{ px: 3, py: 2, mb: 3 }}>
                            <Title>Status Vehicle</Title>
                            {/* <SubTitle>Last 30 days</SubTitle> */}
                            <DoughnutChart
                                height="300px"
                                color={[
                                    palette.primary.main,
                                    palette.warning.main,
                                    
                                    palette.primary.light,
                                ]}
                            />
                            
                        </Card>
                        <Card sx={{ px: 3, py: 2, mb: 3 }}>
                            <Title>Service Reminder</Title>
                            {/* <SubTitle>Last 30 days</SubTitle> */}
                            <ServiceReminder
                                height="350px"
                                color={[
                                    palette.primary.main,
                                    palette.success.main,
                                    
                                    palette.primary.light,
                                ]}
                            />
                            
                        </Card>
                        {/* <UpgradeCard /> */}
                        {/* <Campaigns /> */}
                    </Grid>
                </Grid>
            </ContentBox>
        </Fragment>
    )
}

export default Analytics
