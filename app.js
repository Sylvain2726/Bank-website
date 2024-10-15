

        // Mobile menu

        const humburger = document.getElementById('humburger');
        const menu = document.getElementById('menu');
        const hLink = document.querySelectorAll('#hLink');
        const fasolid = document.querySelector('.fa-solid');

        humburger.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            fasolid.classList.toggle('fa-xmark');
        })

       hLink.forEach(link =>{

        link.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            fasolid.classList.toggle('fa-xmark');
        })
        
       });

        // testimonial
        const userPics = document.querySelectorAll('.user-pic');
        const activeTexts = document.querySelectorAll('.active-text');

        function showPreview() {

            for (const userPic of userPics) {
                userPic.classList.remove('active-pic')
            }

            for (const activeText of activeTexts) {
                activeText.classList.remove('active-text')
            }

            let i = Array.from(userPics).indexOf(event.target);

            userPics[i].classList.add('active-pic');
            activeTexts[i].classList.add('active-text');

            
        }
 