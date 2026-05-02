import { appendTeamEvent } from '../state.js';
import type { TeamEvent } from '../types.js';
export declare function readTeamEvents(teamName: string, cwd: string): Promise<TeamEvent[]>;
export declare function getLatestTeamEventCursor(teamName: string, cwd: string): Promise<string>;
export declare function waitForTeamEvent(): Promise<null>;
export { appendTeamEvent };
//# sourceMappingURL=events.d.ts.map