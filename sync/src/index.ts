import * as express from 'express';
import * as cors from 'cors';

const app = express();

app.use(cors());

app.get( "/", ( req, res ) => {
  res.send( "🔄 sync server is active!" );
});

const port = 4000;
app.listen( port, () => {
  console.log( `🔄 server running on http://localhost:${ port }` );
});