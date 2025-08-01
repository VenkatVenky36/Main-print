
    <script>
        // Custom Cursor
        const cursor = document.querySelector('.nature-cursor');
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        document.addEventListener('mousedown', () => cursor.style.transform = 'scale(0.8)');
        document.addEventListener('mouseup', () => cursor.style.transform = 'scale(1)');

        // Create Nature Elements
        const natureElements = ['🌸', '🦋', '🌙', '⭐', '🌊', '🌺', '🍃', '🌷', '🌻', '🌼'];
        
        function createNatureElement() {
            const element = document.createElement('div');
            element.className = 'nature-element';
            element.innerHTML = natureElements[Math.floor(Math.random() * natureElements.length)];
            element.style.left = Math.random() * 100 + 'vw';
            element.style.animationDuration = (Math.random() * 8 + 8) + 's';
            element.style.fontSize = (Math.random() * 15 + 20) + 'px';
            document.getElementById('natureElements').appendChild(element);
            
            setTimeout(() => element.remove(), 12000);
        }

        // Create Mystical Particles
        function createMysticalParticle() {
            const particle = document.createElement('div');
            particle.className = 'mystical-particle';
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            
            const colors = ['#ff6b9d', '#c44569', '#8e44ad', '#3498db', '#2ecc71', '#f39c12'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            particle.style.background = color;
            particle.style.boxShadow = `0 0 15px ${color}`;
            
            document.getElementById('mysticalParticles').appendChild(particle);
            
            setTimeout(() => particle.remove(), 15000);
        }

        // Music Control
        const musicControl = document.getElementById('musicControl');