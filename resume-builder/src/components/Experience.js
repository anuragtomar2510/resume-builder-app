import React, {useContext} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {resumeContext} from './Resume'
import InputAdornment from '@material-ui/core/InputAdornment'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import DescriptionIcon from '@material-ui/icons/Description'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import TimelapseIcon from '@material-ui/icons/Timelapse'
import EventSeatIcon from '@material-ui/icons/EventSeat'
import BusinessIcon from '@material-ui/icons/Business'
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
const Experience = () => {

        const classes = useStyles()

        const {

                institute1, 
                setInstitute1,
                position1, 
                setPosition1,
                duration1, 
                setDuration1,
                experienceDescription1, 
                setExperienceDescription1,
                institute2, 
                setInstitute2,
                position2, 
                setPosition2,
                duration2, 
                setDuration2,
                experienceDescription2, 
                setExperienceDescription2,
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
                <Card>
                  <CardHeader title="Experience Details" />
                </Card>
                <CardContent>
                  <div className={classes.margin}>
                    <Grid container spacing={2} alignItems="center" lg={12}>
                      <Grid
                        item
                        xs={12}
                        lg={4}
                        alignItems="flex-end"
                        alignContent="flex-end"
                      >
                        <h5>
                          <CheckCircleIcon />
                          <span className="pl-3">Experience 1</span>
                        </h5>
                      </Grid>
                      <Grid item xs={0} lg={8} />
        
                      <Grid item md={4} sm={12} xs={12} lg={4}>
                        <TextField
                          margin="dense"
                          variant="outlined"
                          name="institute1"
                          label="Institue/Organisation"
                          style={{width: '90%'}}
                          required
                          value={institute1}
                          onChange={(e) => setInstitute1(e.target.value)}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="start">
                                <BusinessIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item md={4} sm={6} xs={12} lg={4}>
                        <TextField
                          margin="dense"
                          variant="outlined"
                          name="position1"
                          label="Position"
                          style={{width: '90%'}}
                          required
                          value={position1}
                          onChange={(e) => setPosition1(e.target.value)}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="start">
                                <EventSeatIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
        
                      <Grid item md={4} sm={6} xs={12} lg={4}>
                        <TextField
                          margin="dense"
                          variant="outlined"
                          name="duration1"
                          label="Duration"
                          style={{width: '90%'}}
                          required
                          value={duration1}
                          onChange={(e) => setDuration1(e.target.value)}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="start">
                                <TimelapseIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
        
                      <Grid item md={12} sm={12} xs={12} lg={12}>
                        <TextField
                          margin="dense"
                          label="Description"
                          variant="outlined"
                          style={{width: '97%'}}
                          name="experienceDescription1"
                          required
                          value={experienceDescription1}
                          onChange={(e) => setExperienceDescription1(e.target.value)}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="start">
                                <DescriptionIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <Divider />
                    <br />
                    <Grid container spacing={2} alignItems="flex-start" lg={12}>
                      <Grid
                        item
                        xs={12}
                        lg={4}
                        alignItems="flex-end"
                        alignContent="flex-end"
                      >
                        <h5>
                          <CheckCircleIcon />
                          <span className="pl-3">Experience 2</span>
                        </h5>
                      </Grid>
                      <Grid item xs={0} lg={8} />
                      <br />
                      <Grid item md={4} sm={12} xs={12} lg={4}>
                        <TextField
                          margin="dense"
                          variant="outlined"
                          name="institute2"
                          label="Institue/Organisation"
                          style={{width: '90%'}}
                          required
                          value={institute2}
                          onChange={(e) => setInstitute2(e.target.value)}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="start">
                                <BusinessIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item md={4} sm={6} xs={12} lg={4}>
                        <TextField
                          margin="dense"
                          variant="outlined"
                          name="position2"
                          label="Position"
                          style={{width: '90%'}}
                          required
                          value={position2}
                          onChange={(e) => setPosition2(e.target.value)}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="start">
                                <EventSeatIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
        
                      <Grid item md={4} sm={6} xs={12} lg={4}>
                        <TextField
                          margin="dense"
                          variant="outlined"
                          name="duration2"
                          label="Duration"
                          style={{width: '90%'}}
                          required
                          value={duration2}
                          onChange={(e) => setDuration2(e.target.value)}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="start">
                                <TimelapseIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
        
                      <Grid item md={12} sm={12} xs={12} lg={12}>
                        <TextField
                          margin="dense"
                          label="Description"
                          variant="outlined"
                          style={{width: '97%'}}
                          rows={3}
                          name="experienceDescription2"
                          required
                          value={experienceDescription2}
                          onChange={(e) => setExperienceDescription2(e.target.value)}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="start">
                                <DescriptionIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
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
                        <p className="text-center text-muted">Page 4 </p>
        </div>
</Paper>
        )
}

export default Experience
