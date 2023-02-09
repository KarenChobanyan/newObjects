"use strict"
///ՀՀ ՏԻՄ կառուցվածքը


function MakeStaff(name, surName, title, email) {
    if (!new.target) {
        return new MakeStaff(name, surName, title, email)
    };
    this.name = name;
    this.surName = surName;
    this.title = title;
    this.email = email
}
function RegionGoverment(name, city, address, phone) {
    if (!new.target) { return new RegionGoverment(name, city, address, phone) };
    this.name = name;
    this.city = city;
    this.address = address;
    this.phone = phone;
    this.staff = [];
    this.addStaff = function (name, surName, title, email) {
        const employee = new MakeStaff(name, surName, title, email);
        this.staff[this.staff.length] = employee
    }
};
function MakeCities(name, postalIndex) {
    if (!new.target) { return new MakeCities(name, postalIndex) };
    this.name = name;
    this.postalIndex = postalIndex;
    this.self_goverments;
    this.self_governing = function (name, city, address, phone) {
        const self = new RegionGoverment(name, city, address, phone);
        this.self_goverments = self
    }
}
function Region(name, center, area, population) {
    if (!new.target) { return new Region(name, center, area) };
    this.name = name;
    this.center = center;
    this.area = area;
    this.population = population;
    this.goverments;
    this.cities = [];
    this.addCity = function (name, postalIndex) {
        const city = new MakeCities(name, postalIndex);
        this.cities[this.cities.length] = city
    }
    this.addRegionGoverment = function (name, city, address, phone) {
        const goverment = new RegionGoverment(name, city, address, phone);
        this.goverments = goverment
    }


};
function Capital(name, area, population) {
    if (!new.target) {
        return new Capital(name, area, population)
    };
    this.name = name;
    this.area = area;
    this.population = population;
    this.goverments;
    this.districts = [],
        this.addDisrict = function (name, postalIndex) {
            const district = new MakeCities(name, postalIndex);
            this.districts[this.districts.length] = district
        }
    this.addGoverment = function (name, city, address, phone) {
        const capitalGoverment = new RegionGoverment(name, city, address, phone);
        this.goverments = capitalGoverment
    }
}

function Country(name) {
    if (!new.target) {
        return new Country(name)
    };
    this.name = name;
    this.capital;
    this.addCapital = function (name, area, population) {
        const capitalName = new Capital(name, area, population);
        this.capital = capitalName;
        this.allArea += area;
        this.allPopulation += population
    }
    this.regions = [];
    this.allArea = 0;
    this.allPopulation = 0
    this.addRegion = function (name, center, area, population) {
        const region = new Region(name, center, area, population);
        this.regions[this.regions.length] = region;
        this.allArea += area;
        this.allPopulation += population;

    }
}
;

const armenia = new Country("Armenia");

/////Քաղաք Երևան

armenia.addCapital("Երևան", 0.223, 1075000);
armenia.capital.addGoverment("Երևանի Քաղաքապետարան", "ք. Երևան", "Արգիշտի փ. 1շն.", "1.08");
armenia.capital.goverments.addStaff("Հրաչյա", "Սարգսյան", 'Երևանի քաղաքապետ', "www.yerevan.am",);
armenia.capital.goverments.addStaff("Լեվոն", "Հովհաննիսյան", "Քաղաքապետի առաջին տեղակալ", "www.yerevan.am",);
armenia.capital.goverments.addStaff("Սուրեն", "Գրիգորյան", "Քաղաքապետի տեղակալ", "www.yerevan.am",);
armenia.capital.goverments.addStaff("Սերյան", "Մեջլումյան", "Աշխատակազմի քարտուղար", "www.yerevan.am",);
armenia.capital.goverments.addStaff("Կամո", "Արեյան", "Քաղաքապետի խորհրդական", "www.yerevan.am",);
///Կենտրոն վարչական շրջան
armenia.capital.addDisrict("Կենտրոն", "0002",);
armenia.capital.districts[0].self_governing("Կենտրոն  վարչական շրջան", "ք. Երևաան", "Տերյան փ. Հ.41", "+(374 11) 518 401");
armenia.capital.districts[0].self_goverments.addStaff("Սամվել", "Ղուկասյան", "Կենտրոն վարչական շրջանի ղեկավար", "kentron@yerevan.am",);
armenia.capital.districts[0].self_goverments.addStaff("Նիկոլայ", "Սարիբեկյան", "Վարչական շրջանի ղեկավարի տեղակալ", "kentron@yerevan.am",);
armenia.capital.districts[0].self_goverments.addStaff("Վարդան", "Գրիգորյան", "Աշխատակազմի քարտուղար", "kentron@yerevan.am",);
armenia.capital.districts[0].self_goverments.addStaff("Ռոմանոս", "Սաֆարյան", "Վարչական շրջանի ղեկավարի խորհրդական", "kentron@yerevan.am   ",);

////Աջափնյակ

armenia.capital.addDisrict("Աջափնյակ", "0054",);
armenia.capital.districts[1].self_governing("Աջափնյակ  վարչական շրջան", "ք. Երևան", "Ա.Սարգսյան փ. 5", "+(374 11) 518 050",);
armenia.capital.districts[1].self_goverments.addStaff("Կամսար", "Բաբինյան", "Աջափնակ վարչական շրջանի ղեկավար", "ajapnyak@yerevan.am",);
armenia.capital.districts[1].self_goverments.addStaff("Սերոբ", "Սարգսյան", "Վարչական ղեկավարի տեղակալ", "ajapnyak@yerevan.am",);
armenia.capital.districts[1].self_goverments.addStaff("Դավիթ", "Կարապետյան", "Վարչական շրջանի ղեկավարի խորհրդատու", "ajapnyak@yerevan.am",);
armenia.capital.districts[1].self_goverments.addStaff("Գրիգոր", "Գասպարյան", "Աշխատակազմի քարտուղար", "ajapnyak@eyrevan.am",);

///// Ավան

armenia.capital.addDisrict("Ավան", "0040",);
armenia.capital.districts[2].self_governing("Ավան վարչական շրջան", "ք. Երևան", "Խուդյակովի փ. 222", "+(374 11) 518 108");
armenia.capital.districts[2].self_goverments.addStaff("Վահան", "Հակոբյան", "Ավան վարչական շրջանի ղեկավար", "avan@eyrevan.am",);
armenia.capital.districts[2].self_goverments.addStaff("Արսեն", "Հովհաննիսյան", "Վարչական շրջանի ղեկավարի տեղակալ", "avan@yerevan.am",);
armenia.capital.districts[2].self_goverments.addStaff("Անուշ", "Հարությունյան", "Ֆինանսական բաժնի ղեկավար", "avan@yerevan.am",);
armenia.capital.districts[2].self_goverments.addStaff("Աշոտ", "Զաքարյան", "Իրավաբանական բաժնի պատասխանատու", "avan@yerevan.am",);

///Արաբկիր

armenia.capital.addDisrict("Արաբկիր", "0054");
armenia.capital.districts[3].self_governing("Արաբկիր վարչական շրջան", "ք.Երևան", "Ն.Զարյան փ. 26", "+(374 11) 518 201",);
armenia.capital.districts[3].self_goverments.addStaff("Արամ", "Ազատյան", "Արաբկիր վարչական շրջանի ղեկավար", "arabkir@yerevan.am",);
armenia.capital.districts[3].self_goverments.addStaff("Գեղամ", "Կարապետյան", "Վարչական շրջանի ղեկավար", "arabkir@yerevan.am",);
armenia.capital.districts[3].self_goverments.addStaff("Դավիթ", "Բալասանյան", "Վարչական շրջանի ղեկավար", "arabkir@yerevan.am",);
armenia.capital.districts[3].self_goverments.addStaff("Արմեն", "Բալբաբյան", "Աշխատակազմի քարտուղար", "arabkir@yerevan.am",);

///// Դավթաշեն

armenia.capital.addDisrict("Դավթաշեն", "0054");
armenia.capital.districts[4].self_governing("Դավթաշեն վարչական շրջան", "ք. Երևան", "Դավթաշեն 3-րդ թաղ", "+(374 11) 518 282",);
armenia.capital.districts[4].self_goverments.addStaff("Ռոման", "Համբարձոււմյան", "Դավթաշեն վարչական շրջանի ղեկավար", "davtashen@yerevan.am",);
armenia.capital.districts[4].self_goverments.addStaff("Հրաչյա", "Հակոբյան", "Վարչական շրջանի ղեկավարի տեղակալ", "davtashen@yerevan.am",);
armenia.capital.districts[4].self_goverments.addStaff("Մխիթար", "Մարտիրոսյան", "Աշխատակազմի քարտուղար", "davtashen@yerevan.am",);
armenia.capital.districts[4].self_goverments.addStaff("Տիգրան", "Մեջլումյան", "Ֆինանսակա բաժնի պատասխանատու", "davtashen@yerevan.am",);

//// Էրեբունի

armenia.capital.addDisrict("Էրեբունի", "0020",);
armenia.capital.districts[5].self_governing("Էրեբունի վարչական շրջան", "ք. Երևան", "Սասունցի Դավիթ 87", "+(374 11) 518 331",);
armenia.capital.districts[5].self_goverments.addStaff("Հակոբ", "Բալայան", "Էրեբունի վարչական շրջանի ղեկավար", "erebuni@yerevan.am",);
armenia.capital.districts[5].self_goverments.addStaff("Վահան", "Պապիկյան", "Վարչական շրջանի ղեկավարի տեղակալ", "erebuni@yerevan.am",);
armenia.capital.districts[5].self_goverments.addStaff("Պետրոս", "Սարգսյան", "Վարչական շրջանի ղեկավարի տեղակալ", "erebuni@yerevan.am",);
armenia.capital.districts[5].self_goverments.addStaff("Սարգիս", "Սահակյան", "Աշխատակազմի քարտուղար", "erebuni@yerevan.am");

////Մալաթիա - Սեբաստիա

armenia.capital.addDisrict("Մալաթիա - Սեբստիա", "0064",);
armenia.capital.districts[6].self_governing("Մալաթիա - Սեբաստիա վարչական շրջան", "ք. Երևան", "Սեբաստիայի փ. 32", "+(374 11) 518 585",);
armenia.capital.districts[6].self_goverments.addStaff("Արման", "Բարխուդաարյան", "Մալաթիա - Սեբաստիա վարչական շրջանի ղեկավար", "malatia-sebastia@yerevan.am",);
armenia.capital.districts[6].self_goverments.addStaff("Անդրանիկ", "Ավետիսյան", "Վարչական շրջանի ղեկավարի տեղակալ", "malatia-sebastia@yerevan.am",);
armenia.capital.districts[6].self_goverments.addStaff("Լազր", "Խաչատրյան", "Վարչական շրջանի ղեկավարի տեղակալ", "malatia-sebastia@yerevan.am",);
armenia.capital.districts[6].self_goverments.addStaff("Վահան", "Գալստյաան", "Աշխատակազմի քարտուղար", "malatia-sebastia@yerevan.am",);

///Նոր Նորք

armenia.capital.addDisrict("Նոր Նորք", "0059",);
armenia.capital.districts[7].self_governing("Նոր Նորք վարչական շրջան", "ք. Երևան", "Գայի պող. 19", "+(374 11) 518 688",);
armenia.capital.districts[7].self_goverments.addStaff("Արմեն", "Մհերյան", "Նոր Նորք վարչական շրջանի ղեկավար", "nornorq@yerevan.am",);
armenia.capital.districts[7].self_goverments.addStaff("Աստղիկ", "Ղազարյան", "Ֆինանսական բաժնի պատասխանատու", "nornorq@yerevan.am",);
armenia.capital.districts[7].self_goverments.addStaff("Հովսեփ", "Աղազարյան", "Վարչական շրաջանի ղեկավարի տեղակալ", "nornorq@yerevan.am",);
armenia.capital.districts[7].self_goverments.addStaff("Ռուդիկ", "Կարապետյան", "Աշխատակազմի քարտուղար", "nornorq@yerevan.am",);


////Նորք Մարաշ

armenia.capital.addDisrict("Նորք Մարաշ", "0047",);
armenia.capital.districts[8].self_governing("Նորք Մարաշ վարչական շրջան", "ք. Երևան", "Ա.Արմենակյան փ. 272", "+(374 11) 518 718",);
armenia.capital.districts[8].self_goverments.addStaff("Միքայել", "Օհանյան", "Նորք Մարաշ վարչական շրջանի ղեկավար", "norqmarash@yerevan.am",);
armenia.capital.districts[8].self_goverments.addStaff("Սերգեյ", "Սարգսյան", "Վարչական շրջանի ղեկավարի տեղակալ", "norqmarash@yerevan.am",);
armenia.capital.districts[8].self_goverments.addStaff("Հրաչյա", "Ղազարյան", "Աշխատակազմի քարտուղար", "norqmarash@yerevan.am",);
armenia.capital.districts[8].self_goverments.addStaff("Թամարա", "Երկանյան", "Ֆինանսական բաժնի պատասխանատու", "norqmarash@yerevan.am",);

////Նուբարաշեն

armenia.capital.addDisrict("Նուբարաշեն", "0815");
armenia.capital.districts[9].self_governing("Նուբարաշեն վարչական շրջան", "ք. Երևան", "Նուբարաշենի րդ փ. 4", "+(374 11) 518 730",);
armenia.capital.districts[9].self_goverments.addStaff("Անդրանիկ", "Գասպարյան", "Նուբարաշեն վարչական շրջանի ղեկավար", "nubarashen@yerevan.am",);
armenia.capital.districts[9].self_goverments.addStaff("Աշոտ", "Ղադյան", "Վարչական շրջանի ղեկավարի տեղակալ", "nubarashen@yerevan.am",);
armenia.capital.districts[9].self_goverments.addStaff("Հարություն", "Եղիազարյան", "Աշխատակազմի քարտուղար", "nubarashen@yerevan.am",);
armenia.capital.districts[9].self_goverments.addStaff("Աղավնի", "Երմազյան", "Ֆինանսական բաժնի պատասխանատու", "nubarashen@yerevan.am",);

//// Շենգավիթ 

armenia.capital.addDisrict("Շենգավիթ", "0803");
armenia.capital.districts[10].self_governing("Շենգավիթ վարչական շրջան", "ք. Երևրան", "Գարեգին Նժդեհ 26", "+(374 11) 518 808",);
armenia.capital.districts[10].self_goverments.addStaff("Ռազմիկ", "Մկրտչյան", "Շենգավիթ վարչական շրջանի ղեկավար", "shengavit@yerevan.am",);
armenia.capital.districts[10].self_goverments.addStaff("Անդրանիկ", "Մինասյան", "Վարչական շրջանի ղեկավարի տեղակալ", "shengavit@yerevan.am",);
armenia.capital.districts[10].self_goverments.addStaff("Արմեն", "Սարգսյան", "Վարչական շրջանի ղեկավարի տեղակալ", "shengavit@yerevan.am",);
armenia.capital.districts[10].self_goverments.addStaff("Կարապետ", "Շահինյան", "Աշխատակազմի քարտուղար", "shengavit@yerevan.am",);

//// Քանաքեռ Զեյթուն

armenia.capital.addDisrict("Քանաքեռ-Զեյթուն", "0069",);
armenia.capital.districts[11].self_governing("Քանաքեռ-Զեյթուն վարչական շրջան", "ք. Երևան", "Դավիթ Անհաղթի 11", "+(374 11) 518 844",);
armenia.capital.districts[11].self_goverments.addStaff("Արտակ", "Հովակիմյան", "Քանաքեռ-Զեյթուն վարչական շրջանի ղեկավար", "qanaqer_zeytun@yerevan.am",);
armenia.capital.districts[11].self_goverments.addStaff("Վարդան", "Բեկչյան", "Վարչական շրջանի ղեկավարի տեղակալ", "qanaqer_zeytun@yerevan.am",);
armenia.capital.districts[11].self_goverments.addStaff("Արման", "Ղալեչյան", "վարչական շրջանի ղեկավարի օգնական", "qanaqer_zeytun@yerevan.am",);
armenia.capital.districts[11].self_goverments.addStaff("Ագիթ", "Կայմազով", "Աշխատակազմի քարտուղար", "qanaqer_zeytun@yerevan.am",);


//////ՀՀ մարզեր

armenia.addRegion("Շիրակ", "Գյումրի", 2.681, 251941);
armenia.addRegion("Լոռի", "Վանաձոր", 3.799, 235537);
armenia.addRegion("Արագաածոտն", "Աշտարակ", 2.756, 132925);
armenia.addRegion("Արարատ", "Արտաշատ", 2.090, 260367);
armenia.addRegion("Արմավիր", "Արմավիր", 1.242, 265770);
armenia.addRegion("Գեղարքունիք", "Գավառ", 5.349, 235075);
armenia.addRegion("Կոտայք", "Հրազդան", 2.086, 254397);
armenia.addRegion("Սյունիք", "Կապան", 4.506, 141771);
armenia.addRegion("Տավուշ", "Իջևան", 2.704, 128609);
armenia.addRegion("Վայոց Ձոր", "Եղեգնաձոր", 2.308, 52324);

//////////   Շիրակի մարզ

armenia.regions[0].addRegionGoverment("Շիրակի մարզպետարան", "ք.Գյումրի", "Գարեգին Նժդեհի փող.16շենք", "+374-312-32610");
armenia.regions[0].goverments.addStaff("Նազելի", "Բաղդասարյան", "Մարզպետ", "nazeli.bagdasaryan@gov.am");
armenia.regions[0].goverments.addStaff("Ալբերտ", "Այվազյան", "Մարզպետի տեղակալ", "ayvazyanalbert57@gmai.com");
armenia.regions[0].goverments.addStaff("Արսեն", "Աբրահամյան", "Գլխավոր քարտեւղար", "arsen_abrahamyan@yahoo.com");
armenia.regions[0].goverments.addStaff("Լիլիթ", "Մուրադյան", "Մարզպետի խորհրդական", "lilit.muradyan13@gmail.com");
armenia.regions[0].addCity("Գյումրի", "3101");
armenia.regions[0].cities[0].self_governing("Գյումրու Համայնքապետարան", "ք.Գյումրի", "՝Վարդանանց՝ հրպ.1", "+374 31 222200");
armenia.regions[0].cities[0].self_goverments.addStaff("Վարդգես", "Սամսոնյան", "Գյումրու համյնքապետ", "samsonyan@gyumricity.am");
armenia.regions[0].cities[0].self_goverments.addStaff("Արթուր", "Պապիկյան", "Համայնքի ղեկավարի առաջին տեղակալ", "papikjan@gyumricity.am");
armenia.regions[0].cities[0].self_goverments.addStaff("Հայկ", "Սուլթանյան", "Համայնքի ղեկավարի առաջին խորհրդական", "sultanyan@gyumricity.am",);
armenia.regions[0].cities[0].self_goverments.addStaff("Սոնա", "Առաքելյան", "Համայնքի ղեկավարի մամուլի խոսնակ", "araqelyan@gyumricity.am",);
armenia.regions[0].addCity("Արթիկ", "3001");
armenia.regions[0].cities[1].self_governing("Արթիկի համյնքապետարան", "ք. Արթիկ", "Ազատության հր. 1", "(0244)5 20-21, 5 26-04",);
armenia.regions[0].cities[1].self_goverments.addStaff("Անանիկ", "Ոսկանյան", "Համայնքի ղեկավար", "artik.shirak@mta.gov.am",)
armenia.regions[0].cities[1].self_goverments.addStaff("Արտակ", "Հարությունայան", "Համայնքի ղեկավարի առաջին տեղակալ", "artik.shirak@mta.gov.am",)
armenia.regions[0].cities[1].self_goverments.addStaff("Սևակ", "Պետոյան", "Հմայնքի ղեկավարի մամուլի քարտուղար", "artik.shirak@mta.gov.am",);
armenia.regions[0].addCity("Մարալիկ", "2901");
armenia.regions[0].cities[2].self_governing("Անի համայնքապետարան", "ք. Մարալիկ", "Մադաթյան փ. 1", "0242- 2-22-37",);
armenia.regions[0].cities[2].self_goverments.addStaff("Արման", "Սարիբեկյան", "Համայնքք ղեկավար", "ani.shirak@mta.gov.am",);
armenia.regions[0].cities[2].self_goverments.addStaff("Էդգար", "Սաղաթելյան", "Հմայնքի ղեկավարի տեղակալ", "ani.shirak@mta.gov.am",);
armenia.regions[0].cities[2].self_goverments.addStaff("Մարտիրոս", "Դարբինյան", "հմայնքի ղեկավարի խորհրդատու", "ani.shirak@mta.gov.am");

//////Լոռու մարզ

armenia.regions[1].addRegionGoverment("Լոռու մարզպետարան", "ք. Լոռի", "2001 Հայքի հրպ.", "(+ 374 322) 4-32-99",);
armenia.regions[1].goverments.addStaff("Արամ", "Խաչատրյան", "Մարզպետ", "marzpet.lori@mta.gov.am,lori@mta.gov.am",);
armenia.regions[1].goverments.addStaff("Գոռ", "Ասրյան", "Լեռու մարզպետի տեղակալ", "g.asryan@mta.gov.am",);
armenia.regions[1].goverments.addStaff("Կամո", "Աշրաֆյան", "Լոռու մարզպետարանի գլխավոր քարտուղար", "k.ashrafyan@mta.gov.am",);
armenia.regions[1].goverments.addStaff("Տիգրան", "Խաչատրյան", "Մարզպետի օգնական", "t.xachatryan@mta.gov.am",);
armenia.regions[1].addCity("Վանաձոր", "2021",);
armenia.regions[1].cities[0].self_governing("Վանաձորի համայնքապետարան", "ք.Վանաձոր", " Տիգրան Մեծի 22", " (+ 374 322) 2 26 48");
armenia.regions[1].cities[0].self_goverments.addStaff("Արկադի", "Փելեշյան", "Վանաձորի համայնքապետ", "vanadzor.lori@mta.gov.am",);
armenia.regions[1].cities[0].self_goverments.addStaff("Հայկ", "Վիրաբյան", "Աշխատակազմի քարտուղար", "vanadzor.lori@mta.gov.am",);
armenia.regions[1].cities[0].self_goverments.addStaff("Վահե", "Գրիգորյան", "Ֆինանսաան բաժնի պետ", "vanadzor.lori@mta.gov.am",);
armenia.regions[1].cities[0].self_goverments.addStaff("Սուրեն", "Աբովյան", "Քաղաքաշինւթյան բաժնի պետ", "vanadzor.lori@mta.gov.am");
armenia.regions[1].addCity("Ալավերդի", "1701");
armenia.regions[1].cities[1].self_governing("Ալավերդու համայնքապետարան", "ք.Ալավերդի", "Զ.Անդրանիկի 8/1", "(0253) 2-41-00",);
armenia.regions[1].cities[1].self_goverments.addStaff("Արկադի", "Թամազյան", "Համայնքի ղեկավար", "alaverdimunicipality@gmail.com",);
armenia.regions[1].cities[1].self_goverments.addStaff("Տիգրան", "Պապոյան", "Համայնքի ղեկավարի առաջին տեղակալ", "alaverdimunicipality@gmail.com");
armenia.regions[1].cities[1].self_goverments.addStaff("Հարություն", "Գալստյան", "Աշխատակազմի քարտուղար", "alaverdimunicipality@gmail.com",);
armenia.regions[1].cities[1].self_goverments.addStaff("Ռոման", "Դավթյան", "Համայնքի ղեկավարի խորհրդական", "alaverdimunicipality@gmail.com",);
armenia.regions[1].addCity("Ստեփանավան", "1905");
armenia.regions[1].cities[2].self_governing("Ստեփանավանի համայնքապետարան", "ք. Ստեփանավան", "Սոս Սարգսյան 1", "+374 256 2 22 33",);
armenia.regions[1].cities[2].self_goverments.addStaff("Արմեն", "Գրիգորյան", "Համայնքի ղեկավար", "stepanavan.lori@mta.gov.am",);
armenia.regions[1].cities[2].self_goverments.addStaff("Հրահատ", "Աբրահամյան", "Համայնքի ղեկավարի առաջին տեղակալ", "stepanavan.lori@mta.gov.am",);
armenia.regions[1].cities[2].self_goverments.addStaff("Գայանե", "Ղալաչյան", "Աշխատակազմի քարտուղար", "stepanavan.lori@mta.gov.am",);
armenia.regions[1].cities[2].self_goverments.addStaff("Լուսինե", "Հովհաննիսյան", "Համայնքի ղեկավարի խորհրդական", "stepanavan.lori@mta.gov.am",);
armenia.regions[1].addCity("Սպիտակ", "1801",);
armenia.regions[1].cities[3].self_governing("Սպիտակի համայնքապետարան", "ք.Սպիտակ", "Շահումյան 7", "(0255) 22500",);
armenia.regions[1].cities[3].self_goverments.addStaff("Քաջայր", "Նիկողոսյան", "Համայնքի ղեկավար", "municipalityspitak@gmail.com",);
armenia.regions[1].cities[3].self_goverments.addStaff("Արտակ", "Մաթոսյան", "Համայնքի ղեկավարի առաջին տեղղակալ", "municipalityspitak@gmail.com",);
armenia.regions[1].cities[3].self_goverments.addStaff("Ազգանուշ", "Ֆրանագյան", "Աշխատակազմի քարտուղար", "municipalityspitak@gmail.com",);
armenia.regions[1].cities[3].self_goverments.addStaff("Էռնեստ", "Խաչատրյան", "Համայնքի ղեկավարի խորհրդական", "municipalityspitak@gmail.com",);
armenia.regions[1].addCity("Տաշիր", "2101",);
armenia.regions[1].cities[4].self_governing("Տաշիրի համայնքապետարան", "ք. Տաշիր", " Վ. Սարգսյան 94", "(0254) 2-22-41",);
armenia.regions[1].cities[4].self_goverments.addStaff("Էդգար", "Արշակյան", "Համայնքի ղեկավար", "arshakyan.e.e@gmail.com",);
armenia.regions[1].cities[4].self_goverments.addStaff("Նորայր", "Բաղդասարյան", "Համայնքի ղեկավարի առաջին տեղակալ", "tashir.lori@mta.gov.am",);
armenia.regions[1].cities[4].self_goverments.addStaff("Նաիրա", "Մարտիրոսյան", "Համայնքի ղեկավարի օգնական", "tashir.lori@mta.gov.am",);
armenia.regions[1].addCity("Թումանյան", "1712");
armenia.regions[1].cities[5].self_governing("Թումանյանի համայնքապետարան", "ք. Թումանյան", "Կենտրոնական փ. շն. 1", "(+374)98 04-80-46");
armenia.regions[1].cities[5].self_goverments.addStaff("Սուրեն", "Թումանյան", "Համայքի ղեկավար", "tumanyan.city@mail.ru",);
armenia.regions[1].cities[5].self_goverments.addStaff("Ռոման", "Շաքարյան", "Համայնքի ղեկավարի առաջին տեղակալ", "tumanyan.city@mail.ru",);
armenia.regions[1].cities[5].self_goverments.addStaff("Ռուզաննա", "Շահվերդյան", "Աշխատակազմի քարտուղար", "tumanyan.lori@mta.gov.am",);

/////////////Արագածոտնի մարզ

armenia.regions[2].addRegionGoverment("Արագածոտնի մարզպետարան", "ք.Աշտարակ", "Վազգեն Սարգսյան 4", "(+374 232) 3 22 51",);
armenia.regions[2].goverments.addStaff("Սերգեյ", "Մովսիսյան", "Արագածոտնի մարզի մարզպետ", "aragatsotn@mta.gov.am",)
armenia.regions[2].goverments.addStaff("Հարություն", "Գուլյան", "Մարզպետի տեղակալ", "aragatsotn@mta.gov.am",)
armenia.regions[2].goverments.addStaff("Հրաչյա", "Գևորգյան", "Մարզպետարանի գլխավոր քարտուղար", "aragatsotn@mta.gov.am",)
armenia.regions[2].goverments.addStaff("Արմեն", "Գրիգորյան", "Մարզպետի խորհրդական", "aragatsotn@mta.gov.am",)

armenia.regions[2].addCity("Աշտարակ", "0205",);
armenia.regions[2].cities[0].self_governing("Աշտարակի համայնքապետարան", "ք. Աշտարակ", "Ն.Աշտարակեցու 7", "/0232/3-10-26",);
armenia.regions[2].cities[0].self_goverments.addStaff("Թովմաս", "Շահվերդյան", "Համայնքի ղեկավար", "ashtarak.aragatsotn@mta.gov.am",);
armenia.regions[2].cities[0].self_goverments.addStaff("Շանթ", "Վահանյան", "համայնքի ղեկավարի առաջին տեղակալ", "vahanyanshant@gmail.com",);
armenia.regions[2].cities[0].self_goverments.addStaff("Նարինե", "Գևորգյան", "Համայնքի ղեկավարի օգնական", "ashtarakmunicipality@gmail.com",);
armenia.regions[2].cities[0].self_goverments.addStaff("Հարություն", "Բաղդասարյան", "Համայնքի ղեկավարի խորհրդական", "ashtarakmunicipality@gmail.com",);

armenia.regions[2].addCity("Ապարան", "0301",);
armenia.regions[2].cities[1].self_governing("Ապարանի համայնքապետարան", "ք. Ապարան", "Մ.Բաղրամյան 26", "(0252) 2- 43-93",);
armenia.regions[2].cities[1].self_goverments.addStaff("Կարեն", "Եղիազրյան", "Համայնքի ղեկավար", "aparaniqaxaqapetaran@gmail.com",);
armenia.regions[2].cities[1].self_goverments.addStaff("Արկադի", "Կարապետյան", "Համայնքի ղեկավարի առաջին տեղակալ", "aka005@mail.ru",);
armenia.regions[2].cities[1].self_goverments.addStaff("Հրայր", "Մկրտչյան", "Համայնքի ղեկավարի տեղակաալ", "hovhrayr@mail.ru",);
armenia.regions[2].cities[1].self_goverments.addStaff("Գոռ", "Աբրահամյան", "Համայնքի ղեկավարի առաջին խորհրդական", "goraparan@mail.ru",);

armenia.regions[2].addCity("Թալին", "0501",);
armenia.regions[2].cities[2].self_governing("Թաինի համայնքապետարան", "ք Թալին", "Գայի 1", "060-75-77-87",);
armenia.regions[2].cities[2].self_goverments.addStaff("Տավրոս", "Սափեյան", "Հմայնքի ղեկավար", "tavros1983@icloud.com",);
armenia.regions[2].cities[2].self_goverments.addStaff("Սերգե", "Մկրտչյան", "Համայնքի ղեկավարի առաջին տեղակալ", "serge.mkrtchyan@list.ru");
armenia.regions[2].cities[2].self_goverments.addStaff("Սևակ", "Մկրտչյան", "Համայնքի ղեկավարի խորհրդական", "taliniqaxaqapetaran@list.ru",);
armenia.regions[2].cities[2].self_goverments.addStaff("Մերի", "Խաչատրյան", "Մամուլի քարտուղար", "taliniqaxaqapetaran@list.ru",);

////Արարատի մարզ

armenia.regions[3].addRegionGoverment("Արարատի մարզպետարան", "ք․Արտաշատ", " ք. Արտաշատ, Օգոստոսի 23-ի փ., 60 շենք", "(010 )25-60-23",);
armenia.regions[3].goverments.addStaff("Սևակ", "Թևոնյան", "Արարատի մարզպետ", "marzpet.ararat@mta.gov.am",)
armenia.regions[3].goverments.addStaff("Արտավազդ", "Նազարեթյան", "Մարզպետի տեղակալ", "artavazd.nazaretyan@mta.gov.am",)
armenia.regions[3].goverments.addStaff("Արթուր", "Մկրտչյան", "Մարզպետարանի գլխավոր քարտուղար", "gqart.ararat@mta.gov.am",)
armenia.regions[3].goverments.addStaff("Քրիստինե", "Պողոսյան", "Մարզպետի օգնական", "gqart.ararat@mta.gov.am",)

armenia.regions[3].addCity("Արտաշատ", "0732");
armenia.regions[3].cities[0].self_governing("Արտաշատի համայնքապետարան", "ք․ Արտաշատ", "Օգոստոսի 23/62", "(010) 250519, (0235) 22383",);
armenia.regions[3].cities[0].self_goverments.addStaff("Կառլեն", "Մկրտչյան", "Համայնքի ղեկավար", "artashatmeria@bk.ru",);
armenia.regions[3].cities[0].self_goverments.addStaff("Հրայր", "Հակոբջնյան", "Համայնքի ղեկավարի տեղակալ", "artashatmeria@bk.ru",);
armenia.regions[3].cities[0].self_goverments.addStaff("Վարդան", "Հակոբյան", "Համայնքի ղեկավարի խորհրդական", "artashatmeria@bk.ru",);
armenia.regions[3].cities[0].self_goverments.addStaff("Ատոմ", "Ատոմյան", "Համայնքի ղկավարի օգնական", "artashatmeria@bk.ru",);

armenia.regions[3].addCity("Արարատ", "0602",);
armenia.regions[3].cities[1].self_governing("Արարատի համայնքապետարան", "ք․Արարատ", " Շահումյան 34", "060-88-55-55",);
armenia.regions[3].cities[1].self_goverments.addStaff("Ասլան", "Ավետիսյան", "Արարատ բնակավայրի ղեկավար", "ararat.ararat@mta.gov.am",);
armenia.regions[3].cities[1].self_goverments.addStaff("Արսեն", "Հակոբյան", "համայնքի ղեկավարի առաջին տեղակալ", "ararat.ararat@mta.gov.am",);
armenia.regions[3].cities[1].self_goverments.addStaff("Մուշեղ", "Հակոբյան", "Համայնքի ղեկավարի խորհրդական", "ararat.ararat@mta.gov.am",);
armenia.regions[3].cities[1].self_goverments.addStaff("Կարեն", "Մելքոնյան", "Համայնքի ղեկավարի օգնական", "ararat.ararat@mta.gov.am",);

armenia.regions[3].addCity("Մասիս", "0801",);
armenia.regions[3].cities[2].self_governing("Մասիսի համայնքապետարան", "ք․ Մասիս", "Կենտրոնական հրապարակ թիվ 4", "0236-4-30-40",);
armenia.regions[3].cities[2].self_goverments.addStaff("Դավիթ", "Համբարձումյան", "Համայնքի ղեկավար", "masismer@mail.ru",);
armenia.regions[3].cities[2].self_goverments.addStaff("Նորայր", "Հակոբյան", "համայնքի ղեկավարի առաջին տեղակալ", "masismer@mail.ru",);
armenia.regions[3].cities[2].self_goverments.addStaff("Կարեն", "Օհանյան", "Համայնքի ղեկավարի խորհրդական", "masismer@mail.ru",);
armenia.regions[3].cities[2].self_goverments.addStaff("Համասփյուռ", "Քերոբյան", "Մամուլի քարտուղար", "hasmik_qerobyan@mail.ru",);

////Արմավիրի մարզ

armenia.regions[4].addRegionGoverment("Արմավիրի մարզպետարան", "ք. Արմավիր", "Աբովյան 71, 0901 ", "+374 237/ 2-37-16",);
armenia.regions[4].goverments.addStaff("Էդվարդ", "Հովհաննիսյան", "Արմավիրի մարզպետ", "marzpet.armavir@mta.gov.am",);
armenia.regions[4].goverments.addStaff("Առնակ", "Ավետիսյան", "Մարզպետի տեղակալ", "armavir.mtad.am",);
armenia.regions[4].goverments.addStaff("Սաթենիկ", "Թովմասյան", "Մարզպետի խորհրդական", "armavir.mtad.am",);
armenia.regions[4].goverments.addStaff("Աննա", "Միքաելյան", "մարզպետի օգնական", "armavir.mtad.am",);

armenia.regions[4].addCity("Արմավիր", "0901",);
armenia.regions[4].cities[0].self_governing("Արմավիրի համայնքապետարան", "ք. Արմավիր", "Հանրապետության փ. 32", "(0237) 2-36-54",);
armenia.regions[4].cities[0].self_goverments.addStaff("Դավիթ", "Խուդաթյան", "Համայնքի ղեկավար", "armavir.armavir@mta.gov.am",);
armenia.regions[4].cities[0].self_goverments.addStaff("Վարշամ", "Սարգսյան", "Համայնքի ղեկավարի առաջին տեղակալ", "armavir.armavir@mta.gov.am",);
armenia.regions[4].cities[0].self_goverments.addStaff("Ֆելիքս", "Պետրոսյան", "Աշխատակազմի քարտուղար", "armavir.armavir@mta.gov.am",);
armenia.regions[4].cities[0].self_goverments.addStaff("Կարեն", "Մկրտչյան", "Համյնքի ղեկավարի խորհրդական", "armavir.armavir@mta.gov.am",);

armenia.regions[4].addCity("Էջմիածին", "0813",);
armenia.regions[4].cities[1].self_governing("Վաղարշապատի համայնքապետարան", "ք. Էջմիածին", "Սրբ. Մեսրոպ մաշտոց 0", "+374 231 53663",);
armenia.regions[4].cities[1].self_goverments.addStaff("Դիանա", "Գասպարյան", "Համայնքի ղեկավար", "info@ejmiatsin.am",);
armenia.regions[4].cities[1].self_goverments.addStaff("Մհեր", "Մկրտչյան", "Համայնքի ղեկավարի տեղակալ", "info@ejmiatsin.am",);
armenia.regions[4].cities[1].self_goverments.addStaff("Մարիամ", "Պողոսյան", "Համայնքի ղեկավարի խորհրդական", "info@ejmiatsin.am",);
armenia.regions[4].cities[1].self_goverments.addStaff("Ռաֆայել", "Զիրոյան", "Համայնքի ղեկավարի օգնական", "info@ejmiatsin.am");

armenia.regions[4].addCity("Մեծամոր", "0910",);
armenia.regions[4].cities[2].self_governing("Մեծամորի համայնքապետարան", "ք. Մեծամոր", "Վարչական կենտրոն շն.1", "060656505",);
armenia.regions[4].cities[2].self_goverments.addStaff("Վահրամ", "Խաչատրյան", "Համայնքի ղեկավար", "metsamormeria@yandex.ru",);
armenia.regions[4].cities[2].self_goverments.addStaff("Մարատ", "Հովհաննիսյան", "Աշխատակազմի քարտուղար", "metsamormeria@yandex.ru",);
armenia.regions[4].cities[2].self_goverments.addStaff("Էդգար", "Հովհաննիսյան", "Համայնքի ղեկավարի առաջին տեղակալ", "metsamormeria@yandex.ru",);
armenia.regions[4].cities[2].self_goverments.addStaff("Վլադիմիր", "Ստեփանյան", "Հմայննքի ղեկավարի խերհրդական", "metsamormeria@yandex.ru",);

///Գեղարքունիքի մարզ

armenia.regions[5].addRegionGoverment("Գեղարքունիքի մարզպետարան", "ք.Գավառ", "Կենտրոնական հրապարակ 7", "+374 060 65 00 60",);
armenia.regions[5].goverments.addStaff("Կարեն", "Սարգսյան", "Գեղարքունիքի մարզպետ", "marzpet.gegharquniq@mta.gov.am",)
armenia.regions[5].goverments.addStaff("Ռուբիկ", "նավոյան", "Մարզպետի տեղակալ", "gegharkunik@mta.gov.am",)
armenia.regions[5].goverments.addStaff("Սևակ", "Խղաթյան", "Մարզպետարանի գլխավոր քարտուղար", "sevak.khl@mail.ru",)
armenia.regions[5].goverments.addStaff("Սասուն", "Սահակյան", "Մարզպետի խորհրդական", "gegharkunik@mta.gov.am",)

armenia.regions[5].addCity("Գավառ", "1202",);
armenia.regions[5].cities[0].self_governing("Գավառի համայնքապետարան", "ք. Գավառ", "Կենտրոնական հրապարակ 3", "(0264)23423",);
armenia.regions[5].cities[0].self_goverments.addStaff("Գուրգեն", "Մարտիրոսյան", "Համայնքի ղեկավար", "gavariqaghaqapetaran@gmail.com",);
armenia.regions[5].cities[0].self_goverments.addStaff("Գրիգոր", "Դաշտոյան", "Համայնքի ղեկավարի առաջին տեղակալ", "gavariqaghaqapetaran@gmail.com",);
armenia.regions[5].cities[0].self_goverments.addStaff("Կարինե", "Մանուկյան", "Աշխատակազմի քարտուղար", "gavariqaghaqapetaran@gmail.com",);
armenia.regions[5].cities[0].self_goverments.addStaff("Ռուբեն", "Կոխպեցյան", "Համայնքի ղեկավարի խորհրդական", "gavariqaghaqapetaran@gmail.com",);

armenia.regions[5].addCity("Սևան", "1501",);
armenia.regions[5].cities[1].self_governing("Սևանի Համայնքապետարան", "ք. Սևան", "Նաիրյան 164", "0261-2-43-23",);
armenia.regions[5].cities[1].self_goverments.addStaff("Սարգիս", "Մուրադյան", "Սևան համայնքի համայնքապետ", "sevanhamaynq@mail.ru",);
armenia.regions[5].cities[1].self_goverments.addStaff("Արթուր", "Մարգարյան", "Համայնքի ղեկավարի առաջին տեղակալ", "sevanhamaynq@mail.ru",);
armenia.regions[5].cities[1].self_goverments.addStaff("Պապ", "Պետրոսյան", "Համայնքի ղեկավարի խորհրդական", "sevanhamaynq@mail.ru",);
armenia.regions[5].cities[1].self_goverments.addStaff("Արման", "Հարությունյան", "Համայնքի ղեկավարի օգնական", "sevanhamaynq@mail.ru",);

armenia.regions[5].addCity("Վարդենիս", "1601",);
armenia.regions[5].cities[2].self_governing("Վարդենիսի համայնքապետարան", "ք. Վարդենիս", "Հ.Անդրեասյան 4", "(0269)22031",);
armenia.regions[5].cities[2].self_goverments.addStaff("Ահարոն", "Խաչատրյան", "համայնքի ղեկավար", "vardenismer@mail.ru",);
armenia.regions[5].cities[2].self_goverments.addStaff("Կարեն", "մկրտչյան", "Համայնքի ղեկավարի առաջին տեղակալ", "vardenismer@mail.ru",);
armenia.regions[5].cities[2].self_goverments.addStaff("Հունան", "Հարությունյան", "Համայնքի ղեկավարի խորհրդական", "vardenismer@mail.ru",);
armenia.regions[5].cities[2].self_goverments.addStaff("Ալիկ", "Եղիազարյան", "Համայնքի ղեկավարի օգնական", "vardenismer@mail.ru",);

armenia.regions[5].addCity("Ճամբարակ", "1305");
armenia.regions[5].cities[3].self_governing("Ճամբարակի համայնքապետարան", "ք. Ճամբարակ", "Գ.Նժդեհ 125", "(0265)22255",);
armenia.regions[5].cities[3].self_goverments.addStaff("Վազգեն", "Ադամյան", "Համայնքի ղեկավար", "chambarak.gegharquniq@mta.gov.am");
armenia.regions[5].cities[3].self_goverments.addStaff("Ռոբերտ", "Օհանյան", "Համայնքի ղեկավարի առաջին տեղակալ", "chambarak.gegharquniq@mta.gov.am",);
armenia.regions[5].cities[3].self_goverments.addStaff("Թարխան", "Խեչոյան", "Համայնքի ղեկավարի խորհրդական", "chambarak.gegharquniq@mta.gov.am",);
armenia.regions[5].cities[3].self_goverments.addStaff("Սերյոժա", "Ավդալյան", "Համայնքի ղեկավարի խորհրդական", "chambarak.gegharquniq@mta.gov.am",);

///Կոտայքի մարզ

armenia.regions[6].addRegionGoverment();
armenia.regions[6].goverments.addStaff()
armenia.regions[6].goverments.addStaff()
armenia.regions[6].goverments.addStaff()
armenia.regions[6].goverments.addStaff()

armenia.regions[6].addCity();
armenia.regions[6].cities[0].self_governing();
armenia.regions[6].cities[0].self_goverments.addStaff();
armenia.regions[6].cities[0].self_goverments.addStaff();
armenia.regions[6].cities[0].self_goverments.addStaff();
armenia.regions[6].cities[0].self_goverments.addStaff();

armenia.regions[6].addCity();
armenia.regions[6].cities[1].self_governing();
armenia.regions[6].cities[1].self_goverments.addStaff();
armenia.regions[6].cities[1].self_goverments.addStaff();
armenia.regions[6].cities[1].self_goverments.addStaff();
armenia.regions[6].cities[1].self_goverments.addStaff();

armenia.regions[6].addCity();
armenia.regions[6].cities[2].self_governing();
armenia.regions[6].cities[2].self_goverments.addStaff();
armenia.regions[6].cities[2].self_goverments.addStaff();
armenia.regions[6].cities[2].self_goverments.addStaff();
armenia.regions[6].cities[2].self_goverments.addStaff();

armenia.regions[6].addCity();
armenia.regions[6].cities[3].self_governing();
armenia.regions[6].cities[3].self_goverments.addStaff();
armenia.regions[6].cities[3].self_goverments.addStaff();
armenia.regions[6].cities[3].self_goverments.addStaff();
armenia.regions[6].cities[3].self_goverments.addStaff();

armenia.regions[6].addCity();
armenia.regions[6].cities[4].self_governing();
armenia.regions[6].cities[4].self_goverments.addStaff();
armenia.regions[6].cities[4].self_goverments.addStaff();
armenia.regions[6].cities[4].self_goverments.addStaff();
armenia.regions[6].cities[4].self_goverments.addStaff();

armenia.regions[6].addCity();
armenia.regions[6].cities[5].self_governing();
armenia.regions[6].cities[5].self_goverments.addStaff();
armenia.regions[6].cities[5].self_goverments.addStaff();
armenia.regions[6].cities[5].self_goverments.addStaff();
armenia.regions[6].cities[5].self_goverments.addStaff();


//// Սյունիքի մարզ

armenia.regions[7].addRegionGoverment();
armenia.regions[7].goverments.addStaff()
armenia.regions[7].goverments.addStaff()
armenia.regions[7].goverments.addStaff()
armenia.regions[7].goverments.addStaff()

armenia.regions[7].addCity();
armenia.regions[7].cities[0].self_governing();
armenia.regions[7].cities[0].self_goverments.addStaff();
armenia.regions[7].cities[0].self_goverments.addStaff();
armenia.regions[7].cities[0].self_goverments.addStaff();
armenia.regions[7].cities[0].self_goverments.addStaff();

armenia.regions[7].addCity();
armenia.regions[7].cities[1].self_governing();
armenia.regions[7].cities[1].self_goverments.addStaff();
armenia.regions[7].cities[1].self_goverments.addStaff();
armenia.regions[7].cities[1].self_goverments.addStaff();
armenia.regions[7].cities[1].self_goverments.addStaff();

armenia.regions[7].addCity();
armenia.regions[7].cities[2].self_governing();
armenia.regions[7].cities[2].self_goverments.addStaff();
armenia.regions[7].cities[2].self_goverments.addStaff();
armenia.regions[7].cities[2].self_goverments.addStaff();
armenia.regions[7].cities[2].self_goverments.addStaff();

armenia.regions[7].addCity();
armenia.regions[7].cities[3].self_governing();
armenia.regions[7].cities[3].self_goverments.addStaff();
armenia.regions[7].cities[3].self_goverments.addStaff();
armenia.regions[7].cities[3].self_goverments.addStaff();
armenia.regions[7].cities[3].self_goverments.addStaff();

armenia.regions[7].addCity();
armenia.regions[7].cities[4].self_governing();
armenia.regions[7].cities[4].self_goverments.addStaff();
armenia.regions[7].cities[4].self_goverments.addStaff();
armenia.regions[7].cities[4].self_goverments.addStaff();
armenia.regions[7].cities[4].self_goverments.addStaff();

armenia.regions[7].addCity();
armenia.regions[7].cities[5].self_governing();
armenia.regions[7].cities[5].self_goverments.addStaff();
armenia.regions[7].cities[5].self_goverments.addStaff();
armenia.regions[7].cities[5].self_goverments.addStaff();
armenia.regions[7].cities[5].self_goverments.addStaff();

////Տավուշի մարզ

armenia.regions[8].addRegionGoverment();
armenia.regions[8].goverments.addStaff()
armenia.regions[8].goverments.addStaff()
armenia.regions[8].goverments.addStaff()
armenia.regions[8].goverments.addStaff()

armenia.regions[8].addCity();
armenia.regions[8].cities[0].self_governing();
armenia.regions[8].cities[0].self_goverments.addStaff();
armenia.regions[8].cities[0].self_goverments.addStaff();
armenia.regions[8].cities[0].self_goverments.addStaff();
armenia.regions[8].cities[0].self_goverments.addStaff();

armenia.regions[8].addCity();
armenia.regions[8].cities[1].self_governing();
armenia.regions[8].cities[1].self_goverments.addStaff();
armenia.regions[8].cities[1].self_goverments.addStaff();
armenia.regions[8].cities[1].self_goverments.addStaff();
armenia.regions[8].cities[1].self_goverments.addStaff();

armenia.regions[8].addCity();
armenia.regions[8].cities[2].self_governing();
armenia.regions[8].cities[2].self_goverments.addStaff();
armenia.regions[8].cities[2].self_goverments.addStaff();
armenia.regions[8].cities[2].self_goverments.addStaff();
armenia.regions[8].cities[2].self_goverments.addStaff();

armenia.regions[8].addCity();
armenia.regions[8].cities[3].self_governing();
armenia.regions[8].cities[3].self_goverments.addStaff();
armenia.regions[8].cities[3].self_goverments.addStaff();
armenia.regions[8].cities[3].self_goverments.addStaff();
armenia.regions[8].cities[3].self_goverments.addStaff();

armenia.regions[8].addCity();
armenia.regions[8].cities[4].self_governing();
armenia.regions[8].cities[4].self_goverments.addStaff();
armenia.regions[8].cities[4].self_goverments.addStaff();
armenia.regions[8].cities[4].self_goverments.addStaff();
armenia.regions[8].cities[4].self_goverments.addStaff();

/// Վայոց ձորի մարզ

armenia.regions[9].addRegionGoverment();
armenia.regions[9].goverments.addStaff()
armenia.regions[9].goverments.addStaff()
armenia.regions[9].goverments.addStaff()
armenia.regions[9].goverments.addStaff()

armenia.regions[9].addCity();
armenia.regions[9].cities[0].self_governing();
armenia.regions[9].cities[0].self_goverments.addStaff();
armenia.regions[9].cities[0].self_goverments.addStaff();
armenia.regions[9].cities[0].self_goverments.addStaff();
armenia.regions[9].cities[0].self_goverments.addStaff();

armenia.regions[9].addCity();
armenia.regions[9].cities[1].self_governing();
armenia.regions[9].cities[1].self_goverments.addStaff();
armenia.regions[9].cities[1].self_goverments.addStaff();
armenia.regions[9].cities[1].self_goverments.addStaff();
armenia.regions[9].cities[1].self_goverments.addStaff();

armenia.regions[9].addCity();
armenia.regions[9].cities[2].self_governing();
armenia.regions[9].cities[2].self_goverments.addStaff();
armenia.regions[9].cities[2].self_goverments.addStaff();
armenia.regions[9].cities[2].self_goverments.addStaff();
armenia.regions[9].cities[2].self_goverments.addStaff();


function clone(cloneCountry) {
    let result = {};
    for (const key in cloneCountry) {
        if (typeof cloneCountry[key] === "object") {
            result[key] = clone(cloneCountry[key])
        }
        else {
            result[key] = cloneCountry[key]
        }
    }
    return result
};

/// deep-cloning-ի միջոցով Շիրակի մարզպետի փոփոխություն

let armeniaNew = clone(armenia);
////armeniaNew.regions[0].goverments.staff[0] = new MakeStaff|("Մուշեղ", "Մուրադյան", "Մարզպետ", "mushegh.muradyan@gov.am")    ???????
armeniaNew.regions[0].goverments.staff[0].name = "Մուշեղ";
armeniaNew.regions[0].goverments.staff[0].surName = "Մուրադյան";
armeniaNew.regions[0].goverments.staff[0].email = "mushegh.muradyan@gov.am",
    console.log(armenia, armeniaNew);