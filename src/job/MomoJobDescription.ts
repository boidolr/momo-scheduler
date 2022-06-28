import { JobEntity } from '../repository/JobEntity';
import { CronSchedule, IntervalSchedule } from './MomoJob';

/**
 * information about scheduled job
 *
 * interval: the time interval at which job execution is triggered;
 * running: the number of currently running executions
 */
export interface JobSchedulerStatus {
  schedule?: IntervalSchedule | CronSchedule;
  running: number;
}

export interface MomoJobDescription {
  name: string;
  schedule: IntervalSchedule | CronSchedule;
  concurrency: number;
  maxRunning: number;
  /** present only if the job is started */
  schedulerStatus?: JobSchedulerStatus;
}

export function jobDescriptionFromEntity(jobEntity: JobEntity): MomoJobDescription {
  const { name, schedule, concurrency, maxRunning } = jobEntity;
  return {
    name,
    schedule,
    concurrency,
    maxRunning,
  };
}
