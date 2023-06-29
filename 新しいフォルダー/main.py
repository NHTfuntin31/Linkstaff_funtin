import PyPDF2

input_file = r"C:\Users\OSK-195\Downloads\ユオン ヴァン テイエン履歴書.pdf"
page_num = 1

# 出力ファイル名
output_file_left = 'output_left.pdf'
output_file_right = 'output_right.pdf'

# Đọc file PDF
pdf_reader = PyPDF2.PdfReader(input_file)
encoded_bytes = pdf_reader.encode('utf-8')
pdf_reader = encoded_bytes.decode('utf-8')
# Truy cập trang thứ page_num
page = pdf_reader.pages[page_num - 1]

# Tạo trang trống bằng nửa chiều rộng và đầy đủ chiều cao của trang gốc
pdf_writer = PyPDF2.PdfWriter()
page_left = pdf_writer.add_blank_page(width=page.mediaBox.getWidth() / 2, height=page.mediaBox.getHeight())
page_right = pdf_writer.add_blank_page(width=page.mediaBox.getWidth() / 2, height=page.mediaBox.getHeight())

# Kết hợp trang gốc vào trang trái và phải
page_left.mergeTranslatedPage(page, 0, 0, expand=True)
page_right.mergeTranslatedPage(page, -page.mediaBox.getWidth() / 2, 0, expand=True)

# Lưu file PDF đầu ra
with open(output_file_left, 'wb') as file_left:
    pdf_writer.add_page(page_left)
    pdf_writer.write(file_left)

with open(output_file_right, 'wb') as file_right:
    pdf_writer.add_page(page_right)
    pdf_writer.write(file_right)

# Tiếp tục xử lý trang PDF...
