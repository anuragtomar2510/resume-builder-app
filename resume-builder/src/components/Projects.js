import React, {useContext} from 'react'
import {resumeContext} from './Resume'
import {makeStyles} from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import LinkIcon from '@material-ui/icons/Link'
import TitleIcon from '@material-ui/icons/Title'
import DescriptionIcon from '@material-ui/icons/Description'
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
const Projects = () => {

        const classes = useStyles()

        const {

                title1, 
                setTitle1,
                link1, 
                setLink1,
                projectDescription1, 
                setProjectDescription1,
                title2, 
                setTitle2,
                link2, 
                setLink2,
                projectDescription2, 
                setProjectDescription2,
                title3, 
                setTitle3,
                link3, 
                setLink3,
                projectDescription3, 
                setProjectDescription3,
                nextStep,
                prevStep

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
          <CardHeader title="Projects Details" />
        </Card>
        <CardContent>
          <div className={classes.margin}>
            <Grid container spacing={2} alignItems="center" lg={12}>
              <Grid item xs={12} lg={12}>
                <h5>Project 1</h5>
              </Grid>
              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="title1"
                  label="Title"
                  style={{width: '80%'}}
                  required
                  value={title1}
                  onChange={(e) => setTitle1(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <TitleIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="link1"
                  label="Link"
                  style={{width: '80%'}}
                  required
                  value={link1}
                  onChange={(e) => setLink1(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <LinkIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="projectDescription1"
                  label="Description"
                  style={{width: '80%'}}
                  required
                  value={projectDescription1}
                  onChange={(e) => setProjectDescription1(e.target.value)}
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
            <Grid container spacing={2} alignItems="center" lg={12}>
              <Grid item xs={12} lg={12}>
                <h5>Project 2</h5>
              </Grid>
              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="title2"
                  label="Title"
                  style={{width: '80%'}}
                  required
                  value={title2}
                  onChange={(e) => setTitle2(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <TitleIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="link2"
                  label="Link"
                  style={{width: '80%'}}
                  required
                  value={link2}
                  onChange={(e) => setLink2(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <LinkIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="projectDescription2"
                  label="Description"
                  style={{width: '80%'}}
                  required
                  value={projectDescription2}
                  onChange={(e) => setProjectDescription2(e.target.value)}
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
            <Grid container spacing={2} alignItems="center" lg={12}>
              <Grid item xs={12} lg={12}>
                <h5>Project 3</h5>
              </Grid>
              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="title3"
                  label="Title"
                  style={{width: '80%'}}
                  value={title3}
                  onChange={(e) => setTitle3(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <TitleIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="link3"
                  label="Link"
                  style={{width: '80%'}}
                  value={link3}
                  onChange={(e) => setLink3(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <LinkIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="projectDescription3"
                  label="Description"
                  style={{width: '80%'}}
                  value={projectDescription3}
                  onChange={(e) => setProjectDescription3(e.target.value)}
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
                                <p className="text-center text-muted">Page 3 </p>
                </div>
</Paper>
        )
}

export default Projects
