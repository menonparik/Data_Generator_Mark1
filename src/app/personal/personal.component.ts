import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
interface Row {
  field: string;
  value: string;
}
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

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
    company: [
      'Voolia',
      'Photolist',
      'Ntags',
      'Zooveo',
      'Twimbo',
      'Avavee',
      'Geba',
      'Quinu',
      'Blogtags',
      'Youfeed',
      'Jabbersphere',
      'Eimbee',
      'Centimia',
      'Aimbo',
      'Trilith',
      'Skyba',
      'Realmix',
      'Zoovu',
      'BlogXS',
      'Rhynoodle',
      'Topdrive',
      'Fliptune',
      'Avamm',
      'Skajo',
      'Skyvu',
      'Dabjam',
      'Buzzdog',
      'Lajo',
      'Centidel',
      'Babbleblab',
      'Oyoloo',
      'Yadel',
      'Pixoboo',
      'Wordware',
      'Youtags',
      'Gabspot',
      'Dynabox',
      'Wordtune',
      'Jaxspan',
      'Meemm',
      'Babbleopia',
      'Jayo',
      'Quimm',
      'Eazzy',
      'Kamba',
      'Yacero',
      'Zoovu',
      'Cogidoo',
      'Twitterlist',
      'Zava',
      'Feedspan',
      'Jabbersphere',
      'Vipe',
      'Yabox',
      'Tazzy',
      'Meembee',
      'Topicware',
      'Youopia',
      'Edgeify',
      'Leenti',
      'Meedoo',
      'Browsecat',
      'Meetz',
      'Zava',
      'Feedspan',
      'Mymm',
      'Layo',
      'Skinder',
      'Realfire',
      'Geba',
      'Cogilith',
      'Avamm',
      'Edgewire',
      'Quaxo',
      'Babbleopia',
      'Voolith',
      'Twitterworks',
      'Plambee',
      'Tagopia',
      'Photolist',
      'Yakijo',
      'Avavee',
      'Wikibox',
      'Youtags',
      'Pixope',
      'InnoZ',
      'Zoombox',
      'Skaboo',
      'Browsetype',
      'Trudeo',
      'Mybuzz',
      'Mynte',
      'Feedfish',
      'Digitube',
      'Brainverse',
      'Kwinu',
      'Twimbo',
      'Oba',
      'Jetwire',
      'Quinu'
    ],
    ratingplan: [
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
    effectiveDate: [
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
    defaultStateTerritory: [
      'Colorado', 
      'California', 
      'Colorado', 
      'Virginia', 
      'North Carolina', 
      'Florida', 
      'California', 
      'California', 
      'Wisconsin', 
      'Georgia', 
      'South Carolina', 
      'Arkansas', 
      'Ohio', 
      'Nevada', 
      'Texas', 
      'Kentucky', 
      'Wisconsin', 
      'Georgia', 
      'Texas', 
      'Ohio', 
      'Arizona', 
      'Florida', 
      'Louisiana', 
      'Kansas', 
      'Texas', 
      'Alabama', 
      'Florida', 
      'Georgia', 
      'Georgia', 
      'Tennessee', 
      'California', 
      'Massachusetts', 
      'California',
       'Georgia', 
       'Texas', 
       'Arkansas', 
       'Washington', 
       'Texas', 
       'Minnesota',
        'Kentucky', 
        'Arizona', 
        'Oregon', 
        'Texas', 
        'Virginia', 
        'Maryland', 
        'California', 
        'Ohio', 
        'District of Columbia', 
        'Indiana', 
        'Texas', 
        'Wisconsin', 
        'California', 
        'Nebraska', 
        'Florida', 
        'Colorado', 
        'Kansas', 
        'New York', 
        'Arizona', 
        'Washington', 
        'Indiana', 
        'Connecticut', 
        'Georgia',
         'Oklahoma', 
         'Georgia', 
         'Massachusetts', 
         'Iowa', 
         'New Jersey', 
         'California', 
         'Colorado', 
         'California', 
         'Georgia', 
         'Virginia', 
         'Idaho', 
         'Florida', 
         'Virginia', 
         'Florida', 
         'Maryland', 
         'Texas', 
         'Michigan', 
         'Florida',
          'Oklahoma', 
        'Nevada', 
        'Florida', 
        'New Jersey', 
        'Florida',
         'California', 
         'Connecticut', 
         'Colorado', 
         'Texas', 
         'Massachusetts', 
         'District of Columbia', 
         'Texas', 
         'Florida', 
         'Indiana', 
         'Arizona',
        'West Virginia', 
        'Wisconsin', 
        'Tennessee', 
        'Georgia', 
        'District of Columbia',
    ],
    city: [
      'Colorado Springs', 'Riverside', 'Denver', 'Richmond', 'Raleigh', 'Orlando', 'Glendale', 'San Jose', 'Madison', 'Savannah', 'Beaufort', 'Fort Smith', 'Cincinnati', 'Las Vegas', 'Garland', 'Lexington', 'Racine', 'Marietta', 'Corpus Christi', 'Lima', 'Phoenix', 'Jacksonville', 'Baton Rouge', 'Shawnee Mission', 'Houston', 'Montgomery', 'West Palm Beach', 'Atlanta', 'Alpharetta', 'Chattanooga', 'San Jose', 'Boston', 'Redwood City', 'Atlanta', 'Corpus Christi', 'Little Rock', 'Seattle', 'Amarillo', 'Monticello', 'Louisville', 'Phoenix', 'Salem', 'Fort Worth', 'Reston', 'Rockville', 'Garden Grove', 'Toledo', 'Washington', 'South Bend', 'El Paso', 'Milwaukee', 'Torrance', 'Lincoln', 'Clearwater', 'Denver', 'Shawnee Mission', 'Staten Island', 'Glendale', 'Spokane', 'Indianapolis', 'Waterbury', 'Augusta', 'Norman', 'Valdosta', 'Springfield', 'Cedar Rapids', 'Trenton', 'Fullerton', 'Colorado Springs', 'Brea', 'Macon', 'Hampton', 'Boise', 'Sarasota', 'Richmond', 'Naples', 'Ridgely', 'Longview', 'Lansing', 'Jacksonville', 'Tulsa', 'Carson City', 'Sarasota', 'Jersey City', 'Saint Petersburg', 'Oakland', 'Bridgeport', 'Greeley', 'Garland', 'Boston', 'Washington', 'Houston', 'Naples', 'Muncie', 'Tucson', 'Huntington', 'Madison', 'Memphis', 'Atlanta', 'Washington',
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
    make: [
      'BMW', 'Dodge', 'Mazda', 'GMC', 'Porsche', 'Bentley', 'Lotus', 'Nissan', 'Buick', 'Ford', 'Hyundai', 'Oldsmobile', 'Mitsubishi', 'Buick', 'Mercedes-Benz', 'Nissan', 'Dodge', 'Mazda', 'Mazda', 'Dodge', 'Cadillac', 'Mazda', 'Jeep', 'Infiniti', 'Volkswagen', 'Chevrolet', 'Mercedes-Benz', 'Suzuki', 'Cadillac', 'GMC', 'Mercury', 'GMC', 'Pontiac', 'Buick', 'Dodge', 'Kia', 'Toyota', 'Volkswagen', 'Buick', 'BMW', 'Jeep', 'Morgan', 'Land Rover', 'Mazda', 'Chevrolet', 'Mercury', 'BMW', 'Isuzu', 'Cadillac', 'Ford', 'GMC', 'Cadillac', 'Volvo', 'Toyota', 'Jaguar', 'Oldsmobile', 'GMC', 'Mazda', 'Kia', 'Mercedes-Benz', 'Jaguar', 'Ford', 'Dodge', 'GMC', 'Ford', 'Acura', 'Infiniti', 'Chrysler', 'Subaru', 'Mercury', 'Oldsmobile', 'Ford', 'Dodge', 'Pontiac', 'Ford', 'Suzuki', 'Isuzu', 'Ford', 'Honda', 'Acura', 'Ferrari', 'Dodge', 'Mitsubishi', 'Oldsmobile', 'Chevrolet', 'Toyota', 'Infiniti', 'Subaru', 'Chevrolet', 'Isuzu', 'Mercedes-Benz', 'Buick', 'Toyota', 'Maserati', 'Buick', 'Mazda', 'Infiniti', 'Subaru', 'Lexus', 'Subaru',
    ],
    siccode: [
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
    zipcode: [
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
    county: [
      'CO', 'CA', 'CO', 'VA', 'NC', 'FL', 'CA', 'CA', 'WI', 'GA', 'SC', 'AR', 'OH', 'NV', 'TX', 'KY', 'WI', 'GA', 'TX', 'OH', 'AZ', 'FL', 'LA', 'KS', 'TX', 'AL', 'FL', 'GA', 'GA', 'TN', 'CA', 'MA', 'CA', 'GA', 'TX', 'AR', 'WA', 'TX', 'MN', 'KY', 'AZ', 'OR', 'TX', 'VA', 'MD', 'CA', 'OH', 'DC', 'IN', 'TX', 'WI', 'CA', 'NE', 'FL', 'CO', 'KS', 'NY', 'AZ', 'WA', 'IN', 'CT', 'GA', 'OK', 'GA', 'MA', 'IA', 'NJ', 'CA', 'CO', 'CA', 'GA', 'VA', 'ID', 'FL', 'VA', 'FL', 'MD', 'TX', 'MI', 'FL', 'OK', 'NV', 'FL', 'NJ', 'FL', 'CA', 'CT', 'CO', 'TX', 'MA', 'DC', 'TX', 'FL', 'IN', 'AZ', 'WV', 'WI', 'TN', 'GA', 'DC',
    ],
    dateOfLoss: [
      '6/25/2024', '04-10-2024', '1/15/2023', '01-12-2024', '12/14/2024', '9/20/2024', '12-11-2022', '12/14/2024', '8/14/2023', '11/17/2023', '10/29/2023', '06-12-2023', '11/28/2023', '7/22/2022', '6/22/2024', '3/27/2024', '01-12-2024', '12-10-2022', '9/15/2022', '8/26/2022', '11/29/2024', '09-03-2024', '11-09-2023', '11-03-2024', '2/13/2023', '11-03-2023', '06-10-2023', '04-04-2024', '08-05-2024', '10-10-2023', '8/20/2022', '08-02-2023', '3/17/2024', '6/26/2023', '3/25/2023', '5/17/2023', '10/17/2022', '9/18/2023', '4/24/2023', '9/21/2022', '09-05-2022', '04-12-2023', '4/17/2024', '08-12-2023', '11/29/2022', '05-12-2023', '10/22/2022', '10/18/2023', '9/30/2023', '4/14/2024', '12/22/2023', '09-02-2024', '1/30/2024', '8/13/2023', '9/28/2022', '11/18/2024', '10/25/2023', '11/20/2023', '1/14/2023', '9/15/2022', '10-05-2022', '5/27/2023', '07-08-2024', '03-05-2024', '5/25/2024', '6/24/2023', '09-04-2022', '07-09-2024', '02-06-2023', '10-06-2022', '11-08-2023', '9/30/2023', '11/20/2023', '12-09-2024', '1/15/2024', '12/24/2022', '11-10-2023', '2/19/2024', '09-09-2024', '11/25/2022', '5/16/2024', '11-07-2024', '3/27/2023', '10/25/2023', '1/30/2023', '02-03-2024', '09-01-2022', '1/29/2023', '9/25/2024', '12/13/2023', '2/16/2024', '6/26/2023', '5/31/2023', '12/21/2024', '2/16/2023', '05-06-2024', '1/15/2024', '1/14/2024', '9/25/2023', '11-10-2024'
    ],
    legalStatus: [
    'adjudicated', 'adjudicated', 'temporary custody', 'adjudicated', 'parental custody', 'temporary custody', 'parental custody', 'parental rights terminated', 'parental custody', 'parental custody', 'adjudicated', 'temporary custody', 'adjudicated', 'parental rights terminated', 'parental rights terminated', 'parental rights terminated', 'crown ward', 'temporary custody', 'parental rights terminated', 'temporary custody', 'temporary custody', 'parental rights terminated', 'adjudicated', 'parental rights terminated', 'adjudicated', 'temporary custody', 'parental custody', 'crown ward', 'temporary custody', 'adjudicated', 'crown ward', 'parental rights terminated', 'temporary custody', 'parental rights terminated', 'parental rights terminated', 'temporary custody', 'crown ward', 'parental rights terminated', 'crown ward', 'parental rights terminated', 'crown ward', 'adjudicated', 'crown ward', 'temporary custody', 'temporary custody', 'parental custody', 'adjudicated', 'parental custody', 'adjudicated', 'parental rights terminated', 'adjudicated', 'temporary custody', 'temporary custody', 'adjudicated', 'parental custody', 'temporary custody', 'parental rights terminated', 'parental rights terminated', 'temporary custody', 'parental rights terminated', 'temporary custody', 'crown ward', 'crown ward', 'adjudicated', 'parental custody', 'parental custody', 'parental custody', 'parental rights terminated', 'temporary custody', 'crown ward', 'crown ward', 'adjudicated', 'crown ward', 'parental rights terminated', 'temporary custody', 'temporary custody', 'adjudicated', 'crown ward', 'adjudicated', 'adjudicated', 'parental custody', 'adjudicated', 'parental custody', 'temporary custody', 'temporary custody', 'temporary custody', 'temporary custody', 'adjudicated', 'temporary custody', 'parental custody', 'parental custody', 'temporary custody', 'parental custody', 'parental custody', 'parental rights terminated', 'parental rights terminated', 'parental rights terminated', 'parental custody', 'parental custody', 'parental custody',
    ],
    expiryDate: [
      '8/17/2022', '11/27/2022', '11-12-2022', '5/17/2024', '06-09-2023', '4/24/2023', '05-01-2023', '1/25/2024', '10/22/2022', '12-07-2023', '09-02-2022', '5/19/2024', '09-06-2023', '01-02-2024', '9/29/2024', '02-05-2024', '09-05-2023', '8/28/2024', '10-07-2024', '3/17/2023', '09-07-2023', '12/23/2024', '03-11-2024', '7/16/2023', '02-01-2024', '11/15/2022', '8/15/2022', '9/21/2023', '9/24/2024', '2/20/2023', '12/15/2022', '09-02-2024', '04-07-2023', '05-09-2023', '03-06-2024', '10/26/2022', '8/24/2023', '10/26/2022', '10/16/2022', '3/27/2023', '12-05-2023', '11-08-2024', '3/30/2023', '2/27/2024', '12-11-2022', '03-04-2023', '5/17/2024', '1/18/2023', '8/26/2024', '8/27/2023', '10-10-2022', '4/27/2024', '1/25/2024', '11/26/2024', '2/27/2024', '10/26/2022', '3/25/2024', '12/29/2022', '01-10-2023', '7/14/2024', '8/23/2024', '11/15/2023', '3/27/2023', '8/14/2022', '10/29/2024', '7/16/2024', '2/26/2024', '06-08-2023', '03-09-2023', '5/30/2024', '08-08-2022', '5/13/2024', '9/16/2023', '11/20/2023', '7/18/2023', '08-05-2023', '3/25/2023', '1/14/2024', '11/29/2022', '08-03-2022', '07-12-2023', '7/30/2023', '6/19/2023', '9/27/2022', '08-08-2022', '05-10-2024', '2/19/2023', '04-11-2023', '07-01-2023', '9/30/2023', '09-06-2023', '10-12-2024', '9/23/2023', '7/16/2024', '05-09-2023', '11/14/2024', '04-06-2024', '5/27/2024', '10/29/2024', '8/25/2022',
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
