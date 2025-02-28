import { ProjectType } from "@/components/ProjectCard";

export const projects: ProjectType[] = [
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

export function getProjectById(id: string): ProjectType | undefined {
  return projects.find((project) => project.id === id);
}

export function getAllProjectIds(): string[] {
  return projects.map((project) => project.id);
}
