# 🍮 Caramel Sheets – your smart offline Excel helper

Upload your sales files, then **type what you want in plain English**. Caramel Sheets writes the Excel formulas for you: lookups, pivots, totals, IF columns, charts and more.
It runs in your browser and nothing is sent anywhere.

## How to start
1. Download this folder. Keep **`index.html`** and the **`libs`** folder together.
2. Double-click **`index.html`**. It opens in Chrome or Edge.
3. Click **🎁 Load Demo Data** to try it straight away, or go to **📂 My Files** and upload your own files.

No installation, no login, no internet needed. The one exception is reading text from **pictures (JPG/PNG)**, which needs an internet connection.

## The tabs
| Tab | What it does |
|---|---|
| 🏠 Home | Quick start, stats and recent files |
| 📂 My Files | Upload Excel (.xlsx/.xls), CSV, PDF, JPG, PNG. Preview, rename, set a ⭐ Master file, delete |
| 📊 Work Sheet | Excel-style sheet with the ✨ request box, toolbar, formula bar and sheet tabs |
| 📈 Charts | Doughnut and bar charts of your latest result, plus summary cards. Download as PNG or print |
| 📘 Formula Help | Every formula explained simply, with a **Try it** button |
| ⚙️ Settings | Light/dark caramel theme, money symbol, decimals, date format |

## 10 things you can type
1. `From Master, bring Designation and Monthly Target by Employee ID`
2. `Pivot with Region in rows, Month in columns, sum of Qty, filter Year = 2025`
3. `Total sales value by salesperson`
4. `Top 5 customers by sales value`
5. `Total qty for North region in March`
6. `Add a column Status: if Sales Value is above 50000 show 'High' else 'Normal'`
7. `Doughnut chart of sales value by region`
8. `Month on month growth of sales value`
9. `Compare Master and Sales by Employee ID`
10. `Add subtotals of sales value for each region`

More: `How many orders above 50,000` · `Remove duplicates by Invoice No` · `Combine all files` · `Show only Chennai rows sorted by sales value high to low` · `Split Employee Name into first and last` · `Highlight sales value below 10000 in red` · `Add a column Net = Sales Value * 0.82` · `Unique list of customers`

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
- PDF reading works best with PDFs that contain real text. For scanned pages, upload a photo or screenshot (JPG/PNG) instead. You can fix any cell in the preview before saving.
- Runs smoothly with tens of thousands of rows.

## Libraries in `libs/` (open source)
| File | Library | Licence |
|---|---|---|
| `xlsx.full.min.js` | SheetJS Community 0.18.5 | Apache-2.0 |
| `hyperformula.full.min.js` | HyperFormula 2.7.1 | GPL-3.0 (used with the `gpl-v3` key) |
| `chart.umd.min.js` | Chart.js 4.4.1 | MIT |
| `pdf.min.js`, `pdf.worker.min.js` | PDF.js 3.11.174 | Apache-2.0 |
| *(online only)* | Tesseract.js 5.1.1 for picture reading | Apache-2.0 |

If the `libs` folder is missing, the app loads these libraries from the internet instead.
