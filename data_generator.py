from faker import Faker
import json
import csv
import io
import random

fake = Faker()
fake_eng = Faker('en_GB')
fake_th = Faker('th_TH')
fake_jp = Faker('ja_JP')

def generate_data(num_records, data_types, field_names, options_list):
    data = []
    
    
    #unique_names = set()  # สำหรับเก็บชื่อที่ไม่ซ้ำ
    #unique_emails = set()  # สำหรับเก็บอีเมลที่ไม่ซ้ำ

    
    for _ in range(num_records):
        record = {}
        for data_type, field_name, options in zip(data_types, field_names, options_list):
            
            if data_type == 'Name':
                record[field_name] = generate_name(options)

            elif data_type == 'Phone':
                record[field_name] = generate_phone_number(options)

            elif data_type == 'Email':
                record[field_name] = generate_email(options)

            elif data_type == 'Username':
                record[field_name] = fake.user_name()

            elif data_type == 'password':
                record[field_name] = generate_password(options)

            elif data_type == 'location':
                lat = generate_coordinate_with_direction(fake.latitude(), ['N', 'S'])
                lon = generate_coordinate_with_direction(fake.longitude(), ['E', 'W'])
                record[f'{field_name}_lat'] = lat
                record[f'{field_name}_lon'] = lon   

            elif data_type == 'Address':
                record[field_name] = generate_address(options)

            elif data_type == 'IDcard':
                record[field_name] = fake_th.ssn()

            elif data_type == 'nameTitle':
                record[field_name] = generate_nametitle(options)

            elif data_type == 'IPAddress':
                record[field_name] = generate_ip(options)

            elif data_type == 'country':
                record[field_name] = fake.country()

            elif data_type == 'job':
                record[field_name] = generate_job(options)

            elif data_type == 'dateOfbirth':
                record[field_name] = str(fake.date_of_birth())

            elif data_type == 'postcode':
                record[field_name] = fake.postcode()

            elif data_type == 'company':
                record[field_name] = fake.company()

            elif data_type == 'custom':
                record[field_name] = generate_custom(options)

            elif data_type == 'color':
                record[field_name] = fake.color()

            elif data_type == 'currency':
                record[field_name] = generate_currency(options)
                
            elif data_type == 'text':
                record[field_name] = generate_text(options)

            else:
                return "Invalid data type requested"
            
        data.append(record)
    return data

def generate_name(options):
    if options == 'FullName':
        return fake.name()
    elif options == 'FirstName':
        return fake.first_name()
    elif options == 'LastName':
        return fake.last_name()
    elif options == 'ThaiFull':
        return fake_th.name()
    elif options == 'ThaiFirst':
        return fake_th.first_name()
    elif options == 'ThaiLast':
        return fake_th.last_name()
    
def generate_address(options):
    if options == 'AddressTh':
        return fake_th.address()
    elif options == 'AddressEn':
        return fake_eng.address().replace('\n', ' ') 
    
    
def generate_job(options):
    if options == 'jobTh':
        return fake_th.job()
    elif options == 'jobEn':
        return fake.job()
    
def generate_nametitle(options):
    if options == 'nametitleTh':
        return fake_th.prefix()
    elif options == 'nametitleEn':
        return fake.prefix()
    
def generate_currency(options):
    if options == 'curName':
        return fake.currency_name()
    elif options == 'curSymbol':
        return fake.currency_symbol()
    
      
def generate_text(options):
    if options == 'textTh':
        return fake_th.paragraph()
    elif options == 'textEn':
        return fake.paragraph()

def generate_ip(options):
    if options == 'ipv4':
        return fake.ipv4()
    elif options == 'ipv6':
        return fake.ipv6()

def generate_phone_number(pattern):
    phone_number = ''
    for char in pattern:
        if char == '#':
            phone_number += str(fake.random_int(min=0, max=9))
        else:
            phone_number += char
    return phone_number

def generate_custom(pattern):
    customchar = ''
    for char in pattern:
        if char == '@':
            customchar += random.choice('abcdefghijklmnopqrstuvwxyz')
        elif char == '%':
            customchar += random.choice('กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮ')
        elif char == '#':
            customchar += str(fake.random_int(min=0, max=9))
        else:
            customchar += char
    return customchar

def generate_password(pattern):
    pass_word = ''
    for char in pattern:
        if char == '@':
            pass_word += random.choice('abcdefghijklmnopqrstuvwxyz')
        elif char == '#':
            pass_word += str(fake.random_int(min=0, max=9))
    return pass_word


def generate_email(options):
    domain_options = [opt.strip() for opt in options.split(',')]
    domain = fake.random_element(domain_options)
    return fake.email(domain=domain)


def generate_coordinate_with_direction(value, directions):
    abs_value = round(abs(float(value)), 4)
    direction = fake.random_element(directions)
    return f"{direction}{abs_value}"


def format_data(data, file_format, delimiter=';'):
    if file_format == 'json':
        return json.dumps(data, ensure_ascii=False, indent=4)
    elif file_format == 'csv':
        csv_data = io.StringIO()
        csv_data.write('\ufeff')
        
        if delimiter == "tab":
            delimiter = "\t"
        

        writer = csv.DictWriter(csv_data, fieldnames=data[0]    .keys(), delimiter=delimiter)  # ใช้ delimiter ที่ส่งมา
        writer.writeheader()
        writer.writerows(data)
        return csv_data.getvalue().encode('utf-8-sig')
    
    elif file_format == 'txt':
        txt_data = io.StringIO()
        for item in data:
            txt_data.write(", ".join(str(v) for v in item.values()) + "\n")
        return txt_data.getvalue()
    else:
        return "Invalid format requested"
