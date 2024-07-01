document.addEventListener('DOMContentLoaded', function () {
            const token = localStorage.getItem('token');

            if (!token) {
                window.location.href = 'https://pr2bm-danial.github.io/login/login.html';
            } else {
                fetch('http://localhost:3000/protected', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Token ungültig');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Zugriff gewährt:', data.message);
                })
                .catch(error => {
                    console.error('Fehler:', error);
                    window.location.href = 'https://pr2bm-danial.github.io/login/login.html';
                });
            }
        });