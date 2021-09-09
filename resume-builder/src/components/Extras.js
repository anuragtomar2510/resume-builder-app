import React, {useContext} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {resumeContext} from './Resume'
import InputAdornment from '@material-ui/core/InputAdornment'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import GetAppIcon from '@material-ui/icons/GetApp'
import {saveAs} from 'file-saver'
import {Paper, Card, CardHeader, CardContent,
        TextField, Grid,  Button, Divider} from '@material-ui/core'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({

        margin: {

                margin: theme.spacing.unit * 1.5,

        },

        padding: {

                padding: theme.spacing.unit,

        },

}))
const Extras = () => {

        const classes = useStyles()

        const {

                firstName,
                skill1, 
                setSkill1,
                skill2, 
                setSkill2,
                skill3, 
                setSkill3,
                skill4, 
                setSkill4,
                skill5, 
                setSkill5,
                skill6, 
                setSkill6,
                interest1, 
                setInterest1,
                interest2, 
                setInterest2,
                interest3, 
                setInterest3,
                interest4, 
                setInterest4,
                interest5, 
                setInterest5,
                interest6, 
                setInterest6,
                prevStep,
                nextStep

        } = useContext(resumeContext)

        const allStates = useContext(resumeContext)

      const  createAndDownloadPDF = () => {

              axios.post('http://localhost:8800/generate', allStates)
                  .then(() => {

                          axios
                          .get ('http://localhost:8800/download', {responseType: 'arraybuffer'})
                          .then (res => {
                            const pdfBlob = new Blob ([res.data], {type: 'application/pdf'});
                            saveAs (pdfBlob, `${firstName}'s Resume.pdf`);
                          })
                          .catch (err => {
                            console.log (err);
                          });
                  })
                  .then((error) => console.log(error))

        }

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
                  <CardHeader title="Extra Details" />
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
                          <span className="pl-3">Skills/Languages</span>
                        </h5>
                      </Grid>
                      <Grid item xs={0} lg={8} />
                      <br />
                      <Grid item md={4} sm={12} xs={12} lg={4}>
                        <TextField
                          margin="dense"
                          variant="outlined"
                          name="skill1"
                          label="Skill 1"
                          style={{width: '90%'}}
                          value={skill1}
                          onChange={(e) => setSkill1(e.target.value)}
                          InputProps={{
                            endAdornment: <InputAdornment position="start" />,
                          }}
                        />
                      </Grid>
                      <Grid item md={4} sm={12} xs={12} lg={4}>
                        <TextField
                          margin="dense"
                          variant="outlined"
                          name="skill2"
                          label="Skill 2"
                          style={{width: '90%'}}
                          value={skill2}
                          onChange={(e) => setSkill2(e.target.value)}
                          InputProps={{
                            endAdornment: <InputAdornment position="start" />,
                          }}
                        />
                      </Grid>
                      <Grid item md={4} sm={12} xs={12} lg={4}>
                        <TextField
                          margin="dense"
                          variant="outlined"
                          name="skill3"
                          label="Skill 3"
                          style={{width: '90%'}}
                          value={skill3}
                          onChange={(e) => setSkill3(e.target.value)}
                          InputProps={{
                            endAdornment: <InputAdornment position="start" />,
                          }}
                        />
                      </Grid>
                      <Grid item md={4} sm={6} xs={12} lg={4}>
                        <TextField
                          margin="dense"
                          variant="outlined"
                          name="skill4"
                          label="Skill 4"
                          style={{width: '90%'}}
                          value={skill4}
                          onChange={(e) => setSkill4(e.target.value)}
                          InputProps={{
                            endAdornment: <InputAdornment position="start" />,
                          }}
                        />
                      </Grid>
        
                      <Grid item md={4} sm={6} xs={12} lg={4}>
                        <TextField
                          margin="dense"
                          variant="outlined"
                          name="skill5"
                          label="Skill 5"
                          style={{width: '90%'}}
                          value={skill5}
                          onChange={(e) => setSkill5(e.target.value)}
                          InputProps={{
                            endAdornment: <InputAdornment position="start" />,
                          }}
                        />
                      </Grid>
        
                      <Grid item md={12} sm={12} xs={12} lg={4}>
                        <TextField
                          margin="dense"
                          label="Skill 6"
                          variant="outlined"
                          style={{width: '90%'}}
                          name="skill6"
                          value={skill6}
                          onChange={(e) => setSkill6(e.target.value)}
                          InputProps={{
                            endAdornment: <InputAdornment position="start" />,
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
                          <span className="pl-3">Interest</span>
                        </h5>
                      </Grid>
                      <Grid item xs={0} lg={8} />
                      <br />
                      <Grid item md={12} sm={12} xs={12} lg={4}>
                        <TextField
                          margin="dense"
                          label="Interest 1"
                          variant="outlined"
                          style={{width: '90%'}}
                          name="interest1"
                          value={interest1}
                          onChange={(e) => setInterest1(e.target.value)}
                          InputProps={{
                            endAdornment: <InputAdornment position="start" />,
                          }}
                        />
                      </Grid>
                      <Grid item md={12} sm={12} xs={12} lg={4}>
                        <TextField
                          margin="dense"
                          label="Interest 2"
                          variant="outlined"
                          style={{width: '90%'}}
                          name="interest2"
                          value={interest2}
                          onChange={(e) => setInterest2(e.target.value)}
                          InputProps={{
                            endAdornment: <InputAdornment position="start" />,
                          }}
                        />
                      </Grid>
                      <Grid item md={12} sm={12} xs={12} lg={4}>
                        <TextField
                          margin="dense"
                          label="Interest 3"
                          variant="outlined"
                          style={{width: '90%'}}
                          name="interest3"
                          value={interest3}
                          onChange={(e) => setInterest3(e.target.value)}
                          InputProps={{
                            endAdornment: <InputAdornment position="start" />,
                          }}
                        />
                      </Grid>
                      <Grid item md={12} sm={12} xs={12} lg={4}>
                        <TextField
                          margin="dense"
                          label="Interest 4"
                          variant="outlined"
                          style={{width: '90%'}}
                          name="interest4"
                          value={interest4}
                          onChange={(e) => setInterest4(e.target.value)}
                          InputProps={{
                            endAdornment: <InputAdornment position="start" />,
                          }}
                        />
                      </Grid>
                      <Grid item md={12} sm={12} xs={12} lg={4}>
                        <TextField
                          margin="dense"
                          label="Interest 5"
                          variant="outlined"
                          style={{width: '90%'}}
                          name="interest5"
                          value={interest5}
                          onChange={(e) => setInterest5(e.target.value)}
                          InputProps={{
                            endAdornment: <InputAdornment position="start" />,
                          }}
                        />
                      </Grid>
                      <Grid item md={12} sm={12} xs={12} lg={4}>
                        <TextField
                          margin="dense"
                          label="Interest 6"
                          variant="outlined"
                          style={{width: '90%'}}
                          name="interest6"
                          value={interest6}
                          onChange={(e) => setInterest6(e.target.value)}
                          InputProps={{
                            endAdornment: <InputAdornment position="start" />,
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
                                                        disabled
                                                        endIcon={<NavigateNextIcon />}
                                                        >
                                                        Next
                                                </Button>
                                        </Grid>

                                </Grid>
                  </div>

                </CardContent>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={createAndDownloadPDF}
                  endIcon={<GetAppIcon />}
                >
                   Download Resume
              </Button>
              
        </Paper>
        )
}

export default Extras
