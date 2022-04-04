import {
    Button,
    Icon,
    Grid,

} from '@mui/material'
import AutocompleteCombo from './DropdownCategory'
import { Link } from 'react-router-dom'
import { styled } from '@mui/system'
import { Span } from 'app/components/Typography'
import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import DropDownCategory from './DropdownCategory'
import DropDownItems from './DropdownItems'


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
        driverName,
        nik,
        pic,
    } = state

    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={12}>
  
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                        Category
                    <DropDownCategory/>
                        Items
                    <DropDownItems/>
                    </Grid>
                </Grid>
                <br></br>
                <Button component={Link} to="/material/master-driver" color="primary" variant="contained" type="submit">
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
