# Prompt: "Caramel Sheets" – Offline Smart Excel App (Single HTML File)

> Copy everything below the line and paste it into Claude.

---

You are a senior front-end developer and a Microsoft Excel expert who has spent years building reports for sales teams. Build me a **complete, working, offline HTML app** called **"Caramel Sheets"**.

## 1. Who will use it
- Sales staff and managers who **do not know Excel formulas**.
- They will type requests in **plain English** (for example: "make a pivot of sales by region and month"), and the app must do the work for them.
- Use **simple words everywhere** in the interface. No technical terms. Every button gets a short tooltip that explains what it does in one sentence.

## 2. Technical rules (very important)
1. Deliver **one single file: `index.html`** with all HTML, CSS and JavaScript inside it.
2. The app must **work offline** (no internet, no server, no login, no API keys). It runs by double-clicking the file in Chrome or Edge.
3. You may use these open-source libraries. Load each one with a `<script>` tag that has a fixed version number, **and** add a comment at the top of the file listing every library file name so I can download them once into a `libs/` folder next to `index.html` for full offline use. Write the code so it tries `libs/…` first and falls back to the CDN:
   - **SheetJS (xlsx)** – read/write `.xlsx`, `.xls`, `.csv`
   - **HyperFormula** – real Excel formula engine (SUM, VLOOKUP, XLOOKUP, IF, etc.)
   - **PDF.js** – read tables/text from PDF files
   - **Tesseract.js** (with English language data) – read text/tables from JPEG/PNG images (OCR)
   - **Chart.js** – doughnut and bar charts
4. **No real AI model is used.** The "smart assistant" is a built-in **plain-English command reader** written in JavaScript (keyword + pattern matching, fuzzy matching of file and column names). It must feel smart but stay 100 % offline.
5. All data stays on the user's computer. Save the current work automatically in the browser (IndexedDB) so it is not lost on refresh, and add a "Clear everything" button.
6. Must handle at least 50,000 rows smoothly (use virtual scrolling for the grid).

## 3. Screens / Tabs (top navigation bar)
Make a clean top bar with these tabs, each with an icon:

| Tab | Purpose |
|---|---|
| 🏠 **Home** | Welcome card, 3-step guide ("1. Upload files → 2. Open Work Sheet → 3. Type what you want"), list of recently used files |
| 📂 **My Files** | Upload and preview files |
| 📊 **Work Sheet** | The Excel-like sheet + plain-English assistant |
| 📈 **Charts** | Doughnut and bar charts from the result |
| 📘 **Formula Help** | Simple-English library of all formulas with examples |
| ⚙️ **Settings** | Theme (light/dark caramel), number format, currency symbol, date format |

## 4. "My Files" tab – Uploading
- Big drag-and-drop area + "Choose Files" button. **Multiple files at once.**
- Supported: **.xlsx, .xls, .csv, .pdf, .jpg/.jpeg, .png**.
- For each file show a card: file icon, name, type, number of rows/columns, upload time, buttons **Preview / Rename / Set as Master / Delete**.
- Excel with many sheets → let the user pick which sheet(s) to use; each sheet becomes its own table named `FileName – SheetName`.
- **CSV** → auto-detect comma / semicolon / tab separator.
- **PDF** → extract tables page by page (group text by row position into columns). Show a preview and let the user fix the header row before saving.
- **JPEG/PNG** → run OCR with a progress bar, turn the result into a table, show a preview the user can edit before saving.
- Auto-clean every table: trim spaces, detect the header row, convert numbers stored as text into numbers, recognise dates, remove fully blank rows. Show a small "Cleaned: 12 blank rows removed, 3 columns converted to numbers" message.
- Each uploaded table gets a **friendly short name** (e.g. "Master", "Sales Jan") that can be used in commands.

## 5. "Work Sheet" tab – the Excel-like sheet
- Button **"➕ Open New Work Sheet"** opens a blank Excel-style grid (columns A, B, C… rows 1, 2, 3…), with multiple sheet tabs at the bottom (+ to add, double-click to rename).
- Formula bar at the top (shows the cell address and the formula), just like Excel.
- Users can also type formulas themselves (e.g. `=SUM(B2:B20)`), and refer to uploaded files by name, e.g. `=VLOOKUP(A2, Master!A:D, 3, FALSE)`.
- Preloaded **ready-to-use sales template** columns (offered as a "Load Sales Template" button):
  `Date | Invoice No | Region | State | City | Salesperson | Employee ID | Customer Name | Product Category | Product Name | SKU | Qty | Unit Price | Discount % | Sales Value | Target | Achievement % | Month | Quarter | Year`
  with formulas already filled in: Sales Value = Qty × Unit Price × (1 – Discount %), Achievement % = Sales Value ÷ Target, Month/Quarter/Year from Date, and a totals row using SUBTOTAL so it works with filters.
- Toolbar (with icons + simple labels): Undo, Redo, Bold, Colour, Number format (₹ / $ / %, decimals), Sort A→Z / Z→A, Filter, Freeze top row, Find, Remove duplicates, Insert/Delete row & column, Conditional colour (e.g. "red if below target").
- **Export**: Download as `.xlsx` (keeping formulas), `.csv`, and "Copy table" to clipboard. Print-friendly view.

### Formulas that must be built in and working
Use HyperFormula so they behave exactly like Excel:
- **Maths:** SUM, SUMIF, SUMIFS, AVERAGE, AVERAGEIF, AVERAGEIFS, COUNT, COUNTA, COUNTBLANK, COUNTIF, COUNTIFS, MIN, MAX, MINIFS, MAXIFS, ROUND, ROUNDUP, ROUNDDOWN, ABS, PRODUCT, SUMPRODUCT, SUBTOTAL, AGGREGATE, MEDIAN, RANK, PERCENTAGE helpers
- **Logic:** IF, IFS, AND, OR, NOT, IFERROR, IFNA, SWITCH
- **Lookup:** VLOOKUP, HLOOKUP, XLOOKUP, INDEX, MATCH, XMATCH, LOOKUP, CHOOSE
- **Text:** CONCAT, TEXTJOIN, LEFT, RIGHT, MID, LEN, TRIM, UPPER, LOWER, PROPER, SUBSTITUTE, TEXT, VALUE, FIND, SEARCH
- **Date:** TODAY, NOW, DATE, YEAR, MONTH, DAY, EOMONTH, EDATE, DATEDIF, WEEKDAY, NETWORKDAYS
- **Modern / dynamic:** UNIQUE, FILTER, SORT, SORTBY, SEQUENCE (if HyperFormula lacks one, write a custom function for it)
- **Pivot table:** custom built (see below)

## 6. The Smart Assistant – plain-English commands (the heart of the app)
On the Work Sheet tab, put a large, friendly command box at the top: **"Tell me what you want… e.g. 'From Master, VLOOKUP sales value and qty by employee name'"**, with a **Run ▶** button and a microphone button (use the browser's speech recognition only if available; hide it otherwise).

### How it must work
1. **Understand** the sentence: find the action (vlookup, pivot, sum, average, count, filter, sort, top 10, compare, remove duplicates, combine files, etc.), the **file names**, the **column names**, filters and conditions.
2. **Fuzzy match** names: "emp name", "employee", "Emp_Name" should all match the column "Employee Name"; "master" matches the file "Master_Data.xlsx". Ignore case, spaces, underscores and small spelling mistakes.
3. If something is unclear, **ask a simple question with clickable choices** (e.g. "Which column has the employee names? [Employee Name] [Emp Code]") instead of failing.
4. **Show a preview card** before applying: "I will look up *Sales Value* and *Total Qty* from *Master* using *Employee Name*. ✅ Apply  ✏️ Change  ❌ Cancel".
5. **Apply** the result into the sheet using **real Excel formulas** (not just pasted values), so the result is still correct if the source changes and still works when exported to Excel.
6. Show **"How I did it"** under the result: the formula used, explained in one simple sentence (e.g. "VLOOKUP looked for each employee name in Master and brought back the matching sales value"). This helps the user learn.
7. Keep a **Command History** panel (re-run, undo).
8. Show 6–8 clickable **example chips** under the box so users can just click and edit.

### Commands it must understand (make all of these work, plus natural variations)
- **VLOOKUP / XLOOKUP:** "From the master file do a vlookup and bring employee name, sales value and total qty by employee ID" → adds the columns using XLOOKUP (or VLOOKUP if asked), shows "Not found" instead of #N/A.
- **Pivot:** "Make a pivot with Region in rows, Month in columns, sum of Qty, filter Year = 2025 and Product Category = Electronics" → builds a pivot table on a new sheet with grand totals for rows and columns. Supports Sum, Count, Average, Min, Max, and % of total. Also include a **drag-and-drop Pivot Builder** panel (Rows / Columns / Values / Filters boxes) for people who prefer clicking.
- **Totals / Averages:** "Total sales value by salesperson", "Average discount for each region", "Count invoices per city".
- **IF / conditions:** "Add a column Status: if Achievement % is above 100 show 'Achieved' else 'Pending'".
- **SUMIFS / COUNTIFS:** "Total qty for North region in March", "How many orders above 50,000".
- **Top / Bottom:** "Top 10 customers by sales value", "Bottom 5 products by qty".
- **Filter / Sort:** "Show only Chennai rows sorted by sales value high to low".
- **Compare / Match two files:** "Compare Master and Sales Jan by Invoice No and show missing invoices".
- **Combine:** "Combine all monthly files into one sheet".
- **Clean:** "Remove duplicates by Invoice No", "Trim spaces", "Split full name into first and last".
- **Growth:** "Month on month growth % of sales value".
- **Subtotal:** "Add subtotals of sales value for each region".
- **Charts:** "Show a doughnut chart of sales by region" / "Bar chart of qty by product" → opens the Charts tab with that chart.

Build the command reader in a clear, extendable way (a list of intents with keywords, patterns and a handler function each), so new commands can be added easily.

## 7. "Charts" tab
- Automatically uses the **latest result** (pivot, summary or selected range), or let the user pick a table and the label column + value column from dropdowns.
- Show side by side: a **Doughnut chart** (with % labels and legend) and a **Bar chart** (vertical/horizontal toggle, values on top of bars).
- Summary cards at the top: **Total Sales, Total Qty, Average Sale, Top Salesperson, Top Region**.
- Options: Top N only (rest grouped as "Others"), sort high→low, chart title edit.
- Buttons: **Download chart as PNG**, **Download all as PDF/print**.
- Chart colours must follow the caramel palette below.

## 8. "Formula Help" tab
- Searchable cards for every formula: name, what it does in one simple sentence, a sales example (e.g. "=SUMIF(Region, "North", Sales Value) → total sales of the North region"), and a **"Try it"** button that inserts it into the sheet.

## 9. Design – "Caramel" theme
Create a warm, premium, modern look:
- **Colour palette (put as CSS variables):**
  - Caramel `#C68642`, Dark Caramel `#8B5A2B`, Toffee `#A0522D`
  - Cream background `#FFF8EE`, Card `#FFFFFF`, Latte `#F3E3CF`
  - Espresso text `#3E2723`, Soft brown text `#6D4C41`
  - Success `#6B8E23`, Warning `#E0A030`, Error `#B23A3A`
  - Dark mode: background `#2B1D14`, cards `#3A281C`, text `#F7E9D7`
- Rounded corners (12–16 px), soft shadows, gentle gradient on the header (caramel → toffee), smooth hover animations, glass-style command box.
- Font: "Poppins" or "Inter" with system font fallback (works offline).
- Grid: Excel-like light lines, caramel header row, zebra rows in latte, selected cell with a caramel border.
- Clear icons on every button (inline SVG or emoji – no external icon fonts needed offline).
- Fully responsive (laptop and tablet), keyboard friendly (Ctrl+Z, Ctrl+C/V, arrow keys, Enter, Tab).
- Friendly toasts for success/error ("Done! 245 rows matched, 3 not found").

## 10. Error handling (in simple words)
- Wrong file type → "Sorry, I can only read Excel, CSV, PDF, JPG or PNG files."
- Column not found → suggest closest matches.
- Lookup misses → highlight in light red and count them.
- Blurry image/scanned PDF → "Some text could not be read clearly. Please check the highlighted cells."
- Never show raw JavaScript errors to the user.

## 11. Sample data
Include a **"Load Demo Data"** button that creates two sample tables (a "Master" employee/product file and a "Sales" transaction file with ~200 rows across regions, months and products) so I can test every feature immediately.

## 12. What to deliver
1. The complete `index.html` (full code, no placeholders, no "add the rest here").
2. A short list of the library files to download into `libs/` for 100 % offline use (exact file names and versions).
3. A one-page "How to use" guide in very simple English, with 10 example commands I can type.

Please write clean, well-commented code and test the logic mentally for every command example above before giving the final answer. If the response gets too long, split the code into clearly numbered parts and tell me exactly how to join them.
