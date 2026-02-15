export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string; // HTML/Markdown like content
  videoId?: string; // YouTube Video ID
  activity: string;
  duration: string;
  blogLink?: string; // URL to external resource
  blogTitle?: string; // Title of the external resource
}

export interface Week {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Phase {
  id: string;
  title: string;
  goal: string;
  weeks: Week[];
}

export interface Curriculum {
  phases: Phase[];
}