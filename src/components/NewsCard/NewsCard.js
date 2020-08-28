import React from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography} from '@material-ui/core';

import useStyles from './styles.js'

const NewCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i }) => {
    const classes = useStyles();
    
    return (
        <Card className={classes.card}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={urlToImage || 'https://www.google.com/search?q=news&rlz=1C1CHBF_enUS886US886&sxsrf=ALeKk022Q1wZrrI6fKA9TYd1RvytcxmTAQ:1598593133529&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiX1PS-l73rAhXCJt8KHaDpChgQ_AUoBHoECBcQBg&biw=767&bih=712#imgrc=A8WuPNML3_qgCM'}/>
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                    <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">Learn More</Button>
                <Typography variant="h5" color="textSecondary">{i +1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewCard;