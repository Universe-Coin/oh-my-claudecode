import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import { teamEventLogPath, appendTeamEvent } from '../state.js';
import type { TeamEvent } from '../types.js';

export async function readTeamEvents(teamName: string, cwd: string): Promise<TeamEvent[]> {
  const path = teamEventLogPath(teamName, cwd);
  if (!existsSync(path)) return [];
  const text = await readFile(path, 'utf-8');
  return text.split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line) as TeamEvent);
}

export async function getLatestTeamEventCursor(teamName: string, cwd: string): Promise<string> {
  const events = await readTeamEvents(teamName, cwd);
  return events.at(-1)?.event_id ?? '';
}

export async function waitForTeamEvent(): Promise<null> { return null; }
export { appendTeamEvent };
