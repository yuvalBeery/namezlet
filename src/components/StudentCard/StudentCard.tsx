import { FC, useState } from "react";
import { StudentCardProps } from "./types";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { getClasses } from "./styles";

export const StudentCard:FC<StudentCardProps> = ({student: {firstName, lastName, image}}) => {
    const [isNameVisible, setIsNameVisible] = useState<boolean>(false);

    const classes = getClasses();

    const handleCardClick = () => {
        setIsNameVisible(!isNameVisible);
    }

    return (
        <Box className={classes.studentCard}>
            <Card className={classes.card} onClick={handleCardClick}>
                <CardMedia image={image} className={classes.cardImage}/>
                {isNameVisible && (
                    <CardContent className={classes.cardContent}>
                        <Typography>{firstName} {lastName}</Typography>
                    </CardContent>
                )}
            </Card>
        </Box>
    )
}