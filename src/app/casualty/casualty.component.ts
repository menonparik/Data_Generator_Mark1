import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
interface Row {
  field: string;
  value: string;
}
@Component({
  selector: 'app-casualty',
  templateUrl: './casualty.component.html',
  styleUrls: ['./casualty.component.css']
})
export class CasualtyComponent implements OnInit {

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
    model: [
      'Veracruz','Nitro','Tundra','Camry','Commander','Savana 3500','Accent','F150','GTI','Savana 3500','Type 2','GT-R','Savana 2500','GS','Sierra','Savana 2500','Explorer Sport Trac','Daewoo Lacetti','Durango','7 Series','RX-7','Azure','F-Series Super Duty','Journey','3 Series','Ram Van B250','Marquis','Grand Am','Truck','MKT','S4','Grand Prix','XC90','Expedition EL','S10 Blazer','Reno','Avalanche','LTD Crown Victoria','Range Rover Classic','Bonneville','Eclipse','Jimmy','Acclaim','TundraMax','Blazer','Yukon XL 1500','Probe','Grand Am','Neon','Charger','2500','C-Class','A6','Charger','GranTurismo','Tracker','924','Cougar','300E','S5','911','S-Type','Suburban 1500','Ram Van B350','Altima','Insight','Grand Marquis','Ram 2500','3500','Wrangler','Chariot','09-Mar','F-Series Super Duty','Camry','ES','Cutlass','MPV','Brat','Eldorado','Grand Marquis','Mark VIII','F450','F150','H3T','RX-8','Avalon','Park Avenue','Sienna','RX Hybrid','Sentra','Matrix','G','4000CS Quattro','Baja','Thunderbird','Monterey','F250','3000GT','Econoline E150','Q'
    ],
    style: [
      'sedans','convertibles','Hatchbacks','sedans','SUVs','MUVs','sedans','MUVs','convertibles','sedans','Hatchbacks','MUVs','pickup trucks','pickup trucks','sedans','pickup trucks','pickup trucks','coupes','Hatchbacks','coupes','convertibles','MUVs','convertibles','pickup trucks','SUVs','coupes','SUVs','Hatchbacks','sedans','SUVs','pickup trucks','coupes','pickup trucks','SUVs','coupes','Hatchbacks','coupes','convertibles','Hatchbacks','pickup trucks','Hatchbacks','convertibles','convertibles','MUVs','convertibles','convertibles','sedans','MUVs','Hatchbacks','pickup trucks','Hatchbacks','SUVs','coupes','sedans','sedans','SUVs','coupes','sedans','coupes','sedans','SUVs','pickup trucks','SUVs','MUVs','Hatchbacks','pickup trucks','MUVs','sedans','coupes','MUVs','SUVs','pickup trucks','sedans','Hatchbacks','SUVs','convertibles','pickup trucks','pickup trucks','Hatchbacks','coupes','convertibles','Hatchbacks','sedans','SUVs','MUVs','SUVs','Hatchbacks','MUVs','SUVs','Hatchbacks','MUVs','Hatchbacks','MUVs','coupes','convertibles','SUVs','sedans','coupes','Hatchbacks','convertibles'
    ],
    vehicleLocation: [
      '13th Floor','PO Box 48120','PO Box 63867','19th Floor','Apt 141','Room 1158','Room 950','Suite 27','PO Box 53296','Suite 98','Room 1661','Room 1317','Apt 272','13th Floor','PO Box 92588','20th Floor','Room 1890','Apt 1604','Suite 85','PO Box 11588','Suite 48','Apt 1366','Suite 51','Room 556','Suite 26','Room 855','13th Floor','6th Floor','Room 439','15th Floor','Apt 1732','10th Floor','Room 952','Suite 31','Suite 29','PO Box 21058','9th Floor','Apt 371','Apt 82','Suite 73','Suite 46','Apt 1894','PO Box 2034','Suite 39','Apt 1538','17th Floor','20th Floor','Apt 341','4th Floor','Suite 27','Suite 53','13th Floor','Apt 192','Suite 2','Suite 92','PO Box 1771','Apt 80','Apt 527','Room 1244','13th Floor','Suite 64','Apt 324','14th Floor','Room 743','10th Floor','Apt 1947','Apt 1351','Room 1698','PO Box 70391','Suite 32','PO Box 522','PO Box 30963','Room 554','Apt 1072','Apt 66','Apt 1591','Room 136','PO Box 65412','Room 1984','Room 215','7th Floor','Suite 25','Apt 1577','Room 1814','PO Box 11964','Suite 90','PO Box 16738','4th Floor','PO Box 34320','10th Floor','PO Box 41133','Apt 978','PO Box 7261','Room 1234','10th Floor','PO Box 11078','Suite 99','Suite 78','14th Floor','PO Box 50155'
    ],
    lossParty: [
      'suits','losses','actions','judgments','claims','disbursements','liabilities','actions','disbursements','obligations','damages','obligations','losses','actions','disbursements','actions','costs','judgments','expenses','actions','disbursements','expenses','damages','judgments','damages','actions','losses','suits','liabilities','disbursements','judgments','claims','costs','disbursements','losses','expenses','obligations','suits','damages','losses','liabilities','claims','losses','suits','liabilities','damages','liabilities','losses','losses','liabilities','claims','obligations','losses','judgments','obligations','costs','obligations','damages','suits','obligations','actions','costs','losses','judgments','losses','obligations','obligations','suits','judgments','costs','costs','damages','expenses','losses','damages','expenses','damages','judgments','obligations','actions','suits','suits','liabilities','expenses','suits','costs','actions','costs','obligations','suits','judgments','obligations','actions','judgments','costs','disbursements','expenses','damages','obligations','obligations'
  ],
    ownership: [
      'Original registration certificate','Documents for address proof','Original registration certificate','National Crime Records Bureau acknowledgement form in case the vehicle was earlier involved in some activities which go against the law of the land.','Documents for address proof','Original registration certificate','PAN card of both the parties Form','PAN card of both the parties Form ','PUC certificate','PUC certificate','Original registration certificate','Original registration certificate','Documents for address proof','Original registration certificate','Documents for address proof','Original registration certificate','Original registration certificate','PUC certificate','Original registration certificate','Documents for address proof','32 and 35 NCRB','National Crime Records Bureau acknowledgement form in case the vehicle was earlier involved in some activities which go against the law of the land.','Original registration certificate','PAN card of both the parties Form 28','PAN card of both the parties Form 28','Documents for address proof','PAN card of both the parties Form 28','Original registration certificate','31','National Crime Records Bureau acknowledgement form in case the vehicle was earlier involved in some activities which go against the law of the land.','32 and 35 NCRB','PUC certificate','32 and 35 NCRB','National Crime Records Bureau acknowledgement form in case the vehicle was earlier involved in some activities which go against the law of the land.','Documents for address proof','National Crime Records Bureau acknowledgement form in case the vehicle was earlier involved in some activities which go against the law of the land.','PAN card of both the parties Form 28','Car insurance certificate','Original registration certificate','PAN card of both the parties Form 28','National Crime Records Bureau acknowledgement form in case the vehicle was earlier involved in some activities which go against the law of the land.','Documents for address proof','Car insurance certificate','Documents for address proof','32 and 35 NCRB','PUC certificate','Documents for address proof','Original registration certificate','PAN card of both the parties Form 28','National Crime Records Bureau acknowledgement form in case the vehicle was earlier involved in some activities which go against the law of the land.','Car insurance certificate','Car insurance certificate','National Crime Records Bureau acknowledgement form in case the vehicle was earlier involved in some activities which go against the law of the land.','Original registration certificate','Documents for address proof','32 and 35 NCRB','PAN card of both the parties Form 28','Original registration certificate','PAN card of both the parties Form 28','Documents for address proof','Car insurance certificate','Documents for address proof','PUC certificate','National Crime Records Bureau acknowledgement form in case the vehicle was earlier involved in some activities which go against the law of the land.','National Crime Records Bureau acknowledgement form in case the vehicle was earlier involved in some activities which go against the law of the land.','PUC certificate','National Crime Records Bureau acknowledgement form in case the vehicle was earlier involved in some activities which go against the law of the land.'
    ],
    owner: [
      'Nanete','Sherlocke','Far','Carilyn','Debi','Randene','Bogart','Ricard','Vincenty','Angelia','Herminia','Asa','Trix','Margot','Rahal','Sonni','Halsy','Roch','Lucio','Binni','Alvan','Bell','Hermia','Sergeant','Zacharie','Myrta','Dyanna','Vernice','Packston','Zandra','Colin','Claudina','Vail','Fey','Michelina','Olivette','Mickie','Jonell','Nat','Thadeus','Norton','Claiborne','Bobbee','Ambrosi','Gerri','Tabby','Fanchette','Madeleine','Audry','Caril','Willi','Casper','Germana','Suzanna','Berrie','Skelly','Gerhard','Lonny','Vivia','Townie','Ursulina','Linoel','Crosby','Bernete','Filippa','Audry','Renado','Winnie','Reggi','Minerva','Nowell','Gerek','Fanchon','Claudell','Ulrica','Aprilette','Trent','Kay','Felecia','Killie','Osmund','Gladys','Forrester','Dennie','Stephana','Inez','Aurilia','Eolande','Cleveland','Corri','Eolande','Felecia','Quillan','Rochette','Ethe','Erskine','Reynolds','Dwain','Linn','Ottilie'
    ],
    otherContact: [
      '592-766-3938','496-144-4897','976-748-8994','326-195-9875','368-988-5909','594-944-1657','753-897-7462','701-544-9963','454-794-3192','758-723-6347','489-833-7971','102-606-8796','495-338-0502','193-237-3728','527-942-6342','339-293-8895','407-296-8778','489-871-4646','946-930-8751','846-747-3052','896-901-9494','201-965-7665','812-289-8536','907-681-7133','991-900-8621','693-287-2551','766-163-1130','179-267-5668','649-625-2298','479-908-5276','357-898-9113','909-493-2416','874-501-4852','281-286-9142','179-259-8346','201-615-8168','969-889-5564','502-633-1069','973-443-4335','311-565-6445','856-901-2830','473-800-3705','876-113-2493','763-298-3336','725-256-5342','867-695-9268','392-110-1351','621-179-4101','206-329-6123','507-373-9701','800-971-2926','288-305-1482','211-796-8157','848-907-8160','992-527-3628','873-551-3771','974-867-5497','749-572-4553','169-531-8223','192-842-6975','672-171-7796','165-510-5731','234-119-6604','339-169-0471','237-448-7189','256-272-6465','929-152-2224','320-705-3758','523-574-1930','968-612-4246','139-651-5300','973-453-7205','605-589-7501','524-981-4356','171-608-4877','346-872-6532','915-992-5603','435-802-8922','757-834-7504','179-754-4889','485-252-6733','517-873-8566','248-698-6234','999-674-4820','177-724-5963','605-929-0302','674-930-3446','931-170-0782','757-543-3551','136-632-5130','212-875-5323','789-280-4681','567-774-6896','904-645-7877','105-441-7629','150-580-0168','686-858-7147','336-779-9434','631-573-6107','559-488-9657'
    ],
    relationship: [
      'Acquaintances','Family relationships','Acquaintances','Friendships','Situational relationships','Neighbour','Family relationships','Neighbour','Friendships','Situational relationships','Friendships','Family relationships','Situational relationships','Acquaintances','Neighbour','Friendships','Acquaintances','Friendships','Neighbour','Family relationships','Work relationships','Friendships','Situational relationships','Situational relationships','Situational relationships','Situational relationships','Neighbour','Work relationships','Neighbour','Situational relationships','Acquaintances','Friendships','Friendships','Work relationships','Work relationships','Situational relationships','Family relationships','Situational relationships','Neighbour','Friendships','Family relationships','Neighbour','Family relationships','Work relationships','Neighbour','Family relationships','Neighbour','Acquaintances','Neighbour','Work relationships','Friendships','Situational relationships','Friendships','Family relationships','Neighbour','Work relationships','Family relationships','Acquaintances','Friendships','Acquaintances','Work relationships','Neighbour','Acquaintances','Situational relationships','Friendships','Work relationships','Friendships','Friendships','Neighbour','Acquaintances','Family relationships','Family relationships','Situational relationships','Situational relationships','Work relationships','Neighbour','Family relationships','Family relationships','Neighbour','Friendships','Friendships','Family relationships','Friendships','Acquaintances','Acquaintances','Friendships','Friendships','Neighbour','Work relationships','Family relationships','Acquaintances','Situational relationships','Acquaintances','Work relationships','Friendships','Acquaintances','Friendships','Work relationships','Friendships','Work relationships'
    ],
    witness: [
      'Child Witness','Trap Witness','Material Witness','Expert Witness','Solitary Witness','Interested Witness','Material Witness','Eye Witness','Official Witness.','Related Witness','Child Witness','Related Witness','Expert Witness','Material Witness','Official Witness.','Expert Witness','Independent Witness','Hostile Witness','Eye Witness','Child Witness','Expert Witness','Expert Witness','Independent Witness','Child Witness','Solitary Witness','Material Witness','Hostile Witness','Material Witness','Independent Witness','Interested Witness','Child Witness','Official Witness.','Child Witness','Official Witness.','Official Witness.','Hostile Witness','Official Witness.','Material Witness','Trap Witness','Child Witness','Interested Witness','Official Witness.','Solitary Witness','Eye Witness','Solitary Witness','Trap Witness','Related Witness','Interested Witness','Interested Witness','Official Witness.','Eye Witness','Expert Witness','Expert Witness','Hostile Witness','Related Witness','Material Witness','Independent Witness','Interested Witness','Expert Witness','Solitary Witness','Related Witness','Interested Witness','Trap Witness','Interested Witness','Expert Witness','Hostile Witness','Interested Witness','Trap Witness','Interested Witness','Related Witness','Eye Witness','Eye Witness','Eye Witness','Official Witness.','Interested Witness','Official Witness.','Expert Witness','Hostile Witness','Official Witness.','Related Witness','Independent Witness','Official Witness.','Solitary Witness','Material Witness','Trap Witness','Hostile Witness','Independent Witness','Eye Witness','Official Witness.','Independent Witness','Material Witness','Material Witness','Child Witness','Hostile Witness','Trap Witness','Expert Witness','Hostile Witness','Expert Witness','Child Witness','Expert Witness'
    ],
    person: [
      'Female','Male','Bigender','Non-binary','Female','Female','Male','Male','Male','Female','Female','Male','Female','Agender','Female','Female','Male','Female','Male','Non-binary','Male','Female','Female','Agender','Male','Female','Female','Female','Male','Female','Male','Female','Male','Female','Female','Female','Agender','Female','Male','Male','Male','Male','Female','Male','Male','Male','Female','Female','Female','Female','Female','Male','Female','Female','Female','Male','Male','Male','Female','Male','Female','Male','Genderqueer','Female','Female','Female','Male','Female','Female','Female','Male','Male','Female','Male','Female','Female','Male','Female','Female','Male','Male','Bigender','Male','Female','Female','Bigender','Female','Female','Male','Female','Female','Female','Male','Female','Male','Male','Male','Male','Female','Female'
    ],
    lossCause: [
      'civil commotion','smoke','explosion','civil commotion','civil commotion','aircraft','sinkhole collapse','aircraft','riot','sprinkler leakage','explosion','fire','riot','windstorm','sinkhole collapse','vehicles','sprinkler leakage','vehicles','sinkhole collapse','windstorm','riot','vehicles','hail','smoke','vehicles','volcanic action.','smoke','riot','civil commotion','vehicles','volcanic action.','hail','volcanic action.','explosion','sinkhole collapse','volcanic action.','riot','smoke','sinkhole collapse','vandalism','fire','sinkhole collapse','hail','windstorm','smoke','smoke','vehicles','aircraft','riot','volcanic action.','vehicles','vehicles','sprinkler leakage','smoke','vehicles','civil commotion','explosion','smoke','fire','sinkhole collapse','riot','explosion','aircraft','volcanic action.','vehicles','explosion','civil commotion','vandalism','windstorm','smoke','riot','civil commotion','hail','riot','lightning','vehicles','smoke','fire','volcanic action.','fire','windstorm','lightning','windstorm','windstorm','explosion','lightning','sprinkler leakage','smoke','civil commotion','fire','civil commotion','explosion','hail','windstorm','volcanic action.','vehicles','lightning','vandalism','windstorm','sprinkler leakage'
    ],
    lossTime: [
      '8:05 AM','5:19 AM','2:51 PM','10:50 AM','10:47 AM','7:33 AM','6:23 AM','11:47 PM','7:09 AM','9:38 PM','9:53 PM','7:28 PM','3:25 AM','9:59 PM','6:44 AM','2:17 AM','2:59 PM','2:34 AM','11:31 AM','3:35 PM','8:03 AM','9:05 AM','11:15 PM','9:29 PM','8:52 PM','1:14 AM','7:35 AM','1:20 AM','11:28 PM','9:55 PM','7:15 PM','5:17 PM','10:46 PM','9:10 PM','7:35 AM','2:32 AM','9:27 PM','3:06 AM','11:16 PM','5:13 AM','4:40 PM','8:08 AM','12:17 AM','11:25 PM','2:43 AM','10:18 PM','5:25 PM','3:59 AM','9:13 AM','4:30 PM','11:14 PM','5:14 AM','3:09 PM','3:53 PM','8:11 PM','5:48 AM','5:47 AM','2:22 PM','7:32 PM','11:34 AM','3:07 PM','7:41 PM','4:09 AM','4:27 PM','4:29 AM','2:53 AM','9:12 PM','1:04 AM','2:19 AM','7:54 PM','9:23 PM','8:37 PM','3:35 PM','10:05 PM','3:40 AM','2:18 PM','10:01 AM','2:14 AM','1:15 AM','2:41 PM','3:04 AM','8:36 AM','12:32 PM','4:56 AM','8:23 AM','7:13 PM','5:29 PM','8:37 AM','10:49 AM','10:59 AM','12:40 PM','7:24 AM','8:10 PM','8:32 PM','9:16 AM','12:48 AM','2:02 PM','7:22 PM','6:53 AM','6:59 AM'
    ],
    lossDesc: [
      'rain','Theft','Theft','the financial damage one suffers due to an insurable event','smoke','Theft','smoke','and fire damage','smoke','damage as a result of a fire that burned down a house','rain','Theft','Theft','and fire damage','the financial damage one suffers due to an insurable event','the financial damage one suffers due to an insurable event','and fire damage','smoke','damage as a result of a fire that burned down a house','damage as a result of a fire that burned down a house','rain','rain','rain','rain','damage as a result of a fire that burned down a house','the financial damage one suffers due to an insurable event','rain','the financial damage one suffers due to an insurable event','and fire damage','smoke','damage as a result of a fire that burned down a house','smoke','damage as a result of a fire that burned down a house','damage as a result of a fire that burned down a house','Theft','damage as a result of a fire that burned down a house','smoke','Theft','and fire damage','smoke','damage as a result of a fire that burned down a house','rain','the financial damage one suffers due to an insurable event','smoke','the financial damage one suffers due to an insurable event','damage as a result of a fire that burned down a house','rain','and fire damage','rain','smoke','Theft','and fire damage','the financial damage one suffers due to an insurable event','the financial damage one suffers due to an insurable event','and fire damage','smoke','smoke','the financial damage one suffers due to an insurable event','and fire damage','and fire damage','smoke','rain','rain','smoke','smoke','the financial damage one suffers due to an insurable event','damage as a result of a fire that burned down a house','the financial damage one suffers due to an insurable event','rain','and fire damage','damage as a result of a fire that burned down a house','Theft','damage as a result of a fire that burned down a house','and fire damage','rain','damage as a result of a fire that burned down a house','and fire damage','and fire damage','rain','smoke','the financial damage one suffers due to an insurable event','and fire damage','and fire damage','rain','rain','the financial damage one suffers due to an insurable event','damage as a result of a fire that burned down a house','damage as a result of a fire that burned down a house','smoke','Theft','smoke','rain','Theft','damage as a result of a fire that burned down a house','Theft','smoke','damage as a result of a fire that burned down a house','damage as a result of a fire that burned down a house','rain','rain'
    ],
    lossLocation: [
      'Himachal Pradesh','Haryana','Bihar','Chennai','Uttar Pradesh','Mumbai','Punjab','Mumbai','Delhi','Bihar','Meghalaya','Uttar Pradesh','Sikkim','Haryana','Telangana','Arunachal Pradesh','Maharashtra','Meghalaya','Tamil Nadu','Punjab','Himachal Pradesh','Chhattisgarh','Sikkim','Mizoram','Kerala','Karnataka','Odisha','Arunachal Pradesh','Mumbai','Delhi','Madhya Pradesh','Haryana','Manipur','Andhra Pradesh','Arunachal Pradesh','Telangana','Tamil Nadu','Goa','Mumbai','Gujarat','Jharkhand','Delhi','Manipur','Kerala','Gujarat','Gujarat','Andhra Pradesh','Chennai','Kerala','Rajasthan','Mumbai','Chhattisgarh','Telangana','Tamil Nadu','Rajasthan','Kerala','Bihar','Rajasthan','Haryana','Manipur','Chhattisgarh','Tamil Nadu','Gujarat','Kerala','Punjab','Maharashtra','Meghalaya','Tripura','Chhattisgarh','Tripura','Uttar Pradesh','Andhra Pradesh','Mizoram','Gujarat','Goa','Uttar Pradesh','Sikkim','Manipur','Madhya Pradesh','Himachal Pradesh','Arunachal Pradesh','Haryana','Haryana','Assam','Chennai','Manipur','Bihar','Karnataka','Kerala','Madhya Pradesh','Tamil Nadu','Rajasthan','Himachal Pradesh','Nagaland','Delhi'
    ],
    lossReport: [
      'Officer','Officer','public','public','Insurance company','police','police','public','Insurance company','public','Officer','Officer','Officer','Officer','customer','Insurance company','police','police','police','police','customer','police','customer','customer','public','public','public','public','public','Officer','customer','Officer','Insurance company','Insurance company','customer','police','police','police','police','Insurance company','public','police','Insurance company','public','police','Insurance company','police','customer','public','customer','Officer','public','customer','Insurance company','Officer','customer','Officer','Insurance company','police','public','police','customer','Officer','customer','public','public','Insurance company','customer','police','public','public','Insurance company','police','Officer','public','Insurance company','public','Officer','police','Officer','public','public','customer','Insurance company','Insurance company','Officer','Officer','public','customer','customer','police','Officer','Insurance company','customer','Officer','police','police','police','public','Insurance company'
    ],
    vehicleDrivable:[
      'Subaru','Mercedes-Benz','Audi','Hyundai','Mercedes-Benz','Audi','Hyundai','Mercedes-Benz','Honda','Hyundai','Subaru','Subaru','Hyundai','Nissan','Subaru','Mercedes-Benz','Nissan','Volkswagen','Honda','Volkswagen','Audi','Nissan','Subaru','Subaru','Lucid','Subaru','Audi','Hyundai','Nissan','Mercedes-Benz','Lucid','Nissan','Volkswagen','Lucid','Nissan','Subaru','Volkswagen','Volkswagen','Mercedes-Benz','Lucid','Nissan','Hyundai','Volkswagen','Mercedes-Benz','Mercedes-Benz','Lucid','Audi','Nissan','Lucid','Audi','Nissan','Lucid','Volkswagen','Hyundai','Nissan','Subaru','Honda','Honda','Hyundai','Nissan','Subaru','Lucid','Honda','Subaru','Volkswagen','Volkswagen','Nissan','Nissan','Honda','Honda','Lucid','Volkswagen','Volkswagen','Mercedes-Benz','Hyundai','Hyundai','Subaru','Audi','Volkswagen','Nissan','Volkswagen','Subaru','Mercedes-Benz','Subaru','Honda','Hyundai','Honda','Lucid','Subaru','Audi','Nissan','Honda','Hyundai','Honda','Lucid','Hyundai','Audi','Nissan','Audi','Subaru'
    ],
    vehicleTow:[
      'No','Yes','Yes','Yes','Yes','Yes','Yes','No','No','No','No','No','Yes','Yes','No','Yes','No','Yes','No','No','Yes','No','No','No','No','Yes','No','Yes','No','Yes','Yes','No','Yes','Yes','Yes','Yes','Yes','No','Yes','Yes','No','Yes','Yes','Yes','No','No','No','Yes','No','Yes','No','Yes','Yes','No','Yes','Yes','No','Yes','Yes','No','No','No','Yes','Yes','Yes','Yes','No','Yes','No','No','Yes','Yes','No','Yes','No','No','No','No','No','No','No','No','No','Yes','Yes','Yes','Yes','No','Yes','Yes','Yes','Yes','Yes','Yes','Yes','No','Yes','No','No','No'
    ],
    airbags:[
      'No','No','No','Yes','Yes','Yes','No','No','Yes','No','No','No','No','No','Yes','Yes','Yes','No','No','No','No','No','No','Yes','Yes','Yes','No','No','No','Yes','Yes','Yes','No','No','No','Yes','Yes','No','No','No','No','Yes','No','No','Yes','No','Yes','Yes','Yes','No','Yes','Yes','Yes','Yes','Yes','No','Yes','Yes','Yes','Yes','Yes','No','Yes','Yes','Yes','Yes','Yes','Yes','No','Yes','No','Yes','Yes','No','Yes','No','Yes','No','No','No','Yes','Yes','Yes','Yes','Yes','Yes','Yes','No','Yes','Yes','No','No','Yes','Yes','No','No','No','No','Yes','No'
    ],
    damage:[
      'High','Medium','Medium','Medium','High','High','High','Medium','High','High','High','High','High','Medium','High','High','High','High','Medium','Medium','High','Medium','Medium','Medium','High','Medium','High','Medium','High','Medium','Medium','Medium','Medium','High','High','High','Medium','Medium','Medium','Medium','High','Medium','Medium','Medium','Medium','High','High','Medium','High','High','Medium','High','Medium','Medium','High','High','High','Medium','High','Medium','High'
    ],
    impact:[
      'the vehicle','the vehicle','the vehicle','the vehicle','the body of the vehicle occupant','the organs within the body of the occupant.','the body of the vehicle occupant','the vehicle','the body of the vehicle occupant','the vehicle','the organs within the body of the occupant.','the vehicle','the vehicle','the body of the vehicle occupant','the body of the vehicle occupant','the organs within the body of the occupant.','the organs within the body of the occupant.','the body of the vehicle occupant','the organs within the body of the occupant.','the body of the vehicle occupant','the organs within the body of the occupant.','the body of the vehicle occupant','the organs within the body of the occupant.','the vehicle','the vehicle','the vehicle','the organs within the body of the occupant.','the body of the vehicle occupant','the vehicle','the organs within the body of the occupant.','the body of the vehicle occupant','the vehicle','the body of the vehicle occupant','the organs within the body of the occupant.','the body of the vehicle occupant','the body of the vehicle occupant','the body of the vehicle occupant','the body of the vehicle occupant','the body of the vehicle occupant','the body of the vehicle occupant','the vehicle','the body of the vehicle occupant','the body of the vehicle occupant','the vehicle','the body of the vehicle occupant','the organs within the body of the occupant.','the vehicle','the vehicle','the body of the vehicle occupant','the organs within the body of the occupant.','the organs within the body of the occupant.','the vehicle','the vehicle','the organs within the body of the occupant.','the body of the vehicle occupant','the organs within the body of the occupant.','the organs within the body of the occupant.','the vehicle','the organs within the body of the occupant.','the body of the vehicle occupant','the body of the vehicle occupant','the vehicle','the vehicle','the body of the vehicle occupant','the body of the vehicle occupant','the body of the vehicle occupant','the vehicle','the organs within the body of the occupant.','the body of the vehicle occupant','the vehicle','the body of the vehicle occupant','the vehicle','the organs within the body of the occupant.','the body of the vehicle occupant','the vehicle','the vehicle','the body of the vehicle occupant','the vehicle','the vehicle','the body of the vehicle occupant','the vehicle','the body of the vehicle occupant','the body of the vehicle occupant','the organs within the body of the occupant.','the body of the vehicle occupant','the body of the vehicle occupant','the body of the vehicle occupant','the vehicle','the organs within the body of the occupant.','the body of the vehicle occupant','the vehicle','the body of the vehicle occupant','the body of the vehicle occupant','the organs within the body of the occupant.','the vehicle','the organs within the body of the occupant.','the vehicle','the body of the vehicle occupant','the organs within the body of the occupant.','the vehicle'
    ],
    injury:[
      'Nanete Willshee','Sherlocke Cummins','Far Merner','Carilyn Ritchings','Debi Fairpool','Randene Sawbridge','Bogart Swalowe','Ricard Vernall','Vincenty Skerman','Angelia Hinrichs','Herminia Bangham','Asa Fender','Trix Deller','Margot Edmott','Rahal Tosh','Sonni Hurrell','Halsy Trebilcock','Roch Gleave','Lucio Aldridge','Binni Harfleet','Alvan Guillard','Bell Mussard','Hermia Tomei','Sergeant Fautly','Zacharie Lohrensen','Myrta Grieves','Dyanna Billes','Vernice Mackerel','Packston Ogbourne','Zandra Worlock','Colin Bertouloume','Claudina Grummitt','Vail Slyme','Fey Bethel','Michelina Barnwill','Olivette Dyet','Mickie Anniwell','Jonell Hedgecock','Nat Littledike','Thadeus Hucker','Norton Bewlie','Claiborne Barrett','Bobbee Crenshaw','Ambrosi Gutierrez','Gerri Godney','Tabby Pettipher','Fanchette de Lloyd','Madeleine Spellman','Audry Danslow','Caril Peasegood','Willi Snipe','Casper Feragh','Germana Huckstepp','Suzanna Blinerman','Berrie Mollnar','Skelly Betteridge','Gerhard Rosser','Lonny Coombs','Vivia Roggerone','Townie Kurton','Ursulina Wilcot','Linoel Sinfield','Crosby Burling','Bernete Deere','Filippa Corbin','Audry Tesseyman','Renado Alben','Winnie Florez','Reggi Twelvetrees','Minerva Theml','Nowell ODonohue','Gerek Fancutt','Fanchon Way','Claudell Aleixo','Ulrica Mougin','Aprilette Thridgould','Trent Pinfold','Kay Teodori','Felecia Lawlance','Killie Thickin','Osmund Aylin','Gladys Pudden','Forrester Kitchenham','Dennie Borgnet','Stephana Zellner','Inez Goldstein','Aurilia Cotilard','Eolande Owen','Cleveland Tibbs','Corri MacKey','Eolande Center','Felecia Cancellario','Quillan Lohmeyer','Rochette Kells','Ethe Berthelmot','Erskine Winyard','Reynolds Caneo','Dwain Hails','Linn Silverthorne','Ottilie Gurney'
    ],
    injuryDesc:[
      'accidental death','funeral expenses.','injuries to car accident victims','including loss of work income','accidental death','injuries to car accident victims','funeral expenses.','funeral expenses.','accidental death','funeral expenses.','accidental death','injuries to car accident victims','funeral expenses.','injuries to car accident victims','accidental death','funeral expenses.','funeral expenses.','including loss of work income','funeral expenses.','injuries to car accident victims','injuries to car accident victims','accidental death','including loss of work income','including loss of work income','including loss of work income','injuries to car accident victims','injuries to car accident victims','funeral expenses.','including loss of work income','injuries to car accident victims','accidental death','injuries to car accident victims','funeral expenses.','injuries to car accident victims','funeral expenses.','including loss of work income','injuries to car accident victims','injuries to car accident victims','accidental death','accidental death','accidental death','accidental death','including loss of work income','injuries to car accident victims','injuries to car accident victims','injuries to car accident victims','funeral expenses.','accidental death','funeral expenses.','accidental death','accidental death','injuries to car accident victims','funeral expenses.','injuries to car accident victims','injuries to car accident victims','accidental death','including loss of work income','funeral expenses.','injuries to car accident victims','injuries to car accident victims','including loss of work income','funeral expenses.','including loss of work income','accidental death','accidental death','accidental death','accidental death','funeral expenses.','funeral expenses.','accidental death','funeral expenses.','injuries to car accident victims','accidental death','accidental death','accidental death','including loss of work income','funeral expenses.','funeral expenses.','funeral expenses.','accidental death','funeral expenses.','funeral expenses.','injuries to car accident victims','accidental death','accidental death','injuries to car accident victims','including loss of work income','injuries to car accident victims','funeral expenses.','injuries to car accident victims','injuries to car accident victims','funeral expenses.','accidental death','funeral expenses.','injuries to car accident victims','including loss of work income','injuries to car accident victims','accidental death','funeral expenses.','including loss of work income'
    ],
    injuryType:[
      'broken bones and fractures.','burns and abrasions','burns and abrasions','burns and abrasions','broken bones and fractures.','penetrating wounds','penetrating wounds','penetrating wounds','burns and abrasions','burns and abrasions','broken bones and fractures.','penetrating wounds','cuts and lacerations','cuts and lacerations','cuts and lacerations','cuts and lacerations','cuts and lacerations','penetrating wounds','cuts and lacerations','broken bones and fractures.','broken bones and fractures.','broken bones and fractures.','broken bones and fractures.','penetrating wounds','burns and abrasions','burns and abrasions','burns and abrasions','broken bones and fractures.','broken bones and fractures.','broken bones and fractures.','penetrating wounds','cuts and lacerations','broken bones and fractures.','broken bones and fractures.','penetrating wounds','broken bones and fractures.','penetrating wounds','burns and abrasions','burns and abrasions','cuts and lacerations','cuts and lacerations','broken bones and fractures.','cuts and lacerations','broken bones and fractures.','broken bones and fractures.','broken bones and fractures.','penetrating wounds','penetrating wounds','burns and abrasions','penetrating wounds','cuts and lacerations','cuts and lacerations','penetrating wounds','cuts and lacerations','penetrating wounds','broken bones and fractures.','broken bones and fractures.','penetrating wounds','broken bones and fractures.','broken bones and fractures.','cuts and lacerations','penetrating wounds','broken bones and fractures.','penetrating wounds','burns and abrasions','burns and abrasions','broken bones and fractures.','penetrating wounds','penetrating wounds','broken bones and fractures.','cuts and lacerations','burns and abrasions','broken bones and fractures.','cuts and lacerations','burns and abrasions','broken bones and fractures.','cuts and lacerations','broken bones and fractures.','penetrating wounds','broken bones and fractures.','broken bones and fractures.','broken bones and fractures.','penetrating wounds','burns and abrasions','broken bones and fractures.','cuts and lacerations','penetrating wounds','cuts and lacerations','penetrating wounds','cuts and lacerations','burns and abrasions','cuts and lacerations','broken bones and fractures.','penetrating wounds','broken bones and fractures.','cuts and lacerations','burns and abrasions','broken bones and fractures.','broken bones and fractures.','broken bones and fractures.'
    ],
    treater:[
      'Yes','Yes','No','No','No','No','Yes','Yes','No','Yes','Yes','No','No','No','Yes','No','No','Yes','No','No','Yes','Yes','No','Yes','Yes','No','No','Yes','No','Yes','Yes','No','No','Yes','Yes','No','No','Yes','Yes','Yes','No','No','Yes','No','Yes','Yes','Yes','No','Yes','Yes','No','Yes','Yes','Yes','Yes','Yes','Yes','Yes','Yes','No','No','Yes','Yes','Yes','No','Yes','No','No','No','Yes','No','No','No','No','No','No','No','Yes','Yes','No','Yes','Yes','Yes','No','Yes','Yes','Yes','No','Yes','No','No','No','Yes','Yes','No','Yes','No','No','Yes','Yes'
    ],
    agency:[
      'No','No','Yes','No','Yes','No','Yes','Yes','No','No','No','No','Yes','No','Yes','No','No','Yes','No','No','Yes','Yes','No','No','No','Yes','Yes','Yes','Yes','No','No','No','No','Yes','No','No','Yes','No','Yes','Yes','No','No','Yes','Yes','Yes','Yes','Yes','No','No','No','Yes','Yes','No','No','No','Yes','No','No','No','No','Yes','No','Yes','Yes','Yes','No','Yes','Yes','Yes','No','Yes','Yes','No','No','No','Yes','No','Yes','Yes','No','No','Yes','No','Yes','Yes','Yes','No','Yes','No','Yes','Yes','No','No','No','No','Yes','Yes','No','No','Yes'
    ],
    agencyName:[
      'Nanete Lacroutz','Sherlocke Alenov','Far Heiden','Carilyn Jensen','Debi Trumper','Randene Stoppard','Bogart Bortoletti','Ricard Thorby','Vincenty Weldrake','Angelia Friman','Herminia Christoffels','Asa Chestnut','Trix Bracey','Margot Hardcastle','Rahal McCarrick','Sonni Stockill','Halsy Tompsett','Roch Cambridge','Lucio Nassau','Binni Stock','Alvan Loghan','Bell Huddlestone','Hermia Kenn','Sergeant Brunnstein','Zacharie Galego','Myrta Saer','Dyanna Starmer','Vernice Leavy','Packston Braid','Zandra Veregan','Colin Gotcher','Claudina Reye','Vail Johananoff','Fey Verrell','Michelina Yanshonok','Olivette Harbert','Mickie Diben','Jonell Lazarus','Nat Wogan','Thadeus Robers','Norton Wilton','Claiborne Walding','Bobbee Fawks','Ambrosi Domniney','Gerri Joselson','Tabby Teresa','Fanchette Bennington','Madeleine Tummasutti','Audry Redmire','Caril Jent','Willi Kilner','Casper Camp','Germana Riggott','Suzanna Gentiry','Berrie Hugenin','Skelly Shallow','Gerhard Tartt','Lonny Dobbinson','Vivia Mackstead','Townie Leipnik','Ursulina Lovick','Linoel Ladlow','Crosby Edgecombe','Bernete De Vaux','Filippa Brinsden','Audry Abercrombie','Renado Mateus','Winnie Carrabot','Reggi Gieraths','Minerva Hemshall','Nowell Towell','Gerek Polamontayne','Fanchon Antram','Claudell Eakly','Ulrica Harbard','Aprilette Paull','Trent Fielden','Kay Jindracek','Felecia Korpolak','Killie Outibridge','Osmund Cockshoot','Gladys Vedenisov','Forrester Hockell','Dennie Martello','Stephana Biggs','Inez Corbishley','Aurilia Satchell','Eolande Waddicor','Cleveland Girardez','Corri Harbertson','Eolande Beartup','Felecia Farrey','Quillan Muckersie','Rochette Poland','Ethe Humphrys','Erskine Dilliston','Reynolds McCane','Dwain Wrankling','Linn Littefair','Ottilie Tullot'
    ],
    agencyType:[
      'captive insurance agent','captive insurance agent','captive insurance agent','captive insurance agent','Retail agent','an independent insurance agent','captive insurance agent','captive insurance agent','Retail agent','Retail agent','captive insurance agent','captive insurance agent','an independent insurance agent','an independent insurance agent','Retail agent','an independent insurance agent','Retail agent','captive insurance agent','Retail agent','an independent insurance agent','Retail agent','an independent insurance agent','an independent insurance agent','captive insurance agent','captive insurance agent','an independent insurance agent','captive insurance agent','an independent insurance agent','an independent insurance agent','captive insurance agent','captive insurance agent','Retail agent','Retail agent','Retail agent','an independent insurance agent','an independent insurance agent','Retail agent','Retail agent','an independent insurance agent','captive insurance agent','Retail agent','Retail agent','captive insurance agent','captive insurance agent','Retail agent','Retail agent','an independent insurance agent','captive insurance agent','Retail agent','Retail agent','Retail agent','captive insurance agent','Retail agent','captive insurance agent','an independent insurance agent','an independent insurance agent','captive insurance agent','an independent insurance agent','Retail agent','Retail agent','Retail agent','an independent insurance agent','an independent insurance agent','Retail agent','an independent insurance agent','an independent insurance agent','an independent insurance agent','an independent insurance agent','captive insurance agent','Retail agent','Retail agent','captive insurance agent','captive insurance agent','captive insurance agent','Retail agent','captive insurance agent','Retail agent','Retail agent','captive insurance agent','an independent insurance agent','Retail agent','an independent insurance agent','an independent insurance agent','Retail agent','Retail agent','an independent insurance agent','Retail agent','an independent insurance agent','an independent insurance agent','an independent insurance agent','captive insurance agent','captive insurance agent','Retail agent','Retail agent','Retail agent','captive insurance agent','captive insurance agent','an independent insurance agent','an independent insurance agent','an independent insurance agent'
    ],
    firstReportLoss:[
      'Yes','Yes','No','Yes','No','No','No','Yes','No','No','No','No','No','Yes','Yes','No','No','Yes','No','No','Yes','No','Yes','Yes','Yes','Yes','Yes','Yes','No','Yes','Yes','Yes','No','Yes','No','Yes','No','No','No','Yes','No','Yes','No','No','Yes','No','No','Yes','Yes','No','Yes','No','Yes','Yes','No','No','Yes','Yes','No','No','No','Yes','Yes','Yes','No','No','No','No','No','Yes','Yes','No','Yes','No','No','No','No','Yes','Yes','No','No','No','Yes','Yes','Yes','Yes','No','Yes','No','Yes','Yes','No','No','Yes','No','Yes','Yes','No','Yes','Yes'
    ],
    where:[
      'park','public place','office','park','public place','office','public place','park','park','office','Road','Road','office','public place','park','park','Road','Road','office','Road','office','park','park','public place','park','park','park','Road','park','Road','public place','Road','office','park','park','public place','Road','office','office','office','public place','Road','Road','Road','Road','public place','park','Road','Road','park','public place','public place','office','park','office','Road','public place','Road','park','public place','Road','public place','Road','office','office','office','office','park','public place','public place','office','public place','Road','Road','public place'
    ],

  };

  fieldmodelInput: string = '';
  fieldValueDropdown: string = '';

  generate() {
    const {
      model,
      style,
      vehicleLocation,
      lossParty,
      ownership,
      owner,
      otherContact,
      relationship,
      witness,
      person,
      lossCause,
      lossTime,
      lossDesc,
      lossLocation,
      lossReport,
      vehicleDrivable,
      vehicleTow,
      airbags,
      damage,
      impact,
      injury,
      injuryDesc,
      injuryType,
      treater,
      agency,
      agencyName,
      agencyType,
      firstReportLoss,
      where,
    } = this.database;
    for (let i = model.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [model[i], model[j]] = [model[j], model[i]];
      [style[i], style[j]] = [style[j], style[i]];
      [vehicleLocation[i], vehicleLocation[j]] = [vehicleLocation[j], vehicleLocation[i]];
      [lossParty[i], lossParty[j]] = [lossParty[j], lossParty[i]];
      [ownership[i], ownership[j]] = [ownership[j], ownership[i]];
      [owner[i], owner[j]] = [owner[j], owner[i]];
      [otherContact[i], otherContact[j]] = [otherContact[j], otherContact[i]];
      [relationship[i], relationship[j]] = [relationship[j], relationship[i]];
      [witness[i], witness[j]] = [witness[j], witness[i]];
      [person[i], person[j]] = [person[j], person[i]];
      [lossCause[i], lossCause[j]] = [lossCause[j], lossCause[i]];
      [lossTime[i], lossTime[j]] = [
        lossTime[j],
        lossTime[i],
      ];
      [lossDesc[i], lossDesc[j]] = [lossDesc[j], lossDesc[i]];
      [lossLocation[i], lossLocation[j]] = [
        lossLocation[j],
        lossLocation[i],
      ];
      [lossReport[i], lossReport[j]] = [lossReport[j], lossReport[i]];
      [vehicleDrivable[i], vehicleDrivable[j]] = [vehicleDrivable[j], vehicleDrivable[i]];
      [vehicleTow[i], vehicleTow[j]] = [vehicleTow[j], vehicleTow[i]];
      [airbags[i], airbags[j]] = [airbags[j], airbags[i]];
      [damage[i], damage[j]] = [damage[j], damage[i]];
      [impact[i], impact[j]] = [impact[j], impact[i]];
      [injury[i], injury[j]] = [injury[j], injury[i]];
      [injuryDesc[i], injuryDesc[j]] = [injuryDesc[j], injuryDesc[i]];
      [injuryType[i], injuryType[j]] = [injuryType[j], injuryType[i]];
      [treater[i], treater[j]] = [treater[j], treater[i]];
      [agency[i], agency[j]] = [agency[j], agency[i]];
      [agencyName[i], agencyName[j]] = [agencyName[j], agencyName[i]];
      [agencyType[i], agencyType[j]] = [agencyType[j], agencyType[i]];
      [firstReportLoss[i], firstReportLoss[j]] = [firstReportLoss[j], firstReportLoss[i]];
      [where[i], where[j]] = [where[j], where[i]];

    }
    const shuffledData = {
      model,
      style,
      vehicleLocation,
      lossParty,
      ownership,
      owner,
      otherContact,
      relationship,
      witness,
      person,
      lossCause,
      lossTime,
      lossDesc,
      lossLocation,
      lossReport,
      vehicleDrivable,
      vehicleTow,
      airbags,
      damage,
      impact,
      injury,
      injuryDesc,
      injuryType,
      treater,
      agency,
      agencyName,
      agencyType,
      firstReportLoss,
      where,
    };
    // console.log(this.database)
    console.log(shuffledData);
    console.log(shuffledData['model'][1]);
    console.log(shuffledData['style'][1]);

    console.log(shuffledData['model'][2]);
    console.log(shuffledData['vehicleLocation'][1]);

    //console.log(shuffledData['array1'][1]);
    //to verify user entered row count or not

    if (this.rowCount >= 1) {
      //using dataService to transfer data from employee component to resultComponent
      localStorage.setItem('data', JSON.stringify(this.rows));
      this.savedData = this.rows;

      console.log(this.rows);
      this.objectArray2 = [];
      console.log(shuffledData['vehicleLocation'][1]);
      console.log(this.savedData);

      //number of table count
      for (let j = 0; j < this.rowCount; j++) {
        //getting the values from user in from the dropdown
        const index = j % shuffledData['model'].length;
        console.log(shuffledData['model'].length);
        for (let i = 0; i < this.savedData.length; i++) {
          console.log(this.savedData[i].value);
          if (this.savedData[i].value == 'model') {
            this.objectArray1.push(shuffledData['model'][index]);
          }
          if (this.savedData[i].value == 'style') {
            this.objectArray1.push(shuffledData['style'][index]);
          }
          if (this.savedData[i].value == 'vehicleLocation') {
            this.objectArray1.push(shuffledData['vehicleLocation'][index]);
          }
          if (this.savedData[i].value == 'lossParty') {
            this.objectArray1.push(shuffledData['lossParty'][index]);
          }
          if (this.savedData[i].value == 'ownership') {
            this.objectArray1.push(shuffledData['ownership'][index]);
          }
          if (this.savedData[i].value == 'lossReport') {
            this.objectArray1.push(shuffledData['lossReport'][index]);
          }
          if (this.savedData[i].value == 'owner') {
            this.objectArray1.push(shuffledData['owner'][index]);
          }
          if (this.savedData[i].value == 'otherContact') {
            this.objectArray1.push(shuffledData['otherContact'][index]);
          }
          if (this.savedData[i].value == 'relationship') {
            this.objectArray1.push(shuffledData['relationship'][index]);
          }
          if (this.savedData[i].value == 'witness') {
            this.objectArray1.push(shuffledData['witness'][index]);
          }
          if (this.savedData[i].value == 'person') {
            this.objectArray1.push(shuffledData['person'][index]);
          }
          if (this.savedData[i].value == 'lossCause') {
            this.objectArray1.push(shuffledData['lossCause'][index]);
          }
          if (this.savedData[i].value == 'lossTime') {
            this.objectArray1.push(shuffledData['lossTime'][index]);
          }
          if (this.savedData[i].value == 'lossDesc') {
            this.objectArray1.push(shuffledData['lossDesc'][index]);
          }
          if (this.savedData[i].value == 'lossLocation') {
            this.objectArray1.push(shuffledData['lossLocation'][index]);
          }
          if (this.savedData[i].value == 'vehicleDrivable') {
            this.objectArray1.push(shuffledData['vehicleDrivable'][index]);
          }
          if (this.savedData[i].value == 'vehicleTow') {
            this.objectArray1.push(shuffledData['vehicleTow'][index]);
          }
          if (this.savedData[i].value == 'airbags') {
            this.objectArray1.push(shuffledData['airbags'][index]);
          }
          if (this.savedData[i].value == 'damage') {
            this.objectArray1.push(shuffledData['damage'][index]);
          }
          if (this.savedData[i].value == 'impact') {
            this.objectArray1.push(shuffledData['impact'][index]);
          }
          if (this.savedData[i].value == 'injury') {
            this.objectArray1.push(shuffledData['injury'][index]);
          }
          if (this.savedData[i].value == 'injuryDesc') {
            this.objectArray1.push(shuffledData['injuryDesc'][index]);
          }
          if (this.savedData[i].value == 'injuryType') {
            this.objectArray1.push(shuffledData['injuryType'][index]);
          }
          if (this.savedData[i].value == 'treater') {
            this.objectArray1.push(shuffledData['treater'][index]);
          }
          if (this.savedData[i].value == 'agency') {
            this.objectArray1.push(shuffledData['agency'][index]);
          }
          if (this.savedData[i].value == 'agencyName') {
            this.objectArray1.push(shuffledData['agencyName'][index]);
          }
          if (this.savedData[i].value == 'agencyType') {
            this.objectArray1.push(shuffledData['agencyType'][index]);
          }
          if (this.savedData[i].value == 'firstReportLoss') {
            this.objectArray1.push(shuffledData['firstReportLoss'][index]);
          }
          if (this.savedData[i].value == 'where') {
            this.objectArray1.push(shuffledData['where'][index]);
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
