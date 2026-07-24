# 10X CRM

A browser-based customer relationship management application built with
JavaScript. It provides a focused workspace for managing clients, tracking
sales activity, monitoring key metrics, and maintaining a user profile without
requiring a backend service.

## About

10X CRM is an educational frontend project created around a practical CRM
workflow. The application combines authentication, client management,
dashboard analytics, reminders, spreadsheet import, and CSV export in a
responsive single-page experience.

The project uses browser storage for persistence and DummyJSON as an external
API source. API records and locally created records are kept distinguishable so
that update and deletion operations always target the correct client.

## Live Demo

The production deployment URL has not been published yet.

> Before submission, deploy the project and replace this note with the public
> application URL.

## Features

### Authentication

- User registration with field-level validation
- Email and password sign-in
- Persistent browser session
- Protected application pages
- Sign-out and account deletion

### Client Management

- View clients in a searchable and filterable table
- Create, inspect, edit, and delete client records
- Unique local identifiers for safely managing duplicate API identifiers
- Email validation restricted to a valid Latin-character address format
- Phone input sanitization and phone-number validation
- Status, source, owner, and date-based filtering
- Pagination and results summary
- Bulk selection and deletion

### Import and Export

- Import client data from `.xlsx` and `.xls` workbooks
- Process records from every worksheet
- Validate file type, file size, row count, and required values
- Review imported rows and validation errors before confirmation
- Export client data as a UTF-8 CSV file compatible with Excel
- Protect exported values from spreadsheet-formula injection

### Dashboard and Productivity

- Summary cards for client and revenue metrics
- Client status and source visualizations
- Recent-client activity
- Persistent reminders with scheduled browser notifications
- Cross-tab synchronization for client changes

### Profile and Preferences

- Update personal details
- Change profile image
- Change account password
- Select the preferred application language
- Reset application data with rollback protection
- Permanently delete the current account

### User Experience

- Responsive layouts for desktop, tablet, and mobile screens
- Keyboard-accessible dialogs
- Focus trapping and focus restoration in modal windows
- Escape-key dialog dismissal
- ARIA labels and live status announcements
- Reduced-motion support
- Light and dark theme support

## Technology Stack

| Area | Technology |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS3 |
| Application logic | Vanilla JavaScript |
| Data persistence | Web Storage API |
| Remote data | DummyJSON REST API |
| Spreadsheet parsing | SheetJS |
| Visual effects | Three.js |
| Icons | Font Awesome |
| Typography | Google Fonts |

No frontend framework, build system, or package installation is required.

## Application Pages

| Page | Purpose |
| --- | --- |
| `index.html` | Sign-in and registration |
| `dashboard.html` | Metrics, charts, activity, and reminders |
| `clients.html` | Client CRUD, filters, import, and export |
| `client-details.html` | Detailed client information |
| `profile.html` | Account settings and preferences |

## Architecture

The project follows a page-based modular structure:

```text
10X-CRM-MARIAMI/
├── index.html
├── dashboard.html
├── clients.html
├── client-details.html
├── profile.html
├── css/
│   └── style.css
├── js/
│   ├── auth.js
│   ├── clients.js
│   ├── dashboard.js
│   ├── profile.js
│   ├── storage.js
│   ├── api.js
│   ├── lang.js
│   └── ...
├── images/
├── glossary.md
└── README.md
```

Shared behavior is separated into JavaScript modules for authentication,
storage, API communication, navigation, localization, notifications, and
page-specific functionality.

## Data and API Design

Application state is persisted in `localStorage`, including:

- registered users and the active session;
- local and API-backed clients;
- user preferences and profile data;
- reminders and application state.

DummyJSON supplies initial client data. Network failures are handled without
discarding the last valid local state. Locally created clients receive stable
unique identifiers, while their optional remote identifiers are stored
separately.

## Spreadsheet Import

Supported file types:

- `.xlsx`
- `.xls`

Recommended column names:

| Column | Required | Example |
| --- | --- | --- |
| `name` | Yes | `Nino Beridze` |
| `email` | Yes | `nino@example.com` |
| `phone` | No | `+995 555 12 34 56` |
| `company` | No | `Acme Georgia` |
| `status` | No | `Lead` |
| `source` | No | `Website` |
| `owner` | No | `Mariami` |

The importer also recognizes supported Georgian column aliases. Invalid rows
are reported before data is saved. Files are limited to 2 MB and 5,000 rows.

## How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/maribostashvili-93/10x-crm-Mariami-Bostashvili.git
   ```

2. Enter the project directory:

   ```bash
   cd 10x-crm-Mariami-Bostashvili
   ```

3. Start a local web server:

   ```bash
   npx serve .
   ```

4. Open the address displayed in the terminal.

Opening `index.html` directly may work for basic use, but a local server is
recommended for consistent browser behavior and external resource loading.

## Test Account

No fixed credentials are required. Create a new account from the registration
form and use the same email address and password to sign in.

For a quick manual check:

```text
Name: Demo User
Email: demo@example.com
Password: Demo123!
```

These credentials become valid only after registering them in the current
browser.

## Quality Checklist

Before release, verify the following flows in a modern browser:

- registration, sign-in, session restoration, and sign-out;
- email and phone validation;
- client creation, editing, deletion, and duplicate-identifier handling;
- filtering, searching, pagination, and bulk actions;
- multi-sheet Excel import and CSV export;
- page refresh and cross-tab persistence;
- keyboard navigation and modal focus behavior;
- responsive layouts at mobile, tablet, and desktop widths.

## Known Limitations

- Data is stored per browser and is not synchronized through a real backend.
- Clearing browser storage removes locally persisted accounts and CRM data.
- External API records depend on network availability.
- Browser notifications require user permission.
- A public deployment URL is not currently included.

## Documentation

- [Technical glossary](glossary.md)
- [Glass interface implementation notes](GLASS-MARKUP.md)

## Credits

Developed by **Mariami Bostashvili** as part of the 10X CRM frontend project.

- Repository:
  [github.com/maribostashvili-93/10x-crm-Mariami-Bostashvili](https://github.com/maribostashvili-93/10x-crm-Mariami-Bostashvili)
- Data API: [DummyJSON](https://dummyjson.com/)
- Spreadsheet library: [SheetJS](https://sheetjs.com/)
- 3D library: [Three.js](https://threejs.org/)
