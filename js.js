function createCalendar(year, month) {
            const calendar = document.getElementById('calendar');
            const date = new Date(year, month - 1, 1);
            const daysInMonth = new Date(year, month, 0).getDate();

            const monthNames = [
                'Січень', 'Лютий', 'Березень', 'Квітень',
                'Травень', 'Червень', 'Липень', 'Серпень',
                'Вересень', 'Жовтень', 'Листопад', 'Грудень'
            ];

            const table = document.createElement('table');
            const thead = document.createElement('thead');
            const tbody = document.createElement('tbody');

            const headerRow = document.createElement('tr');
            for (let i = 0; i < 7; i++) {
                const th = document.createElement('th');
                th.textContent = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'][i];
                headerRow.appendChild(th);
            }
            thead.appendChild(headerRow);

            let day = 1;
            for (let i = 0; i < 6; i++) {
                const row = document.createElement('tr');
                for (let j = 0; j < 7; j++) {
                    if (i === 0 && j < date.getDay()) {
                        const emptyCell = document.createElement('td');
                        row.appendChild(emptyCell);
                    } else if (day <= daysInMonth) {
                        const cell = document.createElement('td');
                        cell.textContent = day;
                        row.appendChild(cell);
                        day++;
                    }
                }
                tbody.appendChild(row);
            }

            table.appendChild(thead);
            table.appendChild(tbody);
            calendar.innerHTML = '';
            calendar.appendChild(table);
        }

        const today = new Date();
        createCalendar(today.getFullYear(), today.getMonth() + 1);
		
		function updateClock() {
			const clockElement = document.getElementById('clock');
			const now = new Date();
			const hours = now.getHours().toString().padStart(2, '0');
			const minutes = now.getMinutes().toString().padStart(2, '0');
			const seconds = now.getSeconds().toString().padStart(2, '0');
			const timeString = `${hours}:${minutes}:${seconds}`;
			clockElement.textContent = timeString;
		}

		setInterval(updateClock, 1000);

		updateClock();