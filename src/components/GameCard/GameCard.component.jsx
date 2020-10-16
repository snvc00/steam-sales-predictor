import React from 'react';
import clsx from 'clsx';

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Box
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import { Favorite, ExpandMore, Store, SportsEsports, DateRange } from '@material-ui/icons';

import { Alert, Rating } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: "#3c3c3c",
  },
  alert: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  metacriticScore: {
    textAlign: 'center'
  }
}));

function GameCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={<Avatar aria-label="recipe" className={classes.avatar}><SportsEsports /></Avatar>}
          title="Sekiro: Shadows Die Twice"
          subheader="From Software"
        />

        <CardMedia
          className={classes.media}
          image="https://www.sekirothegame.com/content/dam/atvi/sekiro/gallery/Sekiro_24.jpg"
          title="Sekiro: Shadows Die Twice"
        />

        <CardContent>
          <Alert icon={<DateRange fontSize="inherit" />} severity="success" variant=""><b>Next sale prediction:</b> December 2020</Alert>
          <br />
          <Typography variant="body2" color="textSecondary" component="p">
            Game of the Year - The Game Awards 2019, Best Action Game of 2019 - IGN.
            Carve your own...
                  </Typography>
          <br />
          <Box className={classes.metacriticScore} component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Metacritic Score:</Typography>
            <Rating name="read-only" value={5} readOnly />
          </Box>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="Add to favorites"><Favorite /></IconButton>
          <IconButton aria-label="Open in Steam"><Store /></IconButton>
          <IconButton
            className={clsx(classes.expand, { [classes.expandOpen]: expanded, })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more...">
            <ExpandMore />
          </IconButton>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Title:</Typography>
            <Typography paragraph variant="body2" color="textSecondary" component="p">
              Sekiro: Shadows Die Twice
                      </Typography>

            <Typography paragraph>Description:</Typography>
            <Typography paragraph variant="body2" color="textSecondary" component="p">
              Game of the Year - The Game Awards 2019, Best Action Game of 2019 - IGN.
              Carve your own clever path to vengeance in the award winning adventure from
              developer FromSoftware, creators of Bloodborne and the Dark Souls series.
              Take Revenge. Restore Your Honor. Kill Ingeniously.
                      </Typography>

            <Typography paragraph>Developer:</Typography>
            <Typography paragraph variant="body2" color="textSecondary" component="p">
              From Software
                      </Typography>

            <Typography paragraph>Release Date:</Typography>
            <Typography paragraph variant="body2" color="textSecondary" component="p">
              21 March, 2019
                      </Typography>

            <Typography paragraph>Genre:</Typography>
            <Typography paragraph variant="body2" color="textSecondary" component="p">
              Action, Adventure
                      </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

export default GameCard;
