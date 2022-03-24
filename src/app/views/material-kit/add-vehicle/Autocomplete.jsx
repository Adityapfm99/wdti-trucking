import React, { Fragment } from 'react'
import { TextField, Autocomplete } from '@mui/material'
import { createFilterOptions } from '@mui/material/Autocomplete'
import { styled } from '@mui/system'

const AutoComplete = styled(Autocomplete)(() => ({
    width: 750,
    marginBottom: '16px',
}))

const suggestions = [
    { label: 'MITSUBISHI, FUSO - B 7782 UJI' },
    { label: 'MITSUBISHI, FUSO - B 7782 RRT' },
    { label: 'MITSUBISHI, CANTER - B 7839 HUN' },
    { label: 'MITSUBISHI, CANTER - B 7101 QIP' },
    { label: 'MITSUBISHI, FUSO - B 7512 IOA' },
    { label: 'MITSUBISHI, FUSO - B 7782 HUI' },
    { label: 'MITSUBISHI, CANTER - B 7539 HFE' },
    { label: 'MITSUBISHI, FUSO - B 7329 FDN' },
    { label: 'MITSUBISHI, FUSO - B 7232 TYU' },
    { label: 'MITSUBISHI, FUSO - B 7021 ISQ' },
    { label: 'MITSUBISHI, FUSO - B 7731 HTY' },
    { label: 'MITSUBISHI, FUSO - B 7481 YTF' },
    
]

const filter = createFilterOptions()

const AutocompleteCombo = () => {
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
                        label="Vehicle"
                        variant="outlined"
                        fullWidth
                    />
                )}
            />

            {/* <AutoComplete
                value={value}
                onChange={handleChange}
                filterOptions={filterOptions}
                options={suggestions}
                getOptionLabel={(option) => {
                    // e.g value selected with enter, right from the input
                    if (typeof option === 'string') {
                        return option
                    }
                    if (option.inputValue) {
                        return option.inputValue
                    }
                    return option.label
                }}
                renderOption={(option) => option.label}
                style={{ width: 300 }}
                freeSolo
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Free solo with text demo"
                        variant="outlined"
                        fullWidth
                    />
                )}
            />

            <AutoComplete
                options={suggestions}
                getOptionLabel={(option) => option.label}
                getOptionDisabled={(option) =>
                    option === suggestions[0] || option === suggestions[2]
                }
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Disabled option"
                        variant="outlined"
                        fullWidth
                    />
                )}
            /> */}
        </Fragment>
    )
}

export default AutocompleteCombo
