import sys
import PyPDF2

def read_pdf(file_path):
    with open(file_path, "rb") as file:
        reader = PyPDF2.PdfReader(file)
        for page in reader.pages:
            print(page.extract_text())

read_pdf("Shivam_Kumar_Resume.pdf")
