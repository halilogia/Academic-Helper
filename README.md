# Academic Helper: Assignment Cover & Bibliography Generator

Academic Helper is a practical web tool that allows you to create assignment cover pages in seconds, fully compliant with Graduate School and Faculty standards (16-14-12 point hierarchy, Times New Roman font, etc.).

🌟 Features

- **Live Preview:** As soon as you enter information from the left panel (or top panel on mobile), you can instantly see the appearance of the cover on A4 paper on the right.
- **Download as PDF:** You can download the cover you prepared in PDF format with a single button, without any shifts or distortion.
- **Academic Format:** Titles are set to 16 points, Assignment Subject to 14 points, Student/Advisor information to 12 points, according to universal academic writing guides.
- **Font Guarantee:** The system looks for "Times New Roman" font on your computer. If it cannot find it or you are on a mobile device, it loads the "Tinos" font (Times New Roman alternative) via Google Fonts to ensure the output always looks correct.
- **Logo Management:** It opens with a default university logo. If you want, you can upload your own logo from your computer or remove the logo.
- **No Installation:** It does not require .exe or complex installation files. It is a single .html file.

🚀 How to Use?

1. **Open the File:** Double-click the `index.html` file to open it in your browser (Google Chrome, Edge, Firefox, etc.).
2. **Enter Information:**
    - Check the University/Institute names.
    - Enter the Assignment Subject.
    - Fill in the course name, your own name, number, and advisor information.
3. **Check:** Check how the cover looks from the preview area on the right.
4. **Download:** Click the green "Download PDF" button at the top. Your file will be downloaded to your computer as a PDF.

⚠️ Important Note (Internet Connection)

This tool pulls the necessary libraries (React, Tailwind, PDF engine) via CDN (Content Delivery Network) to keep the file size small and not require installation.

Therefore, your internet connection must be active while using the program. If you open it without internet, the design may look broken or the PDF generation feature may not work.

🛠️ Technical Details

This project is designed to run directly on the browser without the need for any server (Serverless).

- **Base Structure:** HTML5
- **Interface Logic:** React.js (Compiled with Babel via CDN)
- **Style/Design:** Tailwind CSS (CDN)
- **PDF Engine:** html2pdf.js
- **Fonts:** Google Fonts (Tinos)

📝 License

This project is open-source. It can be used, shared, and developed for free by students for assignment submissions.