import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { VideoProcessor } from './video.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'video',
    }),
  ],
  providers: [VideoProcessor],
})
export class VideoModule {}
