import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const isWindows = process.platform === 'win32';

function run(command, args, cwd = root) {
  const result = spawnSync(command, args, {
    cwd,
    stdio: 'inherit',
    shell: isWindows
  });

  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}

const webDir = resolve(root, 'www');
mkdirSync(webDir, { recursive: true });
copyFileSync(resolve(root, 'index.html'), resolve(webDir, 'index.html'));

if (!existsSync(resolve(root, 'android'))) {
  run('npx', ['cap', 'add', 'android']);
}

run('npx', ['cap', 'sync', 'android']);

const gradleWrapper = isWindows ? 'gradlew.bat' : './gradlew';
run(gradleWrapper, ['--no-daemon', 'assembleDebug'], resolve(root, 'android'));

console.log(`APK creee : ${resolve(root, 'android/app/build/outputs/apk/debug/app-debug.apk')}`);