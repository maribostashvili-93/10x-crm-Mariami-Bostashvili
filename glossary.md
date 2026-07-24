# 10X CRM Technical Glossary

This glossary explains the principal web-development terms used in the 10X CRM
project. Each entry includes an English usage sentence and a Georgian
explanation.

## 1. CRM — Customer Relationship Management

**English:** A CRM helps a business organize client information and track
customer relationships.

**ქართული:** მომხმარებელთან ურთიერთობის მართვის სისტემა, რომელიც აერთიანებს
კლიენტების მონაცემებს, სტატუსებს, აქტივობებსა და გაყიდვებთან დაკავშირებულ
ინფორმაციას.

## 2. Authentication

**English:** Authentication verifies a user's identity before granting access
to protected pages.

**ქართული:** ავთენტიფიკაცია ამოწმებს მომხმარებლის ვინაობას, ჩვეულებრივ
ელფოსტისა და პაროლის საშუალებით, და მხოლოდ წარმატებული შესვლის შემდეგ აძლევს
მას დაცულ გვერდებზე წვდომას.

## 3. Session

**English:** The active session keeps the user signed in while navigating
between application pages.

**ქართული:** სესია ინახავს ინფორმაციას ამჟამად ავტორიზებული მომხმარებლის
შესახებ და შესაძლებელს ხდის, რომ გვერდიდან გვერდზე გადასვლისას ხელახლა შესვლა
არ გახდეს საჭირო.

## 4. Validation

**English:** Validation rejects incomplete or incorrectly formatted form data.

**ქართული:** ვალიდაცია ამოწმებს შეყვანილი მონაცემების სისწორეს — მაგალითად,
ელფოსტის ფორმატს, ტელეფონის დასაშვებ სიმბოლოებს და სავალდებულო ველების
შევსებას.

## 5. CRUD

**English:** The clients page supports the complete CRUD lifecycle for customer
records.

**ქართული:** CRUD აერთიანებს მონაცემებზე შესრულებულ ოთხ ძირითად ოპერაციას:
შექმნას (Create), წაკითხვას (Read), განახლებას (Update) და წაშლას (Delete).

## 6. API — Application Programming Interface

**English:** The application uses an API to retrieve initial client data from
an external service.

**ქართული:** API არის წესებისა და მისამართების ერთობლიობა, რომლის დახმარებითაც
ერთი პროგრამა მეორე პროგრამისგან მონაცემებს იღებს ან მას მონაცემებს უგზავნის.

## 7. REST

**English:** DummyJSON exposes REST endpoints for working with client data over
HTTP.

**ქართული:** REST არის ვებ-სერვისის არქიტექტურული მიდგომა, სადაც რესურსებზე
მოქმედებები სრულდება სტანდარტული HTTP მოთხოვნებითა და მკაფიო მისამართებით.

## 8. Endpoint

**English:** An endpoint identifies the API address used for a specific
resource or operation.

**ქართული:** ენდფოინტი არის API-ის კონკრეტული URL მისამართი, რომელზეც პროგრამა
მონაცემის მისაღებად, დასამატებლად, შესაცვლელად ან წასაშლელად აგზავნის მოთხოვნას.

## 9. HTTP Method

**English:** GET retrieves data, while POST and DELETE describe different
server operations.

**ქართული:** HTTP მეთოდი განსაზღვრავს მოთხოვნის მიზანს: GET კითხულობს მონაცემს,
POST ამატებს მას, PUT ან PATCH აახლებს, ხოლო DELETE შლის.

## 10. JSON — JavaScript Object Notation

**English:** The API returns client records in JSON format.

**ქართული:** JSON არის ტექსტური მონაცემთა ფორმატი, რომელიც ინფორმაციას
გასაღებისა და მნიშვნელობის წყვილებად წარმოადგენს და ფართოდ გამოიყენება
ბრაუზერსა და სერვერს შორის მონაცემების გადასაცემად.

## 11. Local Storage

**English:** Local storage preserves CRM data after the browser page is
refreshed.

**ქართული:** `localStorage` არის ბრაუზერის მუდმივი საცავი, სადაც სტრიქონის
სახით შენახული მონაცემები გვერდის განახლებისა და ბრაუზერის დახურვის შემდეგაც
რჩება.

## 12. Persistence

**English:** Data persistence ensures that local client changes survive a page
reload.

**ქართული:** მონაცემთა მდგრადობა ნიშნავს, რომ შენახული ცვლილებები პროგრამის
მეხსიერებიდან არ ქრება და შემდეგი გახსნისას კვლავ ხელმისაწვდომია.

## 13. Unique Identifier

**English:** Every local client receives a unique identifier so that actions
target exactly one record.

**ქართული:** უნიკალური იდენტიფიკატორი არის ჩანაწერის განსხვავებული მნიშვნელობა,
რომელიც პროგრამას საშუალებას აძლევს სწორად იპოვოს, შეცვალოს ან წაშალოს მხოლოდ
ერთი კონკრეტული კლიენტი.

## 14. State

**English:** Application state represents the data currently displayed and
managed by the interface.

**ქართული:** მდგომარეობა (state) არის პროგრამის კონკრეტულ მომენტში არსებული
მონაცემების ერთობლიობა — მაგალითად, კლიენტების სია, აქტიური ფილტრი ან გახსნილი
მოდალური ფანჯარა.

## 15. Event Listener

**English:** An event listener runs a function when the user clicks a button or
submits a form.

**ქართული:** მოვლენის მსმენელი აკვირდება ბრაუზერში მომხდარ მოქმედებას, როგორიცაა
დაჭერა, ტექსტის შეყვანა ან ფორმის გაგზავნა, და შესაბამის ფუნქციას ასრულებს.

## 16. Asynchronous Operation

**English:** An asynchronous API request can finish without freezing the user
interface.

**ქართული:** ასინქრონული ოპერაცია პროგრამას საშუალებას აძლევს დაელოდოს ქსელურ
მოთხოვნას ან სხვა ხანგრძლივ პროცესს ისე, რომ ამ დროს ინტერფეისი არ გაიყინოს.

## 17. Responsive Design

**English:** Responsive design adapts the CRM layout to mobile, tablet, and
desktop screen sizes.

**ქართული:** რესპონსიული დიზაინი ეკრანის ზომის მიხედვით ცვლის განლაგებას,
ზომებსა და ნავიგაციას, რათა ინტერფეისი სხვადასხვა მოწყობილობაზე გამოსაყენებელი
დარჩეს.

## 18. Accessibility

**English:** Accessibility features help keyboard and assistive-technology
users operate the application.

**ქართული:** ხელმისაწვდომობა მოიცავს მიდგომებს, რომლებიც პროდუქტს სხვადასხვა
შესაძლებლობის მქონე ადამიანებისთვის გამოსაყენებელს ხდის — მათ შორის
კლავიატურით მართვას, ფოკუსის სწორ ქცევასა და ეკრანის წამკითხველის მხარდაჭერას.

## 19. Modal Dialog

**English:** A modal dialog temporarily focuses the user on a form or
confirmation task.

**ქართული:** მოდალური ფანჯარა არის ძირითადი გვერდის ზემოთ გახსნილი დროებითი
ინტერფეისი, რომელიც მომხმარებლის ყურადღებას კონკრეტულ მოქმედებაზე ამახვილებს.

## 20. CSV — Comma-Separated Values

**English:** CSV export converts the client list into a spreadsheet-compatible
text file.

**ქართული:** CSV არის ცხრილური მონაცემების ტექსტური ფორმატი, სადაც თითოეული
სტრიქონი ჩანაწერს წარმოადგენს, ხოლო სვეტები ერთმანეთისგან გამყოფი სიმბოლოთი
არის გამოყოფილი.

