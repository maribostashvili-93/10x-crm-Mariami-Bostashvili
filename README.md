# 10X CRM

10X CRM is a lightweight customer relationship management application for sales managers. It provides a clear workspace for managing clients, tracking deal progress, monitoring sales performance, and maintaining a personal account.

The project is built with vanilla HTML, CSS, and JavaScript. It does not require a framework, build tool, or backend server. Application data is stored in the browser with `localStorage`, while the initial client list is loaded from the DummyJSON API.

## Features

- User registration and login
- Protected pages and persistent browser sessions
- Automatically created demo account
- Dashboard with client totals, active deals, won revenue, and weekly activity
- Sales pipeline overview by client status
- Recent-client overview
- Client search, filtering, and sorting
- Add and delete clients
- Change deal status between Lead, Contacted, Won, and Lost
- Client details, notes, and reminder notifications
- Profile and company information management
- Password updates
- Light and dark themes
- Responsive glass-style interface
- Local persistence for users, sessions, clients, and theme preferences

## Demo Account

Use these credentials to explore the application without creating an account:

```text
Email: demo@crm.com
Password: Demo123!
```

The demo account is created automatically when the application is opened for the first time.

## Pages

| Page | Description |
| --- | --- |
| `index.html` | Login page |
| `signup.html` | Account registration |
| `dashboard.html` | Sales statistics, pipeline, and recent clients |
| `clients.html` | Client management, search, filters, notes, and statuses |
| `profile.html` | Account details and password management |

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Browser Local Storage API
- Fetch API
- DummyJSON Users API
- Three.js for visual background effects

## Project Structure

```text
10X-CRM-MARIAMI/
|-- css/
|   |-- app.css
|   |-- glass.css
|   `-- responsive.css
|-- js/
|   |-- storage.js
|   |-- ui.js
|   |-- guard.js
|   |-- data.js
|   |-- login.js
|   |-- signup.js
|   |-- dashboard.js
|   |-- clients.js
|   `-- profile.js
|-- index.html
|-- signup.html
|-- dashboard.html
|-- clients.html
|-- profile.html
`-- README.md
```

The JavaScript files are separated by responsibility:

- `storage.js` manages users, sessions, clients, theme settings, and demo data.
- `ui.js` contains shared interface helpers such as toast messages, errors, and money formatting.
- `guard.js` protects private pages and initializes navigation, themes, and logout behavior.
- `data.js` loads client data and calculates dashboard statistics.
- Page-specific files handle login, registration, dashboard rendering, client management, and profile updates.

## Running Locally

No installation or build step is required.

1. Clone or download the repository.
2. Open the project folder.
3. Start a local static server, for example with the VS Code Live Server extension.
4. Open `index.html` in the browser.

Opening the HTML file directly also works in most browsers, but a local server is recommended because the application fetches sample data from an external API.

## Data Storage

The application stores its data in the current browser. Accounts and client changes are therefore local to that browser and device. Clearing site data or Local Storage resets the saved application state.

On the first client-data load, the application requests 30 sample users from `https://dummyjson.com/users` and converts them into CRM client records. Later visits use the saved Local Storage data.

## Notes

This is a frontend educational project. Authentication and password storage are implemented in the browser for demonstration purposes and should not be used as production security architecture.
