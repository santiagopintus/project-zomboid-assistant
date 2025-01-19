# Overview

This web app is designed as a comprehensive guide for players of _Project Zomboid_, aimed at enhancing their gameplay experience. The app provides tools such as a crafting guide, a survival task list, and a weapon comparison interface. These features help players make informed decisions and plan their strategies efficiently. As a software engineer, this project allowed me to deepen my understanding of React, state management, and creating dynamic user experiences, while also working on data organization and interactivity.

To run the app locally, clone the repository, install the dependencies using `npm install`, and start the development server with `npm run dev`. Once the server is running, open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

The purpose of this software is to create an interactive, user-friendly application that organizes complex game data in an intuitive way, helping players easily access critical information and improve their gameplay strategies.

[Software Demo Video](https://youtu.be/7ULTY-dsd6s)

# Web Pages

1. **Home Page**  
   The main landing page introduces the app with a brief description of its features. It provides navigation links to the other sections: Crafting Guide, Weapon Comparison, and Survival Task List.

2. **Weapon Comparison Page**  
   Features an interactive table where users can filter, sort, and compare various weapons based on their statistics, such as damage, range, and durability. The data is dynamically populated from a JSON dataset and allows for live updates based on user interactions.

3. **Survival Task List Page**  
   Allows users to create and manage customizable survival checklists. Users can create their own tasks, set priorities, and check off completed items. The page uses local storage to persist data between sessions.

4. **Crafting Guide Page**  
   Displays a searchable and filterable list of crafting recipes. Users can input materials they have on hand, and the guide dynamically highlights recipes they can create. Data is dynamically fetched and updated based on user input.

# Development Environment

- **Development Tools:** VS Code, Git, npm
- **Programming Language:** Typescript, JavaScript
- **Framework:** React.js
- **Styling:** Sass preprocessor
- **Build Tool:** Webpack
- **Other Tools:** ESLint for code quality, Prettier for formatting

# Useful Websites

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Sass Guide](https://sass-lang.com/guide)
- [Project Zomboid Wiki](https://pzwiki.net/)

# Future Work

- **Improve Weapon Comparison:** Add visual charts to compare weapon stats and provide better filtering options.
- **Expand Crafting Guide:** Integrate more advanced recipes and allow users to input custom recipes.
- **Enhance Survival Task List:** Enable sharing of task lists with other users or exporting them to a printable format.
- **Data Persistence:** Connect to a backend database to store user data for cross-device syncing.
- **User Authentication:** Implement user accounts to save preferences and data across devices.
