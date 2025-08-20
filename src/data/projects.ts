export type Project = {
  id: string;
  slug: string;
  name: string;
  screenshot?: string; // FIXED: Made optional since we have fallbacks
  altText?: string; // FIXED: Made optional with fallback logic
  github: string;
  sunsetDate?: string; // ISO date if sunset-ed
  short: string;
  long: string; // markdown or HTML string for detail page
  learned: string[];
  tags: string[]; // e.g. ["Vue 3", "Tailwind", "Web Scraping"]
  // ADDED: New fields for better organization
  status: 'active' | 'sunset' | 'archived';
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  dateCreated?: string; // ISO date
};

export const projects: Project[] = [
  {
    id: '1',
    slug: 'todo-v1',
    name: 'Tiny Todo (learning React + TS)',
    screenshot: '/screenshots/todo-v1.png', // FIXED: These will be handled with proper fallbacks
    altText: 'Screenshot of Tiny Todo app showing a clean interface with add task input and completed items',
    github: 'https://github.com/yourname/todo-v1',
    sunsetDate: '2023-08-01',
    status: 'sunset', // ADDED: Explicit status
    difficulty: 'beginner', // ADDED: Difficulty level
    dateCreated: '2023-07-01', // ADDED: Creation date
    short: 'Small todo app built to learn React + TypeScript fundamentals.',
    long: `Started as a 1-day exercise to understand React basics. I iterated through different state management patterns and learned about lifting state up, controlled inputs, and implementing basic accessibility features.

**Technical Highlights:**
- Implemented proper TypeScript interfaces for todos
- Added keyboard shortcuts (Enter to add, Escape to cancel)
- Used localStorage for persistence
- Added basic animations with CSS transitions

**Why sunset:** Replaced by a more sophisticated version with backend integration and user authentication. This served its purpose as a learning exercise.

**Key Takeaways:** Understanding component lifecycle, event handling, and the importance of proper state structure from the beginning.`,
    learned: ['React fundamentals', 'TypeScript with React', 'Unit testing with Jest', 'Local storage integration'],
    tags: ['React', 'TypeScript', 'Jest', 'LocalStorage'],
  },
  {
    id: '2',
    slug: 'web-scraper-ripley',
    name: 'Ripley Cartoon Scraper',
    screenshot: '/screenshots/ripley-scraper.png',
    altText: 'Terminal output showing the Ripley scraper processing cartoon metadata and download progress',
    github: 'https://github.com/yourname/ripley-scraper',
    status: 'active',
    difficulty: 'intermediate',
    dateCreated: '2023-09-15',
    short: 'A resilient web scraper that extracts cartoon images and metadata, storing them in SQLite with resume capability.',
    long: `Built a production-ready scraper that handles pagination, network failures, and resumable downloads. The scraper respects robots.txt, implements proper rate limiting, and provides detailed logging.

**Technical Implementation:**
- Used Puppeteer for JavaScript-heavy sites
- Implemented exponential backoff for failed requests
- SQLite with proper indexing for metadata storage
- Stream-based image downloading to handle large files
- Comprehensive error handling and recovery mechanisms

**Challenges Solved:**
- Handling dynamic content loading
- Memory management for long-running processes
- Graceful shutdown and state persistence
- Duplicate detection and skip logic`,
    learned: ['Node.js streams', 'SQLite database design', 'Resumable scraping patterns', 'Error handling strategies', 'Rate limiting'],
    tags: ['Node.js', 'SQLite', 'Web Scraping', 'Puppeteer', 'Streams'],
  },
  {
    id: '3',
    slug: 'personal-blog-ssg',
    name: 'Personal Blog (SSG experiment)',
    screenshot: '/screenshots/blog-ssg.png',
    altText: 'Clean blog layout with dark mode toggle and responsive design',
    github: 'https://github.com/yourname/blog-ssg',
    sunsetDate: '2024-05-10',
    status: 'sunset',
    difficulty: 'intermediate',
    dateCreated: '2024-01-20',
    short: 'Experimented with static site generation, markdown-driven content, and build optimization techniques.',
    long: `Deep dive into static site generation concepts. Explored different SSG frameworks and settled on a custom solution using Astro. Implemented markdown processing, automatic sitemap generation, and optimized build processes.

**Features Implemented:**
- Markdown with frontmatter support
- Automatic table of contents generation
- Code syntax highlighting with Prism
- RSS feed generation
- Optimized image processing pipeline

**Performance Metrics:**
- 95+ Lighthouse scores across all categories
- Sub-second build times for incremental changes
- Automatic WebP conversion and responsive images

**Why sunset:** Decided to integrate blog functionality into my main portfolio site rather than maintaining a separate project.`,
    learned: ['Static site generation concepts', 'Markdown processing pipelines', 'Build optimization', 'SEO implementation'],
    tags: ['Astro', 'Markdown', 'SSG', 'Performance', 'SEO'],
  },
  {
    id: '4',
    slug: 'weather-dashboard',
    name: 'Weather Dashboard',
    screenshot: '/screenshots/weather-dashboard.png',
    altText: 'Weather dashboard showing current conditions, forecast charts, and interactive map',
    github: 'https://github.com/yourname/weather-dashboard',
    status: 'active',
    difficulty: 'intermediate',
    dateCreated: '2023-11-05',
    short: 'Comprehensive weather dashboard with real-time data, interactive charts, and location-based forecasts.',
    long: `Built a feature-rich weather application that aggregates data from multiple weather APIs. Includes current conditions, extended forecasts, historical data visualization, and severe weather alerts.

**Key Features:**
- Real-time weather updates with WebSocket connections
- Interactive charts showing temperature, precipitation, and wind patterns
- Geolocation support with manual location override
- Offline functionality with cached data
- Responsive design optimized for mobile and desktop

**Technical Challenges:**
- Handling multiple API rate limits and failover strategies
- Implementing efficient data caching strategies
- Creating smooth chart animations and interactions
- Managing complex state with multiple data sources`,
    learned: ['API integration patterns', 'Advanced React hooks', 'Chart.js customization', 'Progressive Web App features', 'Responsive design principles'],
    tags: ['React', 'API Integration', 'Chart.js', 'PWA', 'Geolocation'],
  },
  {
    id: '5',
    slug: 'portfolio-v2',
    name: 'Portfolio v2',
    screenshot: '/screenshots/portfolio-v2.png',
    altText: 'Modern portfolio homepage with hero section, project grid, and smooth animations',
    github: 'https://github.com/yourname/portfolio-v2',
    status: 'active',
    difficulty: 'advanced',
    dateCreated: '2024-03-01',
    short: 'Complete portfolio redesign using Astro and Tailwind CSS with advanced animations and performance optimization.',
    long: `Major portfolio overhaul focused on performance, accessibility, and modern design principles. Implemented advanced animations, optimized loading strategies, and comprehensive SEO.

**Design Philosophy:**
- Mobile-first responsive design
- Accessibility-first development (WCAG 2.1 AA compliance)
- Performance-first loading strategies
- Content-first information architecture

**Technical Highlights:**
- Custom animation library using Intersection Observer
- Advanced Astro patterns including islands architecture
- Optimized asset pipeline with automatic WebP conversion
- Comprehensive meta tag management for social sharing
- JSON-LD structured data for better SEO

**Performance Results:**
- 100/100 Lighthouse Performance score
- First Contentful Paint under 1.2s
- Largest Contentful Paint under 2.5s`,
    learned: ['Advanced Astro patterns', 'Tailwind CSS mastery', 'Performance optimization', 'SEO best practices', 'Accessibility standards'],
    tags: ['Astro', 'Tailwind CSS', 'Performance', 'SEO', 'Accessibility'],
  },
  // ADDED: Additional projects with consistent structure and better details
  {
    id: '6',
    slug: 'habit-tracker',
    name: 'Habit Tracker',
    screenshot: '/screenshots/habit-tracker.png',
    altText: 'Habit tracker interface showing daily check-ins, streak counters, and progress visualization',
    github: 'https://github.com/yourname/habit-tracker',
    sunsetDate: '2024-06-01',
    status: 'sunset',
    difficulty: 'intermediate',
    dateCreated: '2024-02-10',
    short: 'Track daily habits with streak visualization, progress analytics, and motivational features.',
    long: `Built a comprehensive habit tracking application with focus on user engagement and long-term motivation. Implemented gamification elements and detailed analytics to help users maintain consistent habits.

**Core Features:**
- Visual streak tracking with heat map display
- Habit categories with custom icons and colors
- Weekly/monthly progress reports
- Reminder notifications using Web Notifications API
- Data export functionality for personal analytics

**User Experience Focus:**
- Smooth micro-interactions for habit completion
- Motivational messages and milestone celebrations
- Offline-first design with background sync
- Clean, distraction-free interface design`,
    learned: ['Local storage management', 'Calendar UI implementation', 'User engagement patterns', 'Notification API', 'Data visualization'],
    tags: ['JavaScript', 'UI/UX', 'LocalStorage', 'Notifications', 'Analytics'],
  },
  {
    id: '7',
    slug: 'recipe-api',
    name: 'Recipe API',
    screenshot: '/screenshots/recipe-api.png',
    altText: 'Screenshot of Recipe API project showing recipe endpoints and documentation',
    github: 'https://github.com/yourname/recipe-api',
    status: 'active',
    difficulty: 'intermediate',
    dateCreated: '2023-10-15',
    short: 'RESTful API for managing and discovering recipes with user authentication.',
    long: `A comprehensive recipe management API built with Express and MongoDB. Features include user authentication, image uploads, and advanced search capabilities.

**Key Features:**
- JWT-based authentication
- Image upload and processing
- Advanced search with filtering and pagination
- Rate limiting and request validation
- Comprehensive API documentation with Swagger

**Technical Stack:**
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- Multer for file uploads
- Jest for testing`,
    learned: ['REST API design', 'MongoDB schema design', 'JWT authentication', 'API documentation', 'Error handling'],
    tags: ['Node.js', 'Express', 'MongoDB', 'REST API', 'JWT']
  },
  {
    id: '8',
    slug: 'css-art-gallery',
    name: 'CSS Art Gallery',
    screenshot: '/screenshots/css-art.png',
    altText: 'Collection of digital art pieces created with pure CSS',
    github: 'https://github.com/yourname/css-art',
    status: 'active',
    difficulty: 'beginner',
    dateCreated: '2023-09-05',
    short: 'A showcase of artistic creations made exclusively with HTML and CSS.',
    long: `Explored the creative potential of CSS through a collection of artistic pieces. Each artwork is built using only HTML and CSS, pushing the boundaries of what's possible with these technologies.

**Highlights:**
- Pure CSS animations and transitions
- Responsive designs that work across devices
- Creative use of pseudo-elements
- Performance-optimized animations
- Interactive elements with hover/focus states`,
    learned: ['Advanced CSS selectors', 'CSS animations', 'Creative problem-solving', 'Performance optimization', 'Cross-browser compatibility'],
    tags: ['CSS', 'HTML', 'Animation', 'Art', 'UI/UX']
  },
  {
    id: '9',
    slug: 'markdown-notes',
    name: 'Markdown Notes',
    screenshot: '/screenshots/markdown-notes.png',
    altText: 'Markdown notes interface with split-pane editor and preview',
    github: 'https://github.com/yourname/markdown-notes',
    status: 'active',
    difficulty: 'intermediate',
    dateCreated: '2023-11-20',
    short: 'A modern note-taking application with markdown support and cloud sync.',
    long: `A full-featured note-taking application that allows users to create, edit, and organize markdown notes with real-time preview.

**Features:**
- Real-time markdown preview
- Note organization with tags and folders
- Offline support with IndexedDB
- Dark/light theme
- Export to PDF/Markdown
- Full-text search

**Tech Stack:**
- React with TypeScript
- Redux for state management
- Marked.js for markdown parsing
- Dexie.js for IndexedDB`,
    learned: ['Markdown parsing', 'Progressive Web Apps', 'State management', 'Offline storage', 'Responsive design'],
    tags: ['React', 'TypeScript', 'Markdown', 'PWA', 'IndexedDB']
  },
  {
    id: '10',
    slug: 'ecommerce-mock',
    name: 'E-commerce Mock',
    screenshot: '/screenshots/ecommerce-mock.png',
    altText: 'E-commerce storefront with product grid and shopping cart',
    github: 'https://github.com/yourname/ecommerce-mock',
    status: 'active',
    difficulty: 'intermediate',
    dateCreated: '2023-12-10',
    short: 'A fully functional e-commerce prototype with product catalog and checkout flow.',
    long: `A complete e-commerce solution built with modern web technologies, featuring product browsing, cart management, and a streamlined checkout process.

**Key Components:**
- Product catalog with filtering and sorting
- Shopping cart with persistent storage
- User authentication and profiles
- Order history and tracking
- Responsive design for all devices
- Mock payment integration

**Tech Stack:**
- Next.js for server-side rendering
- Redux Toolkit for state management
- Styled Components for styling
- Stripe API for payments (test mode)`,
    learned: ['E-commerce patterns', 'State management', 'API integration', 'Responsive design', 'Performance optimization'],
    tags: ['Next.js', 'React', 'Redux', 'E-commerce', 'Stripe']
  },
  {
    id: '11',
    slug: 'chatbot-ui',
    name: 'Chatbot UI',
    screenshot: '/screenshots/chatbot-ui.png',
    altText: 'Chat interface with conversation history and message input',
    github: 'https://github.com/yourname/chatbot-ui',
    status: 'sunset',
    sunsetDate: '2024-02-14',
    difficulty: 'intermediate',
    dateCreated: '2023-11-15',
    short: 'A responsive chat interface with message history and typing indicators.',
    long: `Developed a modern chat interface with WebSocket integration for real-time communication. The UI includes features like typing indicators, read receipts, and message status tracking.

**Features:**
- Real-time message delivery
- Typing indicators
- Message read receipts
- Responsive design
- Emoji picker
- File attachments

**Why sunset:** Replaced by a more advanced version with additional features and better architecture.`,
    learned: ['WebSockets', 'Real-time UIs', 'State management', 'UX design', 'Performance optimization'],
    tags: ['React', 'WebSockets', 'UI/UX', 'Real-time']
  },
  {
    id: '12',
    slug: 'stock-tracker',
    name: 'Stock Tracker',
    screenshot: '/screenshots/stock-tracker.png',
    altText: 'Stock market dashboard with price charts and watchlist',
    github: 'https://github.com/yourname/stock-tracker',
    status: 'active',
    difficulty: 'intermediate',
    dateCreated: '2024-01-08',
    short: 'Real-time stock market tracker with portfolio management.',
    long: `A comprehensive stock tracking application that provides real-time market data, interactive charts, and portfolio management tools.

**Features:**
- Real-time stock quotes
- Interactive candlestick charts
- Portfolio tracking
- Watchlists
- News feed
- Performance analytics

**Data Sources:**
- Alpha Vantage API
- Finnhub API
- NewsAPI`,
    learned: ['Financial data APIs', 'Data visualization', 'Real-time updates', 'State management', 'Error handling'],
    tags: ['React', 'Chart.js', 'Finance', 'API', 'Real-time']
  },
  {
    id: '13',
    slug: 'quiz-app',
    name: 'Quiz App',
    screenshot: '/screenshots/quiz-app.png',
    altText: 'Quiz interface with question and multiple choice answers',
    github: 'https://github.com/yourname/quiz-app',
    status: 'active',
    difficulty: 'beginner',
    dateCreated: '2023-10-22',
    short: 'Interactive quiz application with various categories and difficulty levels.',
    long: `A dynamic quiz application featuring multiple categories, difficulty levels, and a scoring system. Users can track their progress and review answers.

**Features:**
- Multiple quiz categories
- Adjustable difficulty
- Score tracking
- Progress indicators
- Answer explanations
- Responsive design

**Tech Stack:**
- React
- TypeScript
- Styled Components
- Open Trivia Database API`,
    learned: ['State management', 'API integration', 'Form handling', 'User experience', 'Accessibility'],
    tags: ['React', 'TypeScript', 'Quiz', 'Education']
  },
  {
    id: '14',
    slug: 'movie-explorer',
    name: 'Movie Explorer',
    screenshot: '/screenshots/movie-explorer.png',
    altText: 'Movie browser with grid layout and search functionality',
    github: 'https://github.com/yourname/movie-explorer',
    status: 'active',
    difficulty: 'intermediate',
    dateCreated: '2024-01-15',
    short: 'Discover and explore movies with detailed information and recommendations.',
    long: `A comprehensive movie discovery platform that helps users find films, read reviews, and get personalized recommendations.

**Features:**
- Search and filter movies
- Movie details and cast information
- User ratings and reviews
- Watchlist functionality
- Responsive grid layout
- Infinite scroll

**Data Source:**
- The Movie Database (TMDB) API`,
    learned: ['API integration', 'Data fetching', 'State management', 'Responsive design', 'Performance optimization'],
    tags: ['React', 'API', 'Movies', 'UI/UX']
  },
  {
    id: '15',
    slug: 'kanban-board',
    name: 'Kanban Board',
    screenshot: '/screenshots/kanban-board.png',
    altText: 'Kanban board with draggable task cards and columns',
    github: 'https://github.com/yourname/kanban-board',
    status: 'active',
    difficulty: 'intermediate',
    dateCreated: '2023-12-05',
    short: 'A Trello-like task management board with drag-and-drop functionality.',
    long: `A flexible Kanban board implementation that helps teams visualize workflow and manage tasks efficiently.

**Features:**
- Drag-and-drop interface
- Multiple boards and columns
- Task details and comments
- Due dates and labels
- Real-time collaboration
- Data persistence

**Tech Stack:**
- React with TypeScript
- React Beautiful DnD
- Firebase for real-time sync
- Styled Components`,
    learned: ['Drag and drop', 'State management', 'Real-time updates', 'UI/UX', 'Authentication'],
    tags: ['React', 'TypeScript', 'Productivity', 'UI/UX', 'Firebase']
  },
  {
    id: '16',
    slug: 'image-compressor',
    name: 'Image Compressor',
    screenshot: '/screenshots/image-compressor.png',
    altText: 'Image compression tool with before/after comparison',
    github: 'https://github.com/yourname/image-compressor',
    status: 'active',
    difficulty: 'beginner',
    dateCreated: '2023-11-10',
    short: 'Client-side image compression tool with quality controls.',
    long: `A web application that reduces image file sizes while maintaining visual quality, all processed in the browser.

**Features:**
- Drag and drop interface
- Quality and size controls
- Batch processing
- Before/after comparison
- Download compressed images
- Responsive design

**Technologies:**
- HTML5 Canvas API
- FileReader API
- Web Workers for heavy processing`,
    learned: ['Image processing', 'Browser APIs', 'Performance optimization', 'User experience', 'Error handling'],
    tags: ['JavaScript', 'Canvas', 'Image Processing', 'Web APIs']
  },
  {
    id: '17',
    slug: 'expense-tracker',
    name: 'Expense Tracker',
    screenshot: '/screenshots/expense-tracker.png',
    altText: 'Expense dashboard with charts and transaction list',
    github: 'https://github.com/yourname/expense-tracker',
    status: 'active',
    difficulty: 'intermediate',
    dateCreated: '2024-01-20',
    short: 'Track and analyze personal expenses with insightful visualizations.',
    long: `A comprehensive expense tracking application that helps users monitor spending habits and financial goals.

**Features:**
- Add and categorize expenses
- Monthly and yearly overviews
- Interactive charts and reports
- Budget tracking
- Data export (CSV/PDF)
- Multi-currency support

**Tech Stack:**
- React with TypeScript
- Chart.js for visualizations
- Local storage for data persistence
- i18n for internationalization`,
    learned: ['Data visualization', 'Form handling', 'State management', 'Responsive design', 'Local storage'],
    tags: ['React', 'TypeScript', 'Finance', 'Charts', 'Data Visualization']
  },
  {
    id: '18',
    slug: 'url-shortener',
    name: 'URL Shortener',
    screenshot: '/screenshots/url-shortener.png',
    altText: 'URL shortening service interface with analytics',
    github: 'https://github.com/yourname/url-shortener',
    status: 'active',
    difficulty: 'intermediate',
    dateCreated: '2023-12-15',
    short: 'A full-stack URL shortening service with analytics.',
    long: `A complete URL shortening solution with analytics, custom slugs, and link management features.

**Features:**
- Create short URLs
- Custom slugs
- Click analytics
- Link expiration
- API access
- User dashboard

**Tech Stack:**
- Frontend: Astro
- Backend: Node.js with Express
- Database: PostgreSQL
- Caching: Redis`,
    learned: ['REST API design', 'Database modeling', 'Analytics', 'Performance optimization', 'Authentication'],
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Astro', 'API']
  },
  {
    id: '19',
    slug: 'music-player',
    name: 'Music Player',
    screenshot: '/screenshots/music-player.png',
    altText: 'Music player interface with playlist and now playing',
    github: 'https://github.com/yourname/music-player',
    status: 'active',
    difficulty: 'intermediate',
    dateCreated: '2024-01-05',
    short: 'A sleek, responsive music player with playlist support.',
    long: `A feature-rich web-based music player that provides an immersive listening experience.

**Features:**
- Play/pause, skip, and seek
- Playlist management
- Audio visualization
- Keyboard shortcuts
- Responsive design
- Offline support

**Technologies:**
- Web Audio API
- Howler.js for audio handling
- React for UI
- IndexedDB for offline storage`,
    learned: ['Audio APIs', 'State management', 'Performance optimization', 'Responsive design', 'Offline capabilities'],
    tags: ['JavaScript', 'Web Audio API', 'React', 'PWA']
  },
  {
    id: '20',
    slug: 'blog-cms',
    name: 'Blog CMS',
    screenshot: '/screenshots/blog-cms.png',
    altText: 'Blog management dashboard with post editor',
    github: 'https://github.com/yourname/blog-cms',
    status: 'active',
    difficulty: 'intermediate',
    dateCreated: '2024-02-01',
    short: 'A headless CMS for managing blog content with markdown support.',
    long: `A complete content management system for bloggers with a focus on simplicity and performance.

**Features:**
- Rich text editor with markdown
- Media library
- User roles and permissions
- SEO tools
- Responsive preview
- Draft and scheduling

**Tech Stack:**
- Frontend: React with TypeScript
- Backend: Node.js with Express
- Database: MongoDB
- Authentication: JWT`,
    learned: ['Content management', 'Authentication', 'API design', 'Database modeling', 'Security best practices'],
    tags: ['Node.js', 'React', 'MongoDB', 'CMS', 'Authentication']
  }
  // ... continue up to ~20 projects
];


// ADDED: Utility functions for better data handling
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getProjectsByTag(tag: string): Project[] {
  return projects.filter(project =>
    project.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

export function getActiveProjects(): Project[] {
  return projects.filter(project => project.status === 'active');
}

export function getSunsetProjects(): Project[] {
  return projects.filter(project => project.status === 'sunset');
}

// ADDED: Search functionality
export function searchProjects(query: string, tag?: string): Project[] {
  const searchTerm = query.toLowerCase().trim();
  const tagTerm = tag?.toLowerCase().trim();

  return projects.filter(project => {
    const matchesQuery = !searchTerm || (
      project.name.toLowerCase().includes(searchTerm) ||
      project.short.toLowerCase().includes(searchTerm) ||
      project.tags.some(t => t.toLowerCase().includes(searchTerm)) ||
      project.learned.some(l => l.toLowerCase().includes(searchTerm))
    );

    const matchesTag = !tagTerm ||
      project.tags.some(t => t.toLowerCase().includes(tagTerm));

    return matchesQuery && matchesTag;
  });
}

// ADDED: Date sorting and formatting
export function sortProjectsByDate(projects: Project[], ascending = false): Project[] {
  return [...projects].sort((a, b) => {
    const dateA = a.dateCreated || '0';
    const dateB = b.dateCreated || '0';
    return ascending 
      ? dateA.localeCompare(dateB) 
      : dateB.localeCompare(dateA);
  });
}

export function formatProjectDate(dateString?: string): string {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
}

// ADDED: Difficulty-based filtering
export function getProjectsByDifficulty(level: Project['difficulty']): Project[] {
  return projects.filter(project => project.difficulty === level);
}

// ADDED: Enhanced tag management
export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  projects.forEach(project => {
    project.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

// ADDED: Pagination support
export function getPaginatedProjects(
  projectList: Project[],
  page = 1, 
  pageSize = 10
): { projects: Project[], totalPages: number } {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedProjects = projectList.slice(start, end);
  const totalPages = Math.ceil(projectList.length / pageSize);
  return { projects: paginatedProjects, totalPages };
}

// ADDED: Related projects function
export function getRelatedProjects(slug: string, count = 3): Project[] {
  const project = getProjectBySlug(slug);
  if (!project) return [];
  return projects
    .filter(p => p.slug !== slug && 
      p.tags.some(tag => project.tags.includes(tag)))
    .sort((a, b) => {
      const aMatches = a.tags.filter(tag => project.tags.includes(tag)).length;
      const bMatches = b.tags.filter(tag => project.tags.includes(tag)).length;
      return bMatches - aMatches;
    })
    .slice(0, count);
}
