const cityName=document.getElementById('cityName');
const submitbtn=document.getElementById('submitbtn');
const city_name=document.getElementById('city_name');
const temp_real_val=document.getElementById('temp_real_val')
const temp_status=document.getElementById('temp_status')

const datahide=document.querySelector('.middle_layer');

const getInfo=async(event)=>{
    event.preventDefault();
    let cityval=cityName.value;
    
 if(cityval==""){
    city_name.innerText= `plz write the name before search`;
    datahide.classList.add('data_hide');

 }else{
     try{
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=9270ea351549f7646ac47a71735107d2`;
        const response= await fetch(url);
        const data=await response.json();
        const arrData=[data];
        //console.log(response);
        
        city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
        temp_real_val.innerText=arrData[0].main.temp;
        //temp_status.innerText=arrData[0].weather[0].main;
        
        const tempStatus=arrData[0].weather[0].main;

        if(tempStatus=='Sunny' || 'Clear'){
            temp_status.innerHTML=
               "<i class='fas fa-sun' style='color: #ffff00;'></i>";
        } else if(tempStatus=='Clouds'){
            temp_status.innerHTML=
               "<i class='fas fa-cloud' style='color: #ffffff;'></i>";
        } else if(tempStatus=='Rainy'){
            temp_status.innerHTML=
               "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
        } else{
            temp_status.innerHTML=
               "<i class='fas fa-sun' style='color: #ffff00;'></i";
        }
        datahide.classList.remove('data_hide');
    }catch{
        city_name.innerText= `plz write the Valid city name`;
        datahide.classList.add('data_hide');
     }
    
 }
}


submitbtn.addEventListener('click',getInfo);