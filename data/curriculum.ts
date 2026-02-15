import { Curriculum } from '../types';

export const fullCurriculum: Curriculum = {
  phases: [
    {
      id: "phase-1",
      title: "Phase 1: Digital Foundations",
      goal: "Remove fear of computers and understand the machine.",
      weeks: [
        {
          id: "week-1",
          title: "Week 1: Understanding the Machine",
          lessons: [
            {
              id: "lesson-1",
              title: "What Is a Computer?",
              description: "Input → Processing → Output. The core cycle.",
              content: "A computer isn't magic. It's a machine that takes Input (keyboard, mouse), Processes it (CPU + RAM), and gives Output (Screen, Sound). We will cover the role of the CPU (the brain), RAM (short-term memory), and Storage (long-term memory).",
              videoId: "AkFi90lZmXA", // Swapped to Crash Course Computer Science #1 (Guaranteed Embed Permissions)
              activity: "Analyze everyday systems: ATM machine, POS terminal, smartphone. Identify the Input, Process, and Output for each.",
              duration: "1.5 hrs",
              blogLink: "https://edu.gcfglobal.org/en/computerbasics/what-is-a-computer/1/",
              blogTitle: "GCFGlobal: What is a Computer?"
            },
            {
              id: "lesson-2",
              title: "Hardware vs Software",
              description: "Physical components vs. Instructions.",
              content: "Hardware is what you can kick; Software is what you can curse at. We distinguish between Applications (User tools), System Software (OS), and Drivers (Translators).",
              videoId: "8UkK4RCQrjM", // Mapleson Digital: Hardware vs Software
              activity: "Open your laptop settings and identify 3 pieces of hardware (e.g., Processor name) and 3 installed applications.",
              duration: "1.5 hrs",
              blogLink: "https://www.geeksforgeeks.org/difference-between-hardware-and-software/",
              blogTitle: "GeeksForGeeks: Hardware vs Software"
            },
            {
              id: "lesson-3",
              title: "Running a Program",
              description: "What happens when you double-click?",
              content: "We demystify the 'double-click'. Learn about executable files, how the OS loads code from HDD to RAM, and how the CPU starts executing instructions.",
              videoId: "DKGZlaPbYx8", // CrashCourse: Instructions & Programs
              activity: "Open Task Manager (Windows) or Activity Monitor (Mac) and watch what happens to RAM/CPU when you open a heavy app.",
              duration: "1.5 hrs",
              blogLink: "https://www.howtogeek.com/136427/htg-explains-what-actually-happens-when-you-launch-a-program/",
              blogTitle: "HowToGeek: What Happens When You Launch an App"
            }
          ]
        },
        {
          id: "week-2",
          title: "Week 2: Operating Systems & Files",
          lessons: [
            {
              id: "lesson-4",
              title: "Operating Systems",
              description: "Windows, Mac, Linux and their roles.",
              content: "The OS is the boss. It manages hardware resources for software. We explore processes, background services, and the kernel.",
              videoId: "26QPDBe-TQ8", // GCFLearnFree: What is an OS
              activity: "Identify your OS version. Find a background process running on your machine that you didn't open.",
              duration: "1.5 hrs",
              blogLink: "https://edu.gcfglobal.org/en/computerbasics/understanding-operating-systems/1/",
              blogTitle: "GCFGlobal: Understanding Operating Systems"
            },
            {
              id: "lesson-5",
              title: "Files, Folders, and Paths",
              description: "The digital filing cabinet.",
              content: "Understanding the tree structure. Absolute paths (C:/Users/You...) vs Relative paths. File extensions determine how the OS treats a file.",
              videoId: "42iQKuQodW4", // Intro to File Systems
              activity: "Create a nested folder structure. Create a text file, rename its extension to .html, and see how the icon changes.",
              duration: "2 hrs",
              blogLink: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files",
              blogTitle: "MDN: Dealing with Files"
            },
            {
              id: "lesson-7", 
              title: "The Terminal / Command Line",
              description: "The hacker screen explained.",
              content: "Don't fear the black screen. It is just a text-based way to talk to the OS. Commands: cd (change directory), ls (list), mkdir (make folder).",
              videoId: "5XgBd6rjuDQ", // Corey Schafer: Terminal/Bash
              activity: "Open Terminal/PowerShell. Navigate to your Desktop. Create a folder named 'FutureDev' using only the command line.",
              duration: "2 hrs",
              blogLink: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line",
              blogTitle: "MDN: Command Line Crash Course"
            },
            {
              id: "lesson-8",
              title: "The Internet Explained",
              description: "How the web actually travels.",
              content: "Server vs Client model. IP Addresses (Digital coordinates), Domain Names (DNS phonebook), and what the browser actually does.",
              videoId: "7_LPdttKXPc", // CrashCourse: The Internet
              activity: "Type 'ping google.com' in your terminal to see the IP address of Google's server.",
              duration: "1.5 hrs",
              blogLink: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work",
              blogTitle: "MDN: How does the Internet work?"
            }
          ]
        }
      ]
    },
    {
      id: "phase-2",
      title: "Phase 2: Thinking Like a Programmer",
      goal: "Teach logic before coding.",
      weeks: [
        {
          id: "week-3",
          title: "Week 3: Algorithmic Thinking",
          lessons: [
            {
              id: "lesson-9",
              title: "What Is an Algorithm?",
              description: "A recipe for solving problems.",
              content: "An algorithm is just a step-by-step instruction set. Computers need zero ambiguity. If you don't say it, they don't do it.",
              videoId: "Da5TOZY-HMw", // TED-Ed: What is an algorithm
              activity: "Write strict instructions for 'Making a Cup of Tea'. Hand it to a friend (or imagine a robot) following it literally. Where does it fail?",
              duration: "1.5 hrs",
              blogLink: "https://www.bbc.co.uk/bitesize/guides/z3sgjxs/revision/1",
              blogTitle: "BBC Bitesize: What is an algorithm?"
            },
            {
              id: "lesson-10",
              title: "Flowcharts",
              description: "Visualizing logic.",
              content: "Standard shapes: Ovals for Start/End, Diamonds for Decisions (Yes/No), Rectangles for Processes. Loops are just arrows going back up.",
              videoId: "S5i_diK1Z-A", // Tech Ed: Flowcharts
              activity: "Draw a physical flowchart for an ATM withdrawal process, including error states (Wrong PIN, Insufficient Funds).",
              duration: "1.5 hrs",
              blogLink: "https://www.lucidchart.com/pages/flowchart-symbols-meaning-explained",
              blogTitle: "Lucidchart: Flowchart Symbols Explained"
            },
            {
              id: "lesson-11",
              title: "Decomposition",
              description: "Breaking big problems into small ones.",
              content: "You can't 'build an app'. You CAN 'draw a button', then 'make button click', then 'send data'. That is decomposition.",
              videoId: "Fq_205u5hMw", // BBC Learning: Decomposition
              activity: "Decompose a 'Food Delivery App' into 5 major components, and break one component into 3 sub-steps.",
              duration: "1.5 hrs",
              blogLink: "https://www.bbc.co.uk/bitesize/guides/zqqfyrd/revision/1",
              blogTitle: "BBC Bitesize: Decomposition"
            }
          ]
        },
        {
          id: "week-4",
          title: "Week 4: Logic & Data",
          lessons: [
            {
              id: "lesson-12",
              title: "Variables",
              description: "Labeled boxes for data.",
              content: "A variable is a container. It has a name (Label) and a value (Content). RAM stores these boxes.",
              videoId: "v2yG8-b1Fq4", // Algebra to Code variables
              activity: "Write on paper: name='John', age=25. If age = age + 1, what is in the box now?",
              duration: "1.5 hrs",
              blogLink: "https://www.w3schools.com/python/python_variables.asp",
              blogTitle: "W3Schools: Python Variables"
            },
            {
              id: "lesson-14",
              title: "Conditions (If/Else)",
              description: "Forking the path.",
              content: "Logic depends on 'TRUE' or 'FALSE'. If (Rainy) -> Take Umbrella. Else -> Sunglasses. This is the heart of software decision making.",
              videoId: "m2Ux2PnJe6E", // Code.org: If/Else
              activity: "Write pseudocode for a Login System (Check username, then Check password, handle errors).",
              duration: "1.5 hrs",
              blogLink: "https://realpython.com/python-conditional-statements/",
              blogTitle: "RealPython: Conditional Statements"
            },
            {
              id: "lesson-15",
              title: "Loops",
              description: " The power of repetition.",
              content: "Computers are great at boring tasks. Loops let us run code 1000 times without writing it 1000 times.",
              videoId: "wxds6MAtUQ0", // Code.org: Loops
              activity: "Write a logic flow to count all students in a class until the list is empty.",
              duration: "1.5 hrs",
              blogLink: "https://realpython.com/python-while-loop/",
              blogTitle: "RealPython: While Loops"
            }
          ]
        }
      ]
    },
    {
      id: "phase-3",
      title: "Phase 3: Programming (Python)",
      goal: "Writing actual code.",
      weeks: [
        {
          id: "week-5",
          title: "Week 5: First Code",
          lessons: [
            {
              id: "lesson-16",
              title: "Hello World",
              description: "Installing Python & First Script.",
              content: "We install Python and write `print('Hello World')`. We explain the Interpreter: the translator that runs your code line by line.",
              videoId: "kqtD5dpn9C8", // Programming with Mosh: Python for Beginners (Clip)
              activity: "Install Python. Open VS Code. Make a file hello.py. Run it.",
              duration: "2 hrs",
              blogLink: "https://realpython.com/python-first-steps/",
              blogTitle: "RealPython: First Steps"
            },
            {
              id: "lesson-17",
              title: "Input & Output",
              description: "Talking to the user.",
              content: "Using `input()` to get data and `print()` to show it. The program pauses and waits for the human.",
              videoId: "Zp801y_55EI", // Input in Python
              activity: "Build a Greeting Program: Ask for Name, ask for Color, print a sentence combining them.",
              duration: "1.5 hrs",
              blogLink: "https://www.w3schools.com/python/python_user_input.asp",
              blogTitle: "W3Schools: User Input"
            }
          ]
        },
        {
          id: "week-6",
          title: "Week 6: Logic in Code",
          lessons: [
            {
              id: "lesson-19",
              title: "Python Conditions",
              description: "If, Elif, Else syntax.",
              content: "Translating our flowcharts into Python syntax. Indentation matters in Python!",
              videoId: "Zp5MuPOtsSY", // Python Conditions
              activity: "Build an Age Checker: If age < 18 print 'Child', else print 'Adult'.",
              duration: "2 hrs",
              blogLink: "https://www.w3schools.com/python/python_conditions.asp",
              blogTitle: "W3Schools: Python Conditions"
            },
            {
              id: "lesson-20",
              title: "Python Loops",
              description: "While and For loops.",
              content: "Using `for i in range()` and `while running == True`. Infinite loops and how to break them.",
              videoId: "94UHCEmprCY", // Python Loops
              activity: "Build a Number Guessing Game. The computer picks a number, you guess until you get it right.",
              duration: "2.5 hrs",
              blogLink: "https://realpython.com/python-for-loop/",
              blogTitle: "RealPython: Python For Loops"
            }
          ]
        },
        {
          id: "week-7",
          title: "Week 7: Debugging",
          lessons: [
            {
              id: "lesson-22",
              title: "Errors are Friends",
              description: "Syntax vs Runtime vs Logic errors.",
              content: "Red text isn't a failure, it's a clue. Syntax = Grammar mistake. Runtime = Crash. Logic = Wrong answer but no crash.",
              videoId: "9H7o0XzF3i0", // Python Exceptions
              activity: "Take a working program, remove a parenthesis, run it. Read the error message closely.",
              duration: "2 hrs",
              blogLink: "https://realpython.com/python-traceback/",
              blogTitle: "RealPython: Understanding Tracebacks"
            },
            {
              id: "lesson-24",
              title: "Problem Solving",
              description: "How to use Google and Docs.",
              content: "No programmer memorizes everything. We teach you how to search for 'python list index out of range' and read StackOverflow answers.",
              videoId: "cDA3_5982h8", // How to think like a programmer
              activity: "Solve a bug you've never seen before by searching the error message on Google.",
              duration: "2 hrs",
              blogLink: "https://www.freecodecamp.org/news/how-to-solve-programming-problems/",
              blogTitle: "FreeCodeCamp: How to solve problems"
            }
          ]
        }
      ]
    },
    {
      id: "phase-4",
      title: "Phase 4: Software Reality",
      goal: "Understanding the ecosystem.",
      weeks: [
        {
          id: "week-8",
          title: "Week 8: The Ecosystem",
          lessons: [
            {
              id: "lesson-26",
              title: "APIs",
              description: "Software talking to software.",
              content: "Application Programming Interface. It's like a waiter in a restaurant taking your order to the kitchen (server) and bringing food back.",
              videoId: "s7wmiS2mSxs", // MuleSoft: What is an API
              activity: "Use a free browser-based API tool (like Thunder Client or Browser) to fetch data from pokeapi.co.",
              duration: "2 hrs",
              blogLink: "https://www.freecodecamp.org/news/what-is-an-api-in-english-please/",
              blogTitle: "FreeCodeCamp: What is an API?"
            },
            {
              id: "lesson-27",
              title: "Intro to Git & GitHub",
              description: "The time machine for code.",
              content: "Version control allows you to save 'checkpoints'. GitHub is where we store these checkpoints online.",
              videoId: "USjZcfj8yxE", // Git & GitHub Crash Course
              activity: "Initialize a repo. Commit a file. Push it to GitHub. Share the link.",
              duration: "2.5 hrs",
              blogLink: "https://www.atlassian.com/git/tutorials/what-is-git",
              blogTitle: "Atlassian: What is Git?"
            }
          ]
        },
        {
          id: "week-9",
          title: "Week 9: The Web",
          lessons: [
            {
              id: "lesson-29",
              title: "HTML & CSS",
              description: "The skeleton and the skin.",
              content: "HTML defines structure (Headings, Paragraphs). CSS defines style (Color, Layout). They are the building blocks of the web.",
              videoId: "qz0aGYrrlhU", // HTML CSS Crash Course
              activity: "Build a personal profile page with a photo, bio, and links to your GitHub.",
              duration: "2.5 hrs",
              blogLink: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web",
              blogTitle: "MDN: Getting started with the Web"
            }
          ]
        }
      ]
    },
    {
      id: "phase-5",
      title: "Phase 5: Real Project",
      goal: "Build a To-Do List Web App.",
      weeks: [
        {
          id: "week-10",
          title: "Week 10-11: To-Do App",
          lessons: [
            {
              id: "lesson-32",
              title: "Project Setup & Logic",
              description: "Combining Python/JS logic with HTML.",
              content: "We will structure data for a To-Do list. Add Item, Delete Item, Mark Done. We plan the features before writing code.",
              videoId: "pEOcr2t03oM", // To Do List Project Tutorial (Generic)
              activity: "Build the 'Add Item' function. Ensure the list updates.",
              duration: "4 hrs",
              blogLink: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_todo_list_beginning",
              blogTitle: "MDN: Structure of a Todo List"
            }
          ]
        }
      ]
    },
    {
      id: "phase-6",
      title: "Phase 6: AI & The Future",
      goal: "Using LLMs correctly.",
      weeks: [
        {
          id: "week-12",
          title: "Week 12: AI Mastery",
          lessons: [
            {
              id: "lesson-34",
              title: "What is an LLM?",
              description: "Prediction engines, not magic.",
              content: "Large Language Models predict the next word based on probability. They can hallucinate. They are tools, not replacements.",
              videoId: "zjkBMFhNj_g", // Intro to LLMs
              activity: "Ask ChatGPT a technical question. Verify the answer by running the code. Does it work?",
              duration: "1.5 hrs",
              blogLink: "https://www.cloudflare.com/learning/ai/what-is-large-language-model/",
              blogTitle: "Cloudflare: What is an LLM?"
            },
            {
              id: "lesson-37",
              title: "How NOT to use AI",
              description: "The rules of engagement.",
              content: "Don't blindly copy-paste. If you can't explain it, you don't know it. Use AI to explain errors, not write the whole app.",
              videoId: "jC4v5AS4RIM", // AI for Developers
              activity: "Use AI to explain a complex error message from your To-Do app. Then fix it yourself.",
              duration: "1.5 hrs",
              blogLink: "https://stackoverflow.blog/2023/06/07/generative-ai-for-developers/",
              blogTitle: "StackOverflow: Generative AI for Devs"
            }
          ]
        }
      ]
    }
  ]
};