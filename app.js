

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
        const activeTexts = document.querySelectorAll('.user-text');

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

        const togglebtn = document.querySelector('#togglebtn');
        const card_1_front = document.querySelectorAll('#card_1_front');
        const card_1_back = document.querySelectorAll('#card_1_back');

        console.log(togglebtn);
        console.log(card_1_front);
        console.log(card_1_back);
        
        

        togglebtn.addEventListener('change', () => {
            card_1_front.forEach(card => {
                card.classList.toggle('-rotate-y-180');
            })
            //card_1_front.classList.toggle('-rotate-y-180');
            //card_1_back.classList.toggle('rotate-y-180');
            card_1_back.forEach(cardb => {
                cardb.classList.toggle('rotate-y-180');
            })
        })
 