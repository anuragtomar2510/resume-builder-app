import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Resume from './components/Resume'
import {makeStyles} from '@material-ui/core/styles'
import {AppBar, Toolbar, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({

      root : {

        flexGrow : 1

      },

      title : {

        flexGrow : 1

      }
}))

function App() {

  const classes = useStyles()

  return (

            <div className="App">
                <AppBar position="static">
                      <Toolbar>
                            <Typography variant="h6" className={classes.title}>Resume Builder App</Typography>
                      </Toolbar>
                </AppBar>

                <Resume />

            </div>
     
  )
}

export default App;
