import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('video')
export class VideoProcessor {
  private readonly logger = new Logger(VideoProcessor.name);

  @Process({name: 'process', concurrency: 5})
  async handleProcess(job: Job) {
    this.logger.debug('Start processing video data...');
    this.logger.debug(job.data);
    await new Promise(resolve => setTimeout(resolve, 5000));
    this.logger.debug('Video processing completed !');
  }
}
