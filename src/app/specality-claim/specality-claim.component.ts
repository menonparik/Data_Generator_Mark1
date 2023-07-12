import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
interface Row {
  field: string;
  value: string;
}
@Component({
  selector: 'app-specality-claim',
  templateUrl: './specality-claim.component.html',
  styleUrls: ['./specality-claim.component.css']
})
export class SpecalityClaimComponent implements OnInit {

  savedData: { field: string; value: string }[] = [];
  sample: any[][] = [];
  heading: any[] = [];
  rows: Row[] = [];
  //selectedFieldName: string = '';
  rowCount!: number;
  objectArray1: any[] = [];
  objectArray2: any[] = [];
  data: any[] = [];

  name: string = '';
  name1: any[] = [];
  name2: any[] = [];
  name3: any[] = [];
  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    const savedData = localStorage.getItem('data');
    if (savedData) {
      this.rows = JSON.parse(savedData);
      this.savedData = this.rows;
    }
  }

  addRow(): void {
    this.rows.push({ field: '', value: '' });
  }

  deleteRow(row: Row): void {
    const index = this.rows.indexOf(row);
    if (index !== -1) {
      this.rows.splice(index, 1);
    }
  }

  // Define your database here
  database: { [key: string]: string[] } = {
    name: [
      'Kylila Raselles',
      'Brigitta Ostler',
      'Alvira Flintoft',
      ' Becki Tassell',
      'Maiga Cosslett',
      'Reinhold Blacklidge',
      'Nedi Chittey',
      'Doe McRobb',
      'Jeniffer Pesterfield',
      'Carey Yesipov',
      'Dud Warne',
      'Harry Scown',
      'Batsheva Tressler',
      'Tristan Huburn',
      'Alberta Cheer',
      'Cobbie Kapelhoff',
      'Sherwin Bentzen',
      'Sula Ertelt',
      'Harman Whitcher',
      'Agosto Sivess',
      'Edi Crosscombe',
      'Spencer Fanti',
      'Onofredo Liston',
      'Terence Millan',
      'Hobey Stitle',
      'Noel Tubbs',
      'Dara Sneath',
      'Jeffy Kingsnoad',
      'Kimberlee MacNair',
      'Daloris Housaman',
      'Nina Papaccio',
      'Clayson Espinay',
      'Pembroke Houltham',
      'Fairfax Lubomirski',
      'Kiele Lenahan',
      'Nicholas Fenlon',
      'Demetri Ebbutt',
      'Cristen MacCleay',
      'Burtie Moraleda',
      'Rosabelle Duncan',
      'Belvia Saveall',
      'Gwendolin Charette',
      'Ibby Hatherall',
      'Cherlyn McGibbon',
      'Trenton Hunnam',
      'Luz Watkin',
      'Doloritas Boik',
      'Warner Crickmore',
      'Emmit Pavyer',
      'Fayette Richardsson',
      'Brigida Thebe',
      'Randolf Muncie',
      'Myrtice McCromley',
      'Tybie Phair',
      'Tanny Ribchester',
      'Lowe Vye',
      'Hewitt Hellens',
      'Judon Walhedd',
      'Kenon Peer',
      'Tillie Le Grys',
      'Jeanna Sylett',
      'Kittie Von Hindenburg',
      'Berkeley Fewell',
      'Tommy Dooley',
      'Isidore Cotta',
      'Rodrique Kenson',
      'Dyna Danielut',
      'Patrizio Gabbott',
      'Devi Joderli',
      'Corbin Ginner',
      'Erda Mordacai',
      'Lorrie Hallard',
      'Arabele Mantrip',
      'Sandie Dannell',
      'Lane Helis',
      'Goober Christofe',
      'Winfred Rowesby',
      'Leonelle Heeron',
      'Brett Riggey',
      'Nertie Dysart',
      'Eberto Fonteyn',
      'Frans Saffon',
      'Cornelius Izaks',
      'Pearle Muehle',
      'Sydel Gregh',
      'Jordana Poppy',
      'Judy Dessaur',
      'Giles De Biasi',
      'Eudora Wharram',
      'Ashien Cecil',
      'Dickie Whimp',
      'Emlen Bellham',
      'Veronike Celand',
      'Kelila Mowles',
      'Nissy Franzman',
      'Frances Paragreen',
      'Celeste Haresnaip',
      'Haley Nuscha',
      'Libbi Hadwick',
      'Fanni Howard - Gater',
    ],
    address: [
      'Suite 63',
      'PO Box 73383',
      '15th Floor',
      'Room 575',
      'Suite 76',
      'PO Box 61410',
      '5th Floor',
      'Suite 98',
      'Apt 534',
      'PO Box 81918',
      'PO Box 66729',
      'PO Box 88005',
      'Suite 69',
      'Suite 85',
      'PO Box 55497',
      'Apt 1642',
      'Apt 350',
      'Suite 82',
      '7th Floor',
      'PO Box 28962',
      'Room 1853',
      '17th Floor',
      'PO Box 35489',
      'Room 598',
      'Room 933',
      'PO Box 40075',
      'PO Box 28929',
      '4th Floor',
      'PO Box 26484',
      'Room 1658',
      'Suite 96',
      'PO Box 22992',
      'Apt 661',
      'Suite 33',
      'PO Box 25429',
      'Room 467',
      'Room 839',
      'Room 1646',
      'Apt 806',
      '1st Floor',
      'Apt 669',
      'PO Box 10571',
      'Room 1045',
      'PO Box 42327',
      'Apt 564',
      'Suite 59',
      '18th Floor',
      '11th Floor',
      'PO Box 53056',
      'PO Box 43119',
      'Suite 80',
      'Apt 1507',
      '11th Floor',
      'PO Box 52642',
      'Suite 65',
      '14th Floor',
      '19th Floor',
      'Apt 727',
      'Suite 93',
      'PO Box 51748',
      'Room 1687',
      '8th Floor',
      '14th Floor',
      'Suite 16',
      'PO Box 89711',
      'PO Box 60100',
      'PO Box 47642',
      'Apt 80',
      'Room 15',
      'Suite 9',
      'PO Box 22691',
      'PO Box 64547',
      'PO Box 46093',
      'Suite 69',
      'Suite 88',
      'PO Box 31980',
      'Apt 1957',
      'Suite 64',
      'Room 1771',
      'Room 436',
      'Room 30',
      'PO Box 68390',
      'Suite 57',
      '5th Floor',
      '3rd Floor',
      '13th Floor',
      '17th Floor',
      'Suite 64',
      'Suite 67',
      'Suite 47',
      'Room 1858',
      'Suite 33',
      '10th Floor',
      'Apt 111',
      'Room 27',
      'PO Box 83795',
      'Room 627',
      'PO Box 22851',
      'PO Box 59259',
      'Suite 53',
    ],
    phoneNumbers: [
      '53-163-2607',
      '57-979-9900',
      '53-565-4326',
      '07-965-3928',
      '23-040-2403',
      '69-693-0250',
      '30-361-5939',
      '59-138-5663',
      '66-723-8248',
      '00-878-7961',
      '03-494-0357',
      '60-066-8556',
      '12-971-9160',
      '29-662-9488',
      '85-021-7859',
      '81-523-4218',
      '28-306-1850',
      '36-013-3969',
      '38-995-3113',
      '97-883-0669',
      '75-447-3309',
      '42-336-0692',
      '11-821-6639',
      '12-936-1707',
      '48-899-3788',
      '14-490-0869',
      '83-795-3441',
      '45-065-2096',
      '59-025-6262',
      '53-462-3940',
      '53-935-4895',
      '29-899-2533',
      '62-302-6747',
      '02-594-7991',
      '67-270-4826',
      '20-003-2334',
      '50-772-4735',
      '74-111-7040',
      '94-487-6901',
      '67-230-6509',
      '12-349-0314',
      '32-108-5223',
      '37-153-5153',
      '31-646-8037',
      '40-350-3302',
      '39-753-7332',
      '98-145-7216',
      '83-594-0767',
      '13-724-3611',
      '65-424-4274',
      '53-171-8279',
      '04-963-6963',
      '75-867-7714',
      '90-539-0689',
      '99-575-6210',
      '47-688-4967',
      '54-459-9817',
      '18-087-6692',
      '05-133-3524',
      '02-254-2675',
      '10-134-5651',
      '36-652-0754',
      '60-947-2097',
      '04-606-4267',
      '00-982-5062',
      '04-453-5736',
      '91-685-0044',
      '79-977-5577',
      '81-904-4675',
      '84-273-7831',
      '40-899-5734',
      '78-405-1876',
      '22-029-8576',
      '24-708-6878',
      '28-107-6678',
      '13-337-1998',
      '18-716-1337',
      '61-624-2351',
      '81-296-6885',
      '52-186-8556',
      '06-661-3962',
      '72-665-9431',
      '01-211-5094',
      '30-428-2090',
      '58-296-3873',
      '62-922-3927',
      '34-974-2061',
      '44-581-1699',
      '05-540-1494',
      '33-888-2865',
      '71-330-3245',
      '92-460-2725',
      '94-146-3185',
      '74-536-3408',
      '39-754-2940',
      '17-403-9556',
      '28-156-1812',
      '53-193-6143',
      '00-619-6399',
      '89-375-8287',
    ],
    emails: [
      "kraselles0@libertymutual.com",
      "bostler1@libertymutual.com",
      "aflintoft2@libertymutual.com",
      "btassell3@libertymutual.com",
      "mcosslett4@libertymutual.com",
      "rblacklidge5@libertymutual.com",
      "nchittey6@libertymutual.com",
      "dmcrobb7@libertymutual.com",
      "jpesterfield8@libertymutual.com",
      "cyesipov9@libertymutual.com",
      "dwarnea@libertymutual.com",
      "hscownb@libertymutual.com",
      "btresslerc@libertymutual.com",
      "thuburnd@libertymutual.com",
      "acheere@libertymutual.com",
      "ckapelhofff@libertymutual.com",
      "sbentzeng@libertymutual.com",
      "sertelth@libertymutual.com",
      "hwhitcheri@libertymutual.com",
      "asivessj@libertymutual.com",
      "ecrosscombek@libertymutual.com",
      "sfantil@libertymutual.com",
      "olistonm@libertymutual.com",
      "tmillann@libertymutual.com",
      "hstitleo@libertymutual.com",
      "ntubbsp@libertymutual.com",
      "dsneathq@libertymutual.com",
      "jkingsnoadr@libertymutual.com",
      "kmacnairs@libertymutual.com",
      "dhousamant@libertymutual.com",
      "npapacciou@libertymutual.com",
      "cespinayv@libertymutual.com",
      "phoulthamw@libertymutual.com",
      "flubomirskix@libertymutual.com",
      "klenahany@libertymutual.com",
      "nfenlonz@libertymutual.com",
      "debbutt10@libertymutual.com",
      "cmaccleay11@libertymutual.com",
      "bmoraleda12@libertymutual.com",
      "rduncan13@libertymutual.com",
      "bsaveall14@libertymutual.com",
      "gcharette15@libertymutual.com",
      "ihatherall16@libertymutual.com",
      "cmcgibbon17@libertymutual.com",
      "thunnam18@libertymutual.com",
      "lwatkin19@libertymutual.com",
      "dboik1a@libertymutual.com",
      "wcrickmore1b@libertymutual.com",
      "epavyer1c@libertymutual.com",
      "frichardsson1d@libertymutual.com",
      "bthebe1e@libertymutual.com",
      "rmuncie1f@libertymutual.com",
      "mmccromley1g@libertymutual.com",
      "tphair1h@libertymutual.com",
      "tribchester1i@libertymutual.com",
      "lvye1j@libertymutual.com",
      "hhellens1k@libertymutual.com",
      "jwalhedd1l@libertymutual.com",
      "kpeer1m@libertymutual.com",
      "tlegrys1n@libertymutual.com",
      "jsylett1o@libertymutual.com",
      "kvonhindenburg1p@libertymutual.com",
      "bfewell1q@libertymutual.com",
      "tdooley1r@libertymutual.com",
      "icotta1s@libertymutual.com",
      "rkenson1t@libertymutual.com",
      "ddanielut1u@libertymutual.com",
      "pgabbott1v@libertymutual.com",
      "djoderli1w@libertymutual.com",
      "cginner1x@libertymutual.com",
      "emordacai1y@libertymutual.com",
      "lhallard1z@libertymutual.com",
      "amantrip20@libertymutual.com",
      "sdannell21@libertymutual.com",
      "lhelis22@libertymutual.com",
      "gchristofe23@libertymutual.com",
      "wrowesby24@libertymutual.com",
      "lheeron25@libertymutual.com",
      "briggey26@libertymutual.com",
      "ndysart27@libertymutual.com",
      "efonteyne28@libertymutual.com",
      "fsaffon29@libertymutual.com",
      "cizaks2a@libertymutual.com",
      "pmuehle2b@libertymutual.com",
      "sgregh2c@libertymutual.com",
      "jpoppy2d@libertymutual.com",
      "jdessaur2e@libertymutual.com",
      "gdebiasi2f@libertymutual.com",
      "ewharram2g@libertymutual.com",
      "acecil2h@libertymutual.com",
      "dwhimp2i@libertymutual.com",
      "ebellham2j@libertymutual.com",
      "vceland2k@libertymutual.com",
      "kmowles2l@libertymutual.com",
      "nfranzman2m@libertymutual.com",
      "fparagreen2n@libertymutual.com",
      "charesnaip2o@libertymutual.com",
      "hnuscha2p@libertymutual.com",
      "lhadwick2q@libertymutual.com",
      "fhowardgater2r@libertymutual.com"
  ],
    dob: [
      '02-02-1975',
      '7/17/1981',
      '4/27/1976',
      '8/16/1994',
      '9/26/1997',
      '1-10-1975',
      '10-01-1985',
      '12-05-2004',
      '10-08-1998',
      '11/27/1983',
      '8/27/1995',
      '11/19/1983',
      '10-09-1996',
      '4/28/1984',
      '4/15/1982',
      '2-01-1994',
      '12/15/1992',
      '7/24/1976',
      '10/16/1996',
      '8/31/1999',
      '6-09-2004',
      '5/21/1991',
      '11/17/1996',
      '3/22/1977',
      '5/29/1990',
      '3/20/1987',
      '12/27/1984',
      '11-08-1986',
      '6/26/1987',
      '7/30/1987',
      '3/16/1996',
      '5/24/1976',
      '12-12-2009',
      '10/25/2005',
      '8/28/1992',
      '12-11-1978',
      '3-01-1991',
      '3/24/1993',
      '1/15/1990',
      '2-02-1986',
      '6-09-2009',
      '8/18/1990',
      '11/18/1991',
      '4/14/1985',
      '9-06-1996',
      '6-09-1999',
      '4/27/1984',
      '9/17/1982',
      '3/16/2009',
      '8/24/1984',
      '8-03-1985',
      '12-08-1982',
      '12/29/2009',
      '4/24/2007',
      '9/25/1999',
      '3/29/1987',
      '4/24/2000',
      '12-04-2001',
      '7/29/1998',
      '1/19/1979',
      '2-07-1993',
      '11/16/2001',
      '3/15/1979',
      '9/26/2007',
      '10/14/1977',
      '6-08-2006',
      '5/18/1983',
      '11-11-1987',
      '01-12-2009',
      '05-02-1979',
      '8/22/1998',
      '5/24/1984',
      '12-07-1977',
      '02-07-1987',
      '7/31/1985',
      '10/19/2005',
      '12/19/1986',
      '01-01-2007',
      '10/19/2003',
      '5/17/1981',
      '7/30/2005',
      '10/16/1984',
      '11/16/1986',
      '11/25/1991',
      '8/20/1989',
      '3/15/1988',
      '12/21/1997',
      '2/14/1991',
      '05-04-1985',
      '01-01-1975',
      '02-10-1992',
      '6/25/1995',
      '7/28/2001',
      '12-09-1985',
      '03-02-2000',
      '3/19/1984',
      '3/14/1998',
      '9/18/1989',
      '1/28/1985',
      '02-11-1980',
    ],
    makes: [
      'Ford',
      'Lexus',
      'Toyota',
      'Saturn',
      'Volkswagen',
      'Mercedes-Benz',
      'Lincoln',
      'Buick',
      'Mercedes-Benz',
      'Chrysler',
      'BMW',
      'Mercury',
      'Buick',
      'Nissan',
      'Mazda',
      'Volkswagen',
      'Mitsubishi',
      'Pontiac',
      'Mercedes-Benz',
      'Chevrolet',
      'BMW',
      'Subaru',
      'Kia',
      'Subaru',
      'Subaru',
      'Volvo',
      'Chrysler',
      'Acura',
      'Lamborghini',
      'Toyota',
      'Infiniti',
      'Lexus',
      'Mercury',
      'Ford',
      'Buick',
      'Mercedes-Benz',
      'Volvo',
      'Isuzu',
      'Mercury',
      'BMW',
      'Mercedes-Benz',
      'Mazda',
      'Ford',
      'Mazda',
      'Ford',
      'Geo',
      'Chrysler',
      'Suzuki',
      'Kia',
      'Chrysler',
      'Infiniti',
      'Chevrolet',
      'Geo',
      'Chevrolet',
      'GMC',
      'Ferrari',
      'Chrysler',
      'GMC',
      'Mercury',
      'Nissan',
      'Dodge',
      'Chevrolet',
      'GMC',
      'Nissan',
      'Plymouth',
      'Ford',
      'Isuzu',
      'Chevrolet',
      'Suzuki',
      'Infiniti',
      'Jaguar',
      'Infiniti',
      'Kia',
      'Acura',
      'GMC',
      'Suzuki',
      'Audi',
      'Nissan',
      'Lexus',
      'Buick',
      'Hyundai',
      'Mazda',
      'GMC',
      'Ford',
      'Mitsubishi',
      'Dodge',
      'Ford',
      'Chrysler',
      'Mazda',
      'Plymouth',
      'Dodge',
      'Mitsubishi',
      'Chevrolet',
      'Nissan',
      'Mitsubishi',
      'Bentley',
      'Chevrolet',
      'Oldsmobile',
      'Toyota',
      'Isuzu',
    ],
    models: [
      'Crown Victoria',
      'IS-F',
      'Prius Plug-in Hybrid',
      'Outlook',
      'GTI',
      'SLR McLaren',
      'Town Car',
      'Park Avenue',
      'CLK-Class',
      'Sebring',
      '3 Series',
      'Tracer',
      'Riviera',
      '350Z',
      'Familia',
      'Beetle',
      'Challenger',
      'Grand Prix',
      'C-Class',
      'Cobalt SS',
      'X6 M',
      'Legacy',
      'Sorento',
      'Outback',
      'Legacy',
      'C30',
      'PT Cruiser',
      'RL',
      'Diablo',
      'Sienna',
      'GLS',
      'Topaz',
      'Edge',
      'Reatta',
      '500SL',
      'XC70',
      'VehiCROSS',
      'Villager',
      '1 Series',
      'SL-Class',
      'Miata MX-5',
      'Five Hundred',
      'Protege',
      'E250',
      'Tracker',
      'Crossfire',
      'SX4',
      'Sorento',
      'PT Cruiser',
      'EX',
      '3500',
      'Tracker',
      'Silverado 2500',
      'Savana',
      '612 Scaglietti',
      'Concorde',
      'Vandura G3500',
      'Cougar',
      'Murano',
      'Ram Van 3500',
      'Caprice',
      '3500 Club Coupe',
      'GT-R',
      'Grand Voyager',
      'Aspire',
      'i-370',
      'Silverado 1500',
      'XL-7',
      'GXK Series',
      'MSportage',
      'TSX',
      'Yukon',
      'Equator',
      'riolet',
      'Xterra',
      'LX',
      'Coachbuilder',
      'Accent',
      'B-Series',
      '1500',
      'Mustang',
      'Raider',
      'Avenger',
      ',Focus ST',
      '300',
      'Mazda6',
      'Voyager',
      'Caravan',
      'Lancer Evolution',
      'Silverado 1500',
      'Frontier',
      'Diamante',
      'Mulsanne',
      'Suburban 2500',
      '98',
      'Tercel',
      'VehiCROSS',
    ],
    years: [
      '2001',
      '2011',
      '2012',
      '2010',
      '1992',
      '2005',
      '1991',
      '1996',
      '2001',
      '2009',
      '2011',
      '1991',
      '1999',
      '2009',
      '1989',
      '1965',
      '2003',
      '1985',
      '2000',
      '2009',
      '2011',
      '1997',
      '2005',
      '2003',
      '1998',
      '2011',
      '2007',
      '1998',
      '1999',
      '2010',
      '1992',
      '2009',
      '1993',
      '2008',
      '1988',
      '1993',
      '2011',
      '2000',
      '1994',
      '2008',
      '2012',
      '2002',
      '2006',
      '2003',
      '2010',
      '1994',
      '2005',
      '2010',
      '2013',
      '2005',
      '2008',
      '1993',
      '1996',
      '2000',
      '2009',
      '2006',
      '1993',
      '1996',
      '1984',
      '2007',
      '1998',
      '1996',
      '1998',
      '2010',
      '2000',
      '1995',
      '2007',
      '2007',
      '2002',
      '2009',
      '2004',
      '1992',
      '2009',
      '2010',
      '1993',
      '2011',
      '1994',
      '2005',
      '1998',
      '1993',
      '2013',
      '1989',
      '1998',
      '1991',
      '2006',
      '2010',
      '2013',
      '2006',
      '2011',
      '1999',
      '1997',
      '2003',
      '1999',
      '2004',
      '1997',
      '2011',
      '1994',
      '1993',
      '1992',
      '2001',
    ],
    vins: [
      '3D7TT2HTXBG324981',
      '2G61T5S36F9977421',
      '3C4PDCDGXFT902534',
      'WAUJFAFH5CN333272',
      'TRUDD38J291816483',
      'WAUVVAFR1CA609001',
      '1G6DV57V890180135',
      'WA1AM94L39D279543',
      '3D4PH6FV7AT817180',
      '1B3AZ6JZ9AV826023',
      'JTDBT4K37CL505759',
      'SALAB2V61FA898000',
      '1GKS1GEJ2CR549932',
      'WBAFU9C57CD728855',
      'WAULT68E13A772073',
      '2G61L5S3XE9110702',
      'JN8AZ1MU2EW970261',
      '1GKS1EEF2ER382636',
      '1J4PN2GKXAW527653',
      'SCFAB22343K363347',
      '3GYFNGE38CS361894',
      'WAUJC58E35A569447',
      '1GD312CG4DF972598',
      '1GYS4KEF9BR724705',
      '2FMGK5CC0AB582864',
      '1GD422CGXEF349537',
      '1C3CDFCB2ED976819',
      '1FADP3E2XFL236533',
      'KNALU4D40F6854821',
      '4T1BF3EK9BU241842',
      '3VW4A7AT4DM962656',
      '1G4GE5GV3AF244895',
      '5J6TF1H52EL322267',
      'SALFR2BN8BH840898',
      '1N4AL2AP5AC632629',
      '3VW217AU4FM150633',
      'WBAGL63424D703098',
      'WAUDH78E77A938629',
      '5UXFE43549L230158',
      'WAUEF98E98A742912',
      '1G6YV36A895707453',
      'JTDBT4K37A1295155',
      'JM1NC2PF6E0098350',
      'WAUGFAFR1EA372874',
      'JH4KC1F3XEC045264',
      '1G6DW677860897814',
      'JM1NC2LF4E0982227',
      '2T1KU4EE7CC933431',
      'SALSF2D4XDA513622',
      'KMHHU6KJ9FU386284',
      'SALFR2BG7DH698483',
      '19UYA42761A086283',
      'WAUBFAFL1FA996522',
      'KMHCT4AE8EU489197',
      'WBAKF5C56BE916597',
      '1G6AZ5SX7E0808244',
      '2HNYD283X7H663237',
      'WBAFR1C53BD213921',
      '3D7TP2HT8AG737730',
      'WAUUL78EX7A160471',
      '1N6AD0CUXAC052420',
      'WAUAF98EX7A587333',
      '3D73Y4HL2AG196246',
      'WAUMFAFRXFA926983',
      '1FBNE3BL3BD347772',
      '1N6BF0KX3FN924667',
      '1G6DN57S050205402',
      'JTHKD5BH4C2457575',
      'WAUWG94F39N888572',
      'KMHEC4A47DA300765',
      '3C63DPGL4CG607567',
      '1G6KD57Y34U468649',
      'WBAPH5G55AN497991',
      '1C3CCBBB9DN006651',
      '1G6ET12941B402014',
      '3C6TD4KT1CG585002',
      '1N6AD0CU5AC510283',
      '1FTSW3A53AE509147',
      'WA1BY94L38D730297',
      '2D4RN3DG7BR329257',
      '2T1BURHE1EC516902',
      '1G4GD5EG0AF564313',
      'JTDKN3DU0A0943225',
      'WAUNF98P38A567638',
      'JTHFF2C29D2852003',
      '1G4GE5GD6BF230952',
      'WA1BY94L98D290893',
      '19XFB2F52DE116400',
      'TRUB3AFK5D1478547',
      'WBAYB6C52FG522410',
      '1N6BF0KLXFN731543',
      'JH4KA96613C093540',
      'WAUGGAFR5EA070209',
      'WBAAV53421J453725',
      'WAULFAFR5EA344431',
      'WAUVF98K69A053160',
      '1G6AZ5SX0E0351888',
      '19XFB4F27EE626759',
      'WAUPN94E09N043311',
      '1GYS3JEF3BR817880',
    ],
    liabilities: [
      '100000',
      '200000',
      '300000',
      '400000',
      '500000',
      '100000',
      '200000',
      '300000',
      '400000',
      '500000',
      '100000',
      '200000',
      '300000',
      '400000',
      '500000',
      '100000',
      '200000',
      '300000',
      '400000',
      '500000',
      '100000',
      '200000',
      '300000',
      '400000',
      '500000',
      '100000',
      '200000',
      '300000',
      '400000',
      '500000',
      '100000',
      '200000',
      '300000',
      '400000',
      '500000',
      '100000',
      '200000',
      '300000',
      '400000',
      '500000',
      '100000',
      '200000',
      '300000',
      '400000',
      '500000',
      '100000',
      '200000',
      '300000',
      '400000',
      '500000',
      '100000',
      '200000',
      '300000',
      '400000',
      '500000',
      '100000',
      '200000',
      '300000',
      '400000',
      '500000',
      '100000',
      '200000',
      '300000',
      '400000',
      '500000',
      '100000',
      '200000',
      '300000',
      '400000',
      '500000',
      '100000',
      '200000',
      '300000',
      '400000',
      '500000',
      '100000',
      '200000',
      '300000',
      '400000',
      '500000',
      '100000',
      '200000',
      '300000',
      '400000',
      '500000',
      '100000',
      '200000',
      '300000',
      '400000',
      '500000',
      '100000',
      '200000',
      '300000',
      '400000',
      '500000',
      '100000',
      '200000',
      '300000',
      '400000',
      '500000',
    ],
    collisions: [
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
    ],
    comprehensives: [
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
    ],
    deductibles: [
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
      '1000',
      '2000',
      '3000',
      '4000',
      '1500',
      '2500',
      '3000',
      '3500',
      '4000',
      '4500',
    ],
    additionalDrivers: [
      'Ardisj	Kingswood',
      'Caroline	Purveys',
      'Roch	Brigden',
      'Galvan	Barwood',
      'Kimbra	Cronshaw',
      'Martelle	Cross',
      'Pamella	Baswall',
      'Darrin	Bucktrout',
      'Bailey	Reignould',
      'Iolande	De Michele',
      'Chaim	Matejic',
      'Benny	Stepto',
      'Caspar	Bruster',
      'Miguelita	Bonnell',
      'Gerianne	Taffe',
      'Johna	Hum',
      'Alvera	Devany',
      'Alyse	Blazynski',
      'Andre	Hinckley',
      'Waldemar	Ockland',
      'Consuelo	Aime',
      'Marlo	Brierton',
      'Orrin	Doerffer',
      'Arliene	Klouz',
      'Zia	Frude',
      'Cyrillus	Gatchell',
      'Jenda	Dulieu',
      'Kingsley	Raylton',
      'Wrennie	Handling',
      'Jammal	Singh',
      'Jennica	Vennings',
      'Bettina	Shakesby',
      'Frank	Fretson',
      'Tildi	Brennans',
      'Jacynth	Wanklyn',
      'Nikolai	Bligh',
      'Terrence	Healey',
      'Goober	Nicholson',
      'Jacinta	Vescovo',
      'Norbert	Maruska',
      'Colby	Leonardi',
      'Holmes	Amor',
      'Edythe	Flowith',
      'Hali	Buxy',
      'Albina	Eady',
      'Wash	Stealey',
      'Wandis	Smead',
      'Jackqueline	Pettifor',
      'Jerrylee	Butlin',
      'Oralle	Loomis',
      'Ermin	Aviss',
      'Prinz	Bonn',
      'Korrie	Skeel',
      'Timotheus	Swyne',
      'Franny	Kimbley',
      'Bradley	Varah',
      'Bab	Eakley',
      'Jonas	Knill',
      'Mikel	Montes',
      'Dorey	Castagnasso',
      'Fabian	Collins',
      'Winslow	Veel',
      'Shandra	Perillo',
      'Maure	Carhart',
      'Abagail	Curado',
      'Baillie	Lanfare',
      'Tilda	Buckeridge',
      'Ferrel	Strood',
      'Russell	Bretelle',
      'Helsa	Ladewig',
      'Dex	Trenaman',
      'Tanny	Cradick',
      'Adrianna	Humerstone',
      'Broddy	Ker',
      'Gilberte	Chalcraft',
      'Norrie	Blankman',
      'Dominga	Hambelton',
      'Ashla	Mayhead',
      'Nickolaus	Hurche',
      'Desiree	Gowar',
      'Gillie	Graver',
      'Sande	Guarnier',
      'Lawton	Giacometti',
      'Carleen	Kinkead',
      'Christabella	Pering',
      'Hyman	Saice',
      'Robin	Westall',
      'Orrin	Cannell',
      'Essy	Scollard',
      'Harwell	Huddart',
      'Rayner	Dovydenas',
      'Trevor	Sindell',
      'Lionel	Matveiko',
      'Lucita	Scargill',
      'Donn	Wrigglesworth',
      'Orin	Leuren',
      'Dagmar	Rex',
      'Carolan	Melmoth',
      'Katy	Slevin',
      'Kore	Briston',
    ],
    gender: [
      'Female',
      'Female',
      'Female',
      'Female',
      'Female',
      'Male',
      'Female',
      'Female',
      'Female',
      'Male',
      'Male',
      'Male',
      'Genderfluid',
      'Male',
      'Female',
      'Male',
      'Male',
      'Polygender',
      'Male',
      'Male',
      'Female',
      'Male',
      'Male',
      'Male',
      'Male',
      'Female',
      'Female',
      'Male',
      'Female',
      'Female',
      'Female',
      'Male',
      'Male',
      'Male',
      'Female',
      'Male',
      'Male',
      'Female',
      'Male',
      'Female',
      'Female',
      'Female',
      'Female',
      'Female',
      'Male',
      'Female',
      'Female',
      'Male',
      'Male',
      'Female',
      'Female',
      'Male',
      'Polygender',
      'Female',
      'Male',
      'Male',
      'Male',
      'Male',
      'Male',
      'Female',
      'Female',
      'Female',
      'Male',
      'Male',
      'Male',
      'Male',
      'Female',
      'Male',
      'Female',
      'Male',
      'Female',
      'Male',
      'Female',
      'Female',
      'Male',
      'Male',
      'Male',
      'Female',
      'Female',
      'Female',
      'Male',
      'Male',
      'Male',
      'Female',
      'Female',
      'Female',
      'Female',
      'Male',
      'Female',
      'Female',
      'Male',
      'Male',
      'Female',
      'Female',
      'Female',
      'Female',
      'Female',
      'Female',
      'Female',
      'Female',
    ],
  };

  fieldNameInput: string = '';
  fieldValueDropdown: string = '';

  generate() {
    const {
      name,
      address,
      phoneNumbers,
      emails,
      dob,
      makes,
      models,
      years,
      vins,
      liabilities,
      collisions,
      comprehensives,
      deductibles,
      additionalDrivers,
      gender,
    } = this.database;
    for (let i = name.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [name[i], name[j]] = [name[j], name[i]];
      [address[i], address[j]] = [address[j], address[i]];
      [phoneNumbers[i], phoneNumbers[j]] = [phoneNumbers[j], phoneNumbers[i]];
      [emails[i], emails[j]] = [emails[j], emails[i]];
      [dob[i], dob[j]] = [dob[j], dob[i]];
      [makes[i], makes[j]] = [makes[j], makes[i]];
      [models[i], models[j]] = [models[j], models[i]];
      [years[i], years[j]] = [years[j], years[i]];
      [vins[i], vins[j]] = [vins[j], vins[i]];
      [liabilities[i], liabilities[j]] = [liabilities[j], liabilities[i]];
      [collisions[i], collisions[j]] = [collisions[j], collisions[i]];
      [comprehensives[i], comprehensives[j]] = [
        comprehensives[j],
        comprehensives[i],
      ];
      [deductibles[i], deductibles[j]] = [deductibles[j], deductibles[i]];
      [additionalDrivers[i], additionalDrivers[j]] = [
        additionalDrivers[j],
        additionalDrivers[i],
      ];
      [gender[i], gender[j]] = [gender[j], gender[i]];
    }
    const shuffledData = {
      name,
      address,
      phoneNumbers,
      emails,
      dob,
      makes,
      models,
      years,
      vins,
      liabilities,
      collisions,
      comprehensives,
      deductibles,
      additionalDrivers,
      gender,
    };
    // console.log(this.database)
    console.log(shuffledData);
    console.log(shuffledData['name'][1]);
    console.log(shuffledData['address'][1]);

    console.log(shuffledData['name'][2]);
    console.log(shuffledData['phoneNumbers'][1]);

    //console.log(shuffledData['array1'][1]);
    //to verify user entered row count or not

    if (this.rowCount >= 1) {
      //using dataService to transfer data from employee component to resultComponent
      localStorage.setItem('data', JSON.stringify(this.rows));
      this.savedData = this.rows;

      console.log(this.rows);
      this.objectArray2 = [];
      console.log(shuffledData['phoneNumbers'][1]);
      console.log(this.savedData);

      //number of table count
      for (let j = 0; j < this.rowCount; j++) {
        //getting the values from user in from the dropdown
        const index = j % shuffledData['name'].length;
        console.log(shuffledData['name'].length);
        for (let i = 0; i < this.savedData.length; i++) {
          console.log(this.savedData[i].value);
          if (this.savedData[i].value == 'name') {
            this.objectArray1.push(shuffledData['name'][index]);
          }
          if (this.savedData[i].value == 'address') {
            this.objectArray1.push(shuffledData['address'][index]);
          }
          if (this.savedData[i].value == 'phoneNumbers') {
            this.objectArray1.push(shuffledData['phoneNumbers'][index]);
          }
          if (this.savedData[i].value == 'emails') {
            this.objectArray1.push(shuffledData['emails'][index]);
          }
          if (this.savedData[i].value == 'dob') {
            this.objectArray1.push(shuffledData['dob'][index]);
          }
          if (this.savedData[i].value == 'gender') {
            this.objectArray1.push(shuffledData['gender'][index]);
          }
          if (this.savedData[i].value == 'makes') {
            this.objectArray1.push(shuffledData['makes'][index]);
          }
          if (this.savedData[i].value == 'models') {
            this.objectArray1.push(shuffledData['models'][index]);
          }
          if (this.savedData[i].value == 'years') {
            this.objectArray1.push(shuffledData['years'][index]);
          }
          if (this.savedData[i].value == 'vins') {
            this.objectArray1.push(shuffledData['vins'][index]);
          }
          if (this.savedData[i].value == 'liabilities') {
            this.objectArray1.push(shuffledData['liabilities'][index]);
          }
          if (this.savedData[i].value == 'collisions') {
            this.objectArray1.push(shuffledData['collisions'][index]);
          }
          if (this.savedData[i].value == 'comprehensives') {
            this.objectArray1.push(shuffledData['comprehensives'][index]);
          }
          if (this.savedData[i].value == 'deductibles') {
            this.objectArray1.push(shuffledData['deductibles'][index]);
          }
          if (this.savedData[i].value == 'additionalDrivers') {
            this.objectArray1.push(shuffledData['additionalDrivers'][index]);
          }

        }
        //overall data stored in objectArray2 for all row
        this.objectArray2.push(this.objectArray1);
        //after 1st cycle empty the objectArray1 for next cycle
        this.objectArray1 = [];
      }
      // console.log(this.objectArray2);
      //getting the table id from html
      const table = document.getElementById('table');
      //making the table visible after clicking the save button
      if (table?.style.display === 'none') {
        table.style.display = 'table';
      }
      this.sample = this.objectArray2;
      this.heading = this.savedData;
      this.dataService.setData(this.sample);
      this.dataService.setData1(this.heading);
      this.router.navigate(['/result']);
    }
    if (this.rowCount == null || this.rowCount == 0) {
      alert('enter row count');
    }
  }

}
