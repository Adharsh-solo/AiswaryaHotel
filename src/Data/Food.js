
    const food = [
        {
            id:1,
            name:"Porotaa",
            image:"https://imgs.search.brave.com/8CLJ0o7xPpQ9nzZmf7jmsr4KG40HPUTGs6WDRgLflKs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbG91/ZGNoZWYuc3RvcmUv/Y2RuL3Nob3AvcHJv/ZHVjdHMvS2VyZWxh/UG9yb3RhXzkwMHgu/anBnP3Y9MTY3ODI5/OTczMA",
            price:15
        },
        {
            id:2,
            name:"Pathiri",
            image:"https://imgs.search.brave.com/ZzO4ihXB9M8YRMlt8cFllZyht3umzM0VNdLc2LPG4NQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/b25tYW5vcmFtYS5j/b20vY29udGVudC9k/YW0vbW0vZW4vZm9v/ZC9rZXJhbGEta2l0/Y2hlbi9pbWFnZXMv/MjAxOS84LzEwL3Bv/cmljaGEtcGF0aGly/aS5qcGc_dz0xMTIw/Jmg9NTgz",
            price:15

        },
        {
            id:3,
            name:"Appam",
            image:"https://imgs.search.brave.com/dUJZDddhYk9-vh7uIoLjhExXdEqbpkRnz_MP4Unishw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kZWxp/Y2lvdXMtc29mdC1h/cHBhbS1ob3BwZXJz/LWRlbGljaW91cy1z/b2Z0LWFwcGFtLWhv/cHBlcnMtaW5kaWFu/LWN1aXNpbmUtMTA4/NTU2MDE3LmpwZw",
            price:15
        },
        {
            id:4,
            name:"Kappa",
            image:"https://imgs.search.brave.com/LwYPy0PwyErU7KFh0HdxdTv7TGbB8igCFOfs3cqsZK8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jLm5k/dHZpbWcuY29tLzNs/azRyajk4X2thcHBh/XzYyNXgzMDBfMjNf/QXVndXN0XzE4Lmpw/Zw",
            price:30
        },
        {
            id:5,
            name:"Kadala Curry",
            image:"https://imgs.search.brave.com/HyQpoZ6A_RRMkrb6i-6pXoYSf9dyIFlGkQTvX_-FIhI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2x1cnJwLmNv/bS9wcm9kL3JlY2lw/ZV9pbWFnZXMvdHJh/bnNjcmliZS9tYWlu/JTIwY291cnNlL0th/ZGFsYS1DdXJyeS53/ZWJwP2ltcG9saWN5/PXNsdXJycC0yMDIx/MDYwMSZ3aWR0aD0x/MjAwJmhlaWdodD02/NzU",
            price:35
        },
        {
            id:6,
            name:"Egg Curry",
            image:"https://imgs.search.brave.com/-0UtByMTmWpKeAFKc-R_h4UxBTf6xiSNke-oeZYE7as/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hbmRhLW1hc2Fs/YS1lZ2ctY3Vycnkt/aXMtcG9wdWxhci1p/bmRpYW4tc3BpY3kt/Zm9vZF85NTM5MzIt/OTY0My5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA",
            price:45
        },
        {
            id:7,
            name:"Fish Curry",
            image:"https://imgs.search.brave.com/pP3zuRgaLOA8oXsxyCP3PY4vQ7L9x61EL9ex6W1fKHc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9maXNoLWN1cnJ5/LXNlZXItZmlzaC1j/dXJyeS10cmFkaXRp/b25hbC1pbmRpYW4t/ZmlzaC1jdXJyeS1r/ZXJhbGEtc3BlY2lh/bC1kaXNoLXVzaW5n/LWNvY29udXQtYXJy/YW5nZWQtd2hpdGUt/Ym93bC1nYXJuaXNo/ZWQtd2l0aC1jdXJy/eS1sZWF2ZXMtbWFs/YWJhci10YW1hcmlu/ZC13aGl0ZS10ZXh0/dXJlZC1iYWNrZ3Jv/dW5kXzUyNzkwNC0y/MDE2LmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDA",
            price:45
        },
        {
            id:8,
            name:"Beef Curry",
            image:"https://imgs.search.brave.com/pNCz_YjP-CNrXOfghiqIgGIIs1f8J8y0g8o--7hdxh8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9kZWxpY2lvdXMt/YmVlZi1jdXJyeS1z/ZXJ2ZWQtcmljZS1n/YXJuaXNoZWQtd2l0/aC1jb3JpYW5kZXJf/MTI5NDg2MC0xNDE2/NTYuanBnP3NlbXQ9/YWlzX2h5YnJpZA",
            price:150
        }   
    ];
    export default food