var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();
tdate = dd + '-' + mm + '-' + yyyy;
tomorrow = dd + '-' + mm + '-' + yyyy;
var from = " ";
var to = " ";
var searchedflights =[];
var goSearchedFlights = [];
var  retSearchedFlights = [];
var flightscount = {};
var  adults = 1;
var children = 0;
var infants = 0;
var slectedClass= "Premium Economy"
var total_travellers =adults+children+infants;
var  toFlights;
var  fromFlights;
var searchClicked = false;
localStorage.clear();
$('#content').hide();
$('#travellers').text(total_travellers)
function radiobgchange(){
    var selectedOption =document.querySelector('input[name="tripchoice"]:checked').value;
    if(selectedOption=="rtrip"){
        document.getElementById("date2").disabled = false; 
        document.getElementById("date2").defaultValue = tdate;
        document.getElementById("srdate").style.zIndex= 0;
      
    }
    else{
        document.getElementById("date2").disabled = true;
        document.getElementById("date2").defaultValue = "RETURN";
        document.getElementById("date2").style.zIndex= 0;
        document.getElementById("srdate").style.zIndex= 10;
    }
    var elements = document.getElementsByClassName('tchoice');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('grey-bg');
        var c1 = elements[i].children[0];
        c1.classList.remove('r-button');
        var c2 = elements[i].children[1];
        c2.classList.remove('r-label')
    }

    var selected = document.getElementById(selectedOption)
    selected.classList.add('grey-bg')
    selected.children[0].classList.add('r-button')
    selected.children[1].classList.add('r-label')

    if(searchClicked == true)
        dtimeFFlights = []
        atimeFFlights = []
        namefilters =[]
        search()

}
$("#oway").addClass("grey-bg")
$('#oway > :nth-child(1)').addClass('r-button');
$('#oway > :nth-child(2)').addClass('r-label');
$("#otrip").attr('checked',true);



const  flights =[
    {
        "name": "IndiGo",
        "source": "Delhi",
        "dest": "Mumbai",
        "economyprice": "7500",
        "businessprice": "12500",
        "premiumeconomyprice": "5600",
        "duration": "05 h 05 m",
        "dtime": "07:55",
        "atime": "13:00",
        "dt": "m",
        "at": "af",
        "img": "i",
        "fno": 0
    },
    {
        "name": "Spice Jet",
        "source": "Delhi",
        "dest": "Mumbai",
        "economyprice": "6500 ",
        "businessprice": "13500",
        "premiumeconomyprice": "5900 ",
        "duration": "07 h 35 m",
        "dtime": "12:40",
        "atime": "20:15",
        "dt": "af",
        "at": "n",
        "img": "sj",
        "fno": 1
    },
    {
        "name": "Spice Jet",
        "source": "Delhi",
        "dest": "Mumbai",
        "economyprice": "6500 ",
        "businessprice": "13500",
        "premiumeconomyprice": "5900 ",
        "duration": "02 h 05 m",
        "dtime": "08:00",
        "atime": "10:05",
        "dt": "m",
        "at": "m",
        "img": "sj",
        "fno": 2
    },
    {
        "name": "Air Asia",
        "source": "Delhi",
        "dest": "Bangalore",
        "economyprice": "5500",
        "businessprice": "14500",
        "premiumeconomyprice": "6400 ",
        "duration": "06 h 25 m",
        "dtime": "04:55",
        "atime": "11:20",
        "dt": "em",
        "at": "m",
        "img": "aa",
        "fno": 3
    },
    {
        "name": "Spice Jet",
        "source": "Delhi",
        "dest": "Bangalore",
        "economyprice": "7500 ",
        "businessprice": "12900",
        "premiumeconomyprice": "7300 ",
        "duration": "05 h 40 m",
        "dtime": "12:40",
        "atime": "18:20",
        "dt": "af",
        "at": "n",
        "img": "sj",
        "fno": 4
    },
    {
        "name": "Spice Jet",
        "source": "Delhi",
        "dest": "Mumbai",
        "economyprice": "5700 ",
        "businessprice": "17500",
        "premiumeconomyprice": "8200 ",
        "duration": "02 h 05 m",
        "dtime": "20:30",
        "atime": "22:35",
        "dt": "n",
        "at": "n",
        "img": "sj",
        "fno": 5
    },
    {
        "name": "Air India",
        "source": "Bangalore",
        "dest": "Greater Noida",
        "economyprice": "5200 ",
        "businessprice": "12800",
        "premiumeconomyprice": "5900 ",
        "duration": "05 h 15 m",
        "dtime": "05:50",
        "atime": "11:05",
        "dt": "em",
        "at": "m",
        "img": "ai",
        "fno": 6
    },
    {
        "name": "Air India",
        "source": "Bangalore",
        "dest": "Greater Noida",
        "economyprice": "6200",
        "businessprice": "11300",
        "premiumeconomyprice": "6600 ",
        "duration": "05 h 10 m ",
        "dtime": "09:30",
        "atime": "14:40",
        "dt": "m",
        "at": "af",
        "img": "ai",
        "fno": 7
    },
    {
        "name": "Spice Jet",
        "source": "Bangalore",
        "dest": "Greater Noida",
        "economyprice": "6800",
        "businessprice": "13900",
        "premiumeconomyprice": "7300 ",
        "duration": "05 h 15 m",
        "dtime": "05:50",
        "atime": "11:05",
        "dt": "em",
        "at": "m",
        "img": "sj",
        "fno": 8
    },
    {
        "name": "Vistara",
        "source": "Bangalore",
        "dest": "Greater Noida",
        "economyprice": "7600",
        "businessprice": "14800",
        "premiumeconomyprice": "5300 ",
        "duration": "06 h 30 m",
        "dtime": "13:25",
        "atime": "19:55",
        "dt": "af",
        "at": "n",
        "img": "v",
        "fno": 9
    },
    {
        "name": "Jet Airlines",
        "source": "Bangalore",
        "dest": "Greater Noida",
        "economyprice": "7800",
        "businessprice": "15400",
        "premiumeconomyprice": "7200 ",
        "duration": "04 h 45 m",
        "dtime": "07:10",
        "atime": "11:55",
        "dt": "m",
        "at": "m",
        "img": "ja",
        "fno": 10
    },
    {
        "name": "Nagraz",
        "source": "Goa",
        "dest": "Mumbai",
        "economyprice": "5300",
        "businessprice": "11800",
        "premiumeconomyprice": "4800 ",
        "duration": "01 h 15 m",
        "dtime": "06:45",
        "atime": "08:00",
        "dt": "m",
        "at": "m",
        "img": "n",
        "fno": 11
    },
    {
        "name": "Go First",
        "source": "Goa",
        "dest": "Mumbai",
        "economyprice": "5700",
        "businessprice": "13800",
        "premiumeconomyprice": "5100 ",
        "duration": "01 h 15 m",
        "dtime": "12:45",
        "atime": "14:00",
        "dt": "af",
        "at": "af",
        "img": "gf",
        "fno": 12
    },
    {
        "name": "TruJet",
        "source": "Goa",
        "dest": "Mumbai",
        "economyprice": "6200",
        "businessprice": "12900",
        "premiumeconomyprice": "5300 ",
        "duration": "01 h 15 m",
        "dtime": "13:15",
        "atime": "14:30",
        "dt": "af",
        "at": "af",
        "img": "tj",
        "fno": 13
    },
    {
        "name": "Air India",
        "source": "Goa",
        "dest": "Mumbai",
        "economyprice": "6900 ",
        "businessprice": "14200",
        "premiumeconomyprice": "5900 ",
        "duration": "01 h 20 m",
        "dtime": "13:10",
        "atime": "14:30",
        "time": "af",
        "img": "ai",
        "fno": 14
    },
    {
        "name": "Spice Jet",
        "source": "Goa",
        "dest": "Mumbai",
        "economyprice": "7200 ",
        "businessprice": "13800",
        "premiumeconomyprice": "6200 ",
        "duration": "01 h 15 m",
        "dtime": "19:50",
        "atime": "21:05",
        "dt": "n",
        "at": "n",
        "img": "sj",
        "fno": 15
    },
    {
        "name": "Go first",
        "source": "Nagpur",
        "dest": "Ahmedabad",
        "economyprice": "4700 ",
        "businessprice": "11300",
        "premiumeconomyprice": "4400",
        "duration": "02 h",
        "dtime": "16:30",
        "atime": "18:30",
        "dt": "af",
        "at": "n",
        "img": "gf",
        "fno": 16
    },
    {
        "name": "Spice Jet",
        "source": "Nagpur",
        "dest": "Ahmedabad",
        "economyprice": "5100 ",
        "businessprice": "13600",
        "premiumeconomyprice": "5200",
        "duration": "04 h 20 m",
        "dtime": "06:30",
        "atime": "10:50",
        "dt": "m",
        "at": "m",
        "img": "sj",
        "fno": 17
    },
    {
        "name": "Alliance Air",
        "source": "Nagpur",
        "dest": "Ahmedabad",
        "economyprice": "6200 ",
        "businessprice": "13200",
        "premiumeconomyprice": "5600",
        "duration": "06 h 50 m",
        "dtime": "10:50",
        "atime": "17:40",
        "dt": "m",
        "at": "n",
        "img": "aa",
        "fno": 18
    },
    {
        "name": "Vistara",
        "source": "Nagpur",
        "dest": "Ahmedabad",
        "economyprice": "6700 ",
        "businessprice": "14200",
        "premiumeconomyprice": "5300",
        "duration": "05 h 10 m",
        "dtime": "16:30",
        "atime": "21:40",
        "dt": "af",
        "at": "n",
        "img": "v",
        "fno": 19
    },
    {
        "name": "Indigo",
        "source": "Nagpur",
        "dest": "Ahmedabad",
        "economyprice": "7300 ",
        "businessprice": "12500",
        "premiumeconomyprice": "6100",
        "duration": "09 h 55 m",
        "dtime": "11:45",
        "atime": "21:40",
        "dt": "m",
        "at": "n",
        "img": "i",
        "fno": 20
    },
    {
        "name": "Vistara ",
        "source": "Mumbai",
        "dest": "Kolkata",
        "economyprice": "8700",
        "businessprice": "15200",
        "premiumeconomyprice": "8500",
        "duration": "02 h 40 m",
        "dtime": "06:10",
        "atime": "08:50",
        "dt": "m",
        "at": "m",
        "img": "v",
        "fno": 21
    },
    {
        "name": "Spice Jet ",
        "source": "Mumbai",
        "dest": "Kolkata",
        "economyprice": "9200",
        "businessprice": "16800",
        "premiumeconomyprice": "9100",
        "duration": "05 h 15 m",
        "dtime": "05:45",
        "atime": "11:00",
        "dt": "em",
        "at": "m",
        "img": "sj",
        "fno": 22
    },
    {
        "name": "TruJet ",
        "source": "Mumbai",
        "dest": "Kolkata",
        "economyprice": "7300",
        "businessprice": "13800",
        "premiumeconomyprice": "7900",
        "duration": "05 h 10 m",
        "dtime": "16:15",
        "atime": "21:25",
        "dt": "af",
        "at": "n",
        "img": "tj",
        "fno": 23
    },
    {
        "name": "Air India ",
        "source": "Mumbai",
        "dest": "Kolkata",
        "economyprice": "7400",
        "businessprice": "14300",
        "premiumeconomyprice": "7600",
        "duration": "7 h 40 m",
        "dtime": "10:45",
        "atime": "18:25",
        "dt": "m",
        "at": "n",
        "img": "ai",
        "fno": 24
    },
    {
        "name": "Air India",
        "source": "Mumbai",
        "dest": "Kolkata",
        "economyprice": "9400",
        "businessprice": "17000",
        "premiumeconomyprice": "9300",
        "duration": "10 h 40 m",
        "dtime": "12:50",
        "atime": "23:30",
        "dt": "af",
        "at": "n",
        "img": "ai",
        "fno": 25
    },
    {
        "name": "Air India",
        "source": "Kolkata",
        "dest": "Bhubaneswar",
        "economyprice": "3600 ",
        "businessprice": "9800",
        "premiumeconomyprice": "3400",
        "duration": "02 h 45 m",
        "dtime": "07:45",
        "atime": "10:30",
        "dt": "m",
        "at": "m",
        "img": "ai",
        "fno": 26
    },
    {
        "name": "Nagraj",
        "source": "Kolkata",
        "dest": "Bhubaneswar",
        "economyprice": "4300 ",
        "businessprice": "11200",
        "premiumeconomyprice": "4200",
        "duration": "01 h 15 m",
        "dtime": "06:15",
        "atime": "07:30",
        "dt": "m",
        "at": "m",
        "img": "n",
        "fno": 27
    },
    {
        "name": "Spice Jet",
        "source": "Kolkata",
        "dest": "Bhubaneswar",
        "economyprice": "5200 ",
        "businessprice": "12400",
        "premiumeconomyprice": "5100",
        "duration": "01 h 10 m",
        "dtime": "18:20",
        "atime": "07:45",
        "dt": "n",
        "at": "n",
        "img": "sj",
        "fno": 28
    },
    {
        "name": "Vistara",
        "source": "Kolkata",
        "dest": "Bhubaneswar",
        "economyprice": "6400 ",
        "businessprice": "13200",
        "premiumeconomyprice": "5700",
        "duration": "01 h 25 m",
        "dtime": "15:10",
        "atime": "16:35",
        "dt": "af",
        "at": "n",
        "img": "v",
        "fno": 29
    },
    {
        "name": "Indigo",
        "source": "Kolkata",
        "dest": "Bhubaneswar",
        "economyprice": "6900 ",
        "businessprice": "13000",
        "premiumeconomyprice": "6000",
        "duration": "1 h 45 m",
        "dtime": "20:10",
        "atime": "21:55",
        "dt": "n",
        "at": "n",
        "img": "i",
        "fno": 30
    },
    {
        "name": "TruJet",
        "source": "Hyderabad",
        "dest": "Mumbai",
        "economyprice": "4600",
        "businessprice": "10000",
        "premiumeconomyprice": "4400",
        "duration": "6 h 05 m",
        "dtime": "14:35",
        "atime": "20.40",
        "dt": "af",
        "at": "n",
        "img": "tj",
        "fno": 31
    },
    {
        "name": "Alliance Air",
        "source": "Hyderabad",
        "dest": "Mumbai",
        "economyprice": "5700",
        "businessprice": "12300",
        "premiumeconomyprice": "5200",
        "duration": "01 h 40 m",
        "dtime": "08:00",
        "atime": "09:40",
        "dt": "m",
        "at": "m",
        "img": "aa",
        "fno": 32
    },
    {
        "name": "Vistara",
        "source": "Hyderabad",
        "dest": "Mumbai",
        "economyprice": "6800 ",
        "businessprice": "13500",
        "premiumeconomyprice": "6700",
        "duration": "01 h 15 m",
        "dtime": "08:25",
        "atime": "09:40",
        "dt": "m",
        "at": "m",
        "img": "v",
        "fno": 33
    },
    {
        "name": "Indigo",
        "source": "Hyderabad",
        "dest": "Mumbai",
        "economyprice": "7100 ",
        "businessprice": "12900",
        "premiumeconomyprice": "6300",
        "duration": "01 h 40 m",
        "dtime": "21:45",
        "atime": "23:25",
        "dt": "n",
        "at": "n",
        "img": "i",
        "fno": 34
    },
    {
        "name": "Speed Airlines",
        "source": "Hyderabad",
        "dest": "Mumbai",
        "economyprice": "7600 ",
        "businessprice": "14700",
        "premiumeconomyprice": "6800",
        "duration": "01 h 30 m",
        "dtime": "09:10",
        "atime": "10.40",
        "dt": "m",
        "at": "m",
        "img": "sa",
        "fno": 35
    },
    {
        "name": "Air Asia",
        "source": "Pune",
        "dest": "Delhi",
        "economyprice": "6900",
        "businessprice": "13200",
        "premiumeconomyprice": "6700",
        "duration": "10 h",
        "dtime": "08:50",
        "atime": "18:50",
        "dt": "m",
        "at": "n",
        "img": "aa",
        "fno": 36
    },
    {
        "name": "Air Asia",
        "source": "Pune",
        "dest": "Delhi",
        "economyprice": "7300 ",
        "businessprice": "14400",
        "premiumeconomyprice": "7400",
        "duration": "08 h 05 m",
        "dtime": "14:30",
        "atime": "22:35",
        "dt": "af",
        "at": "n",
        "img": "aa",
        "fno": 37
    },
    {
        "name": "Air India ",
        "source": "Pune",
        "dest": "Delhi",
        "economyprice": "8100 ",
        "businessprice": "14900",
        "premiumeconomyprice": "7600",
        "duration": "06 h",
        "dtime": "08:50",
        "atime": "14:50",
        "dt": "m",
        "at": "af",
        "img": "ai",
        "fno": 38
    },
    {
        "name": "Vistara",
        "source": "Pune",
        "dest": "Delhi",
        "economyprice": "8400 ",
        "businessprice": "15300",
        "premiumeconomyprice": "8200",
        "duration": "02 h 05 m",
        "dtime": "11:30",
        "atime": "13:35",
        "dt": "m",
        "at": "af",
        "img": "v",
        "fno": 39
    },
    {
        "name": "Air India",
        "source": "Pune",
        "dest": "Delhi",
        "economyprice": "9000 ",
        "businessprice": "16100",
        "premiumeconomyprice": "8800",
        "duration": "02 h",
        "dtime": "19:30",
        "atime": "21:30",
        "dt": "n",
        "at": "n",
        "img": "ai",
        "fno": 40
    },
    {
        "name": "Air Asia",
        "source": "Greater Noida",
        "dest": "Hyderabad",
        "economyprice": "3700 ",
        "businessprice": "8300",
        "premiumeconomyprice": "3500",
        "duration": "07 h 55 m",
        "dtime": "04:55",
        "atime": "12:50",
        "dt": "em",
        "at": "af",
        "img": "aa",
        "fno": 41
    },
    {
        "name": "Spice Jet",
        "source": "Greater Noida",
        "dest": "Hyderabad",
        "economyprice": "5300",
        "businessprice": "10700",
        "premiumeconomyprice": "3800",
        "duration": "01 h 50 m",
        "dtime": "20:20",
        "atime": "22:10",
        "dt": "n",
        "at": "n",
        "img": "sj",
        "fno": 42
    },
    {
        "name": "Go First",
        "source": "Greater Noida",
        "dest": "Hyderabad",
        "economyprice": "4700",
        "businessprice": "9700",
        "premiumeconomyprice": "4100",
        "duration": "06 h 30 m",
        "dtime": "05:50",
        "atime": "12.20",
        "dt": "em",
        "at": "af",
        "img": "gf",
        "fno": 43
    },
    {
        "name": "Indigo",
        "source": "Greater Noida",
        "dest": "Hyderabad",
        "economyprice": "5900",
        "businessprice": "12200",
        "premiumeconomyprice": "6200",
        "duration": "02 h 10 m",
        "dtime": "07:10",
        "atime": "09:20",
        "dt": "m",
        "at": "m",
        "img": "i",
        "fno": 44
    },
    {
        "name": "Air Asia",
        "source": "Greater Noida",
        "dest": "Hyderabad",
        "economyprice": "7200 ",
        "businessprice": "13900",
        "premiumeconomyprice": "7100",
        "duration": "02 h 15 m",
        "dtime": "11:35",
        "atime": "16:10",
        "dt": "m",
        "at": "af",
        "img": "aa",
        "fno": 45
    },
    {
        "name": "Spice Jet",
        "source": "Hyderabad",
        "dest": "Mumbai",
        "economyprice": "5600 ",
        "businessprice": "11700",
        "premiumeconomyprice": "5300",
        "duration": "02 h 20 m",
        "dtime": "20:35",
        "atime": "22:55",
        "dt": "n",
        "at": "n",
        "img": "sj",
        "fno": 46
    },
    {
        "name": "Air India",
        "source": "Hyderabad",
        "dest": "Mumbai",
        "economyprice": "6700 ",
        "businessprice": "12800",
        "premiumeconomyprice": "4900",
        "duration": "02 h 05 m ",
        "dtime": "17:45",
        "atime": "19:50",
        "dt": "n",
        "at": "n",
        "img": "ai",
        "fno": 47
    },
    {
        "name": "Spice Jet",
        "source": "Hyderabad",
        "dest": "Mumbai",
        "economyprice": "7400 ",
        "businessprice": "13400",
        "premiumeconomyprice": "5800",
        "duration": "02 h 10 m",
        "dtime": "16:20",
        "atime": "18:30",
        "dt": "af",
        "at": "n",
        "img": "sj",
        "fno": 48
    },
    {
        "name": "Vistara",
        "source": "Hyderabad",
        "dest": "Mumbai",
        "economyprice": "6500 ",
        "businessprice": "13100",
        "premiumeconomyprice": "6700 ",
        "duration": "05 h 10 m",
        "dtime": "07:10",
        "atime": "12:20",
        "dt": "m",
        "at": "af",
        "img": "v",
        "fno": 49
    },
    {
        "name": "Indigo",
        "source": "Hyderabad",
        "dest": "Mumbai",
        "economyprice": "8000 ",
        "businessprice": "15800",
        "premiumeconomyprice": "7000 ",
        "duration": "01 h 40 m",
        "dtime": "18:10",
        "atime": "19:40",
        "dt": "n",
        "at": "n",
        "img": "i",
        "fno": 50
    },
    {
        "name": "Air Asia",
        "source": "Bangalore",
        "dest": "Indore",
        "economyprice": "4400 ",
        "businessprice": "9700",
        "premiumeconomyprice": "4200 ",
        "duration": "05 h",
        "dtime": "16:25",
        "atime": "21:50",
        "dt": "af",
        "at": "n",
        "img": "aa",
        "fno": 51
    },
    {
        "name": "Indigo",
        "source": "Bangalore",
        "dest": "Indore",
        "economyprice": "5300 ",
        "businessprice": "10800",
        "premiumeconomyprice": "5600 ",
        "duration": "02 h",
        "dtime": "12:50",
        "atime": "14:50",
        "dt": "af",
        "at": "af",
        "img": "aa",
        "fno": 52
    },
    {
        "name": "Spice Jet",
        "source": "Bangalore",
        "dest": "Indore",
        "economyprice": "4400 ",
        "businessprice": "9700",
        "premiumeconomyprice": "4200 ",
        "duration": "07 h 40 m",
        "dtime": "12:25",
        "atime": "20:05",
        "dt": "af",
        "at": "n",
        "img": "sj",
        "fno": 53
    },
    {
        "name": "Air India",
        "source": "Bangalore",
        "dest": "Indore",
        "economyprice": "5300 ",
        "businessprice": "10800",
        "premiumeconomyprice": "5600 ",
        "duration": "06 h 35 m",
        "dtime": "14:50",
        "atime": "21:25",
        "dt": "af",
        "at": "n",
        "img": "ai",
        "fno": 54
    },
    {
        "name": "Spice Jet",
        "source": "Bhubaneswar",
        "dest": "Bangalore ",
        "economyprice": "9800",
        "businessprice": "16600",
        "premiumeconomyprice": " 9500",
        "duration": "06 h 35 m",
        "dtime": "09:15",
        "atime": "15:50",
        "dt": "m",
        "at": "af",
        "img": "sj",
        "fno": 55
    },
    {
        "name": "Vistara ",
        "source": "Bhubaneswar",
        "dest": "Bangalore ",
        "economyprice": "8700",
        "businessprice": "15400",
        "premiumeconomyprice": " 8800",
        "duration": " 02 h 15 m",
        "dtime": "05:55",
        "atime": "08:10",
        "dt": "em",
        "at": "m",
        "img": "v",
        "fno": 56
    },
    {
        "name": "Indigo",
        "source": "Bhubaneswar",
        "dest": "Bangalore ",
        "economyprice": "10000",
        "businessprice": "17800",
        "premiumeconomyprice": " 9700",
        "duration": "02 h",
        "dtime": "12:15",
        "atime": "14:15",
        "dt": "af",
        "at": "af",
        "img": "i",
        "fno": 57
    },
    {
        "name": "Spice Jet",
        "source": "Bangalore",
        "dest": "Delhi",
        "economyprice": "7300 ",
        "businessprice": "13800",
        "premiumeconomyprice": "7100 ",
        "duration": "02 h",
        "dtime": "17:20",
        "atime": "19:20",
        "dt": "af",
        "at": "n",
        "img": "sj",
        "fno": 58
    },
    {
        "name": "TruJet",
        "source": "Bangalore",
        "dest": "Delhi",
        "economyprice": "8400",
        "businessprice": "14600",
        "premiumeconomyprice": "7900 ",
        "duration": "02 h 40 m ",
        "dtime": "07:45",
        "atime": "10:25",
        "dt": "m",
        "at": "m",
        "img": "tj",
        "fno": 59
    },
    {
        "name": "Indigo",
        "source": "Bangalore",
        "dest": "Delhi",
        "economyprice": "9100 ",
        "businessprice": "15900",
        "premiumeconomyprice": "8900 ",
        "duration": "02 h 45 m",
        "dtime": "12:55",
        "atime": "15:40",
        "dt": "af",
        "at": "af",
        "img": "i",
        "fno": 60
    },
    {
        "name": "Indigo",
        "source": "Bangalore",
        "dest": "Delhi",
        "economyprice": "8600 ",
        "businessprice": "14700",
        "premiumeconomyprice": "8400 ",
        "duration": "05 h 15 m",
        "dtime": "05:50",
        "atime": "11:05",
        "dt": "em",
        "at": "m",
        "img": "i",
        "fno": 61
    },
    {
        "name": "Air Asia",
        "source": "Bangalore",
        "dest": "Delhi",
        "economyprice": "6700 ",
        "businessprice": "15400",
        "premiumeconomyprice": "9300 ",
        "duration": "02 h 45 m",
        "dtime": "14:35",
        "atime": "17:20",
        "dt": "af",
        "at": "n",
        "img": "aa",
        "fno": 62
    },
    {
        "name": "Air Asia",
        "source": "Indore",
        "dest": "Greater Noida ",
        "economyprice": "6600 ",
        "businessprice": "16300",
        "premiumeconomyprice": "6300 ",
        "duration": "01 h 30 m",
        "dtime": "12:10",
        "atime": "14:25",
        "dt": "af",
        "at": "af",
        "img": "aa",
        "fno": 63
    },
    {
        "name": "Air India",
        "source": "Indore",
        "dest": "Greater Noida ",
        "economyprice": "7400 ",
        "businessprice": "15500",
        "premiumeconomyprice": "5900 ",
        "duration": "03 h 10 m",
        "dtime": "10:20",
        "atime": "13:30",
        "dt": "m",
        "at": "af",
        "img": "ai",
        "fno": 64
    },
    {
        "name": "Spice Jet",
        "source": "Mumbai",
        "dest": "Bangalore",
        "economyprice": "6800 ",
        "businessprice": "14200",
        "premiumeconomyprice": "6400 ",
        "duration": "01 h 40 m",
        "dtime": "17:45",
        "atime": "19:25",
        "dt": "n",
        "at": "n",
        "img": "sj",
        "fno": 65
    },
    {
        "name": "Indigo",
        "source": "Mumbai",
        "dest": "Bangalore",
        "economyprice": "7600 ",
        "businessprice": "13800",
        "premiumeconomyprice": "7300 ",
        "duration": "03 h 35 m ",
        "dtime": "14:30",
        "atime": "18:05",
        "dt": "af",
        "at": "n",
        "img": "i",
        "fno": 66
    },
    {
        "name": "TruJet",
        "source": "Mumbai",
        "dest": "Bangalore",
        "economyprice": "6400 ",
        "businessprice": "13500",
        "premiumeconomyprice": "7500 ",
        "duration": "02 h 05 m",
        "dtime": "19:50",
        "atime": "22:55",
        "dt": "n",
        "at": "n",
        "img": "tj",
        "fno": 67
    },
    {
        "name": "Air Asia",
        "source": "Bangalore",
        "dest": "Pune",
        "economyprice": "8600 ",
        "businessprice": "16400",
        "premiumeconomyprice": "8000 ",
        "duration": "01 h 30 m",
        "dtime": "08:50",
        "atime": "10:20",
        "dt": "m",
        "at": "m",
        "img": "aa",
        "fno": 68
    },
    {
        "name": "TruJet",
        "source": "Bangalore",
        "dest": "Pune",
        "economyprice": "8900 ",
        "businessprice": "16000",
        "premiumeconomyprice": "8200 ",
        "duration": "01 h 40 m",
        "dtime": "15:15",
        "atime": "16:55",
        "dt": "af",
        "at": "af",
        "img": "tj",
        "fno": 69
    }
]



var airports = [
    {"city" : "Greater Noida" ,"name":"Noida International Airport"},
    {"city" : "Hyderabad" ,"name":"Rajiv Gandhi International Airport"},
    {"city" : "Mumbai" ,"name":"Chhatrapati Shivaji International Airport"},
    {"city" : "Bangalore" ,"name":"Bangalore International Airport"},
    {"city" : "Bhubaneswar" ,"name":"Biju Patnaik International Airport"},
    {"city" : "Chennai" ,"name":"Chennai International Airport"},
    {"city" : "Visakhapatnam" ,"name":"Visakhapatnam Airport"},
    {"city" : "Jaipur" ,"name":"Jaipur International Airport"},
    {"city" : "Coimbatore" ,"name":"Coimbatore International Airport"},
    {"city" : "Pune" ,"name":"Pune International Airport"},
    {"city" : "Delhi" ,"name":"Delhi Airport"},
    {"city" : "Gangtok" ,"name":"Pakyong Airport India"},
    {"city" : "Chandigarh" ,"name":" Chandigarh Airport India"},
    {"city" : "Nagpur" ,"name":"Dr. Babasaheb Ambedkar International Airport"},
    {"city" : "Ahmedabad" ,"name":"Sardar Vallabhbhai Patel International Airport India"},
    {"city" : "Kolkata" ,"name":"Nscbi Airport"},
    {"city" : "Raipur" ,"name":"Raipur Airport India"},
    {"city" : "Indore" ,"name":"Devi Ahilyabai Holkar Airport India"},
    {"city" : "Goa" ,"name":" Dabolim Goa International Airport"},     
]

fromdate ={}
todate ={}

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var today = new Date();
var date = today.getDate()
var day = today.getDay();
day = days[day]
var month = today.toLocaleString('default', { month: 'short' });
var year = today.getFullYear();
year = year.toString().substr(-2);
var d1 = date + " " +month +"'"+year;
fromdate.day=day;
fromdate.date = date;
fromdate.month = month;
today.setDate(today.getDate() + 1);
var tdate = today.getDate()
var tday = today.getDay();
tday = days[tday]
var tmonth = today.toLocaleString('default', { month: 'short' });
var tyear = today.getFullYear();
tyear = tyear.toString().substr(-2);
todate.day=tday;
todate.date = tdate;
todate.month = tmonth;
var d2 = tdate +" "+ tmonth +"'"+ tyear;
$("#ddate").text(d1);
$("#rdate").text(d2);
$("#dday").text(day);
$("#rday").text(tday);




$("#date1").change(function(){
    temp = $("#date1").val();
    let today = new Date(temp)
    var date = today.getDate()
    var day = today.getDay();
    day = days[day]
    var month = today.toLocaleString('default', { month: 'short' });
    fromdate.day=day;
    fromdate.date = date;
    fromdate.month = month
    var year = today.getFullYear();
    year = year.toString().substr(-2);
    let d1 = date + " " +month +"'"+year;
    $("#ddate").text(d1);
    $("#dday").text(day);
});
$("#date2").change(function(){
    temp = $("#date2").val();
    let today = new Date(temp)
    var date = today.getDate()
    var day = today.getDay();
    day = days[day]
    var month = today.toLocaleString('default', { month: 'short' });
    todate.day=day;
    todate.date = date;
    todate.month = month;
    var year = today.getFullYear();
    year = year.toString().substr(-2);
    let d1 = date + " " +month +"'"+year;
    $("#rdate").text(d1);
    $("#rday").text(day);
});
$("#date1").hide()
$("#date2").hide()
$("#date1").blur(function(){

    $("#date1").hide()
});
$("#date2").blur(function(){

    $("#date2").hide()
});
$("#sddate").click(function(){

    $("#date1").show()
});
$("#srdate").click(function(){

    $("#date2").show()
});

for(i = 0; i < airports.length; i++) {
    var ele = 
        '<div class="fcard" onclick="updatefrom(this)">'+'<span class="material-icons fdicon">'+
        'flight_takeoff'+
        '</span>'+
        '<p class="f-title fplace" id="fplace">'+airports[i]['city']+'</p>'+
        '<p class=" fport"  id="fport">'+airports[i]['name']+ '</p>'+                                    
        '</div>'
    $('#fdrop').append(ele);
}
for(i = 0; i < airports.length; i++) {
    var ele = 
    '<div class="fcard " onclick="updateto(this)">'+
    '<span class="material-icons fdicon">'+
        'flight_takeoff'+
        '</span>'+
      '<p class="card-title fplace" id="tplace">'+airports[i]['city']+'</p>'+
      '<p class="card-text fport"  id="tport">'+airports[i]['name']+ '</p>'+                                     
   '</div>'
    $('#rdrop').append(ele);
}  

$('#fdrop').hide()
$('#rdrop').hide()
var showfdrop = false;
var showrdrop = false;

$("#from").click(function(){
    if(showfdrop ==false ){
        $("#fdrop").show()
        showfdrop = true;
        $("#rdrop").hide()
        showrdrop = false;
        
    }
    else{
        $("#fdrop").hide()
        showfdrop = false;
    }   
});
$("#to").click(function(){
    if(showrdrop ==false ){
        $("#rdrop").show()
        showrdrop = true;
        $("#fdrop").hide()
        showfdrop = false;
                
    }
    else{
        $("#rdrop").hide()
        showrdrop = false;
    }
});

var fromport = "Delhi AirPort India";
var toport = "Bangalore Intrenational AirPort India";
function updatefrom(stn){
    let place = $(stn).find("#fplace").text();
    let port =  $(stn).find("#fport").text();
    fromport = port;
    $("#sfrom").text(place)
    $("#sfport").text(port)
    $("#fdrop").hide()
    showfdrop = false;
    from = place;
}
function updateto(stn){
    let place = $(stn).find("#tplace").text();
    let port =  $(stn).find("#tport").text();
    toport= port;
    $("#sto").text(place)
    $("#stport").text(port)
    $("#rdrop").hide()
    showrdrop = false;
    to = place
}
var showtravels = false;
$("body").click(function(event){
    if(showfdrop ==true ){
        $("#fdrop").hide()
        showfdrop = false;       
    }
    if(showrdrop ==true ){
        $("#rdrop").hide()
        showrdrop = false;     
    }
    if(showtravels ==true ){
        $(".travels").hide()
        showtravels = false;     
    } 
    
});
$("body").on('click', "#from", function(e) {
    e.stopPropagation();
  });
$("body").on('click', "#to", function(e) {
    e.stopPropagation();
  });
  
  $("body").on('click', "#stravels", function(e) {
    e.stopPropagation();
  });
$(".tt-li").click(function(){
    sid = $(this).prop('id');
    cls =  $(this).parent().prop('className')
    if(cls=="adult-list"){
        $(".a-li").removeClass("selected")
        $(this).addClass("selected")
        $(this).removeClass("li-hover")

    }
    if(cls=="child-list"){
        $(".c-li").removeClass("selected")
        $(this).addClass("selected")
        $(this).removeClass("li-hover")

    }
    if(cls=="infant-list"){
        $(".i-li").removeClass("selected")
        $(this).addClass("selected")
        $(this).removeClass("li-hover")

    }
    if(cls=="ctype-list"){
        $(".t-li").removeClass("selected")
        $(this).addClass("selected")
        $(this).removeClass("li-hover")

    }
});
$(".travels").hide()


$("#stravels").click(function(){
    if(showtravels ==false ){
        $(".travels").show()
        showtravels = true;        
    }
    else{
        $(".travels").hide()
        showtravels = false;
    }   
});

$(".a-li").click(function(){
    let adults_new = $(this).text()
    adults = +adults_new
    total_travellers =adults+children +infants
    $('#travellers').text(total_travellers)
})
$(".c-li").click(function(){
    let children_new = $(this).text()
    children = +children_new
    total_travellers =adults+children +infants
    $('#travellers').text(total_travellers)
})
$(".i-li").click(function(){
    let infants_new = $(this).text()
    infants = +infants_new
    total_travellers =adults+children +infants
    $('#travellers').text(total_travellers)
    $('#travellers').text(total_travellers)
})
var fclasssel = "premiumeconomyprice"
var infoclass = "Premium"
$(".t-li").click(function(){
    let clsel= $(this).attr('id')
    if(clsel =="tp"){
    fclasssel ="premiumeconomyprice"
    infoclass= "Premium"
    }
    else if(clsel =="tb"){
    fclasssel ="businessprice"
    infoclass = "Business"
    }
    else if(clsel =="te"){
    fclasssel ="economyprice"
    infoclass = "Economy"
    }
    let sclass = $(this).text()
    $('#selected_class').text(sclass)
})

function search(){
    searchClicked = true
    let ch = document.querySelector('input[name="tripchoice"]:checked').value
    if(ch == "oway"){
        searchedflights = []
        nameFFlights = []
        nameFFlightsGo =[]
        nameFFlightsRet =[]
        dtimeFFlights = []
        atimeFFlights = []
        namefilters =[]
        filteratime =''
        filterdtime =''
        $('.fr').remove()
        $('#content').show()
        $('#result').show()
        $('#restway').hide()
        let sfrom = $('#sfrom').text()
        let sto = $('#sto').text();
        if(sfrom == sto){
            let ele=
            `<div class="alert alert-warning alert-dismissible fade show sdeq w-50 mt-5 " role="alert">
            <strong>Source and destination cannot be same</strong>
            <button type="button" class="close btn btn-outline cbtn" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>'
            </div>`
            $('.sdeq').remove()
            $('.nof').remove()
            $('#main').append(ele);
        }
        else{
            sfrom = sfrom[0].toUpperCase()+sfrom.slice(1)
            searchedflights  = flights.filter(f =>   f.source ==  sfrom & f.dest == sto )
            if(searchedflights.length>0){
                updateFlights()
                $('#content').show();
            }
            else{
                $('.fl-count').remove()
                let ele = 
                `<div class="alert alert-warning alert-dismissible fade show nof w-50 mt-5 " role="alert">
                <strong>No flights from ${from} to ${to}</strong>
                <button type="button" class="close btn btn-outline cbtn" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>'
                </div>`
                $('.nof').remove()
                $('.sdeq').remove()
                $('#main').append(ele);

            }
        }
    }
    else{
        $('.fr').remove()
        goSearchedFlights = []
        retSearchedFlights =[]
        nameFFlightsGo = []
        nameFFlightsRet =[]
        rtripsearch()

    }
}
var namefilters =[]
function updatefilters(e){
    let chkid= $(e).attr('id')
    let chkval = chkid.replace('@', ' ');
    if($(e).prop("checked")== true){
        namefilters.push(chkval)
    }
    else{
        if(namefilters.indexOf(chkval) >= 0){
            namefilters = namefilters.filter(value => value !== chkval);
        }
    }
    applyNameTimeFilters()
}
var filterdtimes = []
var filteratimes = []
$(".dtime").click(function(){
    $(this).toggleClass('btn-primary')
    $(this).toggleClass('btn-outline-secondary')
    fdt= $(this).attr('id')
    filterdtimes.indexOf(fdt)>-1
    let index = filterdtimes.indexOf(fdt);
    if (index > -1) 
        filterdtimes.splice(index, 1);
    else
        filterdtimes.push(fdt)
    applyNameTimeFilters()
})

$(".atime").click(function(){    
    $(this).toggleClass('btn-primary')
    $(this).toggleClass('btn-outline-secondary')
    fat= $(this).attr('id')
    filteratimes.indexOf(fat)>-1
    let index = filteratimes.indexOf(fat);
    if (index > -1) 
        filteratimes.splice(index, 1);
    else
        filteratimes.push(fat)
    applyNameTimeFilters()
})

function updateFlights(){
    $('.nof').remove()
    $('.nfilters').remove()
            $('.sdeq').remove()
            $('.fl-count').remove()
            $('.fdelbtn').remove()
            fclasssel ="economyprice"
            fclasssel ="businessprice"
            fclasssel ="premiumeconomyprice"
            for(i = 0; i < searchedflights.length; i++) {
                f = JSON.stringify(searchedflights[i]);
                let ele = 
                '<div class="row  fr flight-row">'+
                    '<div class="col flex-col "> <img src="Images/'+searchedflights[i]['img'] + '.png" width="90px" class="fimg" ></div>'+
                    '<div class="col flex-col">'+searchedflights[i]['name']+'</div>'+
                    '<div class="col flex-col">'+
                        '<div class=" d-flex justify-content-center pcolor">'+searchedflights[i]['source']+'</div>'+
                        '<div class=" d-flex justify-content-center tcolor">'+searchedflights[i]['dtime']+'</div>'+
                    '</div>'+
                    '<div class="col flex-col">'+searchedflights[i]['duration']+ '</div>'+
                    '<div class="col flex-col">'+
                        '<div  class=" d-flex justify-content-center pcolor">'+searchedflights[i]['dest']+'</div>'+
                        '<div  class="d-flex justify-content-center tcolor">'+searchedflights[i]['atime']+'</div>'+
                    '</div>'+
                    `<div class ="col flex-col detailsbtn" id="${searchedflights[i]['fno']}">
                    <button type="button" class="btn  mbtn viewdetails">Details</button>
                    </div>
                <div class="flightdetails"  id=${i}>
                    <div class="row infohead drow1">
                        <div class="col ">Fares</div>
                        <div class="col">Cabin bag</div>
                        <div class="col">Check-in</div>
                        <div class="col">Cancellation</div>
                        <div class="col col-2">Date Change</div>
                        <div class="col">Seat</div>
                        <div class="col">Meal</div>
                        <div class="col col-2"></div>                      
                    </div>
                    <div class="row info detailsrow drow2">
                        <div class="col fare">${infoclass + "  "+"Saver"}</div>
                        <div class="col">7 Kgs</div>
                        <div class="col">15 Kgs</div>
                        <div class="col">Cancellation Fee Starting ₹ 3,500 upto 2 hrs before departure</div>
                        <div class="col">Date Change fee starting ₹ 3,000 upto 2 hrs before departure</div>
                        <div class="col">Chargeable</div>
                        <div class="col">Chargeable</div>
                        <div class="col col-2 detailedprice">
                            <div class="d-block "><span>&#8377;</span> ${searchedflights[i][fclasssel]}</div>
                            <a  href="pages/bookingsaver.html" target="_blank"class=" btn btn-primary bookbtn">Book Now</a>
                        </div>
                      
                    </div>
                    <div class="row info detailsrow">
                        <div class="col fare">${infoclass +" "+ "Flex"}</div>
                        <div class="col">7 Kgs</div>
                        <div class="col">15 Kgs</div>
                        <div class="col">Cancellation Fee Starting ₹ 3,500 upto 2 hrs before departure</div>
                        <div class="col">Free Date change allowed upto 2 hrs before departure</div>
                        <div class="col">Free seats available</div>
                        <div class="col">Complimentary meals (No meal will be served if flight duration is less than 2 hours)</div>
                        <div class="col col-2 detailedprice">
                            <div><span>&#8377;</span>${+searchedflights[i][fclasssel]+2000}</div>
                            <a href="pages/bookingflex.html" target="_blank" class=" btn btn-primary bookbtn">Book Now</a>
                        </div>
                    </div>
                    </div>
                </div>`
                $('#result').append(ele);
            }
            $('.flightdetails').hide()

            $(".detailsbtn").click(function(e) {
               let  fno = $(this).attr("id")
                console.log(fno)
                let id = $(this).next().attr('id');           
                if ($(this).parent().next().css("visibility")!="show"){
                    $('.flightdetails').hide()
                    $("#" + id).show() 
                    localStorage.setItem('fid', fno);
                    localStorage.setItem('fport', fromport); 
                    localStorage.setItem('tport', toport);
                    localStorage.setItem('children', +children);
                    localStorage.setItem('infants', +infants);
                    localStorage.setItem('adults', +adults);
                    localStorage.setItem('clstype', infoclass);
                    localStorage.setItem('fport', fromport);
                    localStorage.setItem('tport', toport);
                    localStorage.setItem('date1', JSON.stringify(fromdate));
                    localStorage.setItem('date2', JSON.stringify(todate));  
                    
                    
                   
                }
                else{
                    // ($(this).parent().next().css("visibility","visible"))
                    // $('.flightdetails').hide()
                    $("#" + id).hide()
                    // $(this).parent().next().hide()
                    
                    // localStorage.setItem('fid', fno);
                }
    
            });  
            
        $("#restway").hide()
        updateAllFilters()
}



var nameFFlights =[]
var nameFFlightsGo = []
var nameFFlightsRet = []


function applyNameTimeFilters(){
    let ch = document.querySelector('input[name="tripchoice"]:checked').value
    if(ch == "oway"){
        nameFFlights =[];
        if(namefilters.length>0)
        nameFFlights  = searchedflights.filter(f => namefilters.indexOf(f.name)>-1)
        else
        nameFFlights = searchedflights;
        if(filterdtimes.length>0)
            nameFFlights  = nameFFlights.filter(f => filterdtimes.indexOf(f.dt)>-1)
        if(filteratimes.length>0)
            nameFFlights  = nameFFlights.filter(f => filteratimes.indexOf(f.at)>-1)
        $('.fr').remove()
        if(nameFFlights.length>0){
            $('.nfilters').remove()
            for(i = 0; i < nameFFlights.length; i++) {        
                let ele = 
                '<div class="row  fr flight-row">'+
                    '<div class="col flex-col"> <img src="Images/'+nameFFlights[i]['img'] + '.png" width="100px" ></div>'+
                    '<div class="col flex-col">'+nameFFlights[i]['name']+'</div>'+
                    '<div class="col flex-col">'+
                        '<div class=" d-flex justify-content-center pcolor">'+nameFFlights[i]['source']+'</div>'+
                        '<div class=" d-flex justify-content-center tcolor">'+nameFFlights[i]['dtime']+'</div>'+
                    '</div>'+
                    '<div class="col flex-col">'+nameFFlights[i]['duration']+ '</div>'+
                    '<div class="col flex-col">'+
                        '<div  class=" d-flex justify-content-center pcolor">'+nameFFlights[i]['dest']+'</div>'+
                        '<div  class="d-flex justify-content-center tcolor">'+nameFFlights[i]['atime']+'</div>'+
                    '</div>'+
                    `<div class ="col flex-col detailsbtn" id="${searchedflights[i]['fno']}">
                    <button type="button" class="btn  mbtn viewdetails">Details</button>
                    </div>
                <div class="flightdetails"  id=${i}>
                    <div class="row infohead drow1">
                        <div class="col ">Fares</div>
                        <div class="col">Cabin bag</div>
                        <div class="col">Check-in</div>
                        <div class="col">Cancellation</div>
                        <div class="col col-2">Date Change</div>
                        <div class="col">Seat</div>
                        <div class="col">Meal</div>
                        <div class="col col-2"></div>                      
                    </div>
                    <div class="row info detailsrow drow2">
                        <div class="col fare">${infoclass + "  "+"Saver"}</div>
                        <div class="col">7 Kgs</div>
                        <div class="col">15 Kgs</div>
                        <div class="col">Cancellation Fee Starting ₹ 3,500 upto 2 hrs before departure</div>
                        <div class="col">Date Change fee starting ₹ 3,000 upto 2 hrs before departure</div>
                        <div class="col">Chargeable</div>
                        <div class="col">Chargeable</div>
                        <div class="col col-2 detailedprice">
                            <div class="d-block "><span>&#8377;</span> ${searchedflights[i][fclasssel]}</div>
                            <a  href="pages/bookingsaver.html" target="_blank"class=" btn btn-primary bookbtn">Book Now</a>
                        </div>
                      
                    </div>
                    <div class="row info detailsrow">
                        <div class="col fare">${infoclass +" "+ "Flex"}</div>
                        <div class="col">7 Kgs</div>
                        <div class="col">15 Kgs</div>
                        <div class="col">Cancellation Fee Starting ₹ 3,500 upto 2 hrs before departure</div>
                        <div class="col">Free Date change allowed upto 2 hrs before departure</div>
                        <div class="col">Free seats available</div>
                        <div class="col">Complimentary meals (No meal will be served if flight duration is less than 2 hours)</div>
                        <div class="col col-2 detailedprice">
                            <div><span>&#8377;</span>${+searchedflights[i][fclasssel]+2000}</div>
                            <a href="pages/bookingflex.html" target="_blank" class=" btn btn-primary bookbtn">Book Now</a>
                        </div>
                    </div>
                    </div>

                   
                </div>`
                
                $('#result').append(ele);
            }
            $('.flightdetails').hide()

            $(".detailsbtn").click(function(e) {
               let  fno = $(this).attr("id")
                let id = $(this).next().attr('id');           
                if ($(this).parent().next().css("visibility")!="show"){
                    $('.flightdetails').hide()
                    $("#" + id).show() 
                    localStorage.setItem('fid', fno);
                    localStorage.setItem('fport', fromport); 
                    localStorage.setItem('tport', toport);
                    localStorage.setItem('children', +children);
                    localStorage.setItem('infants', +infants);
                    localStorage.setItem('adults', +adults);
                    localStorage.setItem('clstype', infoclass);
                    localStorage.setItem('fport', fromport);
                    localStorage.setItem('tport', toport);
                    localStorage.setItem('date1', JSON.stringify(fromdate));
                    localStorage.setItem('date2', JSON.stringify(todate));                      
                   
                }
                else{
                    $("#" + id).hide()
                 
                }
    
            });  
        
        }
        else{
            let ele = 
            `<div class="alert alert-warning alert-dismissible fade show nfilters w-50 mt-5 " role="alert">
            <strong>No flights matches filters</strong>
            <button type="button" class="close btn btn-outline cbtn" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>'
            </div>`
            $('#result').append(ele);
        }
        if(namefilters.length>0|| filteratimes.length>0 || filterdtimes.length>0){
            $('#clearfilters').removeClass('text-white')
            $('#clearfilters').addClass('text-primary')
        }
        else{
            $('#clearfilters').removeClass('text-primary')
            $('#clearfilters').addClass('text-white')
        }
    }
    else{

        nameFFlightsGo =[];
        nameFFlightsRet =[]
        if(namefilters.length>0){
            nameFFlightsGo  = goSearchedFlights.filter(f => namefilters.indexOf(f.name)>-1)
            nameFFlightsRet = retSearchedFlights.filter(f => namefilters.indexOf(f.name)>-1)
            }
        else{
            nameFFlightsGo = goSearchedFlights;
            nameFFlightsRet = retSearchedFlights

        }

        if(filterdtimes.length>0){
            nameFFlightsGo  = nameFFlightsGo.filter(f => filterdtimes.indexOf(f.dt)>-1)
            nameFFlightsRet  = nameFFlightsRet.filter(f => filterdtimes.indexOf(f.dt)>-1)
        }
         
        if(filteratimes.length>0){
            nameFFlightsGo  = nameFFlightsGo.filter(f => filterdtimes.indexOf(f.at)>-1)
            nameFFlightsRet  = nameFFlightsRet.filter(f => filterdtimes.indexOf(f.at)>-1)
        }
           
        $('.gfr').remove()
        if(nameFFlightsGo.length>0){
            let goSearchedFlights = nameFFlightsGo
            $('.nfilters').remove()
            for(i = 0; i < nameFFlightsGo.length; i++) {        
                let ele = 
                `<div class="row  gfr r-flight-row goflights">
                <div class="row mt-2">
                    <div class="col-2 flex-col"> <img src="Images/${goSearchedFlights[i]['img']}.png" width="50px" height="50px" ></div>
                     <div class="col-3 flex-col rtrip-fname">${goSearchedFlights[i]['name']}</div>
                     <div class="form-check col flex-col">
                         <input class="form-check-input goradio" type="radio" name="retflight" id="${"g"+retSearchedFlights[i]['fno']}" value="" >
                     </div>                 
                </div>
                <div class="row mt-2">           
                    <div class="col flex-col">
                        <div class=" d-flex justify-content-center pcolor">${goSearchedFlights[i]['source']}</div>
                        <div class=" d-flex justify-content-center tcolor">${goSearchedFlights[i]['dtime']}</div>
                    </div>
                    <div class="col flex-col">${goSearchedFlights[i]['duration']}</div>
                    <div class="col flex-col">
                        <div  class=" d-flex justify-content-center pcolor">${goSearchedFlights[i]['dest']}</div>
                        <div  class="d-flex justify-content-center tcolor">${goSearchedFlights[i]['atime']}</div>
                    </div>`+
                  `<div class ="col flex-col  rtripgobtn" id="${goSearchedFlights[i]['fno']}">
                    <button type="button" class="btn  mbtn viewdetails">Book</button>
                    </div> 
                                      
                </div>
                </div>`
            $('#go').append(ele);                
                
            }
            $(".rtripgobtn").click(function(e) {
                gofid = $(this).attr("id");
                goflighselected = true;
                $("#g"+gofid).prop('checked',true)
                if(goflighselected && retflightselected){
                    $('.sfilters').remove()
                    handlertripbooking()
                }
                else{
                    let ele = 
                    `<div class="alert alert-warning alert-dismissible fade show sfilters w-50 mt-5 " role="alert">
                    <strong>Select both go & return flights</strong>
                    <button type="button" class="close btn btn-outline cbtn" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>'
                    </div>`
                    $('#main').append(ele);
                }                   
             });
             $(".goradio").click(function(e){
                goflighselected = true;
                radioid = $(this).attr("id");
                gofid = radioid.substring(1);
        
             });    
             
        
        }
        else if(nameFFlightsRet.length<=0){
            let ele = 
            `<div class="alert alert-warning alert-dismissible fade show nfilters gon w-50 mt-5 " role="alert">
            <strong>No flights matches filters</strong>
            <button type="button" class="close btn btn-outline cbtn" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>'
            </div>`
            $('.gon').remove()
            $('#go').append(ele);
        }
        if(nameFFlightsRet.length>0){
            let retSearchedFlights = nameFFlightsRet
            $('.nfilters').remove()
            for(i = 0; i < nameFFlightsRet.length; i++) {
                let ele = 
            `<div class="row  gfr r-flight-row retflights">
                <div class="row mt-2">
                    <div class="col-2 flex-col"> <img src="Images/${retSearchedFlights[i]['img']}.png" width="50px" height="50px" ></div>
                    <div class="col-3 flex-col rtrip-fname">${retSearchedFlights[i]['name']}</div>
                    <div class="form-check col flex-col">
                        <input class="form-check-input retradio" type="radio" name="retflight" id="${"r"+retSearchedFlights[i]['fno']}" value="" >
                   </div>                
                </div>
                <div class="row mt-2">           
                    <div class="col flex-col">
                        <div class=" d-flex justify-content-center pcolor">${retSearchedFlights[i]['source']}</div>
                        <div class=" d-flex justify-content-center tcolor">${retSearchedFlights[i]['dtime']}</div>
                    </div>
                    <div class="col flex-col">${retSearchedFlights[i]['duration']}</div>
                    <div class="col flex-col">
                        <div  class=" d-flex justify-content-center pcolor">${retSearchedFlights[i]['dest']}</div>
                        <div  class="d-flex justify-content-center tcolor">${retSearchedFlights[i]['atime']}</div>
                    </div>`+
                    `<div class ="col flex-col rtripretbtn" id="${retSearchedFlights[i]['fno']}">
                    <button type="button" class="btn  mbtn viewdetails">Book</button>
                    </div>               
                </div>
            
            </div>`
            $('#ret').append(ele);                                 
            }
            $(".rtripretbtn").click(function(e) {
                retfid = $(this).attr("id");  
                retflighselected = true;
                $("#r"+retfid).prop('checked',true)
                if(goflighselected && retflightselected){
                    $(".sfiltes").remove()
                    handlertripbooking()
                }
                else{
                    let ele = 
                    `<div class="alert alert-warning alert-dismissible fade show sfilters w-50 mt-5 " role="alert">
                    <strong>Select both go & return flights</strong>
                    <button type="button" class="close btn btn-outline cbtn" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>'
                    </div>`
                    $('#main').append(ele);
                }                   
             });  
             $(".retradio").click(function(e){
                retflighselected = true;
                radioid = $(this).attr("id");
                retfid = radioid.substring(1);
        
             });      
                  
        }
        else if(nameFFlightsGo.length<=0){
            let ele = 
            `<div class="alert alert-warning alert-dismissible fade show nfilters retno w-50 mt-5 " role="alert">
            <strong>No flights matches filters</strong>
            <button type="button" class="close btn btn-outline cbtn" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>'
            </div>`
            $('.retno').remove()
            $('#ret').append(ele);
        }
        if(namefilters.length>0|| filteratimes.length>0 || filterdtimes.length>0){
            $('#clearfilters').removeClass('text-white')
            $('#clearfilters').addClass('text-primary')
        }
        else{
            $('#clearfilters').removeClass('text-primary')
            $('#clearfilters').addClass('text-white')
        }
    }
        
}

$("#clearfilters").click(function(){
    if(namefilters.length>0|| filteratimes.length>0 || filterdtimes.length>0){
        $('#clearfilters').removeClass('text-primary')
        $('#clearfilters').addClass('text-white')
        namefilters = [];
        filteratimes = []
        filterdtimes = []
        search()
        $('.atime').removeClass('btn-primary')
        $('.dtime').removeClass('btn-primary')
        $('.atime').addClass('btn-outline-secondary')
        $('.dtime').addClass(' btn-outline-secondary')
       
    }
});

var gofid;
var retfid;
var goflightselected = false;
var retflightselected = false;
function rtripsearch(){
    $('#content').show()
    $('#result').hide()
    $('#restway').show()
    flightscount ={}
    $('#clearfilters').removeClass('text-primary')
    $('#clearfilters').addClass('text-white')
    goSearcedFlights = []
    $('.gfr').remove()
    let sfrom = $('#sfrom').text()
    let sto = $('#sto').text();
    if(sfrom == sto){
        let ele=
        `<div class="alert alert-warning alert-dismissible fade show sdeq w-50 mt-5 " role="alert">
        <strong>Source and destination cannot be same</strong>
        <button type="button" class="close btn btn-outline cbtn" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>'
        </div>`
        $('.sdeq').remove()
        $('.nof').remove()
        $('#main').append(ele);
    }
    else{
        sfrom = sfrom[0].toUpperCase()+sfrom.slice(1)
        $('#gosd').text(`Flights from ${sfrom} to ${sto}`)
        $('#retsd').text(`Flights from ${sto} to ${sfrom}`)
        goSearchedFlights  = flights.filter(f =>   f.source ==  sfrom & f.dest == sto )
        retSearchedFlights  = flights.filter(f =>   f.source ==  sto & f.dest == sfrom )
        if(goSearchedFlights.length>0){
            $('.nogf').remove()
            updateRTripGoFlights(sfrom,sto)
            $('#content').show();
        }
        else{
            $('.fl-count').remove()
            let ele = 
            `<div class="alert alert-warning alert-dismissible fade show nogf  mt-5 " id="ngof" role="alert">
            <strong>No Flights from ${sfrom} to ${sto}</strong>
            <button type="button" class="close btn btn-outline cbtn" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>'
            </div>`
            $('.sdeq').remove()
            $('.nogf').remove()
            $('#go').append(ele);
            $("#ngof").css("margin-left","1%");

        }
        if(retSearchedFlights.length>0){
            $('.norf').remove()
            updateRTripRetFlights(sfrom,sto)
        }
        else{
            $('.fl-count').remove()
            let ele = 
            `<div class="alert alert-warning alert-dismissible fade show norf  mt-5 " role="alert" id="nretf">
            <strong>No Return Flights from ${sto} to ${sfrom}</strong>
            <button type="button" class="close btn btn-outline cbtn" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>'
            </div>`
            $('.nof').remove()
            $('.norf').remove()
            $('.sdeq').remove()
            $('#ret').append(ele);
            $("#nretf").css("margin-left","1%");
    
        }
        updateAllFilters()
    }
}


function updateRTripGoFlights(sf,st){
    let sfrom =sf;
    let sto = st;
    
    $('.nof').remove()
    $('.nfilters').remove()
    $('.sdeq').remove()
    $('.fl-count').remove()
    for(i = 0; i < goSearchedFlights.length; i++) {
        let ele =         
        `<div class="row  gfr r-flight-row goflights">
            <div class="row mt-2">
                <div class="col-2 flex-col"> <img src="Images/${goSearchedFlights[i]['img']}.png" width="50px" height="50px" ></div>
                 <div class="col-3 flex-col rtrip-fname">${goSearchedFlights[i]['name']}</div>
                 <div class="form-check col flex-col">
                      <input class="form-check-input goradio " type="radio" name="goflight" id="${"g"+goSearchedFlights[i]['fno']}" value="" >
                 </div>                
            </div>
            <div class="row mt-2">           
                <div class="col flex-col">
                    <div class=" d-flex justify-content-center pcolor">${goSearchedFlights[i]['source']}</div>
                    <div class=" d-flex justify-content-center tcolor">${goSearchedFlights[i]['dtime']}</div>
                </div>
                <div class="col flex-col">${goSearchedFlights[i]['duration']}</div>
                <div class="col flex-col">
                    <div  class=" d-flex justify-content-center pcolor">${goSearchedFlights[i]['dest']}</div>
                    <div  class="d-flex justify-content-center tcolor">${goSearchedFlights[i]['atime']}</div>
                </div>`+
                `<div class ="col flex-col  rtripgobtn" id="${goSearchedFlights[i]['fno']}">
                <button type="button" class="btn  mbtn viewdetails">Book</button>
                </div>            
            </div>
        </div>`
        $('#go').append(ele);
    }
    $(".rtripgobtn").click(function(e) {
        gofid = $(this).attr("id");
        goflightselected = true;
        $("#g"+gofid).prop('checked',true)
        if(goflightselected && retflightselected){
            $(".sfilters").remove()
            handlertripbooking()
        }
        else{
            let ele = 
            `<div class="alert alert-warning alert-dismissible fade show sfilters w-50 mt-5 " role="alert">
            <strong>Select both go & return flights</strong>
            <button type="button" class="close btn btn-outline cbtn" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>'
            </div>`
            $('#main').append(ele);
            
        }                   
     });
     $(".goradio").click(function(e){
        goflightselected = true;
        radioid = $(this).attr("id");
        gofid = radioid.substring(1);

     });     
}

function updateRTripRetFlights(from,to){
    let sfrom = from;
    let sto = to;
        $('.nof').remove()
        $('.nfilters').remove()
        $('.sdeq').remove()
        $('.fl-count').remove()
        for(i = 0; i < retSearchedFlights.length; i++) {
            let ele = 
            `<div class="row  gfr r-flight-row retflights">
                <div class="row mt-2">
                    <div class="col-2 flex-col"> <img src="Images/${retSearchedFlights[i]['img']}.png" width="50px" height="50px" ></div>
                    <div class="col-3 flex-col rtrip-fname">${retSearchedFlights[i]['name']}</div>
                    <div class="form-check col flex-col">
                      <input class="form-check-input retradio" type="radio" name="retflight" id="${"r"+retSearchedFlights[i]['fno']}" value="" >
                     </div>                 
                </div>
                <div class="row mt-2">           
                    <div class="col flex-col">
                        <div class=" d-flex justify-content-center pcolor">${retSearchedFlights[i]['source']}</div>
                        <div class=" d-flex justify-content-center tcolor">${retSearchedFlights[i]['dtime']}</div>
                    </div>
                    <div class="col flex-col">${retSearchedFlights[i]['duration']}</div>
                    <div class="col flex-col">
                        <div  class=" d-flex justify-content-center pcolor">${retSearchedFlights[i]['dest']}</div>
                        <div  class="d-flex justify-content-center tcolor">${retSearchedFlights[i]['atime']}</div>
                    </div>`+
                    `<div class ="col flex-col rtripretbtn" id="${retSearchedFlights[i]['fno']}">
                    <button type="button" class="btn  mbtn viewdetails">Book</button>
                    </div>                      
                </div>
            </div>`
            $('#ret').append(ele);
        }
        $(".rtripretbtn").click(function(e) {
            retfid = $(this).attr("id");
            retflightselected = true;
            $("#r"+retfid).prop('checked',true)
            if(goflightselected && retflightselected){
                $(".sfilters").remove()
                handlertripbooking()
            }
            else{
                let ele = 
                `<div class="alert alert-warning alert-dismissible fade show sfilters w-50 mt-5 " role="alert">
                <strong>Select both go & return flights</strong>
                <button type="button" class="close btn btn-outline cbtn" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>'
                </div>`
                $('#main').append(ele);
            }                   
         });
         $(".retradio").click(function(e){
            retflightselected = true;
            radioid = $(this).attr("id");
            retfid = radioid.substring(1);
    
         });    
}

function updateAllFilters(){
    flightscount={};
    let ch = document.querySelector('input[name="tripchoice"]:checked').value
    if(ch == "oway"){

        searchedflights.forEach(function(f){
        flightscount[f.name]? flightscount[f.name]++ : flightscount[f.name]=1;
        });
    }
    else{
         goSearchedFlights.forEach(function(f){
            flightscount[f.name]? flightscount[f.name]++ : flightscount[f.name]=1;
            });
        retSearchedFlights.forEach(function(f){
            flightscount[f.name]? flightscount[f.name]++ : flightscount[f.name]=1;
            });

    }
    for (var key in flightscount) {
        let keym = key.replace(/ /g, '@');
        let ele = 
        `<div class="form-check mb-2 fl-count">
                <input class="form-check-input" type="checkbox" value=${keym} id=${keym} onclick="updatefilters(this)">
                <label class="form-check-label" for="airindia">
                ${key}(${flightscount[key]})
                </label>
        </div>`
        $('#flightscount').append(ele)               
    }
    $('#clearfilters').addClass('text-white')
}

$(".fdelbtn").click(function(){
    sid = $(this).prop('id');
    console.log(sid)

})

// function finfo(e){
//     // console.log(e)
//     id = $(e).attr("id")
//     localStorage.setItem("fid",id)
//     let a= document.createElement('a');
//         a.target= '_blank';
//         a.href= 'pages/roundtrip.html';
//         a.click();
   

// }

// function showFDeatils(e){
//     let id = $(e).attr('id')
//     localStorage.setItem('fid', id);

// }


function test(e){
    console.log($(e).attr("id"))
}


function handlertripbooking(){
       localStorage.setItem('gofid', gofid);
       localStorage.setItem('retfid', retfid);
       localStorage.setItem('fport', fromport); 
       localStorage.setItem('tport', toport);
       localStorage.setItem('children', +children);
       localStorage.setItem('infants', +infants);
       localStorage.setItem('adults', +adults);
       localStorage.setItem('clstype', infoclass);
       localStorage.setItem('fport', fromport);
       localStorage.setItem('tport', toport);
       localStorage.setItem('date1', JSON.stringify(fromdate));
       localStorage.setItem('date2', JSON.stringify(todate));  
       let b= document.createElement('a');
           b.target= '_blank';
           b.href= 'pages/roundtrip.html';
           b.click();
    
}

