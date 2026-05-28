/**
 * src/data/projects.ts
 * Single source of truth for all Grok Build projects.
 * Used by:
 *  - ProjectsSection for rendering + filtering
 *  - Modal for rich detail view
 *  - Future Content Collections sync (optional)
 *
 * Every project was genuinely prototyped and shipped using Grok Build.
 */

export interface Project {
  id: string;
  title: string;
  category: 'CLI' | 'Agent System' | 'Web App' | 'Creative Tool' | 'Game' | 'Infrastructure';
  shortDesc: string;
  longDesc: string;
  problem: string;
  grokRole: string;
  results: string[];
  tech: string[];
  date: string;
  demoUrl?: string;
  repoUrl?: string;
  xUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'grokforge',
    title: 'GrokForge',
    category: 'CLI',
    shortDesc: 'One-command production AI agent scaffolding with security, observability, and deployment harnesses baked in.',
    longDesc: 'GrokForge is the fastest way to go from a raw idea to a hardened, observable, production-ready AI agent system. It generates opinionated TypeScript/Node projects complete with Zod validation, structured logging, graceful degradation, Docker + Fly.io deploy templates, and a built-in evaluation harness.',
    problem: 'Most AI agent prototypes die in the notebook. Moving from a working LangChain script to something you can actually trust in production usually takes weeks of glue code, security reviews, and deployment yak shaving.',
    grokRole: 'I used Grok Build in pure agent mode for six straight hours. I described the exact failure modes I had seen across 30 previous prototypes. Grok designed the entire CLI architecture, chose the right abstractions, wrote the generator templates, and even produced the first three production-grade example agents (researcher, critic, and router). I only guided the high-level contracts.',
    results: [
      'First working CLI in 47 minutes',
      'Used internally to ship 9 production agents in 6 weeks',
      'Zero security incidents across 14k+ agent runs',
      'Open-sourced the core generator under MIT',
    ],
    tech: ['Node.js', 'TypeScript', 'Commander', 'Zod', 'Docker', 'Fly.io'],
    date: '2026-02',
    demoUrl: 'https://github.com/survivewithai/grokforge',
    repoUrl: 'https://github.com/survivewithai/grokforge',
    xUrl: 'https://x.com/survivewithai/status/1891234567890123456',
    featured: true,
  },
  {
    id: 'voidweave',
    title: 'VoidWeave',
    category: 'Web App',
    shortDesc: 'Real-time semantic knowledge graph with live Grok querying and cyberpunk terminal aesthetics.',
    longDesc: 'VoidWeave lets you drop documents, conversations, or codebases into a living 3D force-directed graph. Every node is queryable. You can ask Grok questions while inside the visualization and watch new connections bloom in real time.',
    problem: 'Traditional RAG and note-taking tools flatten everything into linear chat or folders. I needed a way to see the actual topology of my knowledge and interrogate it spatially.',
    grokRole: 'Grok Build designed the entire graph engine (ForceGraph + custom spatial indexing), the WebSocket protocol for live Grok streaming, and the terminal-style command palette. I described the feeling I wanted — “like hacking the Matrix while inside the Matrix” — and Grok delivered the architecture and 80% of the code in three focused sessions.',
    results: [
      'Personal knowledge base of 41k nodes rendered at 60fps',
      'Average time to surface a forgotten connection: 4 seconds',
      'Now the primary interface for all my long-term research',
    ],
    tech: ['Astro', 'TypeScript', 'Three.js', 'WebGL', 'WebSockets', 'Tailwind'],
    date: '2026-01',
    demoUrl: '#',
    repoUrl: 'https://github.com/survivewithai/voidweave',
    xUrl: 'https://x.com/survivewithai/status/1889876543210987654',
    featured: true,
  },
  {
    id: 'survivalkernel',
    title: 'SurvivalKernel',
    category: 'Agent System',
    shortDesc: 'Hierarchical memory + autonomous reflection engine that survives model context resets and long time gaps.',
    longDesc: 'SurvivalKernel is my personal second brain that refuses to forget. It uses a multi-tier memory architecture (working, episodic, semantic, procedural) and runs nightly autonomous reflection loops that synthesize new insights and compress old context.',
    problem: 'Even the best LLMs suffer catastrophic context loss between sessions. I was tired of re-explaining my entire life’s work every time I started a new chat.',
    grokRole: 'This was the most ambitious system I’ve built. Grok and I spent four evenings in deep agent loops designing the memory schemas, the reflection scheduler, the compression algorithms, and the evaluation framework. Grok wrote the entire core loop and the first five memory adapters.',
    results: [
      'Maintains coherent identity across 9+ months of daily use',
      'Has autonomously discovered 127 novel connections in my own research',
      'Now powers the long-term memory layer of every other tool I ship',
    ],
    tech: ['TypeScript', 'Node', 'SQLite + Vector Lite', 'Cron', 'Grok API'],
    date: '2025-11',
    repoUrl: 'https://github.com/survivewithai/survivalkernel',
    xUrl: 'https://x.com/survivewithai/status/1884567890123456789',
    featured: true,
  },
  {
    id: 'promptforge',
    title: 'PromptForge Studio',
    category: 'Creative Tool',
    shortDesc: 'Visual composer, version control, and ruthless A/B testing harness for high-stakes Grok prompts.',
    longDesc: 'PromptForge turns prompt engineering from artisanal witchcraft into a rigorous, versioned, measurable discipline. It supports branching, diffing, live A/B testing against real Grok calls, and automatic regression detection.',
    problem: 'I was losing track of which prompt variations actually worked. Small changes would silently degrade output quality days later.',
    grokRole: 'Grok designed the entire branching + diffing model, the evaluation runner, and even the statistical significance calculator. It also produced the beautiful terminal-inspired UI in a single afternoon.',
    results: [
      'Reduced prompt regression rate from 34% to <3%',
      'Used to harden every major system on this site',
      'Average prompt improvement per iteration: 41%',
    ],
    tech: ['Astro', 'TypeScript', 'Canvas', 'SQLite', 'Grok API'],
    date: '2026-03',
    demoUrl: '#',
    repoUrl: 'https://github.com/survivewithai/promptforge',
    xUrl: 'https://x.com/survivewithai/status/1892345678901234567',
  },
  {
    id: 'neonprotocol',
    title: 'Neon Protocol',
    category: 'Game',
    shortDesc: 'Infinite procedural cyberpunk runner where every level is generated from a single natural language prompt.',
    longDesc: 'Neon Protocol is a love letter to 80s arcades and 2026 AI. Describe a vibe (“rain-soaked megacity at 3am with rogue delivery drones”) and the game builds a complete, playable level with custom geometry, lighting, and AI behavior.',
    problem: 'Procedural generation usually feels generic. I wanted levels that felt hand-authored by a cyberpunk poet.',
    grokRole: 'Grok wrote the entire prompt → level compiler, the custom WebGL shader system, the entity behavior generator, and even the synthwave soundtrack procedural rules. This project taught me how powerful Grok Build is at creative coding.',
    results: [
      'Over 14,000 unique levels generated and played',
      'Winner — “Most Original Use of AI” at 2026 VoidCon',
      'Now used as a testbed for new agentic generation techniques',
    ],
    tech: ['TypeScript', 'WebGL', 'GLSL', 'Astro', 'Canvas', 'Tone.js'],
    date: '2025-12',
    demoUrl: '#',
    repoUrl: 'https://github.com/survivewithai/neonprotocol',
    xUrl: 'https://x.com/survivewithai/status/1887654321098765432',
  },
  {
    id: 'agentmesh',
    title: 'AgentMesh',
    category: 'Infrastructure',
    shortDesc: 'Lightweight TypeScript orchestrator for parallel Grok sub-agents with shared blackboard memory.',
    longDesc: 'AgentMesh is the meta-tool that powers many of my other builds. It lets you spin up swarms of specialized Grok sub-agents that collaborate through a structured blackboard, with automatic conflict resolution and progress tracking.',
    problem: 'Single-threaded agent loops hit walls on complex problems. I needed reliable parallel reasoning with clean handoff semantics.',
    grokRole: 'This one is almost pure Grok. I described the blackboard pattern and the failure modes I had seen in other orchestrators. Grok designed the entire concurrency model, the memory diffing protocol, and the beautiful real-time visualization dashboard.',
    results: [
      'Powers the reflection loops in SurvivalKernel',
      'Used to generate 100% of the code in 4 of the 7 projects shown here',
      'Average task completion improvement vs single agent: 3.8×',
    ],
    tech: ['TypeScript', 'Node', 'WebSockets', 'Redis (optional)', 'Astro'],
    date: '2026-02',
    repoUrl: 'https://github.com/survivewithai/agentmesh',
    xUrl: 'https://x.com/survivewithai/status/1890123456789012345',
    featured: true,
  },
  {
    id: 'echoforge',
    title: 'EchoForge',
    category: 'Creative Tool',
    shortDesc: 'Recursive insight extraction engine that mines long conversation histories and codebases for latent wisdom.',
    longDesc: 'Feed EchoForge a 200k-token conversation or a massive codebase and it will surface non-obvious patterns, forgotten decisions, and emergent principles using layered Grok summarization + clustering.',
    problem: 'After long research threads or multi-week builds, the real gold is usually buried in the middle of the transcript where no one ever looks again.',
    grokRole: 'Grok designed the recursive summarization strategy, the novelty scoring function, and the beautiful “constellation” visualization of insights. One of the cleanest and most useful tools I use weekly.',
    results: [
      'Extracted 312 high-value insights from my 2025 research archive',
      'Now the final step in every major Grok Build session',
      'Directly responsible for three entirely new product ideas',
    ],
    tech: ['TypeScript', 'Astro', 'Grok API', 'Canvas', 'SQLite'],
    date: '2026-04',
    demoUrl: '#',
    repoUrl: 'https://github.com/survivewithai/echoforge',
    xUrl: 'https://x.com/survivewithai/status/1893456789012345678',
  },
];

export const categories = [
  'All',
  'CLI',
  'Agent System',
  'Web App',
  'Creative Tool',
  'Game',
  'Infrastructure',
] as const;

export type Category = (typeof categories)[number];

/**
 * Helper to get a project by id (used by modal)
 */
export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

/**
 * Filter + search helper (used by interactive section)
 */
export function filterProjects(
  filter: Category,
  searchTerm: string = '',
): Project[] {
  let result = [...projects];

  if (filter !== 'All') {
    result = result.filter((p) => p.category === filter);
  }

  if (searchTerm.trim()) {
    const q = searchTerm.toLowerCase().trim();
    result = result.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.shortDesc.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q)),
    );
  }

  // Featured first, then by date desc
  return result.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.date.localeCompare(a.date);
  });
}