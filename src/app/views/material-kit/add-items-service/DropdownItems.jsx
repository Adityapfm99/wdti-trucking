import React, { Fragment } from 'react'
import { TextField, Autocomplete } from '@mui/material'
import { createFilterOptions } from '@mui/material/Autocomplete'
import { styled } from '@mui/system'

const AutoComplete = styled(Autocomplete)(() => ({
    width: 800,
    marginBottom: '16px',
}))

const suggestions = [
    { label: 'Routine Service' },
    { label: 'Oil Engine Change' },
    { label: 'Brake Pad(s) Replacement' },
    { label: 'Engine Belt Inspection' },
    { label: 'Fuel Injector Replacement' },
    { label: 'Oil Transmission changet' },
    { label: 'Spark Plug Replacement' }, 
    { label: 'Wheel Bearing Replacement' },
    { label: 'Other Maintenance' }, 
    { label: 'Radiator Repair' },
    { label: 'Tie Rod End Replacement' }, 
    { label: 'Water Pump Replacement' },
    { label: 'Tire Replacement' },
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
           
           
            <Autocomplete
                multiple
                id="tags-standard"
                options={suggestions}
                getOptionLabel={(option) => option.label}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        label="Multiple values"
                        placeholder="Favorites"
                        fullWidth
                    />
                )}
            />
            {/* <Autocomplete
                multiple
                id="tags-outlined"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                defaultValue={[top100Films[13]]}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        label="filterSelectedOptions"
                        placeholder="Favorites"
                        fullWidth
                    />
                )}
            /> */}
        </Fragment>
    )
}

export default DropdownCategory
