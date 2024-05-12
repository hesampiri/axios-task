import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link} from 'react-router-dom';

export default function BasicCard({infos}) {

  return (
    <Card sx={{ minWidth: 275 , maxWidth:250 }}>
      <CardContent>
        <Typography sx={{ fontSize: 17 }} color="text.secondary" gutterBottom>
          Title
        </Typography>
        <Typography variant="h5" component="div">
          {infos.title}
        </Typography>
        <Typography sx={{ fontSize:17 }} color="text.secondary">
          description
        </Typography>
        <Typography variant="body2">
          {infos.body}
        </Typography>
      </CardContent>
      <CardActions>
          <Link to={`details/${infos.id}`}>
            <Button size="small" id={infos.id}>Learn More</Button>
          </Link>
      </CardActions>
    </Card>
  );
}


