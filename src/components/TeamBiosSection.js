import React from "react";
import Section from "components/Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "components/SectionHeader";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  media: {
    height: 120,
  },
  avatarWrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: -(theme.spacing(15) / 2),
  },
  avatarBorder: {
    borderRadius: "50%",
    padding: "7px",
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

function TeamBiosSection(props) {
  const classes = useStyles();

  const items = [
    {
      headerImage:
        "https://pbs.twimg.com/profile_banners/733675982/1470354548/1500x500",
      avatarImage:
        "https://pbs.twimg.com/profile_images/1157768834301906945/8eJI_nPL_400x400.jpg",
      name: "Will Hubbard",
      role: "Hacker",
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.",
    },
    {
      headerImage:
        "https://pbs.twimg.com/profile_banners/30873/1398265095/1500x500",
      avatarImage:
        "https://pbs.twimg.com/profile_images/845469808258957313/DLoDCB24_400x400.jpg",
      name: "Marty Ringlein",
      role: "Backer",
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.",
    },
    {
      headerImage:
        "https://images.unsplash.com/photo-1501927023255-9063be98970c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80",
      avatarImage:
        "https://pbs.twimg.com/profile_images/1259094173296275457/um4q0UYV_400x400.jpg",
      name: "Miguel Neto",
      role: "Slacker",
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Grid container={true} justify="center" spacing={4}>
          {items.map((item, index) => (
            <Grid item={true} xs={12} sm={6} md={4} key={index}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={item.headerImage}
                  title={item.name}
                />
                <div className={classes.avatarWrapper}>
                  <div className={classes.avatarBorder}>
                    <Avatar
                      src={item.avatarImage}
                      alt={item.name}
                      className={classes.avatar}
                    />
                  </div>
                </div>
                <CardContent>
                  <Box textAlign="center">
                    <Typography variant="body2" component="p">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.role}
                    </Typography>
                    <Box mt={2}>
                      <Typography variant="body1" component="p">
                        {item.bio}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default TeamBiosSection;
