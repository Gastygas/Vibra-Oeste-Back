import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin:`${process.env.FRONT_URL}`,
    methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      exceptionFactory: (e) => {
        const errors = e.map((err) => {
          return {property: err.property, constraints: err.constraints}
        });
        return new BadRequestException({
          alert: "ERRORS!,please read carefully",
          error: errors,
        })
      }
    })
  )
  const swaggerConfig = new DocumentBuilder()
  .setTitle('Vibra Oeste Back End')
  .setDescription("Pagina creada para facilitar al cliente")
  .setVersion('1.0.0')
  .addBearerAuth()
  .build();

  const document = SwaggerModule.createDocument(app,swaggerConfig)
  SwaggerModule.setup('api', app, document)
  await app.listen(3001);
}
bootstrap();
