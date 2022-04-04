import React, { Fragment } from 'react'
import { TextField, Autocomplete } from '@mui/material'
import { createFilterOptions } from '@mui/material/Autocomplete'
import { styled } from '@mui/system'

const AutoComplete = styled(Autocomplete)(() => ({
    width: 800,
    marginBottom: '16px',
}))

const suggestions = [
    { label: 'SERVICE' },
    { label: 'SPAREPARTS' },
    { label: 'OTHER' },
]

const filter = createFilterOptions()

const DropdownCategory = () => {
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
                        label="items"
                        variant="outlined"
                        fullWidth
                    />
                )}
            />
        </Fragment>
    )
}

export default DropdownCategory
