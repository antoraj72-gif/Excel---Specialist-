# 📊 Excel Specialist – your smart offline Excel helper

Upload your sales files, then **type what you want in plain English**. Excel Specialist writes the Excel formulas for you: lookups, pivots, totals, IF columns, charts and more.
It runs in your browser and nothing is sent anywhere.

## How to start
**Easiest: one file.** Download **`Excel Specialist.html`** (about 12 MB) and double-click it. Every library is built in, so it works on its own, with no other files and no internet.

**Or: the folder version.** Keep **`index.html`** and the **`libs`** folder together and double-click `index.html`. It opens in Chrome or Edge. Both versions work the same.

Then:
- Click **🎁 Load Demo Data** to try it straight away, or go to **📂 My Files** and upload your own files.

No installation, no login and **no internet needed**: every library, including the photo reader and its English language data, is already in the `libs` folder.

## The tabs
| Tab | What it does |
|---|---|
| 🏠 Home | Quick start, stats and recent files |
| 📂 My Files | Upload Excel (.xlsx/.xls), CSV, PDF, JPG, PNG. Preview, rename, set a ⭐ Master file, delete |
| 📊 Work Sheet | Excel-style sheet with the ✨ request box, toolbar, formula bar and sheet tabs |
| 🎯 Targets | **Target vs achievement for each salesperson**: team gauge, target-vs-achieved chart, report table with progress bars and status (✅ ≥100%, 🟡 80–99%, 🔴 below 80%), and a card per person. Pick the period (all, a year or a month); monthly targets are multiplied by the number of months. **📊 Create Excel sheet** writes the same report with live formulas |
| 📈 Charts | Doughnut and bar charts of your latest result, plus summary cards. Download as PNG or print |
| 📘 Formula Help | Every formula explained simply, with a **Try it** button |
| ⚙️ Settings | Light/dark caramel theme, money symbol, decimals, date format |

## Things you can type (sales team examples)
All of these work on the demo data. Click **More ideas…** in the app to run any of them with one click. With your own files, use your own column and file names.

**🎯 Target vs achievement**
- `Target vs achievement dashboard` · `Target vs achievement for 2025` · `Target vs achievement for March`
- `Target vs achievement sheet for each salesperson` (creates a sheet with formulas)
- Targets can come from a **Target** column in the sales file, or from a separate file (for example *Employee ID, Monthly Target*), matched by name or ID.

**🔎 Lookups (VLOOKUP)**
- `From Master, bring Designation and Monthly Target by Employee ID`
- `From Master, bring Designation by Employee Name`
- `From Sales, bring total Sales Value and total Qty into Master by Employee ID`
- `In Master, add a column Achievement = Total Sales Value / Monthly Target` (target vs achievement, shown in %)

**💰 Totals & counts**
- `Total sales value by salesperson` · `Total sales value by region` · `Total sales value by month` · `Total qty by product category`
- `Total qty for North region in March` · `Total sales value for Electronics in South region` · `Total sales value in 2025 for Electronics`
- `Average sales value by salesperson` · `Count invoices per city` · `How many orders above 50,000` · `Number of invoices for Arun Kumar`

**🧮 Pivots & summaries**
- `Pivot with Region in rows, Month in columns, sum of Qty, filter Year = 2025`
- `Pivot with Product Category in rows, Month in columns, sum of Sales Value`
- `Pivot with Salesperson in rows, Region in columns, count of Invoice No`
- `Pivot with Region in rows, Year in columns, sum of Sales Value`
- `Pivot with City in rows, sum of Qty and sum of Sales Value`
- `Share of sales value by region in percent` · `Unique list of customers`

**🏆 Rankings**
- `Top 5 customers by sales value` · `Top 10 products by qty` · `Bottom 5 salespersons by sales value`
- `Top 3 cities by sales value in 2025` · `Top 5 customers for Electronics`

**🔽 Filter & sort**
- `Show only Chennai rows sorted by sales value high to low` · `Show only invoices above 1 lakh`
- `Show only Furniture rows for West region` · `Show only Arun Kumar rows sorted by date` · `Sort by sales value high to low`

**🔀 New columns & IF**
- `Add a column Status: if Sales Value is above 50000 show 'High' else 'Normal'`
- `Add a column Order Size: if Qty is above 20 show 'Bulk' else 'Retail'`
- `Add a column Discount Flag: if Discount % is above 5% show 'Discounted' else 'Full Price'`
- `Add a column GST = Sales Value * 0.18` · `Add a column Gross Value = Qty * Unit Price`

**📈 Growth & charts**
- `Month on month growth of sales value` · `Month on month growth of qty for South region`
- `Doughnut chart of sales value by region` · `Bar chart of sales value by month`
- `Doughnut chart of qty by product category` · `Bar chart of sales value by salesperson`

**🧹 Check & clean**
- `Compare Master and Sales by Employee ID` · `Remove duplicates by Invoice No`
- `Add subtotals of qty and sales value for each product category`
- `Highlight sales value below 10000 in red` · `Highlight qty above 30 in green`
- `Split Employee Name into first and last` · `Combine all files` · `Trim extra spaces`

**Tips**
- Use the names of your columns and files as they appear (small spelling mistakes are fine). "emp name", "employee" and "salesperson" all find *Employee Name*.
- Before changing anything, the app shows a preview: **✅ Apply / ✏️ Change / ❌ Cancel**.
- Results use **real Excel formulas**, so they update when data changes and still work after **⬇️ Excel** download.
- Each result shows **"How I did it"**, the formula plus a one-line explanation, so you can learn as you go.
- Made a mistake? Click **↶ Undo** (or press Ctrl+Z).
- If the app isn't sure what you mean, it asks a question with buttons to click.

## Built-in formulas
SUM, SUMIF(S), AVERAGE, AVERAGEIF(S), COUNT, COUNTA, COUNTBLANK, COUNTIF(S), MIN/MAX, MINIFS/MAXIFS, ROUND/ROUNDUP/ROUNDDOWN, ABS, PRODUCT, SUMPRODUCT, SUBTOTAL, MEDIAN, RANK, IF, IFS, AND/OR/NOT, IFERROR, IFNA, SWITCH, VLOOKUP, HLOOKUP, XLOOKUP, INDEX, MATCH, XMATCH, CHOOSE, CONCAT, TEXTJOIN, LEFT/RIGHT/MID, LEN, TRIM, UPPER/LOWER/PROPER, SUBSTITUTE, TEXT, VALUE, FIND/SEARCH, TODAY/NOW, DATE, YEAR/MONTH/DAY, EOMONTH, EDATE, DATEDIF, WEEKDAY, NETWORKDAYS, UNIQUE, FILTER, SORT, SORTBY, SEQUENCE, and pivot tables (type them, or use 🧮 Pivot Builder).

## Good to know
- Your work is saved automatically **in this browser on this computer**. Use **⚙️ Settings → Clear everything** to start fresh.
- The "smart" part is a built-in plain-English reader, not an online AI. It understands the common sales tasks above. If a request isn't understood, try the example wording.
- Photo reading takes a few seconds the first time (it loads about 8 MB from `libs`). Check the preview, because photos can have small reading mistakes.
- PDF reading works best with PDFs that contain real text. For scanned pages, upload a photo or screenshot (JPG/PNG) instead. You can fix any cell in the preview before saving.
- Runs smoothly with tens of thousands of rows.

## Libraries in `libs/` (open source)
| File | Library | Licence |
|---|---|---|
| `xlsx.full.min.js` | SheetJS Community 0.18.5 | Apache-2.0 |
| `hyperformula.full.min.js` | HyperFormula 2.7.1 | GPL-3.0 (used with the `gpl-v3` key) |
| `chart.umd.min.js` | Chart.js 4.4.1 | MIT |
| `pdf.min.js`, `pdf.worker.min.js` | PDF.js 3.11.174 | Apache-2.0 |
| `tesseract/tesseract.min.js` | Tesseract.js 5.1.1 (reads text from JPG/PNG) | Apache-2.0 |
| `tesseract/ocr-worker.js` | Tesseract.js 5.1.1 worker | Apache-2.0 |
| `tesseract/ocr-core.js` | tesseract.js-core 5.1.1 (LSTM engine) | Apache-2.0 |
| `tesseract/ocr-eng.js` | English language data (tessdata 4.0.0_best_int) | Apache-2.0 |

The three `ocr-*.js` files hold the original files wrapped as JavaScript text. Browsers block background workers and data downloads on pages opened by double-click (`file://`), so this is what lets photo reading work offline.

If the `libs` folder is missing, the app loads these libraries from the internet instead.

`Excel Specialist.html` is made from `index.html` and `libs/` by running `python3 tools/build_standalone.py`.
