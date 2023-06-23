import React from "react";
import { Typography,Button, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import { PhotoCamera } from "@mui/icons-material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#ba34eb',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  });



const App = () => {
    return(
      <>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
                <PhotoCamera />
                <Typography variant="h6">
                    Photo Album
                </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div>
                <Container maxWidth="sm"sx={{padding: (8,0,6),}}>
                    <Typography variant="h2" align="center" gutterBottom>
                        Photo Album
                    </Typography>
                    <Typography variant="h5" align="center" paragraph>
                        bloopity blobity dee da. these are phots and imgs and stuff hahahah, peepee poopoo, casnt get used to theis.
                    </Typography>
                    <div>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    See my photos
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">
                                    Secondary Action
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">
                                    Secondary Action
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Container maxWidth="md">
                <Grid container spacing={4}>
                    <Grid item>
                        <Card>
                            <img height='300px' src="http://source.unsplash.com/random"></img>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    hello
                                </Typography>
                                <Typography>
                                    this is the card
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <ThemeProvider theme={theme}>
                                    <Button variant='contained' size="small" color="primary">howdy</Button>
                                    <Button variant="outlined" size='small' color="secondary">boop</Button>
                                </ThemeProvider>
                            </CardActions>
                        </Card>
                    </Grid>

                </Grid>

            </Container>
        </main>
      </>
    )
}

export default App;