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
        address,
        supplierName,
        supplierCode,
        picSupplier,
        status,
    } = state

    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                        Supplier Name
                        <TextField
                            label="Supplier Name"
                            onChange={handleChange}
                            type="text"
                            name="supplierName"
                            value={supplierName || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        Address
                        <TextField
                            label="Address"
                            onChange={handleChange}
                            type="text"
                            name="address"
                            multiline
                            rows={3}
                            value={address || ''}
                        />
                        
                       
                    </Grid>
                    

                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                    PIC Supplier
                        <TextField
                            label="PIC Supplier"
                            onChange={handleChange}
                            type="text"
                            name="picSupplier"
                            value={picSupplier || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        Supplier Code
                        <TextField
                            label="Supplier Code"
                            onChange={handleChange}
                            type="text"
                            name="supplierCode"
                            value={supplierCode || ''}
                        />
                        status Supplier
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
                        Save
                    </Span>
                </Button>
            </ValidatorForm>
        </div>
    )
}

export default SimpleForm
