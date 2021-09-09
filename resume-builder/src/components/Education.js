import React, {useContext} from 'react'
import {resumeContext} from './Resume'
import {makeStyles} from '@material-ui/core/styles'
import SchoolIcon from '@material-ui/icons/School'
import DateRangeIcon from '@material-ui/icons/DateRange'
import InputAdornment from '@material-ui/core/InputAdornment'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import {Paper, Card, CardHeader, CardContent,
        TextField, Grid,  Button, Divider} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({

        margin: {

                margin: theme.spacing.unit * 1.5,

        },

        padding: {

                padding: theme.spacing.unit,

        },

}))
const Education = () => {

        const classes = useStyles()

        const {

                college, 
                setCollege,
                fromYear1, 
                setFromYear1,
                toYear1, 
                setToYear1,
                qualification1, 
                setQualification1,
                description1, 
                setDescription1,
                school, 
                setSchool,
                fromYear2, 
                setFromYear2,
                toYear2, 
                setToYear2,
                qualification2, 
                setQualification2,
                description2, 
                setDescription2, 
                prevStep,
                nextStep

        } = useContext(resumeContext)

        const handleNext = (e) => {

                e.preventDefault()
                nextStep()
                
        }

        const handlePrev = (e) => {

                e.preventDefault()
                prevStep()
                
        }

        return (
                <Paper className={classes.padding}>
                        <card>
                                <CardHeader title="Education Details" />                                
                       </card>

                       <CardContent>
                                <div className={classes.margin}>
                                        <Grid container spacing={2} alignItems="center" lg={12}>

                                                <Grid item md={4} sm={12} xs={12} lg={4}>
                                                        <TextField 
                                                                label="College"
                                                                name="college"
                                                                value={college}
                                                                required
                                                                variant="outlined"
                                                                margin="dense"
                                                                onChange={(e) => setCollege(e.target.value)}
                                                                style={{width: "80%"}}
                                                                InputProps={{
                                                                        endAdornment: (
                                                                          <InputAdornment position="start">
                                                                            <SchoolIcon />
                                                                          </InputAdornment>
                                                                        ),
                                                                      }}/>
                                                </Grid>

                                                <Grid item md={4} sm={6} xs={12} lg={4}>
                                                        <TextField 
                                                                label="From Year"
                                                                name="fromYear2"
                                                                value={fromYear1}
                                                                required
                                                                variant="outlined"
                                                                margin="dense"
                                                                type="date"
                                                                InputLabelProps={{
                                                                        shrink: true,
                                                                      }}
                                                                onChange={(e) => setFromYear1(e.target.value)}
                                                                style={{width: "80%"}}
                                                                InputProps={{
                                                                        endAdornment: (
                                                                          <InputAdornment position="start">
                                                                            <DateRangeIcon />
                                                                          </InputAdornment>
                                                                        ),
                                                                      }}
                                                                />
                                                </Grid>

                                                <Grid item md={4} sm={6} xs={12} lg={4}>
                                                        <TextField 
                                                                label="To Year"
                                                                name="toYear1"
                                                                value={toYear1}
                                                                required
                                                                variant="outlined"
                                                                margin="dense"
                                                                type="date"
                                                                InputLabelProps={{
                                                                        shrink: true,
                                                                      }}
                                                                onChange={(e) => setToYear1(e.target.value)}
                                                                style={{width: "80%"}}
                                                                InputProps={{
                                                                        endAdornment: (
                                                                          <InputAdornment position="start">
                                                                            <DateRangeIcon />
                                                                          </InputAdornment>
                                                                        ),
                                                                      }}
                                                        />
                                                </Grid>

                                                <Grid item md={4} sm={12} xs={12} lg={4}>
                                                        <TextField 
                                                                label="Qualification"
                                                                name="qualification1"
                                                                value={qualification1}
                                                                required
                                                                variant="outlined"
                                                                margin="dense"
                                                                onChange={(e) => setQualification1(e.target.value)}
                                                                style={{width: "80%"}}/>
                                                </Grid>

                                                <Grid item md={8} sm={12} xs={12} lg={8}>
                                                        <TextField 
                                                                label="Description"
                                                                name="description1"
                                                                value={description1}
                                                                
                                                                variant="outlined"
                                                                margin="dense"
                                                                onChange={(e) => setDescription1(e.target.value)}
                                                                style={{width: "90%"}}/>
                                                </Grid>

                                               
                                        </Grid>

                                        <br/>
                                        <Divider />
                                        <br />
                                        <Grid container spacing={2} alignItems="center" lg={12}>

                                                <Grid item md={4} sm={12} xs={12} lg={4}>
                                                        <TextField 
                                                                label="School"
                                                                name="school"
                                                                value={school}
                                                                required
                                                                variant="outlined"
                                                                margin="dense"
                                                                onChange={(e) => setSchool(e.target.value)}
                                                                style={{width: "80%"}}
                                                                InputProps={{
                                                                        endAdornment: (
                                                                          <InputAdornment position="start">
                                                                            <SchoolIcon />
                                                                          </InputAdornment>
                                                                        ),
                                                                      }}/>
                                                </Grid>

                                                <Grid item md={4} sm={6} xs={12} lg={4}>
                                                        <TextField 
                                                                label="From Year"
                                                                name="fromYear2"
                                                                value={fromYear2}
                                                                required
                                                                variant="outlined"
                                                                margin="dense"
                                                                type="date"
                                                                InputLabelProps={{
                                                                        shrink: true,
                                                                      }}
                                                                onChange={(e) => setFromYear2(e.target.value)}
                                                                style={{width: "80%"}}
                                                                InputProps={{
                                                                        endAdornment: (
                                                                          <InputAdornment position="start">
                                                                            <DateRangeIcon />
                                                                          </InputAdornment>
                                                                        ),
                                                                      }}
                                                                />
                                                </Grid>

                                                <Grid item md={4} sm={6} xs={12} lg={4}>
                                                        <TextField 
                                                                label="To Year"
                                                                name="toYear2"
                                                                value={toYear2}
                                                                required
                                                                variant="outlined"
                                                                margin="dense"
                                                                type="date"
                                                               
                                                                onChange={(e) => setToYear2(e.target.value)}
                                                                style={{width: "80%"}}
                                                                InputLabelProps={{
                                                                        shrink: true,
                                                                      }}
                                                                InputProps={{
                                                                        endAdornment: (
                                                                          <InputAdornment position="start">
                                                                            <DateRangeIcon />
                                                                          </InputAdornment>
                                                                        ),
                                                                      }}
                                                        />
                                                </Grid>

                                                <Grid item md={4} sm={12} xs={12} lg={4}>
                                                        <TextField 
                                                                label="Qualification"
                                                                name="qualification2"
                                                                value={qualification2}
                                                                required
                                                                variant="outlined"
                                                                margin="dense"
                                                                onChange={(e) => setQualification2(e.target.value)}
                                                                style={{width: "80%"}}/>
                                                </Grid>

                                                <Grid item md={8} sm={12} xs={12} lg={8}>
                                                        <TextField 
                                                                label="Description"
                                                                name="description2"
                                                                value={description2}
                                                                
                                                                variant="outlined"
                                                                margin="dense"
                                                                onChange={(e) => setDescription2(e.target.value)}
                                                                style={{width: "90%"}}/>
                                                </Grid>
                                        </Grid>

                                        <Grid  container spacing={2} lg={12}  className={classes.margin} alignItems="center" >         
                                                                <Grid item xs={5} md={6} lg={6}>
                                                                        <Button
                                                                                variant="contained"
                                                                                color="secondary"
                                                                                onClick={handlePrev}
                                                                                
                                                                                startIcon={<NavigateBeforeIcon />}
                                                                                >
                                                                                Back
                                                                        </Button>
                                                                </Grid>

                                                                <Grid item xs={5} md={6} lg={6}>
                                                                        <Button
                                                                                variant="contained"
                                                                                color="secondary"
                                                                                onClick={handleNext}
                                                                                endIcon={<NavigateNextIcon />}
                                                                                >
                                                                                Next
                                                                        </Button>
                                                                </Grid>

                                                        </Grid>


                                </div>
                       </CardContent>
                       <div className={classes.margin}>
                                 <p className="text-center text-muted">Page 2 </p>
                        </div>
                </Paper>
        )
}

export default Education
