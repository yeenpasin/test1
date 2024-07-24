document.addEventListener('DOMContentLoaded', function () {
    const formRowsContainer = document.getElementById('form-rows');
    const addBtn = document.getElementById('addBtn');
    const deleteBtn = document.getElementById('deleteBtn');
    const generateForm = document.getElementById('generateForm');
    const popup = document.getElementById('myPopup');
    const popupYes = document.getElementById('popupYes');
    const popupNo = document.getElementById('popupNo');
    const formatElement = document.getElementById('format');
    const delimiterRow = document.getElementById('delimiterRow');

    formatElement.addEventListener('change', function () {
        if (this.value === 'csv') {
            delimiterRow.style.display = 'block';

        }

        else {
            delimiterRow.style.display = 'none';
        }


    });

    const setOptionsEventListener = (formRow) => {
        const dataTypeElement = formRow.querySelector('.data_type');
        const fieldNameElement = formRow.querySelector('.field_name');
        const optionsContainer = formRow.querySelector('.options_container');
        const optionsElement = formRow.querySelector('.options');

        /* เงื่อนไขเปลี่ยน option กับ fieldname ให้ตรงกัน  */

        if (optionsElement) {
            optionsElement.addEventListener('change', function () {
                const selectedOption = optionsElement.value;
                if (dataTypeElement.value === 'Name') {
                    if (selectedOption === 'FullName') {
                        fieldNameElement.value = 'full_name';
                    } else if (selectedOption === 'FirstName') {
                        fieldNameElement.value = 'first_name';
                    } else if (selectedOption === 'LastName') {
                        fieldNameElement.value = 'last_name';
                    } else if (selectedOption === 'ThaiFull') {
                        fieldNameElement.value = 'fullname_thai'
                    }
                    else if (selectedOption === 'ThaiFirst') {
                        fieldNameElement.value = 'firstname_thai'
                    }
                    else if (selectedOption === 'ThaiLast') {
                        fieldNameElement.value = 'lastname_thai'
                    }
                }

                if (dataTypeElement.value === 'Address') {
                    if (selectedOption === 'AddressTh') {
                        fieldNameElement.value = 'address_thai';
                    } else if (selectedOption === 'AddressEn') {
                        fieldNameElement.value = 'address_eng';
                    }
                }

                if (dataTypeElement.value === 'IDcard') {
                    fieldNameElement.value = 'IDcard_number';

                }

                if (dataTypeElement.value === 'Address') {
                    if (selectedOption === 'AddressTh') {
                        fieldNameElement.value = 'address_thai';
                    } else if (selectedOption === 'AddressEn') {
                        fieldNameElement.value = 'address_eng';
                    }
                }

                if (dataTypeElement.value === 'job') {
                    if (selectedOption === 'jobTh') {
                        fieldNameElement.value = 'job_TH';
                    } else if (selectedOption === 'jobEn') {
                        fieldNameElement.value = 'job_En';
                    }
                }

                if (dataTypeElement.value === 'nameTitle') {
                    if (selectedOption === 'nametitleTh') {
                        fieldNameElement.value = 'nametitle_th';
                    } else if (selectedOption === 'nametitleEn') {
                        fieldNameElement.value = 'nametitle_en';
                    }
                }

                if (dataTypeElement.value === 'IPAddress') {
                    if (selectedOption === 'ipv4') {
                        fieldNameElement.value = 'IPv4_Address';
                    } else if (selectedOption === 'ipv6') {
                        fieldNameElement.value = 'IPv6_Address';
                    }
                }

                if (dataTypeElement.value === 'text') {
                    if (selectedOption === 'textTh') {
                        fieldNameElement.value = 'text_TH';
                    } else if (selectedOption === 'textEn') {
                        fieldNameElement.value = 'text_EN';
                    }
                }

                if (dataTypeElement.value === 'currency') {
                    if (selectedOption === 'curName') {
                        fieldNameElement.value = 'currency_name';
                    } else if (selectedOption === 'curSymbol') {
                        fieldNameElement.value = 'currency_symbol';
                    }
                }

            });
        }

        /* เงื่อนไขเมื่อ datatype เปลี่ยนก็ให้ option เปลี่ยนให้เหมาะสม */

        dataTypeElement.addEventListener('change', function () {
            const selectedType = dataTypeElement.value;
            if (selectedType === 'Name') {
                fieldNameElement.value = '';
                optionsContainer.innerHTML = `
                    <select class="options" name="options">
                        <option value="" disabled selected style="display:none;">- Select -</option>
                        <option style="color: #351690;" value="FullName">Fullname (EN)</option>
                        <option style="color: #351690;" value="FirstName">FirstName (EN)</option>
                        <option style="color: #351690;" value="LastName">LastName (EN)</option>
                        <option style="color: #7c1a24;" value="ThaiFull">FullName (TH)</option>
                        <option style="color: #7c1a24;" value="ThaiFirst">FirstName (TH)</option>
                        <option style="color: #7c1a24;" value="ThaiLast">LastName (TH)</option>
                    </select>
                `;
                setOptionsEventListener(formRow);
            }


            else if (selectedType === 'Phone') {
                fieldNameElement.value = 'phone_number';
                optionsContainer.innerHTML = '<input type="text" class="options" name="options" placeholder="เช่น +66 ###-###-####">';
            } else if (selectedType === 'Email') {
                fieldNameElement.value = 'email';
                optionsContainer.innerHTML = '<input type="text" class="options" name="options" placeholder="เช่น gmail.com, hotmail.com">';
            }

            else if (selectedType === 'Username') {
                fieldNameElement.value = 'username';
                optionsContainer.innerHTML = '<input type="text" class="options" name="options" placeholder="No Setting" readonly>';
            }

            else if (selectedType === 'password') {
                fieldNameElement.value = 'password';
                optionsContainer.innerHTML = '<input type="text" class="options" name="options" placeholder="@ ตัวอักษร , # ตัวเลข">';
            }

            else if (selectedType === 'location') {
                fieldNameElement.value = 'location';
                optionsContainer.innerHTML = '<input type="text" class="options" name="options" placeholder="Geographic (Lat, Lon)" readonly>';
            }

            else if (selectedType === 'country') {
                fieldNameElement.value = 'country';
                optionsContainer.innerHTML = '<input type="text" class="options" name="options" placeholder="random country" readonly>';
            }

            else if (selectedType === 'Address') {
                fieldNameElement.value = '';
                optionsContainer.innerHTML = `
                    <select class="options" name="options">
                        <option value="" disabled selected style="display:none;">- Select -</option>
                        <option style="color: #351690;" value="AddressTh">Address (TH)</option>
                        <option style="color: #351690;" value="AddressEn">Address (EN)</option>

                    </select>
                `;
                setOptionsEventListener(formRow);
            }

            else if (selectedType === 'job') {
                fieldNameElement.value = '';
                optionsContainer.innerHTML = `
                    <select class="options" name="options">
                        <option value="" disabled selected style="display:none;">- Select -</option>
                        <option style="color: #351690;" value="jobTh">Job (TH)</option>
                        <option style="color: #351690;" value="jobEn">Job (EN)</option>

                    </select>
                `;
                setOptionsEventListener(formRow);
            }

            else if (selectedType === 'text') {
                fieldNameElement.value = '';
                optionsContainer.innerHTML = `
                    <select class="options" name="options">
                        <option value="" disabled selected style="display:none;">- Select -</option>
                        <option style="color: #351690;" value="textTh">Text (TH)</option>
                        <option style="color: #351690;" value="textEn">Text (EN)</option>

                    </select>
                `;
                setOptionsEventListener(formRow);
            }

            else if (selectedType === 'currency') {
                fieldNameElement.value = '';
                optionsContainer.innerHTML = `
                    <select class="options" name="options">
                        <option value="" disabled selected style="display:none;">- Select -</option>
                        <option style="color: #351690;" value="curName">CurrencyName</option>
                        <option style="color: #351690;" value="curSymbol">Symbol</option>

                    </select>
                `;
                setOptionsEventListener(formRow);
            }

            else if (selectedType === 'IPAddress') {
                fieldNameElement.value = '';
                optionsContainer.innerHTML = `
                    <select class="options" name="options">
                        <option value="" disabled selected style="display:none;">- Select -</option>
                        <option value="ipv4">IPv4 address</option>
                        <option value="ipv6">IPv6 address</option>
                    </select>
                `;
                setOptionsEventListener(formRow);
            }

            else if (selectedType === 'IDcard') {
                fieldNameElement.value = 'IDcard_number';
                optionsContainer.innerHTML = '<input type="text" class="options" name="options" placeholder="No Setting" readonly>';
            }

            else if (selectedType === 'nameTitle') {
                fieldNameElement.value = '';
                optionsContainer.innerHTML = `
                    <select class="options" name="options">
                        <option value="" disabled selected style="display:none;">- Select -</option>
                        <option style="color: #351690;" value="nametitleTh">NameTitle (TH)</option>
                        <option style="color: #351690;" value="nametitleEn">NameTitle (EN)</option>

                    </select>
                `;
                setOptionsEventListener(formRow);
            }


            else if (selectedType === 'postcode') {
                fieldNameElement.value = 'postcode';
                optionsContainer.innerHTML = '<input type="text" class="options" name="options" placeholder="No Setting" readonly>';
            }

            else if (selectedType === 'company') {
                fieldNameElement.value = 'company_name';
                optionsContainer.innerHTML = '<input type="text" class="options" name="options" placeholder="No Setting" readonly>';
            }

            else if (selectedType === 'custom') {
                fieldNameElement.value = 'custom';
                optionsContainer.innerHTML = '<input type="text" class="options" name="options" placeholder="@ = EN,% = TH,# = Number">';
            }

            else if (selectedType === 'dateOfbirth') {
                fieldNameElement.value = 'date_of_birth';
                optionsContainer.innerHTML = '<input type="text" class="options" name="options" placeholder="No Setting" readonly>';
            }

            else if (selectedType === 'color') {
                fieldNameElement.value = 'color';
                optionsContainer.innerHTML = '<input type="text" class="options" name="options" placeholder="No Setting">';
            }

        });
    };


    /*ปุ่ม copy*/
    const copyBtn = document.getElementById('copyBtn');
    const generatedCode = document.getElementById('generatedCode');

    copyBtn.addEventListener('click', function () {
        const codeToCopy = generatedCode.querySelector('pre').textContent;
        navigator.clipboard.writeText(codeToCopy)
            .then(() => {
                alert('Code copied to clipboard!');
            })
            .catch(err => {
                console.error('Unable to copy:', err);
            });

    });



    /* ฟังก์ชั่นเงื่อนไขตรวจสอบเมื่อยังไม่ได้ทำการเลือก dropdown */
    const validateForm = () => {
        const dataTypeElements = document.querySelectorAll('.data_type');
        const optionsElements = document.querySelectorAll('.options');
        const formatElement = document.getElementById('format');
        for (const dataTypeElement of dataTypeElements) {
            if (dataTypeElement.value === "") {
                alert("Please select Data Type");
                return false;
            }
        }
        for (const optionsElement of optionsElements) {
            if (optionsElement.value === "" || optionsElement.value === "- Select -") {

                /* ยกเว้นการตรวจสอบสำหรับเพราะมันไม่ได้มีการเลือก option */
                const dataTypeElement = optionsElement.closest('.form-row').querySelector('.data_type');
                if (dataTypeElement.value === 'Username' ||
                    dataTypeElement.value === 'location' ||
                    dataTypeElement.value === 'IDcard' ||
                    dataTypeElement.value === 'nameTitle' ||
                    dataTypeElement.value === 'country' ||
                    dataTypeElement.value === 'postcode' ||
                    dataTypeElement.value === 'company' ||
                    dataTypeElement.value === 'dateOfbirth' ||
                    dataTypeElement.value === 'color') {
                    continue;  // ข้ามการตรวจสอบ
                }


                alert("You haven't the settings yet.");
                return false;
            }
        }

        if (formatElement.value === "") {
            alert("Please select Format");
            return false;
        }
        return true;
    };



    /* ทำให้เวลาเจนไม่รีเซ็ตค่า */
    generateForm.addEventListener('submit', function (event) {
        event.preventDefault();

        /* เรียกใช้ฟังก์ชั่นเงื่อนไขเมื่อยังไม่ได้เลือก dropdown */
        if (validateForm()) {
            const formData = new FormData(generateForm);

            /*
            const delimiterElement = document.getElementById('delimiter');
            formData.append('delimiter', delimiterElement.value); // เพิ่ม delimiter ลงใน formData
            */

            fetch('/generate', {
                method: 'POST',
                body: formData,
            })
                .then(response => response.text())
                .then(data => {
                    document.getElementById('generatedCode').innerHTML = '<pre>' + data + '</pre>';
                })
                .catch(error => console.error('Error:', error));
        }
    }
    );
    const setDeleteRowEventListener = (formRow) => {
        const deleteRowBtn = formRow.querySelector('.deleteRowBtn');
        deleteRowBtn.addEventListener('click', function () {
            if (formRowsContainer.children.length > 1) {
                formRow.remove();
            } else {
                alert('Cannot delete the last row');
            }
        });
    };


    /* ปุ่มแอด */
    addBtn.addEventListener('click', function () {

        const formRow = document.createElement('div');
        formRow.className = 'form-row';

        const rowIndex = formRowsContainer.children.length;
        formRow.innerHTML = ` 
            <div>
                 <select class="data_type" name="data_type">
                            <option value="" disabled selected style="display:none;">- Select -</option>
                            <option value="personal data" disabled style="color: red;">-- Personal Data --</option>
                            <option value="Name">Name</option>
                            <option value="Phone">Phone</option>
                            <option value="Email">Email</option>
                            <option value="Username">Username</option>
                            <option value="password">Password</option>
                            <option value="IDcard">IDcard</option>
                            <option value="nameTitle">NameTitle</option>
                            <option value="job">Job Position</option>
                            <option value="dateOfbirth">Date of Birth</option>
                            <option value="location data" disabled style="color: red;">-- Location Data --</option>
                            <option value="location">Location (Lat,Lon)</option>
                            <option value="country">Country</option>
                            <option value="Address">Address</option>
                            <option value="IPAddress">IP Address</option>
                            <option value="postcode">PostCode</option>
                            <option value="other data" disabled style="color: red;">-- Other Data --</option>
                            <option value="company">Company</option>
                            <option value="custom">Custom</option>
                            <option value="color">Color</option>
                            <option value="currency">Currency</option>
                            <option value="text">Text</option>
                </select>
            </div>
            <div>
                <input type="text" class="field_name" name="field_name" value="">
            </div>
            <div class="options_container">
                <select class="options" name="options">
                    <option value="" disabled selected style="display:none;">- Select -</option>
                </select>
            </div>
            
             <button type="button" class="drag-handle"><i class="fas fa-grip-vertical"></i></button>
             <button type="button" class="deleteRowBtn"><i class="fas fa-trash-alt"></i></button>
            
                       
        `;
        formRowsContainer.appendChild(formRow);
        setOptionsEventListener(formRow);
        setDeleteRowEventListener(formRow);
        makeRowsDraggable();

    });



    deleteBtn.addEventListener('click', function () {
        popup.style.display = "block";
    });


    /* ลบยกเว้นแถวแรก */
    popupYes.addEventListener('click', function () {
        const formRows = formRowsContainer.querySelectorAll('.form-row');
        formRows.forEach((row, index) => {
            if (index !== 0) {
                row.remove();
            }
        });

        // รีเซ็ต number of record
        const numberOfRecordsInput = document.getElementById('num_records');
        numberOfRecordsInput.value = '';

        // รีเซ็ต format dropdown
        const formatDropdown = document.getElementById('format');
        formatDropdown.value = '';

        const outputPage = document.getElementById('generatedCode');
        outputPage.innerHTML = ``;



        /* reset ค่าของแถวแรกให้เป็นค่าเริ่มต้น */
        const firstRow = formRowsContainer.querySelector('.form-row')
        if (firstRow) {
            const dataTypeElement = firstRow.querySelector('.data_type')
            const fieldNameElement = firstRow.querySelector('.field_name')
            const optionsElement = firstRow.querySelector('.options_container')

            dataTypeElement.innerHTML = `
            <div>
                        <select class="data_type" name="data_type">
                            <option value="" disabled selected style="display:none;">- Select -</option>
                            <option value="personal data" disabled style="color: red;">-- Personal Data --</option>
                            <option value="Name">Name</option>
                            <option value="Phone">Phone</option>
                            <option value="Email">Email</option>
                            <option value="Username">Username</option>
                            <option value="password">Password</option>
                            <option value="IDcard">IDcard</option>
                            <option value="nameTitle">NameTitle</option>
                            <option value="job">Job Position</option>
                            <option value="dateOfbirth">Date of Birth</option>
                            <option value="" disabled selected style="display:none;">- Select -</option>
                            <option value="location data" disabled style="color: red;">-- Location Data --</option>
                            <option value="location">Location (Lat,Lon)</option>
                            <option value="country">Country</option>
                            <option value="Address">Address</option>
                            <option value="IPAddress">IP Address</option>
                            <option value="postcode">PostCode</option>
                            <option value="" disabled selected style="display:none;">- Select -</option>
                            <option value="other data" disabled style="color: red;">-- Other Data --</option>
                            <option value="company">Company</option>
                            <option value="custom">Custom</option>
                            <option value="color">Color</option>
                            <option value="currency">Currency</option>
                            <option value="text">Text</option>
                        </select>
                    </div>`;
            fieldNameElement.value = '';
            optionsElement.innerHTML = `
                    <select class="options" name="options">
                        <option value="" disabled selected style="display:none;">- Select -</option>
                    </select>
                    `;

        }

        // ซ่อน delimiter row
        const delimiterRow = document.getElementById('delimiterRow');
        if (delimiterRow) {
            delimiterRow.style.display = 'none';
        }

        popup.style.display = "none";

    });




    /* ปุ่ม cencel ของ popup */
    popupNo.addEventListener('click', function () {
        popup.style.display = "none";
    });


    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.addEventListener('click', function () {
        const generatedCode = document.getElementById('generatedCode').textContent;
        const format = document.getElementById('format').value;
        let blob;

        /* ช่วยให้ปุ่ม download ให้ file csv เป็นภาษาไทย */
        if (format === 'csv') {
            // เพิ่ม BOM สำหรับ CSV
            const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
            blob = new Blob([bom, generatedCode], { type: 'text/csv;charset=utf-8' });
        } else {
            blob = new Blob([generatedCode], { type: 'text/plain;charset=utf-8' });
        }

        // สร้างลิงก์ดาวน์โหลด
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = `generated_data.${format}`;
        downloadLink.click();
    });



    /* คลิกลากย้ายระหว่างแถว */
    function makeRowsDraggable() {
        const dragHandles = document.querySelectorAll('.drag-handle');
        dragHandles.forEach(dragHandle => {
            dragHandle.addEventListener('mousedown', function (e) {
                const formRow = this.closest('.form-row');
                const initialY = e.pageY;
                const formRows = Array.from(formRowsContainer.children);

                let currentIndex = formRows.indexOf(formRow);

                function onMouseMove(e) {
                    const deltaY = e.pageY - initialY;
                    formRow.style.transform = `translateY(${deltaY}px)`;

                    const closestRow = formRows.reduce((prev, curr) => {
                        const rect = curr.getBoundingClientRect();
                        const distance = Math.abs(rect.top - e.clientY);
                        return distance < prev.distance ? { row: curr, distance: distance } : prev;
                    }, { row: null, distance: Infinity }).row;

                    const targetIndex = formRows.indexOf(closestRow);
                    if (targetIndex !== -1 && targetIndex !== currentIndex) {
                        formRowsContainer.insertBefore(formRow, targetIndex > currentIndex ? closestRow.nextSibling : closestRow);
                        currentIndex = targetIndex;
                    }
                }

                function onMouseUp() {
                    formRow.style.transition = 'transform 0.2s ease';
                    formRow.style.transform = 'translateY(0)';
                    setTimeout(() => {
                        formRow.style.transition = '';
                    }, 200);

                    document.removeEventListener('mousemove', onMouseMove);
                    document.removeEventListener('mouseup', onMouseUp);
                }

                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', onMouseUp);
            });
        });
    }

    /* จัดการการทำงานของแถวต้นตำรับ แถวแรก */
    const initialFormRow = formRowsContainer.querySelector('.form-row');
    if (initialFormRow) {
        setOptionsEventListener(initialFormRow);
        setDeleteRowEventListener(initialFormRow);
        setRadioButtonEventListener(initialFormRow);
        makeRowsDraggable();
    }

});
