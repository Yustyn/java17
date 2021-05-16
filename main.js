let $name = document.getElementById('inpName'),
    $phone = document.getElementById('inpPhone'),
    $email = document.getElementById('inpEmail'),
    $location = document.getElementById('inpLocation'),
    $website = document.getElementById('inpWebSite'),
    $jumbo = document.querySelectorAll('body>.container>.jumbotron'),
    $cont = document.querySelector('body>.container')

inpSubmit.addEventListener('click', () => {
    register()
    display_contacts()
})

addNewContact.addEventListener('click', () => {
    addForm.classList.toggle('d-none')
})

function register() {
    let logg = []
    if ($name.value && $phone.value && $email.value && $location.value && $website.value) {
        logg.push($name.value)
        logg.push($phone.value)
        logg.push($email.value.toLowerCase())
        logg.push($location.value)
        logg.push($website.value.toLowerCase())
        window.localStorage.setItem($name.value, logg)
    }
}

function display_contacts() {
    keys = Object.keys(localStorage)
    for (element of keys) {
        let q = (window.localStorage.getItem(element).split(','))
        let cont = `<div class='container'><div class="jumbotron contact">
        <input type="submit" value="Delete" class='deleteContact'>
        <div class="row">
            <div class="col-md-4 col-xs-12 col-sm-6 col-lg-4">
                <img src="https://www.svgimages.com/svg-image/s5/man-passportsize-silhouette-icon-256x256.png"
                    alt="stack photo" class="img">
            </div>
            <div class="col-md-8 col-xs-12 col-sm-6 col-lg-8">
                <div class="container" style="border-bottom:1px solid black">
                    <h2 class='name'>${q[0]}</h2>
                </div>
                <hr>
                <ul class="container details">
                    <li>
                        <p><span class="glyphicon glyphicon-earphone one" style="width:50px;"></span><a href="tel:${q[1]}">${q[1]}</a>
                        </p>
                    </li>
                    <li>
                        <p><span class="glyphicon glyphicon-envelope one"
                                style="width:50px;"></span><a href="mailto:${q[2]}">${q[2]}</a></p>
                    </li>
                    <li>
                        <p><span class="glyphicon glyphicon-map-marker one" style="width:50px;"></span>${q[3]}</p>
                    </li>
                    <li>
                        <p><span class="glyphicon glyphicon-new-window one" style="width:50px;"></span><a
                                href="#">${q[4]}</p></a>
                </ul>
            </div>
        </div>
    </div></div>`
        $cont.insertAdjacentHTML(`afterend`, cont)
    }

}

display_contacts()

let $deleteBtn = document.querySelectorAll('.deleteContact'),
    $contact = document.querySelectorAll('.contact'),
    $nameh = document.querySelectorAll('.name')


function deleteItem() {
    for (let i = 0; i < $deleteBtn.length; i++) {
        $deleteBtn[i].addEventListener('click', () => {
            localStorage.removeItem($nameh[i].textContent)
            $contact[i].remove()
        })
    }
}

deleteItem()




