# Why ReactJS? 
  - Single Page Web Application
  - Client Side rendering
  - Simplicity and Familiarity
  - Static site without SSR (Server Side Rendering)

# Components
  - 3 main components: NavBar, SideBar and Dashboard
  - Styling: SCSS
  - Icons and Table: Material UI
  - Bar charts and Circular Bar charts: chart.js
  - API call: axios
  - Data distribution in DOM Tree: Using context API
  - Loader from MUI is added before data fetching

# API calls
  - 2 dummy APIs are created using _mockapi.io_
    1. Jobs data (API 1)
       - 3 types of jobs are there with number of vacancies and total jobs.
       - Total jobs: Jobs available
       - Vacancies: Jobs posted
    2. Candidates data (API 2)
       - Total 100 candidates are there each are mapped with particular job via id
       - Another Data is created out of this with job title for Table
       - Fields: Name, Email, Ranking, Date of Application, Job ID
  - Using these 2 APIs everything is handled and made dynamic.

# Hooks
  - useContext(): For API data distribution
  - useState(): State Management
  - useEffect(): API calls and data creation
  - useMemo(): For calculations which are not required to render each time there is change in component
