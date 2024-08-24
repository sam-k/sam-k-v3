import minimist from 'minimist';
import {spawn} from 'node:child_process';

export const getArgs = () => minimist(process.argv.slice(2));

export const spawnCmd = (cmd: string, args?: Array<string | undefined>) =>
  new Promise<void>((resolve, reject) => {
    const proc = spawn(cmd, args?.filter(arg => arg !== undefined) ?? [], {
      env: {
        ...process.env,
        FORCE_COLOR: '1',
      },
    });

    proc.stdout.on('data', data => {
      console.log(data.toString());
    });
    proc.stderr.on('data', data => {
      console.error(data.toString());
    });

    proc.on('close', code => {
      if (code !== 0 && code !== null) {
        reject(`Process failed with exit code ${code}`);
        return;
      }
      resolve();
    });
    proc.on('error', err => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
