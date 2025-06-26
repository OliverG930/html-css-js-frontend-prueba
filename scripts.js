document.addEventListener('DOMContentLoaded', () => {
    // --- Simulated Database Data ---
    const careers = [
        { id: 1, name: 'Ingeniería de Sistemas', description: 'Diseño, desarrollo y mantenimiento de sistemas informáticos.', duration: 5, code: 'IS001', modality: 'Presencial' },
        { id: 2, name: 'Licenciatura en Administración', description: 'Gestión de organizaciones en diversos sectores.', duration: 4, code: 'LAE002', modality: 'Híbrida' },
        { id: 3, name: 'Contaduría Pública', description: 'Análisis, registro y auditoría de información financiera.', duration: 4.5, code: 'CP003', modality: 'Presencial' },
        { id: 4, name: 'Medicina', description: 'Diagnóstico, tratamiento y prevención de enfermedades.', duration: 6, code: 'MED004', modality: 'Presencial' },
        { id: 5, name: 'Derecho', description: 'Estudio de las normas jurídicas y su aplicación.', duration: 5, code: 'DER005', modality: 'Presencial' },
        { id: 6, name: 'Arquitectura', description: 'Diseño y construcción de edificaciones.', duration: 5, code: 'ARQ006', modality: 'Presencial' },
        { id: 7, name: 'Marketing Digital', description: 'Estrategias de mercadeo en entornos digitales.', duration: 3, code: 'MD007', modality: 'Online' }
    ];

    const mallas = [
        { id: 101, id_carrera: 1, description: 'Malla 2020 - IS' },
        { id: 102, id_carrera: 1, description: 'Malla 2024 - IS (Actualizada)' },
        { id: 201, id_carrera: 2, description: 'Malla 2019 - LAE' },
        { id: 301, id_carrera: 3, description: 'Malla 2021 - CP' },
        { id: 401, id_carrera: 4, description: 'Malla 2018 - Med' },
        { id: 501, id_carrera: 5, description: 'Malla 2022 - Der' },
        { id: 601, id_carrera: 6, description: 'Malla 2023 - Arq' },
        { id: 701, id_carrera: 7, description: 'Malla 2024 - MD' }
    ];

    const materias = [
        { id: 1001, description: 'Cálculo I' },
        { id: 1002, description: 'Física General' },
        { id: 1003, description: 'Programación Orientada a Objetos' },
        { id: 1004, description: 'Bases de Datos' },
        { id: 1005, description: 'Redes de Computadoras' },
        { id: 1006, description: 'Sistemas Operativos' },
        { id: 1007, description: 'Contabilidad Básica' },
        { id: 1008, description: 'Microeconomía' },
        { id: 1009, description: 'Dirección Estratégica' },
        { id: 1010, description: 'Marketing Digital Avanzado' },
        { id: 1011, description: 'Derecho Civil' },
        { id: 1012, description: 'Derecho Penal' },
        { id: 1013, description: 'Anatomía Humana' },
        { id: 1014, description: 'Fisiología' },
        { id: 1015, description: 'Diagnóstico Clínico' },
        { id: 1016, description: 'Dibujo Arquitectónico' },
        { id: 1017, description: 'Estructuras' },
        { id: 1018, description: 'Fundamentos de Diseño' },
        { id: 1019, description: 'Logística I' }
    ];

    const carrerasMaterias = [
        // Ingeniería de Sistemas - Malla 2020 (id: 101)
        { id: 1, id_carrera: 1, id_malla: 101, id_materia: 1001, cantidad_horas: 80, orden: 1 },
        { id: 2, id_carrera: 1, id_malla: 101, id_materia: 1002, cantidad_horas: 70, orden: 2 },
        { id: 3, id_carrera: 1, id_malla: 101, id_materia: 1003, cantidad_horas: 90, orden: 3 },
        { id: 4, id_carrera: 1, id_malla: 101, id_materia: 1004, cantidad_horas: 85, orden: 4 },

        // Ingeniería de Sistemas - Malla 2024 (id: 102)
        { id: 5, id_carrera: 1, id_malla: 102, id_materia: 1001, cantidad_horas: 80, orden: 1 }, // Cálculo I
        { id: 6, id_carrera: 1, id_malla: 102, id_materia: 1003, cantidad_horas: 95, orden: 2 }, // POO
        { id: 7, id_carrera: 1, id_malla: 102, id_materia: 1005, cantidad_horas: 75, orden: 3 }, // Redes
        { id: 8, id_carrera: 1, id_malla: 102, id_materia: 1006, cantidad_horas: 80, orden: 4 }, // Sistemas Operativos
        { id: 9, id_carrera: 1, id_malla: 102, id_materia: 1019, cantidad_horas: 60, orden: 5 }, // Logística I (new for this malla)

        // Licenciatura en Administración - Malla 2019 (id: 201)
        { id: 10, id_carrera: 2, id_malla: 201, id_materia: 1007, cantidad_horas: 60, orden: 1 },
        { id: 11, id_carrera: 2, id_malla: 201, id_materia: 1008, cantidad_horas: 55, orden: 2 },
        { id: 12, id_carrera: 2, id_malla: 201, id_materia: 1009, cantidad_horas: 70, orden: 3 },

        // Contaduría Pública - Malla 2021 (id: 301)
        { id: 13, id_carrera: 3, id_malla: 301, id_materia: 1007, cantidad_horas: 70, orden: 1 },
        { id: 14, id_carrera: 3, id_malla: 301, id_materia: 1008, cantidad_horas: 60, orden: 2 },

        // Medicina - Malla 2018 (id: 401)
        { id: 15, id_carrera: 4, id_malla: 401, id_materia: 1013, cantidad_horas: 120, orden: 1 },
        { id: 16, id_carrera: 4, id_malla: 401, id_materia: 1014, cantidad_horas: 110, orden: 2 },
        { id: 17, id_carrera: 4, id_malla: 401, id_materia: 1015, cantidad_horas: 100, orden: 3 },

        // Derecho - Malla 2022 (id: 501)
        { id: 18, id_carrera: 5, id_malla: 501, id_materia: 1011, cantidad_horas: 80, orden: 1 },
        { id: 19, id_carrera: 5, id_malla: 501, id_materia: 1012, cantidad_horas: 75, orden: 2 },

        // Arquitectura - Malla 2023 (id: 601)
        { id: 20, id_carrera: 6, id_malla: 601, id_materia: 1016, cantidad_horas: 90, orden: 1 },
        { id: 21, id_carrera: 6, id_malla: 601, id_materia: 1017, cantidad_horas: 80, orden: 2 },
        { id: 22, id_carrera: 6, id_malla: 601, id_materia: 1018, cantidad_horas: 70, orden: 3 },

        // Marketing Digital - Malla 2024 (id: 701)
        { id: 23, id_carrera: 7, id_malla: 701, id_materia: 1010, cantidad_horas: 60, orden: 1 }
    ];

    // --- DOM Elements ---
    const searchInput = document.getElementById('searchInput');
    const mallaFilter = document.getElementById('mallaFilter');
    const careersTableBody = document.querySelector('#careersTable tbody');
    const exportExcelBtn = document.getElementById('exportExcelBtn');
    const exportPdfBtn = document.getElementById('exportPdfBtn');
    const printBtn = document.getElementById('printBtn');

    // Modal elements
    const detailsModal = document.getElementById('detailsModal');
    const closeButton = document.querySelector('.close-button');
    const detailName = document.getElementById('detailName');
    const detailDescription = document.getElementById('detailDescription');
    const detailDuration = document.getElementById('detailDuration');
    const detailCode = document.getElementById('detailCode');
    const detailModality = document.getElementById('detailModality');
    const careerCoursesList = document.getElementById('careerCoursesList');
    const coursesTitle = document.getElementById('coursesTitle');
    const currentMallaNameSpan = document.getElementById('currentMallaName');
    const noCoursesMessage = document.getElementById('noCoursesMessage');

    // --- Helper Functions ---

    // Populates the Malla filter dropdown
    const populateMallaFilter = () => {
        const uniqueMallas = [];
        const mallaIdsAdded = new Set();

        mallas.forEach(malla => {
            if (!mallaIdsAdded.has(malla.id)) {
                uniqueMallas.push(malla);
                mallaIdsAdded.add(malla.id);
            }
        });

        uniqueMallas.sort((a, b) => a.description.localeCompare(b.description)); // Sort alphabetically

        uniqueMallas.forEach(malla => {
            const option = document.createElement('option');
            option.value = malla.id;
            option.textContent = malla.description;
            mallaFilter.appendChild(option);
        });
    };

    // Finds the main malla for a career (can be improved if there's a 'primary' flag)
    const getMainMallaForCareer = (careerId) => {
        // For simplicity, let's just pick the first malla found for the career
        const malla = mallas.find(m => m.id_carrera === careerId);
        return malla ? malla.description : 'N/A';
    };

    // Filters and renders careers in the table
    const renderCareers = () => {
        careersTableBody.innerHTML = ''; // Clear existing rows

        const searchTerm = searchInput.value.toLowerCase();
        const selectedMallaId = mallaFilter.value ? parseInt(mallaFilter.value) : null;

        const filteredCareers = careers.filter(career => {
            const matchesSearchTerm = career.name.toLowerCase().includes(searchTerm) ||
                                      career.description.toLowerCase().includes(searchTerm);

            if (selectedMallaId) {
                // Check if this career has the selected malla
                const hasSelectedMalla = mallas.some(malla => malla.id_carrera === career.id && malla.id === selectedMallaId);
                return matchesSearchTerm && hasSelectedMalla;
            }
            return matchesSearchTerm;
        });

        if (filteredCareers.length === 0) {
            const row = careersTableBody.insertRow();
            const cell = row.insertCell();
            cell.colSpan = 5; // Span all columns
            cell.textContent = 'No se encontraron carreras con los filtros aplicados.';
            cell.style.textAlign = 'center';
            cell.style.padding = '20px';
        } else {
            filteredCareers.forEach(career => {
                const row = careersTableBody.insertRow();
                row.insertCell().textContent = career.name;
                row.insertCell().textContent = career.description;
                row.insertCell().textContent = career.duration;
                row.insertCell().textContent = getMainMallaForCareer(career.id); // Display main malla

                const actionsCell = row.insertCell();
                const detailButton = document.createElement('button');
                detailButton.textContent = 'Ver Detalles';
                detailButton.classList.add('detail-button');
                detailButton.addEventListener('click', () => openCareerDetails(career, selectedMallaId));
                actionsCell.appendChild(detailButton);
            });
        }
    };

    // Opens the career details modal
    const openCareerDetails = (career, currentMallaId = null) => {
        detailName.textContent = career.name;
        detailDescription.textContent = career.description;
        detailDuration.textContent = career.duration;
        detailCode.textContent = career.code;
        detailModality.textContent = career.modality;

        careerCoursesList.innerHTML = ''; // Clear previous courses
        noCoursesMessage.style.display = 'none'; // Hide no courses message

        let filteredCarreraMaterias = carrerasMaterias.filter(cm => cm.id_carrera === career.id);

        let mallaDescription = 'Todas las Mallas';
        if (currentMallaId) {
            filteredCarreraMaterias = filteredCarreraMaterias.filter(cm => cm.id_malla === currentMallaId);
            const malla = mallas.find(m => m.id === currentMallaId);
            if (malla) {
                mallaDescription = malla.description;
            }
        }
        currentMallaNameSpan.textContent = mallaDescription;


        if (filteredCarreraMaterias.length > 0) {
            // Sort courses by their defined order
            filteredCarreraMaterias.sort((a, b) => a.orden - b.orden);

            filteredCarreraMaterias.forEach(cm => {
                const materia = materias.find(m => m.id === cm.id_materia);
                if (materia) {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${materia.description} (${cm.cantidad_horas} horas)`;
                    careerCoursesList.appendChild(listItem);
                }
            });
        } else {
            noCoursesMessage.style.display = 'block'; // Show no courses message
        }

        detailsModal.style.display = 'block';
    };

    // Close modal when close button is clicked
    closeButton.addEventListener('click', () => {
        detailsModal.style.display = 'none';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === detailsModal) {
            detailsModal.style.display = 'none';
        }
    });

    // --- Event Listeners ---
    searchInput.addEventListener('input', renderCareers);
    mallaFilter.addEventListener('change', renderCareers);

 exportExcelBtn.addEventListener('click', () => {
    const currentCareersInTable = Array.from(careersTableBody.rows).map(row => {
        // Skip "no results" row if present
        if (row.cells.length <= 1) return null;

        const careerName = row.cells[0].textContent;
        const career = careers.find(c => c.name === careerName);

        if (!career) return null;

        const selectedMallaId = mallaFilter.value ? parseInt(mallaFilter.value) : null;
        const courses = getCoursesForCareer(career.id, selectedMallaId);
        const courseNames = courses.map(c => c.description + (c.cantidad_horas ? ` (${c.cantidad_horas}h)` : '')).join('; ');

        return {
            Nombre: career.name,
            Descripción: career.description,
            Duración: career.duration,
            'Malla Principal': getMainMallaForCareer(career.id),
            Cursos: courseNames
        };
    }).filter(item => item !== null); // Filter out any null entries (like the "no results" row)

    if (currentCareersInTable.length === 0) {
        alert('No hay datos para exportar.');
        return;
    }

    // --- Using SheetJS to create an XLSX file ---
    const worksheet = XLSX.utils.json_to_sheet(currentCareersInTable);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Lista de Carreras");

    // Generate XLSX file and trigger download
    XLSX.writeFile(workbook, 'lista_de_carreras_y_cursos.xlsx');

    alert('Descargando archivo Excel (XLSX). Incluye cursos.');
});

    // Helper to get courses for a career, optionally by malla
  const getCoursesForCareer = (careerId, mallaId = null) => {
    let filteredCoursesCm = carrerasMaterias.filter(cm => cm.id_carrera === careerId);

    if (mallaId) {
        filteredCoursesCm = filteredCoursesCm.filter(cm => cm.id_malla === mallaId);
    }

    // Map to materia objects, adding quantity_hours and sorting by order
    return filteredCoursesCm
        .sort((a, b) => a.orden - b.orden)
        .map(cm => {
            const materia = materias.find(m => m.id === cm.id_materia);
            if (materia) {
                return {
                    id: materia.id,
                    description: materia.description,
                    cantidad_horas: cm.cantidad_horas // Add quantity_hours here
                };
            }
            return null; // In case materia is not found
        })
        .filter(materia => materia !== null); // Filter out any null entries
};

    exportPdfBtn.addEventListener('click', () => {
        // Create a temporary element to hold the content for PDF generation
        const pdfContent = document.createElement('div');
        pdfContent.style.padding = '20px'; // Add some padding for better layout in PDF

        pdfContent.innerHTML += '<h1>Lista de Carreras y Cursos</h1>';

        const currentMallaId = mallaFilter.value ? parseInt(mallaFilter.value) : null;

        if (currentMallaId) {
            const mallaObj = mallas.find(m => m.id === currentMallaId);
            if (mallaObj) {
                pdfContent.innerHTML += `<p><strong>Filtrado por Malla:</strong> ${mallaObj.description}</p><br>`;
            }
        }

        const displayedCareerNames = Array.from(careersTableBody.rows)
                                        .filter(row => row.cells.length > 1) // Filter out "no results" row
                                        .map(row => row.cells[0].textContent);

        const careersToExport = careers.filter(career => displayedCareerNames.includes(career.name));

        if (careersToExport.length === 0) {
            alert('No hay datos para exportar a PDF.');
            return;
        }

        careersToExport.forEach(career => {
            let careerSectionHtml = '<div style="margin-bottom: 20px; page-break-inside: avoid; border-bottom: 1px dashed #ccc; padding-bottom: 10px;">';
            careerSectionHtml += `<h2 style="color: #0056b3; margin-top: 0;">${career.name}</h2>`;
            careerSectionHtml += `<p><strong>Descripción:</strong> ${career.description}</p>`;
            careerSectionHtml += `<p><strong>Duración:</strong> ${career.duration} años</p>`;

            const courses = getCoursesForCareer(career.id, currentMallaId);
            if (courses.length > 0) {
                careerSectionHtml += '<h3 style="color: #007bff; margin-top: 15px;">Cursos:</h3>';
                careerSectionHtml += '<ul style="list-style-type: disc; padding-left: 25px; margin-top: 5px;">';
                courses.forEach(course => {
                    // Find the specific carrerasMaterias entry to get accurate cantidad_horas for the display
                    const cm = carrerasMaterias.find(c =>
                        c.id_carrera === career.id &&
                        c.id_materia === course.id &&
                        (!currentMallaId || c.id_malla === currentMallaId) // Crucial for filtering by current malla
                    );
                    careerSectionHtml += `<li>${course.description} (${cm ? cm.cantidad_horas : 'N/A'} horas)</li>`;
                });
                careerSectionHtml += '</ul>';
            } else {
                careerSectionHtml += '<p>No hay cursos asignados para esta selección.</p>';
            }
            careerSectionHtml += '</div>';
            pdfContent.innerHTML += careerSectionHtml;
        });

        // html2pdf options
        const options = {
            margin: 10,
            filename: 'lista_de_carreras_y_cursos.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        // Generate and download the PDF
        html2pdf().from(pdfContent).set(options).save();

        alert('Generando y descargando PDF...');
    });

    printBtn.addEventListener('click', () => {
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>Imprimir Lista de Carreras y Cursos</title>');
        printWindow.document.write('<link rel="stylesheet" href="style.css">'); // Include CSS for printing
        printWindow.document.write('</head><body>');
        printWindow.document.write('<h1>Lista de Carreras y Cursos</h1>');

        const currentMallaId = mallaFilter.value ? parseInt(mallaFilter.value) : null;

        const displayedCareerNames = Array.from(careersTableBody.rows)
                                        .filter(row => row.cells.length > 1)
                                        .map(row => row.cells[0].textContent);

        const careersToPrint = careers.filter(career => displayedCareerNames.includes(career.name));

        if (currentMallaId) {
            const mallaObj = mallas.find(m => m.id === currentMallaId);
            if (mallaObj) {
                printWindow.document.write(`<p><strong>Filtrado por Malla:</strong> ${mallaObj.description}</p><br>`);
            }
        }


        if (careersToPrint.length === 0) {
            printWindow.document.write('<p>No hay carreras para imprimir con los filtros actuales.</p>');
        } else {
            careersToPrint.forEach(career => {
                printWindow.document.write('<div class="print-career-section">');
                printWindow.document.write(`<h2>${career.name}</h2>`);
                printWindow.document.write(`<p><strong>Descripción:</strong> ${career.description}</p>`);
                printWindow.document.write(`<p><strong>Duración:</strong> ${career.duration} años</p>`);

                const courses = getCoursesForCareer(career.id, currentMallaId);
                if (courses.length > 0) {
                    printWindow.document.write('<h3>Cursos:</h3>');
                    printWindow.document.write('<ul>');
                    courses.forEach(course => {
                        const cm = carrerasMaterias.find(c => c.id_carrera === career.id && c.id_materia === course.id && (!currentMallaId || c.id_malla === currentMallaId));
                        printWindow.document.write(`<li>${course.description} (${cm ? cm.cantidad_horas : 'N/A'} horas)</li>`);
                    });
                    printWindow.document.write('</ul>');
                } else {
                    printWindow.document.write('<p>No hay cursos asignados para esta selección.</p>');
                }
                printWindow.document.write('</div>');
            });
        }

        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
    });

    // --- Initializations ---
    populateMallaFilter();
    renderCareers(); // Initial render of careers
});