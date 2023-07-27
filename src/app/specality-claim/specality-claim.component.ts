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
    dateOfLoss: [
      '08-04-2022','11/17/2022','04-01-2023','09-10-2022','7/30/2022','6/14/2023','11/22/2022','9/30/2022','11-07-2022','02-03-2023','3/23/2023','01-07-2023','7/27/2022','4/27/2023','1/25/2023','11/26/2022','04-07-2023','6/15/2023','10-11-2022','02-10-2023','3/19/2023','2/28/2023','09-09-2022','11/27/2022','10-11-2022','7/25/2023','02-08-2023','4/27/2023','04-11-2023','08-08-2022','07-01-2023','9/20/2022','4/13/2023','4/24/2023','07-07-2023','07-09-2023','3/14/2023','03-11-2023','7/22/2023','5/26/2023','02-02-2023','11/19/2022','09-04-2022','11/25/2022','9/15/2022','07-12-2023','10/30/2022','8/30/2022','12/26/2022','1/25/2023','02-04-2023','04-04-2023','02-01-2023','3/18/2023','5/31/2023','1/13/2023','09-05-2022','6/24/2023','7/24/2023','12-02-2022','4/18/2023','07-03-2023','8/24/2022','11-12-2022','08-11-2022','7/26/2023','10/24/2022','06-02-2023','05-11-2023','1/18/2023','11-04-2022','6/30/2023','12-08-2022','02-01-2023','7/27/2022','3/26/2023','09-01-2022','07-05-2023','04-06-2023','9/16/2022','4/27/2023','11/21/2022','01-08-2023','3/22/2023','10-06-2022','9/24/2022','03-05-2023','07-07-2023','3/26/2023','04-08-2023','7/22/2023','6/15/2023','1/18/2023','7/23/2023','09-06-2022','05-09-2023','5/14/2023','2/16/2023','1/27/2023','03-11-2023'
    ],
    claimType: [
      'Death benefit claim','Death benefit claim','Death benefit claim','actual cash value settlements','replacement cost settlements','Maturity benefit claim','replacement cost settlements','actual cash value settlements','Death benefit claim','Death benefit claim','replacement cost settlements','actual cash value settlements','Maturity benefit claim','actual cash value settlements','Death benefit claim','Death benefit claim','replacement cost settlements','replacement cost settlements','Maturity benefit claim','replacement cost settlements','replacement cost settlements','Death benefit claim','Death benefit claim','replacement cost settlements','actual cash value settlements','actual cash value settlements','Maturity benefit claim','Maturity benefit claim','Maturity benefit claim','Death benefit claim','actual cash value settlements','replacement cost settlements','Death benefit claim','Maturity benefit claim','Death benefit claim','actual cash value settlements','Maturity benefit claim','Death benefit claim','actual cash value settlements','Maturity benefit claim','actual cash value settlements','replacement cost settlements','actual cash value settlements','Maturity benefit claim','replacement cost settlements','actual cash value settlements','actual cash value settlements','replacement cost settlements','replacement cost settlements','actual cash value settlements','replacement cost settlements','replacement cost settlements','replacement cost settlements','actual cash value settlements','actual cash value settlements','Maturity benefit claim','Death benefit claim','Maturity benefit claim','replacement cost settlements','Maturity benefit claim','Death benefit claim','Death benefit claim','Maturity benefit claim','replacement cost settlements','Maturity benefit claim','actual cash value settlements','Maturity benefit claim','actual cash value settlements','replacement cost settlements','actual cash value settlements','actual cash value settlements','actual cash value settlements','Death benefit claim','replacement cost settlements','actual cash value settlements','Maturity benefit claim','Maturity benefit claim','replacement cost settlements','Maturity benefit claim','Maturity benefit claim','Maturity benefit claim','replacement cost settlements','replacement cost settlements','Maturity benefit claim','replacement cost settlements','Death benefit claim','actual cash value settlements','Death benefit claim','actual cash value settlements','actual cash value settlements','replacement cost settlements','actual cash value settlements','Maturity benefit claim','Death benefit claim','actual cash value settlements','Maturity benefit claim','Death benefit claim','actual cash value settlements','actual cash value settlements','Maturity benefit claim'
    ],
    claimOrg: [
      'AVIVA Life Insurance Co. India Ltd','Pramerica Life Insurance Limited','Pramerica Life Insurance Limited','HDFC Life Insurance Co. Ltd','Bajaj Allianz Life Insurance Co. Ltd','AVIVA Life Insurance Co. India Ltd','HDFC Life Insurance Co. Ltd','Pramerica Life Insurance Limited','HDFC Life Insurance Co. Ltd','Edelweiss Tokio Life Insurance Co. Ltd','Edelweiss Tokio Life Insurance Co. Ltd','HDFC Life Insurance Co. Ltd','Edelweiss Tokio Life Insurance Co. Ltd','AVIVA Life Insurance Co. India Ltd','Edelweiss Tokio Life Insurance Co. Ltd','HDFC Life Insurance Co. Ltd','Pramerica Life Insurance Limited','Pramerica Life Insurance Limited','Bajaj Allianz Life Insurance Co. Ltd','Bajaj Allianz Life Insurance Co. Ltd','Pramerica Life Insurance Limited','Bajaj Allianz Life Insurance Co. Ltd','AVIVA Life Insurance Co. India Ltd','Edelweiss Tokio Life Insurance Co. Ltd','Edelweiss Tokio Life Insurance Co. Ltd','Edelweiss Tokio Life Insurance Co. Ltd','AVIVA Life Insurance Co. India Ltd','Pramerica Life Insurance Limited','AVIVA Life Insurance Co. India Ltd','Bajaj Allianz Life Insurance Co. Ltd','Bajaj Allianz Life Insurance Co. Ltd','HDFC Life Insurance Co. Ltd','Edelweiss Tokio Life Insurance Co. Ltd','HDFC Life Insurance Co. Ltd','Edelweiss Tokio Life Insurance Co. Ltd','HDFC Life Insurance Co. Ltd','HDFC Life Insurance Co. Ltd','Edelweiss Tokio Life Insurance Co. Ltd','AVIVA Life Insurance Co. India Ltd','AVIVA Life Insurance Co. India Ltd','AVIVA Life Insurance Co. India Ltd','HDFC Life Insurance Co. Ltd','AVIVA Life Insurance Co. India Ltd','AVIVA Life Insurance Co. India Ltd','Bajaj Allianz Life Insurance Co. Ltd','Pramerica Life Insurance Limited','Pramerica Life Insurance Limited','Edelweiss Tokio Life Insurance Co. Ltd','Edelweiss Tokio Life Insurance Co. Ltd','Pramerica Life Insurance Limited','AVIVA Life Insurance Co. India Ltd','Edelweiss Tokio Life Insurance Co. Ltd','HDFC Life Insurance Co. Ltd','Edelweiss Tokio Life Insurance Co. Ltd','Bajaj Allianz Life Insurance Co. Ltd','HDFC Life Insurance Co. Ltd','HDFC Life Insurance Co. Ltd','Pramerica Life Insurance Limited','AVIVA Life Insurance Co. India Ltd','HDFC Life Insurance Co. Ltd','Bajaj Allianz Life Insurance Co. Ltd','Bajaj Allianz Life Insurance Co. Ltd','Edelweiss Tokio Life Insurance Co. Ltd','Bajaj Allianz Life Insurance Co. Ltd','AVIVA Life Insurance Co. India Ltd','AVIVA Life Insurance Co. India Ltd','Edelweiss Tokio Life Insurance Co. Ltd','HDFC Life Insurance Co. Ltd','Edelweiss Tokio Life Insurance Co. Ltd','Bajaj Allianz Life Insurance Co. Ltd','Edelweiss Tokio Life Insurance Co. Ltd','Edelweiss Tokio Life Insurance Co. Ltd','HDFC Life Insurance Co. Ltd','Edelweiss Tokio Life Insurance Co. Ltd','AVIVA Life Insurance Co. India Ltd','Edelweiss Tokio Life Insurance Co. Ltd','HDFC Life Insurance Co. Ltd','AVIVA Life Insurance Co. India Ltd','Edelweiss Tokio Life Insurance Co. Ltd','AVIVA Life Insurance Co. India Ltd','Edelweiss Tokio Life Insurance Co. Ltd','AVIVA Life Insurance Co. India Ltd','HDFC Life Insurance Co. Ltd','HDFC Life Insurance Co. Ltd','HDFC Life Insurance Co. Ltd','Edelweiss Tokio Life Insurance Co. Ltd','Pramerica Life Insurance Limited','Pramerica Life Insurance Limited','Pramerica Life Insurance Limited','AVIVA Life Insurance Co. India Ltd','Pramerica Life Insurance Limited','HDFC Life Insurance Co. Ltd','AVIVA Life Insurance Co. India Ltd','HDFC Life Insurance Co. Ltd','Pramerica Life Insurance Limited','Bajaj Allianz Life Insurance Co. Ltd','Edelweiss Tokio Life Insurance Co. Ltd','HDFC Life Insurance Co. Ltd','AVIVA Life Insurance Co. India Ltd','AVIVA Life Insurance Co. India Ltd'
    ],
    claimTitle: [
      'Death claim','Life Insurance','Maturity benefit claim','Life Insurance','Maturity benefit claim','Death claim','Maturity benefit claim','Maturity benefit claim','Non-Archived','Non-Archived','Non-Archived','Maturity benefit claim','Non-Archived','Death claim','Life Insurance','Death claim','Death claim','Life Insurance','Death claim','Life Insurance','Non-Archived','Non-Archived','Non-Archived','Life Insurance','Death claim','Non-Archived','Maturity benefit claim','Life Insurance','Life Insurance','Non-Archived','Life Insurance','Death claim','Maturity benefit claim','Non-Archived','Life Insurance','Maturity benefit claim','Non-Archived','Death claim','Maturity benefit claim','Maturity benefit claim','Non-Archived','Death claim','Life Insurance','Maturity benefit claim','Non-Archived','Non-Archived','Non-Archived','Non-Archived','Life Insurance','Non-Archived','Non-Archived','Maturity benefit claim','Life Insurance','Maturity benefit claim','Maturity benefit claim','Maturity benefit claim','Life Insurance','Maturity benefit claim','Maturity benefit claim','Maturity benefit claim','Death claim','Maturity benefit claim','Life Insurance','Non-Archived','Life Insurance','Life Insurance','Maturity benefit claim','Maturity benefit claim','Maturity benefit claim','Life Insurance','Maturity benefit claim','Non-Archived','Death claim','Death claim','Life Insurance','Life Insurance','Maturity benefit claim','Non-Archived','Maturity benefit claim','Death claim','Death claim','Life Insurance','Death claim','Death claim','Non-Archived','Non-Archived','Non-Archived','Death claim','Maturity benefit claim','Life Insurance','Non-Archived','Maturity benefit claim','Death claim','Non-Archived','Maturity benefit claim','Non-Archived','Maturity benefit claim','Death claim','Non-Archived','Death claim'
  ],
    claimDesc: [
      'damaged by third person','flood','damaged by third person','damaged by third person','damaged by third person','damaged by a fire','damaged by a fire','damaged by third person','damaged by a fire','damaged by a fire','flood','flood','flood','homeowner has insurance','damaged by a fire','homeowner has insurance','flood','damaged by a fire','flood','damaged by a fire','damaged by third person','damaged by third person','damaged by a fire','homeowner has insurance','flood','homeowner has insurance','damaged by a fire','damaged by a fire','flood','damaged by third person','damaged by third person','flood','homeowner has insurance','flood','homeowner has insurance','damaged by a fire','damaged by third person','flood','homeowner has insurance','damaged by third person','damaged by third person','homeowner has insurance','damaged by a fire','damaged by a fire','homeowner has insurance','flood','damaged by a fire','flood','flood','damaged by a fire','damaged by third person','damaged by third person','homeowner has insurance','flood','damaged by third person','homeowner has insurance','flood','damaged by third person','flood','flood','homeowner has insurance','damaged by a fire','damaged by third person','damaged by third person','homeowner has insurance','damaged by third person','flood','flood','damaged by third person','homeowner has insurance','damaged by third person','flood','damaged by a fire','flood','damaged by third person','homeowner has insurance','damaged by a fire','damaged by third person','damaged by a fire','homeowner has insurance','homeowner has insurance','homeowner has insurance','homeowner has insurance','homeowner has insurance','homeowner has insurance','homeowner has insurance','damaged by a fire','flood','homeowner has insurance','homeowner has insurance','flood','flood','damaged by third person','homeowner has insurance','flood','damaged by a fire','homeowner has insurance','flood','damaged by third person','damaged by third person'
    ],
    severity: [
      'High','Medium','Low','Medium','Low','High','Low','Medium','Medium','Medium','High','High','Medium','High','Medium','Medium','Medium','Medium','Medium','High','High','Low','High','High','Low','High','High','High','Medium','Medium','High','High','High','Medium','Medium','Low','Low','High','High','High','Medium','Low','Low','High','Low','Medium','High','High','Low','High','Medium','Medium','Low','Low','High','Low','High','Medium','Low','Low','High','Low','High','Medium','High','High','High','High','Low','Medium','Low','Low','Low','Low','Low','High','Medium','Low','Medium','High','Low','Low','Low','High','Low','Low','Low','Medium','High','High','Medium','Medium','Low','High','Low','Medium','Medium','High','Low','Low'
    ],
    lossCode: [
      'OYAB','ZWYN','FCBS','UCFM','ENKB','KGRI','URRQ','KDKK','WAPP','LTCP','LEVD','FNUB','MUCF','KKLS','AYFR','MPMG','WRLH','SVCG','AGGQ','RJOM','HDMO','CYEN','YHDY','SAVQ','CAG8','KCUB','FLBA','KSNA','KTIK','KSWO','NGBR','SPGM','MDST','CYDA','FZOA','SPME','KMHL','SKTD','CYQN','NFNV','FZRB','SCLL','KERV','SKCC','SKVG','SBPF','MGPP','GAKY','VTPH','CYJN','MRPJ','YMDG','MPCE','FAQT','KMOB','FALC','PAYA','VREI','WIMM','KPR','ZSNT','FVMV','VTBH','MMPL','SGAS','KGAB','LFJL','EKSB','BGJH','FNLK','HKAM','MKJS','DIAU','PAGT','YFST','AYOG','EEPU','YLRA','EDCP','EFJO','MRFL','EDHI','PAAQ','OYSY','MUSN','SBPP','YHPV','SAFR','ZHXF','SCRD'
    ],
    lossType: [
      'Property insurance','Travel insurance','Property insurance','Property insurance','Motor insurance','Life insurance','Motor insurance','Property insurance','Motor insurance','Motor insurance','Motor insurance','Motor insurance','Travel insurance','Travel insurance','Property insurance','Motor insurance','Health insurance','Life insurance','Travel insurance','Property insurance','Motor insurance','Home insurance','Motor insurance','Travel insurance','Life insurance','Property insurance','Home insurance','Travel insurance','Travel insurance','Travel insurance','Health insurance','Property insurance','Health insurance','Travel insurance','Home insurance','Motor insurance','Home insurance','Property insurance','Property insurance','Life insurance','Motor insurance','Travel insurance','Health insurance','Motor insurance','Life insurance','Health insurance','Property insurance','Life insurance','Life insurance','Property insurance','Travel insurance','Life insurance','Life insurance','Home insurance','Property insurance','Motor insurance','Health insurance','Health insurance','Travel insurance','Property insurance','Health insurance','Property insurance','Property insurance','Motor insurance','Life insurance','Motor insurance','Home insurance','Travel insurance','Property insurance','Life insurance','Motor insurance','Motor insurance','Health insurance','Home insurance','Motor insurance','Health insurance','Motor insurance','Travel insurance','Travel insurance','Life insurance','Home insurance','Property insurance','Motor insurance','Home insurance','Property insurance','Property insurance','Home insurance','Travel insurance','Travel insurance','Home insurance','Travel insurance','Health insurance','Motor insurance','Home insurance','Travel insurance','Travel insurance','Health insurance','Home insurance','Health insurance','Property insurance'
    ],
    potential: [
      'property risk','property risk','personal risk','property risk','liability risk.','personal risk','personal risk','personal risk','liability risk.','liability risk.','liability risk.','liability risk.','personal risk','personal risk','liability risk.','property risk','liability risk.','liability risk.','property risk','personal risk','personal risk','property risk','liability risk.','property risk','personal risk','liability risk.','personal risk','property risk','property risk','property risk','liability risk.','personal risk','property risk','liability risk.','property risk','property risk','liability risk.','liability risk.','personal risk','personal risk','property risk','liability risk.','property risk','personal risk','liability risk.','personal risk','liability risk.','liability risk.','property risk','property risk','personal risk','personal risk','personal risk','liability risk.','property risk','personal risk','property risk','personal risk','liability risk.','property risk','personal risk','property risk','personal risk','personal risk','personal risk','liability risk.','personal risk','property risk','liability risk.','liability risk.','liability risk.','property risk','liability risk.','property risk','property risk','property risk','liability risk.','property risk','property risk','property risk','personal risk','liability risk.','property risk','property risk','property risk','property risk','personal risk','property risk','liability risk.','property risk','liability risk.','property risk','liability risk.','liability risk.','liability risk.','liability risk.','property risk','personal risk','property risk','personal risk'
    ],
    currency: [
      'PLN','IDR','DKK','VND','EUR','BRL','PEN','NZD','ARS','LTL','RUB','IRR','USD','ARS','BRL','PEN','CNY','RUB','UZS','BYR','CNY','EUR','HNL','CNY','EUR','PHP','BRL','VEF','CNY','KES','CZK','IDR','BYR','BRL','VND','THB','MXN','CNY','DOP','PHP','JPY','UGX','USD','CNY','PHP','EUR','BRL','BRL','RUB','IDR','IDR','CNY','CNY','USD','SEK','RUB','CLP','EUR','KPW','XOF','BRL','EUR','CNY','CZK','USD','BRL','EUR','IDR','CNY','IRR','EUR','IDR','EUR','CNY','IRR','PHP','AFN','EUR','NOK','CNY','RUB','PEN','EGP','CNY','CNY','SEK','USD','CAD','IDR','UAH','UAH','USD','BRL','IDR','BRL','IDR','PLN','CNY','TZS','PHP'
    ],
    potentialAmount: [
      '25000','25000','3500','50000','75000','7500','10000','50000','10000','50000','4500','75000','75000','7500','25000','10000','25000','25000','75000','75000','3500','7500','7500','10000','75000','7500','75000','25000','25000','4500','50000','25000','50000','7500','50000','65000','3500','75000','7500','10000','75000','25000','7500','10000','4500','10000','75000','50000','4500','65000','10000','25000','3500','7500','75000','50000','50000','50000','4500','4500','65000','65000','65000','10000','65000','75000','25000','65000','75000','7500','75000','25000','25000','65000','50000','4500','25000','65000','4500','50000','75000','75000','75000','25000','75000','7500','10000','50000','4500','7500','75000','7500','4500','75000','4500','10000','4500','7500','75000','65000'
    ],
    claimsType: [
      'car insurance','Homeowner','Homeowner','Life','Life','Health','car insurance','car insurance','Health','Health','Homeowner','Homeowner','Life','car insurance','Life','Life','Health','Homeowner','car insurance','car insurance','car insurance','Health','Homeowner','car insurance','car insurance','Health','Life','Health','car insurance','car insurance','Health','Health','Life','Health','Health','Life','Health','Health','Health','Health','Life','Life','Life','car insurance','Life','Life','Homeowner','Health','Homeowner','Health','Health','Life','Life','car insurance','car insurance','Homeowner','car insurance','car insurance','Life','Health','Homeowner','Homeowner','Health','Homeowner','car insurance','Homeowner','car insurance','Life','Homeowner','Homeowner','Life','Life','Life','Life','Health','Life','Health','Homeowner','car insurance','Life','Life','Homeowner','Homeowner','Life','Homeowner','Homeowner','Life','Health','Life','car insurance','Homeowner','Health','Homeowner','car insurance','Life','Life','Homeowner','car insurance','Life','car insurance'
    ],
    dateReceived: [
      '1/30/2023','11-02-2022','2/25/2023','2/20/2023','12/24/2022','8/24/2022','12-08-2022','7/24/2023','02-06-2023','12/27/2022','07-02-2023','8/28/2022','8/20/2022','11/17/2022','10/28/2022','06-09-2023','12-03-2022','1/28/2023','12/31/2022','5/24/2023','08-10-2022','06-01-2023','12-08-2022','10/22/2022','6/21/2023','12-07-2022','4/26/2023','3/27/2023','07-11-2023','06-07-2023','3/25/2023','8/14/2022','2/24/2023','12-01-2022','02-04-2023','09-10-2022','08-03-2022','03-02-2023','12-03-2022','11-06-2022','9/25/2022','3/24/2023','9/16/2022','11-06-2022','5/23/2023','9/22/2022','7/31/2022','9/15/2022','04-03-2023','10/19/2022','3/22/2023','12/21/2022','5/24/2023','06-02-2023','8/16/2022','9/23/2022','06-02-2023','7/28/2022','02-10-2023','11/21/2022','4/27/2023','03-08-2023','1/30/2023','01-07-2023','12-03-2022','9/29/2022','4/16/2023','8/29/2022','11-04-2022','9/20/2022','10-02-2022','03-01-2023','9/30/2022','04-03-2023','05-12-2023','9/30/2022','01-09-2023','11/13/2022','2/22/2023','4/17/2023','12-03-2022','6/15/2023','01-10-2023','09-02-2022','9/26/2022','7/18/2023','5/20/2023','3/16/2023','09-02-2022','11/25/2022','10-02-2022','10/23/2022','08-05-2022','07-07-2023','06-07-2023','6/16/2023','03-05-2023','12/28/2022','8/24/2022','06-07-2023'
    ],
    claimantType: [
      'Cash','UPI Transaction','Online mode','UPI Transaction','Cash','Cash','UPI Transaction','Online mode','UPI Transaction','Cash','UPI Transaction','Cash','Online mode','Online mode','UPI Transaction','Cash','UPI Transaction','UPI Transaction','UPI Transaction','UPI Transaction','UPI Transaction','Online mode','Cash','Online mode','UPI Transaction','Online mode','Online mode','UPI Transaction','UPI Transaction','Online mode','Online mode','Cash','Online mode','Online mode','UPI Transaction','UPI Transaction','Cash','UPI Transaction','Online mode','UPI Transaction','UPI Transaction','UPI Transaction','Cash','Online mode','Online mode','Cash','UPI Transaction','Cash','UPI Transaction','Online mode','Cash','Online mode','Cash','Cash','Cash','Online mode','UPI Transaction','Cash','Online mode','Cash','UPI Transaction','Online mode','UPI Transaction','Cash','Online mode','Cash','Cash','UPI Transaction','Online mode','Online mode','UPI Transaction','Online mode','Online mode','Cash','Cash','Online mode','UPI Transaction','Cash','UPI Transaction','UPI Transaction','Online mode','UPI Transaction','UPI Transaction','UPI Transaction','Online mode','UPI Transaction','Online mode','Online mode','UPI Transaction','Cash','UPI Transaction','Online mode','UPI Transaction','Online mode','Online mode','UPI Transaction','Cash','Cash','Online mode','Cash'
    ],
    claimantRep: [
      'Odey Tebald','Ragnar Gwyther','Skylar Littlefair','Newton Filshin','Reilly Olivia','Saleem Wannell','Prentiss Briskey','Felic Mannooch','Hartwell Maltby','Rik Vasnetsov','Hoebart Olensby','Hazel Scramage','Merle Kluge','Blaine Tidbald','Barnard Pordal','Antoine Breakey','Dillie Doel','Emilio Melley','Kermie Merrgen','Randolph Tonkinson','Carlo Elfleet','Prentiss Scinelli','Cletus Clayden','Lindy Dowers','Constantin Weddup','Gabe Getten','Lonnard Bezemer','Shep Fuentes','Tim Robker','Kermie Spencelayh','Eben Jertz','Colver Stollenbeck','Dan Yaneev','Goober Pennetta','Phillipp Bernardoux','Yance Sighart','Aaron Kardos','Rowen Dallicott','Sylvan Cullimore','Ewell Giacobo','Darrel Cobbledick','Ambrose Delort','Kahaleel Whitebread','Troy Licence','Sidney Huckerby','Alasteir Jurzyk','Filmer Castellan','Shelley Latham','Isiahi Shills','Byran Lambourne','Tannie Luttgert','Baxter Poulsom','Rutherford Bonavia','Merv De L'Isle','Berk Esberger','Symon Benazet','Jayson Tatersale','Iggie Odda','Felipe Petcher','Kip Mennear','Waylan Simonato','Dirk Everill','Harlin Terrazzo','Baillie Franklyn','Wilhelm Kilgour','Harry Abramovitch','Rolfe Northley','Hallsy Culcheth','Clemmie Paddington','Chris Mogey','Broderick Rilings','Garry Whawell','Gaelan Motten','Rex Edinburough','Griffith Waller','Camey Gillow','Freddy Garden','Aldo Latehouse','Eugen Hawket','Asher Godbert','Isadore McCarter','Noak Pieters','Franzen Sherel','Humphrey Bimson','Forbes MacLucais','Alphonso Searl','Zacherie Rosberg','Burty Addie','Morgan Kindall','Noble MacIlraith','Abbie List','Kayne Yo','Jerrie Cockayme','Josiah Blunsden','Edmund Fenlon','Tanny Callow','Larry Kollach','Binky Leipelt','Darnall Pfeffer','Hubey Headly'
    ],
    damageDesc:[
      'theft','man-made disasters','natural calamities','natural calamities','damages due to transit','accidental damages','damages due to transit','damages due to transit','vandalism','accidental damages','man-made disasters','man-made disasters','accidental damages','accidental damages','natural calamities','natural calamities','vandalism','natural calamities','theft','accidental damages','damages due to transit','natural calamities','natural calamities','theft','damages due to transit','man-made disasters','natural calamities','accidental damages','damages due to transit','accidental damages','vandalism','damages due to transit','theft','theft','theft','theft','theft','man-made disasters','theft','damages due to transit','natural calamities','accidental damages','theft','vandalism','theft','natural calamities','vandalism','vandalism','man-made disasters','vandalism','vandalism','man-made disasters','natural calamities','man-made disasters','damages due to transit','natural calamities','accidental damages','accidental damages','vandalism','damages due to transit','theft','natural calamities','damages due to transit','natural calamities','man-made disasters','natural calamities','damages due to transit','theft','theft','vandalism','damages due to transit','damages due to transit','damages due to transit','accidental damages','damages due to transit','accidental damages','theft','vandalism','man-made disasters','natural calamities','accidental damages','man-made disasters','man-made disasters','man-made disasters','natural calamities','theft','damages due to transit','accidental damages','vandalism','man-made disasters','vandalism','accidental damages','man-made disasters','theft','theft','man-made disasters','theft','vandalism','accidental damages','accidental damages'
    ],
    lossEstimate:[
      'Zloty','Rupiah','Krone','Dong','Euro','Real','Sol','Dollar','Peso','Litas','Ruble','Rial','Dollar','Peso','Real','Sol','Yuan Renminbi','Ruble','Som','Ruble','Yuan Renminbi','Euro','Lempira','Yuan Renminbi','Euro','Peso','Real','Bolivar','Yuan Renminbi','Shilling','Koruna','Rupiah','Ruble','Real','Dong','Baht','Peso','Yuan Renminbi','Peso','Peso','Yen','Shilling','Dollar','Yuan Renminbi','Peso','Euro','Real','Real','Ruble','Rupiah','Rupiah','Yuan Renminbi','Yuan Renminbi','Dollar','Krona','Ruble','Peso','Euro','Won','Franc','Real','Euro','Yuan Renminbi','Koruna','Dollar','Real','Euro','Rupiah','Yuan Renminbi','Rial','Euro','Rupiah','Euro','Yuan Renminbi','Rial','Peso','Afghani','Euro','Krone','Yuan Renminbi','Ruble','Sol','Pound','Yuan Renminbi','Yuan Renminbi','Krona','Dollar','Dollar','Rupiah','Hryvnia','Hryvnia','Dollar','Real','Rupiah','Real','Rupiah','Zloty','Yuan Renminbi','Shilling','Peso'
    ],
    deductible:[
      'Yes','No','No','Yes','No','Yes','Yes','Yes','No','No','Yes','Yes','Yes','Yes','Yes','No','No','No','No','Yes','No','Yes','No','No','Yes','Yes','Yes','No','Yes','No','Yes','Yes','No','No','No','No','Yes','Yes','No','No','Yes','No','Yes','Yes','No','No','Yes','Yes','No','No','Yes','Yes','No','No','No','Yes','No','Yes','No','No','Yes','No','No','Yes','No','No','No','Yes','No','Yes','No','No','No','No','No','No','Yes','Yes','Yes','No','Yes','No','No','No','Yes','No','No','Yes','Yes','Yes','Yes','No','Yes','Yes','Yes','Yes','Yes','Yes','No','No'
    ],
    insurer:[
      'Rania','Jourdain','Elisabetta','Ken','Norman','Alie','Garvin','Man','Rossie','Tobit','Mavra','Marin','Jaclyn','Rebeka','Kevin','Burch','Andee','Michaella','Fifi','Lilian','Midge','Filmer','Kyle','Georgine','Rebeka','Bale','Zuzana','Tom','Yankee','Rosalind','Cosme','Ardath','Bethany','Werner','Candide','Aldus','Lois','Fanchon','Edyth','Nancey','Ag','Ludovika','Michaeline','Brand','Clementine','Stephie','Stearn','Emmalyn','Willi','Rancell','Dunc','Emelita','Maddy','Alia','Karil','Allison','Zachariah','Georgy','Tony','Ivonne','Pincas','Patrizio','Gillan','Maggy','Egor','Donny','Drucill','Gib','Rogerio','Tommie','Lynna','Rodd','Ardella','Sterne','Kirstin','Janis','Corbett','Gerianna','Chan','Dilly','Jere','Baxie','Kayley','Melamie','Neils','Fredrick','Janet','Tiffani','Annamaria','Nonna','Gertrude','April','Cristine','Nert','Rivy','Correna','Ware','Bill','Bliss','Casie'
    ],
    role :[
      'No','No','Yes','Yes','Yes','No','Yes','No','Yes','No','Yes','Yes','No','No','No','No','Yes','Yes','Yes','Yes','Yes','No','Yes','No','No','Yes','Yes','Yes','No','Yes','Yes','Yes','No','No','No','Yes','No','Yes','No','Yes','No','Yes','Yes','Yes','No','Yes','No','No','No','No','No','No','No','No','No','No','No','Yes','Yes','No','No','No','No','Yes','Yes','Yes','No','Yes','No','Yes','Yes','No','Yes','No','Yes','Yes','No','Yes','Yes','No','Yes','No','No','Yes','Yes','Yes','Yes','No','Yes','Yes','No','Yes','Yes','No','No','Yes','Yes','Yes','No','No'
    ],
    active:[
      'No','No','Yes','Yes','Yes','No','Yes','No','Yes','No','Yes','Yes','No','No','No','No','Yes','Yes','Yes','Yes','Yes','No','Yes','No','No','Yes','Yes','Yes','No','Yes','Yes','Yes','No','No','No','Yes','No','Yes','No','Yes','No','Yes','Yes','Yes','No','Yes','No','No','No','No','No','No','No','No','No','No','No','Yes','Yes','No','No','No','No','Yes','Yes','Yes','No','Yes','No','Yes','Yes','No','Yes','No','Yes','Yes','No','Yes','Yes','No','Yes','No','No','Yes','Yes','Yes','Yes','No','Yes','Yes','No','Yes','Yes','No','No','Yes','Yes','Yes','No','No'
    ],
    firstName:[
      'Deena','Josefa','Luella','Shayla','Shandra','Sabine','Florri','Calida','Drusie','Lotta','Mireille','Farah','Maggy','Sorcha','Karine','Helena','Alessandra','Nettie','Gunilla','Aundrea','Ardys','Jenine','Annadiana','Melisent','Veda','Nanci','Elissa','Barbette','Karlotte','Jemie','Andrea','Othelia','Milzie','Maurene','Courtnay','Ailyn','Nadean','Mariska','Rozalie','Bamby','Irita','Cathrin','Marilee','Kizzee','Joby','Sada','Clemmy','Letti','Agneta','Tedi','Annie','Sharl','Shara','Jayme','Lily','Melania','Jessi','Cosette','Darbie','Becky','Malinda','Elvina','Gwenore','Missy','Chrystal','Amandy','Stafani','Carmen','Shaina','Lane','Darell','Shoshana','Claudine','Maudie','Jaynell','Dosi','Charita','Ree','Nadeen','Leonelle','Alie','Henryetta','Scarlett','Karry','Adelina','Brande','Brigida','Delcine','Lorie','Gerry','Chrysler','Nomi','Flori','Vania','Arlyne','Lucine','Teresina','Sallyann','Marnia','Samantha'
    ],
    lastName:[
      'Tebald','Gwyther','Littlefair','Filshin','Olivia','Wannell','Briskey','Mannooch','Maltby','Vasnetsov','Olensby','Scramage','Kluge','Tidbald','Pordal','Breakey','Doel','Melley','Merrgen','Tonkinson','Elfleet','Scinelli','Clayden','Dowers','Weddup','Getten','Bezemer','Fuentes','Robker','Spencelayh','Jertz','Stollenbeck','Yaneev','Pennetta','Bernardoux','Sighart','Kardos','Dallicott','Cullimore','Giacobo','Cobbledick','Delort','Whitebread','Licence','Huckerby','Jurzyk','Castellan','Latham','Shills','Lambourne','Luttgert','Poulsom','Bonavia','De L'Isle','Esberger','Benazet','Tatersale','Odda','Petcher','Mennear','Simonato','Everill','Terrazzo','Franklyn','Kilgour','Abramovitch','Northley','Culcheth','Paddington','Mogey','Rilings','Whawell','Motten','Edinburough','Waller','Gillow','Garden','Latehouse','Hawket','Godbert','McCarter','Pieters','Sherel','Bimson','MacLucais','Searl','Rosberg','Addie','Kindall','MacIlraith','List','Yo','Cockayme','Blunsden','Fenlon','Callow','Kollach','Leipelt','Pfeffer','Headly'
    ],
    vendor:[
      'business','manufacturer','seller','organization','business','organization','seller','organization','seller','manufacturer','seller','organization','organization','seller','seller','organization','seller','business','seller','business','organization','business','business','organization','organization','organization','organization','business','seller','seller','business','seller','organization','organization','business','business','organization','organization','seller','business','manufacturer','manufacturer','seller','organization','seller','business','business','seller','organization','business','seller','business','organization','business','organization','seller','seller','business','organization','seller','organization','organization','seller','manufacturer','organization','organization','manufacturer','manufacturer','business','organization','business','business','manufacturer','business','seller','business','organization','manufacturer','seller','seller','business','seller','manufacturer','business','seller','manufacturer','organization','seller','seller','manufacturer','organization','seller','organization','organization','seller','seller','seller','business','business','seller'
    ],
    authority:[
      'Yes','Yes','No','No','Yes','Yes','No','Yes','Yes','No','Yes','No','Yes','No','No','Yes','No','No','Yes','No','Yes','No','Yes','Yes','Yes','No','Yes','No','No','No','No','No','Yes','No','No','Yes','No','No','Yes','Yes','No','No','No','No','Yes','Yes','Yes','Yes','Yes','Yes','Yes','Yes','No','No','No','Yes','Yes','Yes','No','Yes','Yes','No','Yes','No','No','Yes','No','No','No','Yes','No','Yes','No','No','Yes','No','No','No','Yes','No','No','Yes','Yes','Yes','No','No','No','No','Yes','No','Yes','No','No','No','No','Yes','No','No','No','No'
    ],
    exposure:[
      '1 unit','5 unit','2 unit','1 unit','7 unit','1 unit','5 unit','3 unit','3 unit','1 unit','5 unit','7 unit','5 unit','3 unit','2 unit','7 unit','5 unit','7 unit','2 unit','3 unit','1 unit','3 unit','3 unit','2 unit','1 unit','3 unit','1 unit','2 unit','5 unit','2 unit','2 unit','3 unit','7 unit','5 unit','7 unit','5 unit','1 unit','5 unit','2 unit','1 unit','7 unit','1 unit','3 unit','7 unit','2 unit','7 unit','2 unit','7 unit','7 unit','7 unit','2 unit','2 unit','2 unit','7 unit','2 unit','5 unit','5 unit','1 unit','3 unit','5 unit','2 unit','2 unit','5 unit','7 unit','2 unit','5 unit','7 unit','3 unit','1 unit','2 unit','7 unit','5 unit','5 unit','7 unit','3 unit','7 unit','3 unit','2 unit','1 unit','3 unit','3 unit','5 unit','2 unit','3 unit','5 unit','2 unit','3 unit','5 unit','2 unit','2 unit','3 unit','7 unit','2 unit','5 unit','1 unit','1 unit','1 unit','1 unit','1 unit','3 unit'
    ],
    costType:[
      'mixed cost','fixed cost','a variable cost','fixed cost','a variable cost','mixed cost','mixed cost','fixed cost','a variable cost','a variable cost','mixed cost','a variable cost','mixed cost','fixed cost','a variable cost','mixed cost','mixed cost','fixed cost','fixed cost','a variable cost','fixed cost','mixed cost','a variable cost','fixed cost','fixed cost','fixed cost','fixed cost','a variable cost','fixed cost','mixed cost','a variable cost','mixed cost','mixed cost','a variable cost','a variable cost','mixed cost','mixed cost','mixed cost','a variable cost','fixed cost','a variable cost','a variable cost','fixed cost','fixed cost','a variable cost','mixed cost','mixed cost','a variable cost','mixed cost','fixed cost','a variable cost','fixed cost','fixed cost','mixed cost','fixed cost','a variable cost','mixed cost','mixed cost','fixed cost','mixed cost','a variable cost','fixed cost','mixed cost','mixed cost','fixed cost','mixed cost','mixed cost','fixed cost','fixed cost','fixed cost','a variable cost','fixed cost','fixed cost','mixed cost','mixed cost','mixed cost','mixed cost','a variable cost','fixed cost','a variable cost','fixed cost','a variable cost','a variable cost','fixed cost','fixed cost','fixed cost','mixed cost','mixed cost','a variable cost','mixed cost','fixed cost','a variable cost','fixed cost','a variable cost','mixed cost','fixed cost','mixed cost','mixed cost','fixed cost','a variable cost'
    ],
    costCategory:[
      'sunk costs','controllable costs.','indirect costs','direct costs','controllable costs.','fixed costs','controllable costs.','indirect costs','operating costs','operating costs','operating costs','opportunity costs','direct costs','sunk costs','controllable costs.','opportunity costs','operating costs','variable costs','direct costs','fixed costs','operating costs','fixed costs','fixed costs','fixed costs','direct costs','variable costs','indirect costs','direct costs','controllable costs.','fixed costs','operating costs','direct costs','direct costs','direct costs','variable costs','direct costs','sunk costs','controllable costs.','operating costs','sunk costs','variable costs','operating costs','sunk costs','operating costs','indirect costs','operating costs','indirect costs','opportunity costs','sunk costs','operating costs','opportunity costs','sunk costs','variable costs','controllable costs.','indirect costs','direct costs','controllable costs.','variable costs','operating costs','controllable costs.','sunk costs','fixed costs','opportunity costs','fixed costs','variable costs','direct costs','variable costs','operating costs','controllable costs.','indirect costs','variable costs','sunk costs','variable costs','sunk costs','operating costs','controllable costs.','controllable costs.','indirect costs','operating costs','opportunity costs','opportunity costs','controllable costs.','sunk costs','variable costs','opportunity costs','controllable costs.','fixed costs','operating costs','controllable costs.','opportunity costs','operating costs','opportunity costs','fixed costs','direct costs','fixed costs','operating costs','opportunity costs','fixed costs','opportunity costs','sunk costs'
    ],
    reserving:[
      'estimating unpaid claims within insurance','evaluating','reinsurance','evaluating','evaluating','reviewing','estimating unpaid claims within insurance','estimating unpaid claims within insurance','reviewing','estimating unpaid claims within insurance','self-insurance.','estimating unpaid claims within insurance','estimating unpaid claims within insurance','estimating unpaid claims within insurance','self-insurance.','self-insurance.','estimating unpaid claims within insurance','estimating unpaid claims within insurance','reviewing','evaluating','reviewing','reinsurance','reviewing','reviewing','reviewing','reviewing','self-insurance.','self-insurance.','evaluating','self-insurance.','self-insurance.','reviewing','reinsurance','reviewing','evaluating','reviewing','reviewing','reviewing','evaluating','self-insurance.','estimating unpaid claims within insurance','reinsurance','self-insurance.','self-insurance.','self-insurance.','self-insurance.','reviewing','estimating unpaid claims within insurance','self-insurance.','evaluating','estimating unpaid claims within insurance','self-insurance.','reinsurance','evaluating','evaluating','self-insurance.','evaluating','evaluating','self-insurance.','reviewing','estimating unpaid claims within insurance','reinsurance','self-insurance.','estimating unpaid claims within insurance','estimating unpaid claims within insurance','reinsurance','estimating unpaid claims within insurance','self-insurance.','estimating unpaid claims within insurance','estimating unpaid claims within insurance','reinsurance','estimating unpaid claims within insurance','reinsurance','estimating unpaid claims within insurance','reviewing','self-insurance.','reinsurance','evaluating','reinsurance','estimating unpaid claims within insurance','estimating unpaid claims within insurance','estimating unpaid claims within insurance','reviewing','estimating unpaid claims within insurance','reinsurance','reviewing','reviewing','estimating unpaid claims within insurance','evaluating','self-insurance.','evaluating','self-insurance.','evaluating','self-insurance.','reinsurance','reinsurance','estimating unpaid claims within insurance','self-insurance.','evaluating','self-insurance.'
    ],
    reserve:[
      'No','Yes','No','Yes','No','No','Yes','Yes','Yes','No','No','Yes','Yes','Yes','Yes','Yes','Yes','Yes','Yes','No','Yes','No','No','Yes','No','No','No','Yes','Yes','No','Yes','No','Yes','Yes','Yes','No','No','No','Yes','Yes','No','Yes','Yes','Yes','No','No','Yes','No','No','No','No','No','Yes','No','Yes','No','Yes','Yes','Yes','Yes','Yes','Yes','Yes','Yes','Yes','No','No','Yes','No','Yes','No','No','No','No','Yes','No','Yes','No','No','No','Yes','Yes','Yes','Yes','No','Yes','Yes','Yes','No','Yes','Yes','No','Yes','No','No','Yes','Yes','No','No','No'
    ],
    expsoure1:[
      '1 unit','5 unit','2 unit','1 unit','7 unit','1 unit','5 unit','3 unit','3 unit','1 unit','5 unit','7 unit','5 unit','3 unit','2 unit','7 unit','5 unit','7 unit','2 unit','3 unit','1 unit','3 unit','3 unit','2 unit','1 unit','3 unit','1 unit','2 unit','5 unit','2 unit','2 unit','3 unit','7 unit','5 unit','7 unit','5 unit','1 unit','5 unit','2 unit','1 unit','7 unit','1 unit','3 unit','7 unit','2 unit','7 unit','2 unit','7 unit','7 unit','7 unit','2 unit','2 unit','2 unit','7 unit','2 unit','5 unit','5 unit','1 unit','3 unit','5 unit','2 unit','2 unit','5 unit','7 unit','2 unit','5 unit','7 unit','3 unit','1 unit','2 unit','7 unit','5 unit','5 unit','7 unit','3 unit','7 unit','3 unit','2 unit','1 unit','3 unit','3 unit','5 unit','2 unit','3 unit','5 unit','2 unit','3 unit','5 unit','2 unit','2 unit','3 unit','7 unit','2 unit','5 unit','1 unit','1 unit','1 unit','1 unit','1 unit','3 unit'
    ],
    coverage:[
      'causes of death','homicide.','causes of death','suicide','including natural and accidental causes','causes of death','suicide','causes of death','causes of death','including natural and accidental causes','homicide.','including natural and accidental causes','causes of death','including natural and accidental causes','homicide.','including natural and accidental causes','causes of death','suicide','suicide','homicide.','suicide','homicide.','homicide.','homicide.','suicide','suicide','homicide.','causes of death','causes of death','homicide.','causes of death','including natural and accidental causes','including natural and accidental causes','causes of death','suicide','suicide','suicide','homicide.','homicide.','suicide','homicide.','including natural and accidental causes','suicide','homicide.','causes of death','causes of death','suicide','including natural and accidental causes','causes of death','homicide.','including natural and accidental causes','causes of death','including natural and accidental causes','homicide.','homicide.','suicide','suicide','including natural and accidental causes','suicide','suicide','homicide.','including natural and accidental causes','causes of death','suicide','causes of death','including natural and accidental causes','including natural and accidental causes','homicide.','homicide.','including natural and accidental causes','including natural and accidental causes','homicide.','causes of death','causes of death','suicide','suicide','suicide','including natural and accidental causes','including natural and accidental causes','homicide.','causes of death','causes of death','including natural and accidental causes','including natural and accidental causes','suicide','causes of death','causes of death','homicide.','including natural and accidental causes','causes of death','causes of death','suicide','causes of death','homicide.','homicide.','including natural and accidental causes','causes of death','suicide','homicide.','homicide.'
    ],
    reserveCurrency:[
      'Yuan Renminbi','Yuan Renminbi','Real','Koruna','Lempira','Yen','Ruble','Sol','Koruna','Ruble','Rial','Zloty','Kuna','Ruble','Rupiah','Zloty','Yen','Yuan Renminbi','Yuan Renminbi','Baht','Euro','Zloty','Naira','Yen','Krona','Yuan Renminbi','Ruble','Yen','Peso','Peso','Yuan Renminbi','Peso','Koruna','Yuan Renminbi','Euro','Yuan Renminbi','Rupiah','Peso','Yuan Renminbi','Rial','Dollar','Rupiah','Rupiah','Euro','Yuan Renminbi','Ruble','Zloty','Euro','Yuan Renminbi','Peso','Peso','Real','Rupee','Euro','Yuan Renminbi','Euro','Dinar','Rupiah','Yuan Renminbi','Baht','Yuan Renminbi','Peso','Rupiah','Rupiah','Dollar','Tugrik','Yuan Renminbi','Rupiah','Ruble','Rupiah','Yuan Renminbi','Yuan Renminbi','Yen','Euro','Rupiah','Yen','Dram','Euro','Yuan Renminbi','Yuan Renminbi','Euro','Hryvnia','Peso','Real','Krona','Yuan Renminbi','Rupiah','Rupiah','Krona','Real','Yuan Renminbi','Kuna','Euro','Peso','Afghani','Dollar','Ruble','Euro','Peso','Ruble'
    ],
    recoveryReserve:[
      'No','Yes','Yes','No','Yes','Yes','Yes','Yes','No','No','Yes','Yes','Yes','No','No','Yes','Yes','No','No','Yes','No','No','No','Yes','No','Yes','Yes','Yes','No','No','Yes','No','Yes','Yes','Yes','Yes','Yes','Yes','Yes','Yes','No','No','Yes','Yes','Yes','No','Yes','Yes','Yes','Yes','Yes','Yes','Yes','No','Yes','Yes','Yes','Yes','No','No','Yes','Yes','Yes','No','No','No','No','Yes','No','No','No','Yes','No','Yes','Yes','No','Yes','No','Yes','Yes','Yes','Yes','No','No','No','No','No','No','No','No','Yes','No','No','Yes','Yes','Yes','Yes','Yes','No','No'
    ],
    deductibleRecovery:[
      'to eliminate small claims','and to reduce moral','morale hazard.','which helps keep premiums affordable','and to reduce moral','to eliminate small claims','which helps keep premiums affordable','to eliminate small claims','and to reduce moral','which helps keep premiums affordable','which helps keep premiums affordable','which helps keep premiums affordable','to eliminate small claims','and to reduce moral','and to reduce moral','which helps keep premiums affordable','morale hazard.','and to reduce moral','which helps keep premiums affordable','morale hazard.','to eliminate small claims','which helps keep premiums affordable','which helps keep premiums affordable','which helps keep premiums affordable','which helps keep premiums affordable','morale hazard.','which helps keep premiums affordable','and to reduce moral','and to reduce moral','morale hazard.','and to reduce moral','morale hazard.','which helps keep premiums affordable','and to reduce moral','morale hazard.','to eliminate small claims','and to reduce moral','morale hazard.','to eliminate small claims','morale hazard.','and to reduce moral','and to reduce moral','morale hazard.','morale hazard.','and to reduce moral','morale hazard.','morale hazard.','which helps keep premiums affordable','to eliminate small claims','morale hazard.','to eliminate small claims','which helps keep premiums affordable','which helps keep premiums affordable','morale hazard.','morale hazard.','which helps keep premiums affordable','to eliminate small claims','morale hazard.','to eliminate small claims','and to reduce moral','morale hazard.','to eliminate small claims','and to reduce moral','morale hazard.','and to reduce moral','morale hazard.','and to reduce moral','to eliminate small claims','to eliminate small claims','and to reduce moral','morale hazard.','to eliminate small claims','which helps keep premiums affordable','which helps keep premiums affordable','and to reduce moral','morale hazard.','to eliminate small claims','which helps keep premiums affordable','to eliminate small claims','morale hazard.','morale hazard.','and to reduce moral','to eliminate small claims','which helps keep premiums affordable','morale hazard.','which helps keep premiums affordable','morale hazard.','to eliminate small claims','and to reduce moral','morale hazard.','morale hazard.','which helps keep premiums affordable','which helps keep premiums affordable','which helps keep premiums affordable','morale hazard.','and to reduce moral','morale hazard.','and to reduce moral','and to reduce moral','to eliminate small claims'
    ],
    deductible1:[
      'Yes','No','No','Yes','No','Yes','Yes','Yes','No','No','Yes','Yes','Yes','Yes','Yes','No','No','No','No','Yes','No','Yes','No','No','Yes','Yes','Yes','No','Yes','No','Yes','Yes','No','No','No','No','Yes','Yes','No','No','Yes','No','Yes','Yes','No','No','Yes','Yes','No','No','Yes','Yes','No','No','No','Yes','No','Yes','No','No','Yes','No','No','Yes','No','No','No','Yes','No','Yes','No','No','No','No','No','No','Yes','Yes','Yes','No','Yes','No','No','No','Yes','No','No','Yes','Yes','Yes','Yes','No','Yes','Yes','Yes','Yes','Yes','Yes','No','No'
    ],
    payer:[
      'process claims','Medicare','collect payments','set service rates','collect payments','process claims','health plan providers','pay provider claims.','Medicare','collect payments','process claims','health plan providers','pay provider claims.','process claims','Medicaid','pay provider claims.','Medicare','health plan providers','Medicaid','Medicaid','Medicaid','pay provider claims.','Medicaid','collect payments','Medicare','set service rates','process claims','set service rates','collect payments','health plan providers','pay provider claims.','collect payments','set service rates','Medicaid','Medicaid','pay provider claims.','set service rates','health plan providers','set service rates','collect payments','collect payments','health plan providers','collect payments','pay provider claims.','Medicare','collect payments','collect payments','set service rates','set service rates','collect payments','Medicare','pay provider claims.','health plan providers','collect payments','Medicare','process claims','set service rates','set service rates','Medicaid','process claims','Medicaid','collect payments','Medicare','health plan providers','process claims','collect payments','collect payments','health plan providers','pay provider claims.','collect payments','Medicaid','health plan providers','health plan providers','process claims','pay provider claims.','process claims','set service rates','Medicare','set service rates','pay provider claims.','pay provider claims.','collect payments','health plan providers','process claims','Medicaid','Medicare','Medicaid','health plan providers','Medicaid','Medicare','Medicaid','Medicaid','pay provider claims.','Medicare','Medicare','Medicaid','set service rates','Medicaid','pay provider claims.','set service rates'
    ],
    reserveLine:[
      'Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.','Claims Reserves. ','Statutory Reserves.','Unearned premium reserves.'
    ],
    recoveryAmount:[
      '67000','67000','74734','35000','95000','95000','76000','67000','34500','35000','2500','35000','76000','60000','35000','2500','2500','67000','34500','60000','76000','67000','67000','67000','76000','5000','5000','2500','76000','60000','67000','35000','2500','67000','95000','60000','67000','95000','76000','35000','60000','34500','5000','74734','35000','35000','95000','2500','34500','76000','95000','67000','5000','2500','60000','76000','67000','34500','67000','34500','95000','60000','60000','67000','95000','95000','95000','67000','74734','76000','76000','2500','34500','95000','67000','67000','34500','2500','74734','34500','76000','74734','95000','34500','5000','35000','35000','2500','2500','74734','34500','74734','35000','95000','60000','60000','67000','95000','5000','2500'
    ],
    reportableTax:[
      'wages','salaries','fees','salaries','salaries','salaries','salaries','wages','fees','commissions','salaries','commissions','commissions','wages','and tips','and tips','commissions','salaries','fees','fees','fees','and tips','and tips','and tips','salaries','and tips','and tips','commissions','wages','commissions','salaries','commissions','fees','commissions','fees','commissions','and tips','and tips','and tips','wages','and tips','fees','salaries','salaries','fees','fees','wages','fees','wages','commissions','and tips','salaries','commissions','and tips','fees','commissions','and tips','salaries','wages','commissions','and tips','commissions','fees','commissions','fees','and tips','salaries','commissions','and tips','fees','and tips','fees','wages','salaries','wages','and tips','salaries','wages','wages','and tips','and tips','salaries','commissions','and tips'
    ],
    method:[
      'Term Life','Whole life','Whole life','Whole life','Whole life','Term Life','Dual insurance','Whole life','Dual insurance','Term Life','Dual insurance','Dual insurance','Term Life','Whole life','Term Life','Dual insurance','Term Life','Term Life','Dual insurance','Dual insurance','Term Life','Dual insurance','Dual insurance','Dual insurance','Dual insurance','Term Life','Dual insurance','Term Life','Term Life','Dual insurance','Dual insurance','Dual insurance','Whole life','Whole life','Dual insurance','Whole life','Dual insurance','Term Life','Term Life','Dual insurance','Dual insurance','Dual insurance','Whole life','Dual insurance','Whole life','Whole life','Dual insurance','Term Life','Term Life','Dual insurance','Whole life','Term Life','Whole life','Term Life','Term Life','Term Life','Term Life','Dual insurance','Whole life','Whole life','Dual insurance','Term Life','Whole life','Term Life','Term Life','Term Life','Term Life','Whole life','Term Life','Term Life','Whole life','Whole life','Whole life','Dual insurance','Term Life','Dual insurance','Term Life','Term Life','Dual insurance','Dual insurance','Whole life','Whole life','Term Life','Whole life','Whole life','Whole life','Term Life','Dual insurance','Term Life','Term Life','Term Life','Term Life','Whole life','Term Life','Dual insurance','Dual insurance','Term Life','Whole life','Whole life','Dual insurance'
    ],
    payeeName:[
      'Odey','Ragnar','Skylar','Newton','Reilly','Saleem','Prentiss','Felic','Hartwell','Rik','Hoebart','Hazel','Merle','Blaine','Barnard','Antoine','Dillie','Emilio','Kermie','Randolph','Carlo','Prentiss','Cletus','Lindy','Constantin','Gabe','Lonnard','Shep','Tim','Kermie','Eben','Colver','Dan','Goober','Phillipp','Yance','Aaron','Rowen','Sylvan','Ewell','Darrel','Ambrose','Kahaleel','Troy','Sidney','Alasteir','Filmer','Shelley','Isiahi','Byran','Tannie','Baxter','Rutherford','Merv','Berk','Symon','Jayson','Iggie','Felipe','Kip','Waylan','Dirk','Harlin','Baillie','Wilhelm','Harry','Rolfe','Hallsy','Clemmie','Chris','Broderick','Garry','Gaelan','Rex','Griffith','Camey','Freddy','Aldo','Eugen','Asher','Isadore','Noak','Franzen','Humphrey','Forbes','Alphonso','Zacherie','Burty','Morgan','Noble','Abbie','Kayne','Jerrie','Josiah','Edmund','Tanny','Larry','Binky','Darnall','Hubey'
    ],
    payment:[
      'annual','semi-annual','semi-annual','annual','semi-annual','annual','monthly','monthly','quarterly','annual','quarterly','annual','annual','quarterly','monthly','quarterly','semi-annual','annual','semi-annual','annual','semi-annual','monthly','semi-annual','semi-annual','annual','semi-annual','annual','annual','semi-annual','quarterly','quarterly','semi-annual','semi-annual','monthly','semi-annual','annual','monthly','annual','annual','annual','semi-annual','monthly','semi-annual','monthly','monthly','semi-annual','semi-annual','monthly','quarterly','monthly','semi-annual','quarterly','quarterly','monthly','monthly','monthly','semi-annual','quarterly','semi-annual','monthly','monthly','quarterly','monthly','quarterly','annual','annual','monthly','semi-annual','quarterly','quarterly','annual','semi-annual','annual','quarterly','annual','semi-annual','monthly','semi-annual','monthly','monthly','annual','quarterly','semi-annual','semi-annual','semi-annual','quarterly','quarterly','annual','semi-annual','semi-annual','annual','annual','monthly','annual','quarterly','quarterly','annual','quarterly','semi-annual','monthly'
    ],
    payOrder:[
      'recipient','recipient','company','others','others','others','company','company','others','others','company','others','recipient','others','company','company','company','recipient','recipient','recipient','company','recipient','others','company','others','others','others','recipient','company','others','others','recipient','company','recipient','company','company','recipient','company','recipient','recipient','others','recipient','others','recipient','others','recipient','others','recipient','company','company','company','company','company','recipient','company','recipient','others','company','company','company','others','others','others','recipient','company','company','others','recipient','others','recipient','recipient','others','recipient','company','company','recipient','others','company','company','recipient','company','company','company','others','others','recipient','others','others','recipient','recipient','company','company','others','company','recipient','others','company','company','company','company'
    ],
    mail:[
      'others','others','company','others','recipient','others','recipient','recipient','others','recipient','others','company','company','company','company','company','company','others','company','recipient','recipient','others','company','recipient','company','recipient','others','company','company','company','company','company','company','recipient','company','recipient','others','others','recipient','company','company','recipient','recipient','recipient','others','company','recipient','recipient','others','others','others','company','company','company','others','recipient','recipient','others','others','others','others','others','company','company','others','recipient','others','recipient','others','others','company','recipient','company','others','others','others','others','recipient','recipient','recipient','company','recipient','recipient','recipient','company','recipient','recipient','company','recipient','others','recipient','company','company','company','others','others','others','others','recipient','recipient'
    ],
    payee:[
      'Odey Tebald','Ragnar Gwyther','Skylar Littlefair','Newton Filshin','Reilly Olivia','Saleem Wannell','Prentiss Briskey','Felic Mannooch','Hartwell Maltby','Rik Vasnetsov','Hoebart Olensby','Hazel Scramage','Merle Kluge','Blaine Tidbald','Barnard Pordal','Antoine Breakey','Dillie Doel','Emilio Melley','Kermie Merrgen','Randolph Tonkinson','Carlo Elfleet','Prentiss Scinelli','Cletus Clayden','Lindy Dowers','Constantin Weddup','Gabe Getten','Lonnard Bezemer','Shep Fuentes','Tim Robker','Kermie Spencelayh','Eben Jertz','Colver Stollenbeck','Dan Yaneev','Goober Pennetta','Phillipp Bernardoux','Yance Sighart','Aaron Kardos','Rowen Dallicott','Sylvan Cullimore','Ewell Giacobo','Darrel Cobbledick','Ambrose Delort','Kahaleel Whitebread','Troy Licence','Sidney Huckerby','Alasteir Jurzyk','Filmer Castellan','Shelley Latham','Isiahi Shills','Byran Lambourne','Tannie Luttgert','Baxter Poulsom','Rutherford Bonavia','Merv De L'Isle','Berk Esberger','Symon Benazet','Jayson Tatersale','Iggie Odda','Felipe Petcher','Kip Mennear','Waylan Simonato','Dirk Everill','Harlin Terrazzo','Baillie Franklyn','Wilhelm Kilgour','Harry Abramovitch','Rolfe Northley','Hallsy Culcheth','Clemmie Paddington','Chris Mogey','Broderick Rilings','Garry Whawell','Gaelan Motten','Rex Edinburough','Griffith Waller','Camey Gillow','Freddy Garden','Aldo Latehouse','Eugen Hawket','Asher Godbert','Isadore McCarter','Noak Pieters','Franzen Sherel','Humphrey Bimson','Forbes MacLucais','Alphonso Searl','Zacherie Rosberg','Burty Addie','Morgan Kindall','Noble MacIlraith','Abbie List','Kayne Yo','Jerrie Cockayme','Josiah Blunsden','Edmund Fenlon','Tanny Callow','Larry Kollach','Binky Leipelt','Darnall Pfeffer','Hubey Headly'
    ],
    mailingAddress:[
      'otebald0@infoseek.co.jp','rgwyther1@indiegogo.com','slittlefair2@gmpg.org','nfilshin3@microsoft.com','rolivia4@yellowpages.com','swannell5@sohu.com','pbriskey6@yelp.com','fmannooch7@google.it','hmaltby8@hexun.com','rvasnetsov9@youtube.com','holensbya@diigo.com','hscramageb@tumblr.com','mklugec@taobao.com','btidbaldd@hao123.com','bpordale@cyberchimps.com','abreakeyf@about.me','ddoelg@home.pl','emelleyh@linkedin.com','kmerrgeni@google.it','rtonkinsonj@foxnews.com','celfleetk@dot.gov','pscinellil@home.pl','cclaydenm@ed.gov','ldowersn@guardian.co.uk','cweddupo@wsj.com','ggettenp@usatoday.com','lbezemerq@opera.com','sfuentesr@nationalgeographic.com','trobkers@xrea.com','kspencelayht@shinystat.com','ejertzu@newyorker.com','cstollenbeckv@opensource.org','dyaneevw@domainmarket.com','gpennettax@icq.com','pbernardouxy@nature.com','ysighartz@jugem.jp','akardos10@netvibes.com','rdallicott11@yelp.com','scullimore12@wiley.com','egiacobo13@comcast.net','dcobbledick14@wordpress.org','adelort15@cbsnews.com','kwhitebread16@fda.gov','tlicence17@utexas.edu','shuckerby18@icio.us','ajurzyk19@tripadvisor.com','fcastellan1a@google.com','slatham1b@360.cn','ishills1c@wsj.com','blambourne1d@twitpic.com','tluttgert1e@japanpost.jp','bpoulsom1f@creativecommons.org','rbonavia1g@php.net','mde1h@scribd.com','besberger1i@adobe.com','sbenazet1j@woothemes.com','jtatersale1k@facebook.com','iodda1l@scientificamerican.com','fpetcher1m@creativecommons.org','kmennear1n@pcworld.com','wsimonato1o@sitemeter.com','deverill1p@feedburner.com','hterrazzo1q@cnbc.com','bfranklyn1r@skyrock.com','wkilgour1s@toplist.cz','habramovitch1t@abc.net.au','rnorthley1u@cnn.com','hculcheth1v@pagesperso-orange.fr','cpaddington1w@eventbrite.com','cmogey1x@blinklist.com','brilings1y@uiuc.edu','gwhawell1z@arstechnica.com','gmotten20@disqus.com','redinburough21@nasa.gov','gwaller22@mysql.com','cgillow23@trellian.com','fgarden24@reverbnation.com','alatehouse25@elpais.com','ehawket26@ihg.com','agodbert27@dyndns.org','imccarter28@google.fr','npieters29@examiner.com','fsherel2a@marriott.com','hbimson2b@blogtalkradio.com','fmaclucais2c@craigslist.org','asearl2d@engadget.com','zrosberg2e@posterous.com','baddie2f@tumblr.com','mkindall2g@multiply.com','nmacilraith2h@chron.com','alist2i@theglobeandmail.com','kyo2j@ted.com','jcockayme2k@disqus.com','jblunsden2l@rakuten.co.jp','efenlon2m@desdev.cn','tcallow2n@barnesandnoble.com','lkollach2o@aboutads.info','bleipelt2p@miitbeian.gov.cn','dpfeffer2q@nps.gov','hheadly2r@about.me'
    ],
    eftRecord:[
      'Automatic teller machines','Direct payments between buyer-seller businesses','Direct payments between buyer-seller businesses','Direct payments between buyer-seller businesses','Electronic bill-paying via online banking','Automatic teller machines','Automatic teller machines','Automatic teller machines','Electronic bill-paying via online banking','Electronic bill-paying via online banking','Direct payments between buyer-seller businesses','Automatic teller machines','Electronic bill-paying via online banking','Automatic teller machines','Direct payments between buyer-seller businesses','Electronic bill-paying via online banking','International cash wire transfers.','Direct deposit payroll systems','Direct deposit payroll systems','Direct payments between buyer-seller businesses','Direct payments between buyer-seller businesses','Direct deposit payroll systems','Direct deposit payroll systems','International cash wire transfers.','Automatic teller machines','International cash wire transfers.','International cash wire transfers.','Automatic teller machines','Automatic teller machines','Direct payments between buyer-seller businesses','Direct deposit payroll systems','International cash wire transfers.','Direct deposit payroll systems','Automatic teller machines','Automatic teller machines','Direct deposit payroll systems','Automatic teller machines','International cash wire transfers.','Direct payments between buyer-seller businesses','Direct payments between buyer-seller businesses','Direct payments between buyer-seller businesses','Automatic teller machines','Direct deposit payroll systems','Direct deposit payroll systems','Direct deposit payroll systems','Automatic teller machines','Electronic bill-paying via online banking','Automatic teller machines','Electronic bill-paying via online banking','Direct payments between buyer-seller businesses','Automatic teller machines','Direct deposit payroll systems','Electronic bill-paying via online banking','Direct payments between buyer-seller businesses','International cash wire transfers.','Direct payments between buyer-seller businesses','International cash wire transfers.','Automatic teller machines','International cash wire transfers.','Electronic bill-paying via online banking','Direct payments between buyer-seller businesses','Automatic teller machines','Direct deposit payroll systems','Electronic bill-paying via online banking','Automatic teller machines','Electronic bill-paying via online banking','Electronic bill-paying via online banking','Electronic bill-paying via online banking','International cash wire transfers.','International cash wire transfers.','Direct deposit payroll systems','Automatic teller machines','Automatic teller machines','Direct deposit payroll systems','Direct deposit payroll systems','Electronic bill-paying via online banking','Automatic teller machines','Direct deposit payroll systems','International cash wire transfers.','Electronic bill-paying via online banking','Automatic teller machines','Automatic teller machines','Electronic bill-paying via online banking','Direct payments between buyer-seller businesses','Direct deposit payroll systems','Direct deposit payroll systems','Direct deposit payroll systems','International cash wire transfers.','Direct deposit payroll systems','Automatic teller machines','Electronic bill-paying via online banking','Automatic teller machines','International cash wire transfers.','Electronic bill-paying via online banking','Automatic teller machines','International cash wire transfers.','International cash wire transfers.','Electronic bill-paying via online banking','Direct deposit payroll systems','Automatic teller machines'
    ],
    finalPayment:[
      'Yes','Yes','No','No','No','No','No','No','Yes','No','No','Yes','Yes','No','No','Yes','Yes','Yes','Yes','No','Yes','Yes','No','Yes','No','No','Yes','No','No','No','No','Yes','No','No','Yes','Yes','Yes','No','No','No','No','No','No','No','No','Yes','No','Yes','No','No','Yes','No','Yes','Yes','Yes','Yes','No','Yes','No','Yes','Yes','Yes','Yes','Yes','Yes','Yes','Yes','Yes','No','No','Yes','No','Yes','No','Yes','Yes','No','No','No','No','Yes','Yes','No','No','No','No','No','No','Yes','No','No','Yes','No','Yes','No','No','No','Yes','No','Yes'
    ],
    paymentAmt:[
      '87505','78000','12000','4644','12000','87505','67344','78000','67344','87505','64538','6533','12000','54670','78000','4644','54670','67344','78000','64538','87505','54670','67344','6300','54670','4644','87505','67344','78000','87505','12000','7600','6300','67344','12000','54670','54670','6533','67344','4644','6533','54670','4644','4644','7600','87505','87505','4644','87505','64538','4644','67344','64538','78000','78000','87505','12000','6533','4644','7600','78000','54670','54670','6300','54670','78000','64538','4644','67344','7600','6300','54670','54670','87505','6533','87505','87505','6300','12000','67344','54670','4644','78000','12000','12000','78000','6300','7600','54670','12000','6300','6533','78000','87505','54670','87505','54670','87505','6533','6533'
    ],
    incomeLocation:[
      'Chhattisgarh','Kerala','Uttar Pradesh','Tamil Nadu','Bihar','Tamil Nadu','Haryana','Karnataka','Chhattisgarh','Karnataka','Telangana','Madhya Pradesh','Himachal Pradesh','Kerala','Andhra Pradesh','Jharkhand','Jharkhand','Karnataka','Tripura','Arunachal Pradesh','Himachal Pradesh','Tripura','Manipur','Odisha','Goa','Tripura','Jharkhand','Manipur','Nagaland','Mizoram','Himachal Pradesh','Sikkim','Karnataka','Chhattisgarh','Jharkhand','Karnataka','Tamil Nadu','Arunachal Pradesh','Tamil Nadu','Manipur','Kerala','Goa','Sikkim','Himachal Pradesh','Meghalaya','Gujarat','Rajasthan','Odisha','Rajasthan','Karnataka','Andhra Pradesh','Assam','Meghalaya','Mizoram','Goa','Gujarat','Rajasthan','Uttar Pradesh','Karnataka','Goa','Tripura','Andhra Pradesh','Andhra Pradesh','Goa','Maharashtra','Karnataka','Mizoram','Madhya Pradesh','Rajasthan','Bihar','Assam','Himachal Pradesh','Karnataka','Kerala','Manipur','Maharashtra','Tripura','Punjab','Assam','Kerala','Chhattisgarh','Chhattisgarh','Goa','Kerala','Tamil Nadu','Jharkhand','Uttar Pradesh','Karnataka','Chhattisgarh','Uttar Pradesh','Manipur','Arunachal Pradesh','Goa','Tamil Nadu','Manipur','Assam','Haryana','Tripura','Goa','Gujarat'
    ],
  };

  fieldNameInput: string = '';
  fieldValueDropdown: string = '';

  generate() {
    const {
      dateOfLoss,
      claimType,
      claimOrg,
      claimTitle,
      claimDesc,
      severity,
      lossCode,
      lossType,
      potential,
      currency,
      potentialAmount,
      claimsType,
      dateReceived,
      claimantType,
      claimantRep,
      damageDesc,
      lossEstimate,
      deductible,
      insurer,
      role,
      active,
      firstName,
      lastName,
      vendor,
      authority,
      exposure,
      costType,
      costCategory,
      reserving,
      reserve,
      expsoure1,
      coverage,
      reserveCurrency,
      recoveryReserve,
      deductibleRecovery,
      deductible1,
      payer,
      reserveLine,
      recoveryAmount,
      reportableTax,
      method,
      payeeName,
      payment,
      payOrder,
      mail,
      payee,
      mailingAddress,
      eftRecord,
      finalPayment,
      paymentAmt,
      incomeLocation
    } = this.database;
    for (let i = dateOfLoss.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [dateOfLoss[i], dateOfLoss[j]] = [dateOfLoss[j], dateOfLoss[i]];
      [claimType[i], claimType[j]] = [claimType[j], claimType[i]];
      [claimOrg[i], claimOrg[j]] = [claimOrg[j], claimOrg[i]];
      [claimTitle[i], claimTitle[j]] = [claimTitle[j], claimTitle[i]];
      [claimDesc[i], claimDesc[j]] = [claimDesc[j], claimDesc[i]];
      [severity[i], severity[j]] = [severity[j], severity[i]];
      [lossCode[i], lossCode[j]] = [lossCode[j], lossCode[i]];
      [lossType[i], lossType[j]] = [lossType[j], lossType[i]];
      [potential[i], potential[j]] = [potential[j], potential[i]];
      [currency[i], currency[j]] = [currency[j], currency[i]];
      [potentialAmount[i], potentialAmount[j]] = [potentialAmount[j], potentialAmount[i]];
      [claimsType[i], claimsType[j]] = [claimsType[j],claimsType[i]];
      [dateReceived[i], dateReceived[j]] = [dateReceived[j], dateReceived[i]];
      [claimantType[i], claimantType[j]] = [claimantType[j],claimantType[i]];
      [claimantRep[i], claimantRep[j]] = [claimantRep[j], claimantRep[i]];
      [damageDesc[i], damageDesc[j]] = [damageDesc[j], damageDesc[i]];
      [lossEstimate[i], lossEstimate[j]] = [lossEstimate[j], lossEstimate[i]];
      [deductible[i], deductible[j]] = [deductible[j], deductible[i]];
      [insurer[i], insurer[j]] = [insurer[j], insurer[i]];
      [role[i], role[j]] = [role[j], role[i]];
      [active[i], active[j]] = [active[j], active[i]];
      [firstName[i], firstName[j]] = [firstName[j], firstName[i]];
      [lastName[i], lastName[j]] = [lastName[j], lastName[i]];
      [vendor[i], vendor[j]] = [vendor[j], vendor[i]];
      [authority[i], authority[j]] = [authority[j], authority[i]];
      [exposure[i], exposure[j]] = [exposure[j], exposure[i]];
      [costType[i], costType[j]] = [costType[j], costType[i]];
      [costCategory[i], costCategory[j]] = [costCategory[j], costCategory[i]];
      [reserving[i], reserving[j]] = [reserving[j], reserving[i]];
      [reserve[i], reserve[j]] = [reserve[j], reserve[i]];
      [expsoure1[i], expsoure1[j]] = [expsoure1[j], expsoure1[i]];
      [coverage[i], coverage[j]] = [coverage[j], coverage[i]];
      [reserveCurrency[i], reserveCurrency[j]] = [reserveCurrency[j], reserveCurrency[i]];
      [recoveryReserve[i], recoveryReserve[j]] = [recoveryReserve[j], recoveryReserve[i]];
      [deductibleRecovery[i], deductibleRecovery[j]] = [deductibleRecovery[j], deductibleRecovery[i]];
      [deductible1[i], deductible1[j]] = [deductible1[j], deductible1[i]];
      [payer[i], payer[j]] = [payer[j], payer[i]];
      [reserveLine[i], reserveLine[j]] = [reserveLine[j], reserveLine[i]];
      [recoveryAmount[i], recoveryAmount[j]] = [recoveryAmount[j], recoveryAmount[i]];
      [reportableTax[i], reportableTax[j]] = [reportableTax[j], reportableTax[i]];
      [method[i], method[j]] = [method[j], method[i]];
      [payeeName[i], payeeName[j]] = [payeeName[j], payeeName[i]];
      [payment[i], payment[j]] = [payment[j], payment[i]];
      [payOrder[i], payOrder[j]] = [payOrder[j], payOrder[i]];
      [mail[i], mail[j]] = [mail[j], mail[i]];
      [payee[i], payee[j]] = [payee[j], payee[i]];
      [mailingAddress[i], mailingAddress[j]] = [mailingAddress[j], mailingAddress[i]];
      [eftRecord[i], eftRecord[j]] = [eftRecord[j], eftRecord[i]];
      [finalPayment[i], finalPayment[j]] = [finalPayment[j], finalPayment[i]];
      [paymentAmt[i],paymentAmt[j]] = [paymentAmt[j], paymentAmt[i]];
      [incomeLocation[i],incomeLocation[j]] = [incomeLocation[j], incomeLocation[i]];

    }
    const shuffledData = {
      dateOfLoss,
      claimType,
      claimOrg,
      claimTitle,
      claimDesc,
      severity,
      lossCode,
      lossType,
      potential,
      currency,
      potentialAmount,
      claimsType,
      dateReceived,
      claimantType,
      claimantRep,
      damageDesc,
      lossEstimate,
      deductible,
      insurer,
      role,
      active,
      firstName,
      lastName,
      vendor,
      authority,
      exposure,
      costType,
      costCategory,
      reserving,
      reserve,
      expsoure1,
      coverage,
      reserveCurrency,
      recoveryReserve,
      deductibleRecovery,
      deductible1,
      payer,
      reserveLine,
      recoveryAmount,
      reportableTax,
      method,
      payeeName,
      payment,
      payOrder,
      mail,
      payee,
      mailingAddress,
      eftRecord,
      finalPayment,
      paymentAmt,
      incomeLocation
    };
    // console.log(this.database)
    console.log(shuffledData);
    console.log(shuffledData['dateOfLoss'][1]);
    console.log(shuffledData['claimType'][1]);

    console.log(shuffledData['dateOfLoss'][2]);
    console.log(shuffledData['claimOrg'][1]);

    //console.log(shuffledData['array1'][1]);
    //to verify user entered row count or not

    if (this.rowCount >= 1) {
      //using dataService to transfer data from employee component to resultComponent
      localStorage.setItem('data', JSON.stringify(this.rows));
      this.savedData = this.rows;

      console.log(this.rows);
      this.objectArray2 = [];
      console.log(shuffledData['claimOrg'][1]);
      console.log(this.savedData);

      //number of table count
      for (let j = 0; j < this.rowCount; j++) {
        //getting the values from user in from the dropdown
        const index = j % shuffledData['dateOfLoss'].length;
        console.log(shuffledData['dateOfLoss'].length);
        for (let i = 0; i < this.savedData.length; i++) {
          console.log(this.savedData[i].value);
          if (this.savedData[i].value == 'dateOfLoss') {
            this.objectArray1.push(shuffledData['dateOfLoss'][index]);
          }
          if (this.savedData[i].value == 'claimType') {
            this.objectArray1.push(shuffledData['claimType'][index]);
          }
          if (this.savedData[i].value == 'claimOrg') {
            this.objectArray1.push(shuffledData['claimOrg'][index]);
          }
          if (this.savedData[i].value == 'claimTitle') {
            this.objectArray1.push(shuffledData['claimTitle'][index]);
          }
          if (this.savedData[i].value == 'claimDesc') {
            this.objectArray1.push(shuffledData['claimDesc'][index]);
          }
          if (this.savedData[i].value == 'severity') {
            this.objectArray1.push(shuffledData['severity'][index]);
          }
          if (this.savedData[i].value == 'lossCode') {
            this.objectArray1.push(shuffledData['lossCode'][index]);
          }
          if (this.savedData[i].value == 'lossType') {
            this.objectArray1.push(shuffledData['lossType'][index]);
          }
          if (this.savedData[i].value == 'potential') {
            this.objectArray1.push(shuffledData['potential'][index]);
          }
          if (this.savedData[i].value == 'currency') {
            this.objectArray1.push(shuffledData['currency'][index]);
          }
          if (this.savedData[i].value == 'potentialAmount') {
            this.objectArray1.push(shuffledData['potentialAmount'][index]);
          }
          if (this.savedData[i].value == 'claimsType') {
            this.objectArray1.push(shuffledData['claimsType'][index]);
          }
          if (this.savedData[i].value == 'dateReceived') {
            this.objectArray1.push(shuffledData['dateReceived'][index]);
          }
          if (this.savedData[i].value == 'claimantType') {
            this.objectArray1.push(shuffledData['claimantType'][index]);
          }
          if (this.savedData[i].value == 'claimantRep') {
            this.objectArray1.push(shuffledData['claimantRep'][index]);
          }
          if (this.savedData[i].value == 'damageDesc') {
            this.objectArray1.push(shuffledData['damageDesc'][index]);
          }
          if (this.savedData[i].value == 'lossEstimate') {
            this.objectArray1.push(shuffledData['lossEstimate'][index]);
          }
          if (this.savedData[i].value == 'deductible') {
            this.objectArray1.push(shuffledData['deductible'][index]);
          }
          if (this.savedData[i].value == 'insurer') {
            this.objectArray1.push(shuffledData['insurer'][index]);
          }
          if (this.savedData[i].value == 'role') {
            this.objectArray1.push(shuffledData['role'][index]);
          }
          if (this.savedData[i].value == 'active') {
            this.objectArray1.push(shuffledData['active'][index]);
          }
          if (this.savedData[i].value == 'firstName') {
            this.objectArray1.push(shuffledData['firstName'][index]);
          }
          if (this.savedData[i].value == 'lastName') {
            this.objectArray1.push(shuffledData['lastName'][index]);
          }
          if (this.savedData[i].value == 'vendor') {
            this.objectArray1.push(shuffledData['vendor'][index]);
          }
          if (this.savedData[i].value == 'authority') {
            this.objectArray1.push(shuffledData['authority'][index]);
          }
          if (this.savedData[i].value == 'exposure') {
            this.objectArray1.push(shuffledData['exposure'][index]);
          }
          if (this.savedData[i].value == 'costType') {
            this.objectArray1.push(shuffledData['costType'][index]);
          }
          if (this.savedData[i].value == 'costCategory') {
            this.objectArray1.push(shuffledData['costCategory'][index]);
          }
          if (this.savedData[i].value == 'reserving') {
            this.objectArray1.push(shuffledData['reserving'][index]);
          }
          if (this.savedData[i].value == 'reserve') {
            this.objectArray1.push(shuffledData['reserve'][index]);
          }
          if (this.savedData[i].value == 'expsoure1') {
            this.objectArray1.push(shuffledData['expsoure1'][index]);
          }
          if (this.savedData[i].value == 'coverage') {
            this.objectArray1.push(shuffledData['coverage'][index]);
          }
          if (this.savedData[i].value == 'reserveCurrency') {
            this.objectArray1.push(shuffledData['reserveCurrency'][index]);
          }
          if (this.savedData[i].value == 'recoveryReserve') {
            this.objectArray1.push(shuffledData['recoveryReserve'][index]);
          }
          if (this.savedData[i].value == 'deductibleRecovery') {
            this.objectArray1.push(shuffledData['deductibleRecovery'][index]);
          }
          if (this.savedData[i].value == 'deductible1') {
            this.objectArray1.push(shuffledData['deductible1'][index]);
          }
          if (this.savedData[i].value == 'payer') {
            this.objectArray1.push(shuffledData['payer'][index]);
          }
          if (this.savedData[i].value == 'reserveLine') {
            this.objectArray1.push(shuffledData['reserveLine'][index]);
          }
          if (this.savedData[i].value == 'recoveryAmount') {
            this.objectArray1.push(shuffledData['recoveryAmount'][index]);
          }
          if (this.savedData[i].value == 'reportableTax') {
            this.objectArray1.push(shuffledData['reportableTax'][index]);
          }
          if (this.savedData[i].value == 'method') {
            this.objectArray1.push(shuffledData['method'][index]);
          }
          if (this.savedData[i].value == 'payeeName') {
            this.objectArray1.push(shuffledData['payeeName'][index]);
          }
          if (this.savedData[i].value == 'payment') {
            this.objectArray1.push(shuffledData['payment'][index]);
          }
          if (this.savedData[i].value == 'payOrder') {
            this.objectArray1.push(shuffledData['payOrder'][index]);
          }
          if (this.savedData[i].value == 'mail') {
            this.objectArray1.push(shuffledData['mail'][index]);
          }
          if (this.savedData[i].value == 'payee') {
            this.objectArray1.push(shuffledData['payee'][index]);
          }
          if (this.savedData[i].value == 'mailingAddress') {
            this.objectArray1.push(shuffledData['mailingAddress'][index]);
          }
          if (this.savedData[i].value == 'eftRecord') {
            this.objectArray1.push(shuffledData['eftRecord'][index]);
          }
          if (this.savedData[i].value == 'finalPayment') {
            this.objectArray1.push(shuffledData['finalPayment'][index]);
          }
          if (this.savedData[i].value == 'paymentAmt') {
            this.objectArray1.push(shuffledData['paymentAmt'][index]);
          }
          if (this.savedData[i].value == 'incomeLocation') {
            this.objectArray1.push(shuffledData['incomeLocation'][index]);
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
