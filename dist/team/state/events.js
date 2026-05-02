import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import { teamEventLogPath, appendTeamEvent } from '../state.js';
export async function readTeamEvents(teamName, cwd) {
    const path = teamEventLogPath(teamName, cwd);
    if (!existsSync(path))
        return [];
    const text = await readFile(path, 'utf-8');
    return text.split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line));
}
export async function getLatestTeamEventCursor(teamName, cwd) {
    const events = await readTeamEvents(teamName, cwd);
    return events.at(-1)?.event_id ?? '';
}
export async function waitForTeamEvent() { return null; }
export { appendTeamEvent };
//# sourceMappingURL=events.js.map