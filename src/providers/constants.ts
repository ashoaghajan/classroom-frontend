import { Subject } from "@/types";

export const API_URL = "https://api.fake-rest.refine.dev";

// Mock subject data for three university courses
export const mockSubjects: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "Fundamental concepts of programming, algorithms, and data structures. Students learn problem-solving techniques and basic programming principles using modern programming languages.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "MATH201",
    name: "Linear Algebra",
    department: "Mathematics",
    description:
      "Comprehensive study of vector spaces, matrices, linear transformations, and eigenvalues. Essential foundation for advanced mathematics and computer applications.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "PHYS150",
    name: "Classical Mechanics",
    department: "Physics",
    description:
      "Study of motion, forces, energy, and momentum. Covers Newton's laws, conservation principles, and rotational dynamics with practical applications.",
    createdAt: new Date().toISOString(),
  },
];
