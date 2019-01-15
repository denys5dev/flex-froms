import { Injectable } from '@angular/core';

export class Product {
  Id: number;
  Name: string;
  Price: number;
  Current_Inventory: number;
  Backorder: number;
  Manufacturing: number;
  Category: string;
  ImageSrc: string;
}

let simpleProducts = [
  "HD Video Player",
  "SuperHD Video Player",
  "SuperPlasma 50",
  "SuperLED 50",
  "SuperLED 42",
  "SuperLCD 55",
  "SuperLCD 42",
  "SuperPlasma 65",
  "SuperLCD 70",
  "Projector Plus",
  "Projector PlusHT",
  "ExcelRemote IR",
  "ExcelRemote Bluetooth",
  "ExcelRemote IP"
];

let products: Product[] = [{
  Id: 1,
  Name: "HD Video Player",
  Price: 330,
  Current_Inventory: 225,
  Backorder: 0,
  Manufacturing: 10,
  Category: "Video Players",
  ImageSrc: "images/products/1.png"
}, {
  Id: 2,
  Name: "SuperHD Video Player",
  Price: 400,
  Current_Inventory: 150,
  Backorder: 0,
  Manufacturing: 25,
  Category: "Video Players",
  ImageSrc: "images/products/2.png"
}, {
  Id: 3,
  Name: "SuperPlasma 50",
  Price: 2400,
  Current_Inventory: 0,
  Backorder: 0,
  Manufacturing: 0,
  Category: "Televisions",
  ImageSrc: "images/products/3.png"
}, {
  Id: 4,
  Name: "SuperLED 50",
  Price: 1600,
  Current_Inventory: 77,
  Backorder: 0,
  Manufacturing: 55,
  Category: "Televisions",
  ImageSrc: "images/products/4.png"
}, {
  Id: 5,
  Name: "SuperLED 42",
  Price: 1450,
  Current_Inventory: 445,
  Backorder: 0,
  Manufacturing: 0,
  Category: "Televisions",
  ImageSrc: "images/products/5.png"
}, {
  Id: 6,
  Name: "SuperLCD 55",
  Price: 1350,
  Current_Inventory: 345,
  Backorder: 0,
  Manufacturing: 5,
  Category: "Televisions",
  ImageSrc: "images/products/6.png"
}, {
  Id: 7,
  Name: "SuperLCD 42",
  Price: 1200,
  Current_Inventory: 210,
  Backorder: 0,
  Manufacturing: 20,
  Category: "Televisions",
  ImageSrc: "images/products/7.png"
}, {
  Id: 8,
  Name: "SuperPlasma 65",
  Price: 3500,
  Current_Inventory: 0,
  Backorder: 0,
  Manufacturing: 0,
  Category: "Televisions",
  ImageSrc: "images/products/8.png"
}, {
  Id: 9,
  Name: "SuperLCD 70",
  Price: 4000,
  Current_Inventory: 95,
  Backorder: 0,
  Manufacturing: 5,
  Category: "Televisions",
  ImageSrc: "images/products/9.png"
}, {
  Id: 10,
  Name: "DesktopLED 21",
  Price: 175,
  Current_Inventory: null,
  Backorder: 425,
  Manufacturing: 75,
  Category: "Monitors",
  ImageSrc: "images/products/10.png"
}, {
  Id: 12,
  Name: "DesktopLCD 21",
  Price: 170,
  Current_Inventory: 210,
  Backorder: 0,
  Manufacturing: 60,
  Category: "Monitors",
  ImageSrc: "images/products/12.png"
}, {
  Id: 13,
  Name: "DesktopLCD 19",
  Price: 160,
  Current_Inventory: 150,
  Backorder: 0,
  Manufacturing: 210,
  Category: "Monitors",
  ImageSrc: "images/products/13.png"
}, {
  Id: 14,
  Name: "Projector Plus",
  Price: 550,
  Current_Inventory: null,
  Backorder: 55,
  Manufacturing: 10,
  Category: "Projectors",
  ImageSrc: "images/products/14.png"
}, {
  Id: 15,
  Name: "Projector PlusHD",
  Price: 750,
  Current_Inventory: 110,
  Backorder: 0,
  Manufacturing: 90,
  Category: "Projectors",
  ImageSrc: "images/products/15.png"
}, {
  Id: 16,
  Name: "Projector PlusHT",
  Price: 1050,
  Current_Inventory: 0,
  Backorder: 75,
  Manufacturing: 57,
  Category: "Projectors",
  ImageSrc: "images/products/16.png"
}, {
  Id: 17,
  Name: "ExcelRemote IR",
  Price: 150,
  Current_Inventory: 650,
  Backorder: 0,
  Manufacturing: 190,
  Category: "Automation",
  ImageSrc: "images/products/17.png"
}, {
  Id: 18,
  Name: "ExcelRemote Bluetooth",
  Price: 180,
  Current_Inventory: 310,
  Backorder: 0,
  Manufacturing: 0,
  Category: "Automation",
  ImageSrc: "images/products/18.png"
}, {
  Id: 19,
  Name: "ExcelRemote IP",
  Price: 200,
  Current_Inventory: 0,
  Backorder: 325,
  Manufacturing: 225,
  Category: "Automation",
  ImageSrc: "images/products/19.png"
}
];

export class Employee {
  Full_Name: string;
  Prefix: string;
  Title: string;
  City: string;
  State: string;
  Email: string;
  Skype: string;
  Mobile_Phone: string;
  Birth_Date: string;
  Hire_Date: string;
  items?: Employee[];
}

var employees: Employee[] = [
  {
    "Full_Name": "John Heart",
    "Prefix": "Mr.",
    "Title": "CEO",
    "City": "Los Angeles",
    "State": "California",
    "Email": "jheart@dx-email.com",
    "Skype": "jheart_DX_skype",
    "Mobile_Phone": "(213) 555-9392",
    "Birth_Date": "1964-03-16",
    "Hire_Date": "1995-01-15",
  },
  {
    "Full_Name": "John Heart",
    "Prefix": "Mr.",
    "Title": "CEO",
    "City": "Los Angeles",
    "State": "California",
    "Email": "jheart@dx-email.com",
    "Skype": "jheart_DX_skype",
    "Mobile_Phone": "(213) 555-9392",
    "Birth_Date": "1964-03-16",
    "Hire_Date": "1995-01-15",
    "items": [{
      "Full_Name": "Samantha Bright",
      "Prefix": "Dr.",
      "Title": "COO",
      "City": "Los Angeles",
      "State": "California",
      "Email": "samanthab@dx-email.com",
      "Skype": "samanthab_DX_skype",
      "Mobile_Phone": "(213) 555-2858",
      "Birth_Date": "1966-05-02",
      "Hire_Date": "2004-05-24",
      "items": [{
        "Full_Name": "Kevin Carter",
        "Prefix": "Mr.",
        "Title": "Shipping Manager",
        "City": "San Diego",
        "State": "California",
        "Email": "kevinc@dx-email.com",
        "Skype": "kevinc_DX_skype",
        "Mobile_Phone": "(213) 555-2840",
        "Birth_Date": "1978-01-09",
        "Hire_Date": "2009-08-11",
        "items": [{
          "Full_Name": "Davey Jones",
          "Prefix": "Mr.",
          "Title": "Shipping Assistant",
          "City": "Pasadena",
          "State": "California",
          "Email": "davidj@dx-email.com",
          "Skype": "davidj_DX_skype",
          "Mobile_Phone": "(626) 555-0281",
          "Birth_Date": "1983-03-06",
          "Hire_Date": "2011-04-24"
        }, {
          "Full_Name": "Victor Norris",
          "Prefix": "Mr.",
          "Title": "Shipping Assistant",
          "City": "Little Rock",
          "State": "Arkansas",
          "Email": "victorn@dx-email.com",
          "Skype": "victorn_DX_skype",
          "Mobile_Phone": "(213) 555-9278",
          "Birth_Date": "1986-07-23",
          "Hire_Date": "2012-07-23"
        }, {
          "Full_Name": "Mary Stern",
          "Prefix": "Ms.",
          "Title": "Shipping Assistant",
          "City": "Beaver",
          "State": "Utah",
          "Email": "marys@dx-email.com",
          "Skype": "marys_DX_skype",
          "Mobile_Phone": "(818) 555-7857",
          "Birth_Date": "1982-04-08",
          "Hire_Date": "2012-08-12"
        }, {
          "Full_Name": "Robin Cosworth",
          "Prefix": "Mrs.",
          "Title": "Shipping Assistant",
          "City": "Los Angeles",
          "State": "California",
          "Email": "robinc@dx-email.com",
          "Skype": "robinc_DX_skype",
          "Mobile_Phone": "(818) 555-0942",
          "Birth_Date": "1981-06-12",
          "Hire_Date": "2012-09-01"
        }]
      }]
    }, {
      "Full_Name": "Arthur Miller",
      "Prefix": "Mr.",
      "Title": "CTO",
      "City": "Denver",
      "State": "Colorado",
      "Email": "arthurm@dx-email.com",
      "Skype": "arthurm_DX_skype",
      "Mobile_Phone": "(310) 555-8583",
      "Birth_Date": "1972-07-11",
      "Hire_Date": "2007-12-18",
      "items": [{
        "Full_Name": "Brett Wade",
        "Prefix": "Mr.",
        "Title": "IT Manager",
        "City": "Reno",
        "State": "Nevada",
        "Email": "brettw@dx-email.com",
        "Skype": "brettw_DX_skype",
        "Mobile_Phone": "(626) 555-0358",
        "Birth_Date": "1968-12-01",
        "Hire_Date": "2009-03-06",
        "items": [{
          "Full_Name": "Taylor Riley",
          "Prefix": "Mr.",
          "Title": "Network Admin",
          "City": "San Jose",
          "State": "California",
          "Email": "taylorr@dx-email.com",
          "Skype": "taylorr_DX_skype",
          "Mobile_Phone": "(310) 555-7276",
          "Birth_Date": "1982-08-14",
          "Hire_Date": "2012-04-14"
        }, {
          "Full_Name": "Amelia Harper",
          "Prefix": "Mrs.",
          "Title": "Network Admin",
          "City": "Los Angeles",
          "State": "California",
          "Email": "ameliah@dx-email.com",
          "Skype": "ameliah_DX_skype",
          "Mobile_Phone": "(213) 555-4276",
          "Birth_Date": "1983-11-19",
          "Hire_Date": "2011-02-10"
        }, {
          "Full_Name": "Wally Hobbs",
          "Prefix": "Mr.",
          "Title": "Programmer",
          "City": "Chatsworth",
          "State": "California",
          "Email": "wallyh@dx-email.com",
          "Skype": "wallyh_DX_skype",
          "Mobile_Phone": "(818) 555-8872",
          "Birth_Date": "1984-12-24",
          "Hire_Date": "2011-02-17"
        }, {
          "Full_Name": "Brad Jameson",
          "Prefix": "Mr.",
          "Title": "Programmer",
          "City": "San Fernando",
          "State": "California",
          "Email": "bradleyj@dx-email.com",
          "Skype": "bradleyj_DX_skype",
          "Mobile_Phone": "(818) 555-4646",
          "Birth_Date": "1988-10-12",
          "Hire_Date": "2011-03-02"
        }, {
          "Full_Name": "Karen Goodson",
          "Prefix": "Miss",
          "Title": "Programmer",
          "City": "South Pasadena",
          "State": "California",
          "Email": "kareng@dx-email.com",
          "Skype": "kareng_DX_skype",
          "Mobile_Phone": "(626) 555-0908",
          "Birth_Date": "1987-04-26",
          "Hire_Date": "2011-03-14"
        }, {
          "Full_Name": "Morgan Kennedy",
          "Prefix": "Mrs.",
          "Title": "Graphic Designer",
          "City": "San Fernando Valley",
          "State": "California",
          "Email": "morgank@dx-email.com",
          "Skype": "morgank_DX_skype",
          "Mobile_Phone": "(818) 555-8238",
          "Birth_Date": "1984-07-17",
          "Hire_Date": "2012-01-11",
          "items": [{
            "Full_Name": "Violet Bailey",
            "Prefix": "Ms.",
            "Title": "Jr Graphic Designer",
            "City": "La Canada",
            "State": "California",
            "Email": "violetb@dx-email.com",
            "Skype": "violetb_DX_skype",
            "Mobile_Phone": "(818) 555-2478",
            "Birth_Date": "1985-06-10",
            "Hire_Date": "2012-01-19"
          }]
        }]
      }, {
        "Full_Name": "Barb Banks",
        "Prefix": "Mrs.",
        "Title": "Support Manager",
        "City": "Phoenix",
        "State": "Arizona",
        "Email": "barbarab@dx-email.com",
        "Skype": "barbarab_DX_skype",
        "Mobile_Phone": "(310) 555-3355",
        "Birth_Date": "1979-04-14",
        "Hire_Date": "2002-08-07",
        "items": [{
          "Full_Name": "Kelly Rodriguez",
          "Prefix": "Ms.",
          "Title": "Support Assistant",
          "City": "Boise",
          "State": "Idaho",
          "Email": "kellyr@dx-email.com",
          "Skype": "kellyr_DX_skype",
          "Mobile_Phone": "(818) 555-9248",
          "Birth_Date": "1988-05-11",
          "Hire_Date": "2012-10-13"
        }, {
          "Full_Name": "James Anderson",
          "Prefix": "Mr.",
          "Title": "Support Assistant",
          "City": "Atlanta",
          "State": "Georgia",
          "Email": "jamesa@dx-email.com",
          "Skype": "jamesa_DX_skype",
          "Mobile_Phone": "(323) 555-4702",
          "Birth_Date": "1987-01-29",
          "Hire_Date": "2012-10-18"
        }, {
          "Full_Name": "Antony Remmen",
          "Prefix": "Mr.",
          "Title": "Support Assistant",
          "City": "Boise",
          "State": "Idaho",
          "Email": "anthonyr@dx-email.com",
          "Skype": "anthonyr_DX_skype",
          "Mobile_Phone": "(310) 555-6625",
          "Birth_Date": "1986-02-19",
          "Hire_Date": "2013-01-19"
        }]
      }]
    }, {
      "Full_Name": "Robert Reagan",
      "Prefix": "Mr.",
      "Title": "CMO",
      "City": "Bentonville",
      "State": "Arkansas",
      "Email": "robertr@dx-email.com",
      "Skype": "robertr_DX_skype",
      "Mobile_Phone": "(818) 555-2387",
      "Birth_Date": "1974-09-07",
      "Hire_Date": "2002-11-08",
      "items": [{
        "Full_Name": "Ed Holmes",
        "Prefix": "Dr.",
        "Title": "Sales Manager",
        "City": "Malibu",
        "State": "California",
        "Email": "edwardh@dx-email.com",
        "Skype": "edwardh_DX_skype",
        "Mobile_Phone": "(310) 555-1288",
        "Birth_Date": "1973-07-14",
        "Hire_Date": "2005-06-19",
        "items": [{
          "Full_Name": "Sammy Hill",
          "Prefix": "Mr.",
          "Title": "Sales Assistant",
          "City": "Pasadena",
          "State": "California",
          "Email": "sammyh@dx-email.com",
          "Skype": "sammyh_DX_skype",
          "Mobile_Phone": "(626) 555-7292",
          "Birth_Date": "1984-02-17",
          "Hire_Date": "2012-02-01"
        }, {
          "Full_Name": "Olivia Peyton",
          "Prefix": "Mrs.",
          "Title": "Sales Assistant",
          "City": "Atlanta",
          "State": "Georgia",
          "Email": "oliviap@dx-email.com",
          "Skype": "oliviap_DX_skype",
          "Mobile_Phone": "(310) 555-2728",
          "Birth_Date": "1981-06-03",
          "Hire_Date": "2012-05-14"
        }]
      }]
    }, {
      "Full_Name": "Greta Sims",
      "Prefix": "Ms.",
      "Title": "HR Manager",
      "City": "Atlanta",
      "State": "Georgia",
      "Email": "gretas@dx-email.com",
      "Skype": "gretas_DX_skype",
      "Mobile_Phone": "(818) 555-6546",
      "Birth_Date": "1977-11-22",
      "Hire_Date": "1998-04-23",
      "items": [{
        "Full_Name": "Sandra Johnson",
        "Prefix": "Mrs.",
        "Title": "Controller",
        "City": "Beaver",
        "State": "Utah",
        "Email": "sandraj@dx-email.com",
        "Skype": "sandraj_DX_skype",
        "Mobile_Phone": "(562) 555-2082",
        "Birth_Date": "1974-11-15",
        "Hire_Date": "2005-05-11"
      }, {
        "Full_Name": "Cindy Stanwick",
        "Prefix": "Ms.",
        "Title": "HR Assistant",
        "City": "Little Rock",
        "State": "Arkansas",
        "Email": "cindys@dx-email.com",
        "Skype": "cindys_DX_skype",
        "Mobile_Phone": "(818) 555-6655",
        "Birth_Date": "1985-06-05",
        "Hire_Date": "2008-03-24"
      }, {
        "Full_Name": "Marcus Orbison",
        "Prefix": "Mr.",
        "Title": "Travel Coordinator",
        "City": "Los Angeles",
        "State": "California",
        "Email": "marcuso@dx-email.com",
        "Skype": "marcuso_DX_skype",
        "Mobile_Phone": "(213) 555-7098",
        "Birth_Date": "1982-03-02",
        "Hire_Date": "2005-05-19"
      }, {
        "Full_Name": "Sandy Bright",
        "Prefix": "Ms.",
        "Title": "Benefits Coordinator",
        "City": "Denver",
        "State": "Colorado",
        "Email": "sandrab@dx-email.com",
        "Skype": "sandrab_DX_skype",
        "Mobile_Phone": "(818) 555-0524",
        "Birth_Date": "1983-09-11",
        "Hire_Date": "2005-06-04"
      }, {
        "Full_Name": "Ken Samuelson",
        "Prefix": "Dr.",
        "Title": "Ombudsman",
        "City": "St. Louis",
        "State": "Missouri",
        "Email": "kents@dx-email.com",
        "Skype": "kents_DX_skype",
        "Mobile_Phone": "(562) 555-9282",
        "Birth_Date": "1972-09-11",
        "Hire_Date": "2009-04-22"
      }]
    }]
  }];

@Injectable({
  providedIn: 'root'
})
export class Service {
  getProducts(): Product[] {
    return products;
  }
  getSimpleProducts(): string[] {
    return simpleProducts;
  }

  getEmployees(): Employee[] {
    return employees;
  }
}