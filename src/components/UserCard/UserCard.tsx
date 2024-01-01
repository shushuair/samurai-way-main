import React from 'react';
import {User} from "../../api/typeApi";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

export const UserCard = (props: User) => {
    const {id, name, photos, status, followed} = props
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={photos.small ? photos.small : "https://image-resizing.booztcdn.com/boyhood/boy400041_csmokestained.webp?has_grey=1&has_webp=0&dpr=2.5&size=w400"}
                title="avatar"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {status}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">{followed}</Button>
            </CardActions>
        </Card>
    );
};
