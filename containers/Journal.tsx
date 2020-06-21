import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    makeStyles,
    Paper,
    TextField
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Fragment, useState } from 'react'

type Props = {}

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    journal: {
        width: '800px',
        height: '80vh',
        margin: '0 auto'
    }
}))

export const Journal = (props: Props) => {
    const classes = useStyles()
    const [journalTitle, setJournalTitle] = useState<string>()

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const title = event.target.value
        setJournalTitle(title)
    }

    return (
        <Fragment>
            <AppBar position='fixed'>
                <Toolbar>
                    <IconButton edge='start'>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        MY Journal
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Paper className={classes.journal}>
                <TextField value={journalTitle} onChange={handleTitleChange} />
            </Paper>
        </Fragment>
    )
}
