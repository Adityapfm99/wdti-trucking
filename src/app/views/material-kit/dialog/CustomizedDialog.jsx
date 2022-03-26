import React from 'react'
import { styled } from '@mui/system'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MuiDialogTitle from '@mui/material/DialogTitle'
import MuiDialogContent from '@mui/material/DialogContent'
import MuiDialogActions from '@mui/material/DialogActions'

import MarkerMap from '../../map/MarkerMap'

const DialogTitleRoot = styled(MuiDialogTitle)(({ theme }) => ({
    margin: 0,
    padding: theme.spacing(2),
    '& .closeButton': {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
}))

const DialogTitle = ((props) => {
    const { children, onClose } = props
    return (
        <DialogTitleRoot disableTypography>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="Close"
                    className='closeButton'
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitleRoot>
    )
})

const DialogContent = styled(MuiDialogContent)(({ theme }) => ({
    "&.root": {
        padding: theme.spacing(2),
    },
}))

const DialogActions = styled(MuiDialogActions)(({ theme }) => ({
    '&.root': {
        margin: 0,
        padding: theme.spacing(1),
    },
}))

class CustomizedDialogs extends React.Component {
    state = {
        open: false,
    }

    handleClickOpen = () => {
        this.setState({
            open: true,
        })
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    render() {
        return (
            <div>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={this.handleClickOpen}
                >
                    Open dialog
                </Button>
                <Dialog
                    onClose={this.handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={this.state.open}
                >
                    <DialogTitle
                        id="customized-dialog-title"
                        onClose={this.handleClose}
                    >
                        Modal title
                    </DialogTitle>
                    <DialogContent dividers>
                        <MarkerMap></MarkerMap>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Save changes
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default CustomizedDialogs
