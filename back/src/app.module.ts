import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import typeormConfig from './config/typeOrm'
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppRepository } from './app.repository';
import { Form } from './entities/form.entity';
import { Contact } from './entities/contact.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [typeormConfig] }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    TypeOrmModule.forFeature([Form,Contact]),
  ],
  controllers: [AppController],
  providers: [AppService,AppController,AppRepository],
})
export class AppModule {}
