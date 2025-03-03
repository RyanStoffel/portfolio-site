import { ProjectType } from "@/components/ProjectCard";

export const projects: ProjectType[] = [
  {
    id: "mail-warden",
    title: "Mail-Warden",
    description:
      "A comprehensive email security tool with phishing detection, attachment scanning, and encrypted communications.",
    imageUrl: "/mailwarden.png",
    github: "https://github.com/RyanStoffel/mail-warden",
    technologies: ["Python", "Cryptography", "Security", "UI Design"],
    featured: true,
    longDescription: `
      Mail-Warden is a comprehensive email security tool that I developed for my OS & Networking class at California Baptist University. This application helps users protect themselves against common email threats through three main security components:
      
      Key features include:
      - Phishing Detection: Analyzes email content for suspicious keywords, detects lookalike domains, identifies sender spoofing attempts, and alerts when sensitive information is requested
      - Attachment Scanner: Scans email attachments for potential threats, detects dangerous file types and extensions, identifies file type/extension mismatches, and checks for known malware signatures
      - Encryption Manager: Provides public key cryptography for secure communications, allows password-protected emails for recipients without keys, and securely manages contact keys
      
      This project showcases my understanding of cybersecurity principles, cryptography implementation, and creating user-friendly security tools. I built the application using Python with a PyQt5 interface and implemented several security libraries for the different components.
      
      The application was thoroughly tested with unit tests for each security component, ensuring reliable protection for users' email communications.
    `,
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe",
    description:
      "A console-based implementation of the classic Tic Tac Toe game written in Java.",
    imageUrl: "/tictactoe.png",
    github: "https://github.com/RyanStoffel/TicTacToe",
    technologies: ["Java", "Console Application", "Game Development"],
    longDescription: `
      This is a console-based implementation of the classic Tic Tac Toe game written in Java. The project was a small weekend project inspired by @ForrestKnight on YouTube, where I decided to recreate his idea with my own implementation.
      
      Key features include:
      - Console-based user interface with a visual representation of the game board
      - Input validation to prevent placing marks in already occupied cells
      - Win detection for rows, columns, and diagonals
      - Option to play multiple games without restarting the application
      - Clean, readable code in just about 100 lines
      
      Although simple, this project demonstrates fundamental programming concepts such as 2D arrays, input validation, game state management, and user interaction through a console interface.
    `,
  },
  {
    id: "baby-names",
    title: "Baby Names",
    description:
      "A program that ranks the popularity of a certain name by decade. Made with Java.",
    imageUrl: "/project1.png",
    github:
      "https://github.com/egr222-software-engineering-fall-2024/hw3-RyanStoffel",
    technologies: ["Java", "Data Analysis", "UI Design"],
    longDescription: `
      This application analyzes baby name popularity trends across different decades. Users can search for specific names and see how their popularity has changed over time. The program processes large datasets of baby names from the US census to provide accurate rankings.
      
      Key features include:
      - Name popularity rankings by decade from the 1900s to the 2020s
      - Data visualization with trend graphs
      - Comparison of multiple names simultaneously
      - Gender-based analysis
      
      This project demonstrates my ability to work with data processing, UI design, and implementing efficient algorithms in Java.
    `,
  },
  {
    id: "snake-game",
    title: "Snake",
    description:
      "The classic Snake Game, keeps track of score, random apple position. Made with Java, and SwingUI.",
    imageUrl: "/project2.png",
    github: "https://github.com/RyanStoffel/SnakeGameJava",
    liveDemo: "https://example.com/snake-demo", // Add if you have one
    technologies: ["Java", "Swing UI", "Game Development"],
    longDescription: `
      A recreation of the classic Snake game using Java and Swing UI. The game features smooth controls, score tracking, and progressively increasing difficulty.
      
      Key features include:
      - Smooth snake movement with keyboard controls
      - Randomized food placement
      - Score tracking and high score system
      - Game speed increases as the snake grows
      - Collision detection with walls and self
      
      This project demonstrates my understanding of game development principles, UI design, and Java programming skills.
    `,
  },
  {
    id: "linked-list-demo",
    title: "Singly Linked List Demo",
    description:
      "A program that demonstrates all the operations available with a Singly Linked List. Made with C++.",
    imageUrl: "/project3.png",
    github: "https://github.com/RyanStoffel/EGR227-Lab3",
    technologies: ["C++", "Data Structures", "Algorithms"],
    longDescription: `
      This educational tool demonstrates the implementation and operations of a Singly Linked List data structure in C++. It provides a visual representation of how linked lists work and allows users to perform various operations to understand the underlying concepts.
      
      Features include:
      - Insert, delete, and search operations
      - Traversal and node counting
      - Finding middle elements
      - Detecting loops in the list
      - Reversing the linked list
      - Memory management demonstrations
      
      This project showcases my understanding of complex data structures, memory management in C++, and algorithm implementation.
    `,
  },
];
