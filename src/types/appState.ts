export interface Task {
  id: string;
  title: string;
  description?: string;
  hoursEstimate?: number;
  pomodoros?: number;
  deliverables?: string[];
  tags?: string[];
  link?: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  type: 'course' | 'docs' | 'repo' | 'tool';
  description: string;
  url: string;
  moduleId: string;
  isFree: boolean;
}

export interface SprintModule {
  id: string;
  moduleNum: number;
  title: string;
  subtitle: string;
  statusColor: string;
  duration: string;
  objectives: string[];
  knowledgeToLoad: string[];
  deliverables: Task[];
  resources: ResourceItem[];
}

export interface PomodoroSlot {
  id: string;
  pomIndex: number; // 1 to 6
  timeSlot: string;
  period: 'afternoon' | 'evening';
  label: string;
  details: string;
}

export interface DailyScheduleDay {
  id: string;
  weekNum: number; // 1 to 5
  dayNum: number; // 1 to 5 (Mon-Fri)
  dayName: string; // e.g. "Thứ 2"
  theme: string; // e.g. "Setup & Core Prompting"
  poms: PomodoroSlot[];
}

export interface TechStackLayer {
  layerNum: number;
  name: string;
  description: string;
  items: {
    name: string;
    role: string;
    usageShare?: string;
    isPrimaryChoice?: boolean;
    note?: string;
  }[];
}

export interface PomodoroSessionLog {
  id: string;
  timestamp: number;
  durationMinutes: number;
  taskId?: string;
  taskTitle?: string;
  preset: '25/5' | '50/5' | 'custom';
}

export interface PomodoroTimerSettings {
  preset: '25/5' | '50/5' | 'custom';
  focusDuration: number; // in minutes
  breakDuration: number; // in minutes
  longBreakDuration: number; // in minutes
  autoStartBreaks: boolean;
  soundEnabled: boolean;
  notificationEnabled: boolean;
}

export interface AppState {
  checked: Record<string, boolean>;
  resourceFlags: Record<string, boolean>;
  activeTab: string;
  theme: 'dark' | 'light';
  pomodoroSettings?: PomodoroTimerSettings;
  pomodoroSessions?: PomodoroSessionLog[];
}

