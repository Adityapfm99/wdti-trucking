import React, { Fragment } from 'react'
import { TextField, Autocomplete } from '@mui/material'
import { createFilterOptions } from '@mui/material/Autocomplete'
import { styled } from '@mui/system'

const AutoComplete = styled(Autocomplete)(() => ({
    width: 750,
    marginBottom: '16px',
}))

const suggestions = [
    { label: '2000' },
    { label: '2001' },
    { label: '2002' },
    { label: '2003' },
    { label: '2004' },
    { label: '2005' },
    { label: '2006' },
    { label: '2007' },
    { label: '2008' },
    { label: '2009' },
    { label: '2010' },
    { label: '2011' },
    { label: '2012' },
    { label: '2013' },
    { label: '2014' },
    { label: '2015' },
    { label: '2016' },
    { label: '2017' },
    { label: '2018' },
    { label: '2019' },
    { label: '2020' },
    { label: '2021' },
    
]

const filter = createFilterOptions()

const VehicleYear = () => {
    const [value, setValue] = React.useState(null)

    const handleChange = (event, newValue) => {
        if (newValue && newValue.inputValue) {
            setValue({
                label: newValue.inputValue,
            })
            return
        }
        setValue(newValue)
    }

    const filterOptions = (options, params) => {
        const filtered = filter(options, params)
        if (params.inputValue !== '') {
            filtered.push({
                inputValue: params.inputValue,
                label: `Add "${params.inputValue}"`,
            })
        }
        return filtered
    }

    return (
        <Fragment>
            <AutoComplete
                options={suggestions}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="VehicleYear"
                        variant="outlined"
                        fullWidth
                    />
                )}
            />

        </Fragment>
    )
}

export default VehicleYear
