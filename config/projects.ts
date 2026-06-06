export interface Project {
  title: string
  description: string
  tags: string[]
  date: string
  bullets?: string[]
}

export const projects: Project[] = [
  {
    title: "Fault-Tolerant Key-Value Store",
    description:
      "Primary/backup replicated key-value store with leader election, failure detection, and safe automated failover.",
    tags: ["Go", "RPC", "Distributed Systems"],
    date: "February 2026",
    bullets: [
      "Implemented primary/backup replication with a centralized view service for leader election and heartbeat-based failure detection.",
      "Built RPC clients and servers for Get, Put, and Append operations with linearizability, retries, and operation deduplication.",
    ],
  },
  {
    title: "Multi-Threaded Network File Server",
    description:
      "Concurrent TCP file server supporting RPC-style filesystem operations while preserving strict consistency guarantees.",
    tags: ["C++20", "TCP Sockets", "Boost Threads", "RAII"],
    date: "December 2025",
    bullets: [
      "Serviced concurrent Read, Write, Create, and Delete requests with POSIX sockets, Boost threads, and RAII-managed resources.",
      "Designed fine-grained reader-writer locking with upgradeable shared locks and hand-over-hand traversal to prevent races and deadlocks.",
    ],
  },
  {
    title: "Virtual Memory Pager",
    description:
      "Demand-paged virtual memory subsystem with page faults, swap-backed pages, file-backed mappings, and copy-on-write fork.",
    tags: ["C++20", "Operating Systems", "Data Structures"],
    date: "November 2025",
    bullets: [
      "Managed page tables, swap space, file-backed mappings, shared pages, and page fault handling across processes.",
      "Reduced unnecessary disk I/O with dirty/reference bits, copy-on-write, deferred work, and clock-based eviction.",
    ],
  },
  {
    title: "User-Level Thread Library",
    description:
      "Preemptive threading library with context switching, FIFO scheduling, mutexes, and condition variables.",
    tags: ["C++20", "ucontext", "Mutexes", "Condition Variables"],
    date: "October 2025",
    bullets: [
      "Implemented thread creation, join, mutexes, condition variables, FIFO scheduling, and swapcontext-based switching.",
      "Built low-level synchronization with test-and-set spin locks, interrupt control, and inter-processor interrupts.",
    ],
  },
  {
    title: "Algorithmic Trading Bot for Multi-Strategy Simulation",
    description:
      "Designed a trading bot for IMC Prosperity using momentum, mean reversion, market making, and volatility arbitrage.",
    tags: ["Python", "Trading", "Regression", "Financial Engineering"],
    date: "April 2025",
    bullets: [
      "Implemented implied-volatility curve fitting, delta hedging, and adaptive position scaling for risk optimization.",
      "Ranked in the top 5% of 13,000+ competitors by tuning synthetic basket arbitrage under liquidity and position constraints.",
    ],
  },
  {
    title: "Multi-Class Image Classifier",
    description:
      "Built a PyTorch image classification pipeline for real-world dog-breed image datasets with logistic regression and neural-network models.",
    tags: ["Python", "PyTorch", "Neural Networks", "ML"],
    date: "March 2025",
    bullets: [
      "Preprocessed and batched 10,000+ labeled images with normalization, reshaping, and GPU-accelerated DataLoader classes.",
      "Mitigated overfitting with dropout and L2 regularization, improving validation accuracy and training stability.",
    ],
  },
  {
    title: "ICU Mortality Prediction",
    description:
      "Built and evaluated models on ICU time-series data to optimize mortality prediction accuracy and AUROC.",
    tags: ["Python", "Logistic Regression", "Data Science", "Healthcare AI"],
    date: "February 2025",
    bullets: [
      "Engineered features from 48-hour ICU records using one-hot encoding, KNN imputation, and median/max aggregation.",
      "Tuned logistic and kernel ridge regression models with stratified cross-validation, weighted losses, and ROC thresholding.",
    ],
  },
  {
    title: "Graph Optimization and Routing",
    description:
      "Developed graph algorithms for MST and TSP variants with dynamic edge weights and runtime validation.",
    tags: ["C++", "Algorithms", "Git"],
    date: "November 2024",
    bullets: [
      "Implemented MST solutions with Kruskal's and Prim's algorithms.",
      "Built heuristic and exact approaches for TSP-style routing problems with memory-conscious data structures.",
    ],
  },
  {
    title: "Option Backtesting",
    description:
      "Implemented binomial option pricing and integrated with Tradier API for real-time options data.",
    tags: ["Python", "NumPy", "APIs", "Git"],
    date: "May 2024 - July 2024",
  },
  {
    title: "Personal Portfolio",
    description:
      "Designed and developed this responsive personal portfolio to showcase experience, projects, skills, and coursework.",
    tags: ["React", "Next.js", "Tailwind CSS", "GitHub Pages"],
    date: "June 2023 - Present",
    bullets: [
      "Built reusable components and structured content for maintainability as portfolio content evolves.",
      "Deployed the site through GitHub Pages for fast iteration and version-controlled updates.",
    ],
  },
  {
    title: "Freelance Website Design",
    description:
      "Designed and developed a responsive e-commerce website with product displays, category filters, and a retail-focused UI.",
    tags: ["React", "AWS", "SQL", "SEO"],
    date: "July 2020 - July 2022",
    bullets: [
      "Built a SQL-backed data layer for product inventory, pricing, descriptions, and CRUD-style updates.",
      "Deployed to AWS and improved PageSpeed Insights by 23 points through caching and performance optimization.",
    ],
  },
  {
    title: "Automated Pill Dispenser",
    description:
      "Senior capstone project featuring an automated pill dispenser with reminders, secure locking, and compartment-based medication management.",
    tags: ["Arduino", "Raspberry Pi", "3D Printing", "IoT"],
    date: "2024",
  },
  {
    title: "Hand Tracking",
    description:
      "Real-time hand tracking system using computer vision and machine learning for detecting landmarks and gestures.",
    tags: ["Python", "OpenCV", "MediaPipe", "ML"],
    date: "2023",
  },
  {
    title: "Mario Game",
    description:
      "Java-based 2D side-scrolling platformer with custom graphics, physics simulation, input handling, levels, and power-ups.",
    tags: ["Java", "LibGDX", "Game Development"],
    date: "2023",
  },
  {
    title: "Back to the Ship!",
    description:
      "Navigated a 3D space-station maze using BFS/DFS with stack and queue routing modes.",
    tags: ["C++", "BFS", "DFS", "Data Structures"],
    date: "EECS 281 Project 1",
  },
  {
    title: "Stock Market Simulation",
    description:
      "Simulated an electronic stock exchange with efficient order matching using priority queues.",
    tags: ["C++", "Priority Queue", "Simulation"],
    date: "EECS 281 Project 2A",
  },
  {
    title: "Priority Queue Implementations",
    description:
      "Built sorted-array, binary-heap, and pairing-heap priority queues from scratch and compared performance tradeoffs.",
    tags: ["C++", "Heaps", "Pointers"],
    date: "EECS 281 Project 2B",
  },
  {
    title: "281Bank",
    description:
      "Designed an online banking system with accounts, scheduled transactions, query commands, and time-based execution.",
    tags: ["C++", "Priority Queue", "Systems Design"],
    date: "EECS 281 Project 3",
  },
  {
    title: "LC2K Assembler and Simulator",
    description:
      "Built assembler and simulator tooling for the LC-2K architecture, plus an assembly multiplier program.",
    tags: ["C", "Assembly", "Computer Architecture"],
    date: "EECS 370 Project 1",
  },
  {
    title: "LC2K Linker",
    description:
      "Extended the LC-2K toolchain with object-file linking and modular compilation support.",
    tags: ["C", "Linkers", "Computer Architecture"],
    date: "EECS 370 Project 2",
  },
  {
    title: "LC2K Pipelined Simulator",
    description:
      "Implemented a cycle-accurate pipelined simulator with forwarding, branch behavior, and hazard modeling.",
    tags: ["C", "Pipelining", "CPU Simulation"],
    date: "EECS 370 Project 3",
  },
  {
    title: "LC2K Cache Simulator",
    description:
      "Created a cache simulator to model memory references, locality, and processor-cache interactions.",
    tags: ["C", "Caches", "Memory Systems"],
    date: "EECS 370 Project 4",
  },
  {
    title: "Sockets, Mininet, and Network Performance",
    description:
      "Implemented a TCP network measurement tool and reproducible Mininet experiments for throughput and latency analysis.",
    tags: ["C++", "Sockets", "Mininet", "Networking"],
    date: "EECS 489 Project 1",
  },
  {
    title: "Adaptive Video Streaming via CDN",
    description:
      "Built an HTTP proxy that adapted DASH video bitrates based on per-client throughput estimation.",
    tags: ["C++", "HTTP", "DASH", "Load Balancing"],
    date: "EECS 489 Project 2",
  },
  {
    title: "Reliable Transport Protocol over UDP",
    description:
      "Designed a custom reliable transport protocol with sliding windows, CRC checks, retransmissions, and selective acknowledgments.",
    tags: ["C++", "UDP", "Reliable Transport"],
    date: "EECS 489 Project 3",
  },
  {
    title: "Static Router Implementation",
    description:
      "Built a static IP router with longest-prefix matching, ARP resolution, packet queuing, TTL handling, and ICMP responses.",
    tags: ["C++", "Routing", "ARP", "ICMP"],
    date: "EECS 489 Project 4",
  },
  {
    title: "Multi-Threaded Programming",
    description:
      "Built a concurrent pizza-delivery simulation using mutexes and condition variables under nondeterministic scheduling.",
    tags: ["C++", "Threads", "Synchronization"],
    date: "EECS 482 Project 1",
  },
  {
    title: "Insta485 Static Site Generator",
    description:
      "Created a Python static site generator that transforms templates, Markdown content, and config files into a social media site.",
    tags: ["Python", "Jinja2", "Static Sites"],
    date: "EECS 485 Project 1",
  },
  {
    title: "Server-Side Social Media Platform",
    description:
      "Developed an Instagram-style app with Flask, SQLite, authentication, posts, likes, comments, and following relationships.",
    tags: ["Flask", "SQLite", "HTML/CSS"],
    date: "EECS 485 Project 2",
  },
  {
    title: "Client-Side Dynamic Web Application",
    description:
      "Extended a server-rendered app into a React single-page experience with REST APIs, infinite scrolling, and live interactions.",
    tags: ["React", "JavaScript", "REST APIs"],
    date: "EECS 485 Project 3",
  },
  {
    title: "MapReduce Distributed Processing Framework",
    description:
      "Built a Python MapReduce framework with manager/worker processes, task scheduling, heartbeat monitoring, and failure handling.",
    tags: ["Python", "MapReduce", "Distributed Systems"],
    date: "EECS 485 Project 4",
  },
  {
    title: "Distributed Search Engine",
    description:
      "Developed a search pipeline with document parsing, inverted indexes, TF-IDF scoring, distributed indexing, and a Flask query UI.",
    tags: ["Python", "Flask", "Search", "TF-IDF"],
    date: "EECS 485 Project 5",
  },
  {
    title: "Go MapReduce Framework",
    description:
      "Implemented distributed MapReduce in Go with worker coordination, task scheduling, failure recovery, and intermediate partitioning.",
    tags: ["Go", "MapReduce", "Goroutines"],
    date: "EECS 491 Project 1",
  },
  {
    title: "Paxos-Based Distributed Key-Value Store",
    description:
      "Implemented Paxos consensus in Go for replicated state-machine key-value storage under failures and message reordering.",
    tags: ["Go", "Paxos", "Distributed Consensus"],
    date: "EECS 491 Project 3",
  },
  {
    title: "Sharded Distributed Key-Value Store",
    description:
      "Designed a sharded key-value store with Paxos replica groups, a ShardMaster, dynamic rebalancing, and data migration.",
    tags: ["Go", "Sharding", "Paxos", "Distributed Systems"],
    date: "EECS 491 Project 4",
  },
]
