import React, {useContext} from 'react'
import {resumeContext} from './Resume'
import {makeStyles} from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import LanguageIcon from '@material-ui/icons/Language'
import TwitterIcon from '@material-ui/icons/Twitter'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import {Row, Col, Container} from 'react-bootstrap'
import {Paper, Card, CardHeader, CardContent,
        TextField, Grid,  Button} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({

        margin: {

                margin: theme.spacing.unit * 1,

        },

        padding: {

                padding: theme.spacing.unit,

        },

        

}))
const Profile = () => {

        const classes = useStyles()

        const {

                firstName, 
                setFirstName,
                lastName, 
                setLastName,
                email, 
                setEmail,
                phone,
                setPhone,
                github, 
                setGithub,
                website,
                setWebsite,
                twitter,
                setTwitter,
                linkedin, 
                setLinkedin,
                facebook,
                setFacebook,
                instagram,
                setInstagram,
                nextStep



        } = useContext(resumeContext)

        const handleNext = (e) => {

                e.preventDefault()
                nextStep()
                
        }

        return (
                <Paper className={classes.padding}>
                        <Card>
                                <CardHeader title="Personal Details" />
                        </Card>
                                <CardContent>
                                        <div className={classes.margin}>
                                                <Grid container spacing={2} alignItems="center" lg={12}>
                                                        <Grid item md={6} sm={12} xs={12} lg={6}>
                                                                <TextField 
                                                                   label="First Name"
                                                                   name="firstName"
                                                                   value={firstName}
                                                                   required
                                                                   variant="outlined"
                                                                   margin="dense"
                                                                   onChange={(e) => setFirstName(e.target.value)}
                                                                   style={{width: "80%"}}/>
                                                        </Grid>

                                                        <Grid item md={6} sm={12} xs={12} lg={6}>
                                                                <TextField 
                                                                   label="Last Name"
                                                                   name="lastName"
                                                                   value={lastName}
                                                                   required
                                                                   margin="dense" 
                                                                   onChange={(e) => setLastName(e.target.value)}
                                                                   variant="outlined"
                                                                   style={{width: "80%"}}/>
                                                        </Grid>

                                                        <Grid item md={6} sm={12} xs={12} lg={6}>
                                                                <TextField 
                                                                   label="Email"
                                                                   name="email"
                                                                   value={email}
                                                                   onChange={(e) => setEmail(e.target.value)}
                                                                   variant="outlined"
                                                                   margin="dense"
                                                                   style={{alignItems: 'left',width: "80%"}}
                                                                   InputProps={{
                                                                        endAdornment: (
                                                                          <InputAdornment position="end">
                                                                            <EmailIcon />
                                                                          </InputAdornment>
                                                                        ),
                                                                      }}/>
                                                        </Grid>

                                                        <Grid item md={6} sm={12} xs={12} lg={6}>
                                                                <TextField 
                                                                   label="Phone Number"
                                                                   name="phone"
                                                                   value={phone}
                                                                   onChange={(e) => setPhone(e.target.value)}
                                                                   variant="outlined"
                                                                   margin="dense"
                                                                   style={{alignItems: 'left', width: "80%"}} 
                                                                   InputProps={{
                                                                        endAdornment: (
                                                                          <InputAdornment position="end">
                                                                            <PhoneIcon />
                                                                          </InputAdornment>
                                                                        ),
                                                                      }}/>
                                                        </Grid>

                                                        <Grid item md={6} sm={12} xs={12} lg={6}>
                                                                <TextField 
                                                                   label="Personal Website"
                                                                   name="website"
                                                                   value={website}
                                                                   onChange={(e) => setWebsite(e.target.value)}
                                                                   variant="outlined"
                                                                   margin="dense"
                                                                   style={{alignItems: 'left', width: "80%"}} 
                                                                   InputProps={{
                                                                        endAdornment: (
                                                                          <InputAdornment position="end">
                                                                            <LanguageIcon />
                                                                          </InputAdornment>
                                                                        ),
                                                                      }}/>
                                                        </Grid>


                                                        <Grid item md={6} sm={12} xs={12} lg={6}>
                                                                <TextField 
                                                                   label="Github"
                                                                   name="github"
                                                                   value={github}
                                                                   onChange={(e) => setGithub(e.target.value)}
                                                                   variant="outlined"
                                                                   margin="dense"
                                                                   style={{alignItems: 'left',width: "80%"}} 
                                                                   InputProps={{
                                                                        endAdornment: (
                                                                          <InputAdornment position="end">
                                                                            <GitHubIcon />
                                                                          </InputAdornment>
                                                                        ),
                                                                      }}/>
                                                        </Grid>

                                                        <Grid item md={6} sm={12} xs={12} lg={6}>
                                                                <TextField 
                                                                   label="Twitter"
                                                                   name="twitter"
                                                                   value={twitter}
                                                                   onChange={(e) => setTwitter(e.target.value)}
                                                                   variant="outlined"
                                                                   margin="dense"
                                                                   style={{alignItems: 'left', width: "80%"}} 
                                                                   InputProps={{
                                                                        endAdornment: (
                                                                          <InputAdornment position="end">
                                                                            <TwitterIcon />
                                                                          </InputAdornment>
                                                                        ),
                                                                      }}/>
                                                        </Grid>

                                                        <Grid item md={6} sm={12} xs={12} lg={6}>
                                                                <TextField 
                                                                   label="Linked In"
                                                                   name="linkedin"
                                                                   value={linkedin}
                                                                   onChange={(e) => setLinkedin(e.target.value)}
                                                                   variant="outlined"
                                                                   margin="dense"
                                                                   style={{alignItems: 'left', width: "80%"}} 
                                                                   InputProps={{
                                                                        endAdornment: (
                                                                          <InputAdornment position="end">
                                                                            <LinkedInIcon />
                                                                          </InputAdornment>
                                                                        ),
                                                                      }}/>
                                                        </Grid>

                                                        <Grid item md={6} sm={12} xs={12} lg={6}>
                                                                <TextField 
                                                                   label="Facebook"
                                                                   name="facebook"
                                                                   value={facebook}
                                                                   onChange={(e) => setFacebook(e.target.value)}
                                                                   variant="outlined"
                                                                   margin="dense"
                                                                   style={{alignItems: 'left', width: "80%"}} 
                                                                   InputProps={{
                                                                        endAdornment: (
                                                                          <InputAdornment position="end">
                                                                            <FacebookIcon />
                                                                          </InputAdornment>
                                                                        ),
                                                                      }}/>
                                                        </Grid>

                                                        <Grid item md={6} sm={12} xs={12} lg={6}>
                                                                <TextField 
                                                                   label="Instagram"
                                                                   name="instagram"
                                                                   value={instagram}
                                                                   onChange={(e) => setInstagram(e.target.value)}
                                                                   variant="outlined"
                                                                   margin="dense"
                                                                   style={{alignItems: 'left', width: "80%"}} 
                                                                   InputProps={{
                                                                        endAdornment: (
                                                                          <InputAdornment position="end">
                                                                            <InstagramIcon />
                                                                          </InputAdornment>
                                                                        ),
                                                                      }}/>
                                                        </Grid>


                                                        
                                                </Grid>

                                                <Grid  container spacing={2} lg={12}  className={classes.margin} alignItems="center" >         
                                                                <Grid item xs={5} md={6} lg={6}>
                                                                        <Button
                                                                                variant="contained"
                                                                                color="secondary"
                                                                                
                                                                                disabled
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
                                 <p className="text-center text-muted">Page 1 </p>
                        </div>
                </Paper>
        )
}

export default Profile
