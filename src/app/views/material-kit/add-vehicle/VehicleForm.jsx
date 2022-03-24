import {
    Button,
    Icon,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { styled } from '@mui/system'
import { Span } from 'app/components/Typography'
import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import VehicleBrand from './VehicleBrand'
import VehicleName from './VehicleName'
import VehicleYear from './VehicleYear'
import VehicleStatus from './VehicleStatus'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const SimpleForm = () => {
    const [state, setState] = useState({
        date: new Date(),
    })

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            console.log(value)

            if (value !== state.password) {
                return false
            }
            return true
        })
        return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    }, [state.password])

    const handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
    }

    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const handleDateChange = (date) => {
        setState({ ...state, date })
    }

    const {
        status,
        sensorFuelCode,
        sensorTankCode,
        sensorLoadCode,
        license,
    } = state

    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                        <VehicleBrand />
                        <VehicleName />
                        <TextField label="License Plate" validators={['required']} onChange={handleChange} type="text" name="licensePlate" errorMessages={['this field is required']} value={license || ''} />
                        <VehicleYear />
                        <VehicleStatus/>
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Sensor Fuel Code"
                            onChange={handleChange}
                            type="text"
                            name="sensorFuel"
                            value={sensorFuelCode || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            label="Sensor Load Code"
                            onChange={handleChange}
                            name="SensorLoadCode"
                            type="tect"
                            value={sensorLoadCode || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            label="Sensor Tank Code"
                            onChange={handleChange}
                            name="sensorTank"
                            type="text"
                            value={sensorTankCode || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <RadioGroup
                            sx={{ mb: 2 }}
                            value={status || ''}
                            name="status"
                            onChange={handleChange}
                            row
                        >
                            <FormControlLabel
                                value="active"
                                control={<Radio color="secondary" />}
                                label="active"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="inactive"
                                control={<Radio color="secondary" />}
                                label="inactive"
                                labelPlacement="end"
                            />
                           
                        </RadioGroup>

                    </Grid>
                </Grid>
                <Button component={Link} to="/material/master-vehicle" color="primary" variant="contained" type="submit">
                    <Icon>send</Icon>
                    <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                        Submit
                    </Span>
                </Button>
            </ValidatorForm>
        </div>
    )
}

export default SimpleForm
