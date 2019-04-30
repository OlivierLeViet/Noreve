import bodyParser from 'body-parser';
import chalk from 'chalk';
import express from 'express';

import logger from './logger.tools';
import { NoreveController } from './Noreve/noreve.controller';
import { ProductController } from './Product/product.controller';
import { setupDb } from './setup-db';

async function bootstrap() {
  // create db connection
  await setupDb();

  // initialize express app
  const app = express();

  // set the body parser
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  app.use(bodyParser.json());

  // call custom middleware for logging globally
  app.use(logger);

  // define a GET route on '/' pattern
  app.get('/', (req: express.Request, res: express.Response) => {
    return res.json({ message: 'Hello world !' });
  });

  const noreveRoutes = await new NoreveController().getRoutes();
  app.use('/noreve', noreveRoutes);

  const productRoutes = await new ProductController().getRoutes();
  app.use('/product', productRoutes);

  // define application port
  app.listen(3015);

  global.console.log(chalk.green('----- Server up! -----\n'));
}

// start application
bootstrap();
