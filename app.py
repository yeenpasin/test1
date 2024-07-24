from flask import Flask, render_template, request
from data_generator import generate_data, format_data

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    num_records = int(request.form['num_records'])
    data_types = request.form.getlist('data_type')
    field_names = request.form.getlist('field_name')
    options_list = request.form.getlist('options')
    delimiter = request.form['delimiter']  # ดึงค่า delimiter
    file_format = request.form['format']



    data = generate_data(num_records, data_types, field_names, options_list)
    formatted_data = format_data(data, file_format, delimiter)
    return formatted_data

if __name__ == '__main__':
    app.run(debug=True)
