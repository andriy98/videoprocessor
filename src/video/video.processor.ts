import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('video')
export class VideoProcessor {
  private readonly logger = new Logger(VideoProcessor.name);

  @Process('process')
  handleProcess(job: Job) {
    this.logger.debug('Start processing video data...');
    this.logger.debug(job.data);
    this.logger.debug('Video processing completed !');
  }
}
