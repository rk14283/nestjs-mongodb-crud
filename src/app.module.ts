import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//the two dots, relative instead of absolute
import { StudentSchema } from 'src/schema/student.schema';
import { StudentController } from './controllerStudent/student.controller';
import { StudentService } from './serviceStudent/student.service';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/studentdb'),
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
  ],

  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {}
