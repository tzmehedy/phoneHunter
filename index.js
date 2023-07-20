const loadPhones = async(searchText) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}

const displayPhones = (phones) => {
    const phonesContainer = document.getElementById('phonesContainer');
    phonesContainer.innerHTML = '';
    phones = phones.slice(0,10);

    const noPhone = document.getElementById('noResultFound');
    if(phones.length ===0){
        noPhone.classList.remove('d-none');
    }
    else{
        noPhone.classList.add('d-none');
    }
    phones.forEach(phone => {
        // console.log(phone);
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card h-100">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        `
        phonesContainer.appendChild(phoneDiv);
        
    });

    loader(false);

}

const loadSearchText = () =>{
    const searchText = document.getElementById('searchText').value;
    loadPhones(searchText);
    // start spinner
    loader(true);
}

const loader = (isloading) =>{
    const spinner = document.getElementById('spinner');
    if(isloading){
        spinner.classList.remove('d-none');
    }
    else{
        spinner.classList.add('d-none');
    }
}

// loadPhones();