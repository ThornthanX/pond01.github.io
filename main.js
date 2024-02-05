function MotherCowCalculate() 
{
    // ดึงค่าจากHTMLมายัดตัวแปร
    var inputMotherCow = document.getElementById('inputMotherCow').value;
    // เช็กค่าตัวเลข ไม่ใช่ก็ไล่ไปใส่ใหม่
    if (isNaN(inputMotherCow)) 
    {
        alert('กรุณาใส่จำนวนน้ำหนักวัวด้วยค่าตัวเลข');
        return;
    }

    // ตั้งตัวแปร
    var EFMotherCow = 12.6521;

    // ทำสมการ
    var resultMotherCow = inputMotherCow * EFMotherCow;

    //ตัดทศนิยมให้เหลือสี่ตำแหน่ง
    var roundedresultMotherCow = resultMotherCow.toFixed(4);

    //ยัดกลับไปตอบในHTML
    document.getElementById('resultMotherCow').innerHTML = roundedresultMotherCow;
}
function YoungCowCalculate() 
{
    var inputYoungCow = document.getElementById('inputYoungCow').value;
    if (isNaN(inputYoungCow)) 
    {
        alert('กรุณาใส่จำนวนน้ำหนักวัวด้วยค่าตัวเลข');
        return;
    }

    var EFYoungCow = 9.9181;

    var resultYoungCow = inputYoungCow * EFYoungCow;

    var roundedresultYoungCow = resultYoungCow.toFixed(4);

    document.getElementById('resultYoungCow').innerHTML = roundedresultYoungCow;
}
function BabyCowCalculate() 
{
    var inputBabyCow = document.getElementById('inputBabyCow').value;
    if (isNaN(inputBabyCow)) 
    {
        alert('กรุณาใส่จำนวนน้ำหนักวัวด้วยค่าตัวเลข');
        return;
    }

    var EFBabyCow = 8.7324;

    var resultBabyCow = inputBabyCow * EFBabyCow;

    var roundedresultBabyCow = resultBabyCow.toFixed(4);

    document.getElementById('resultBabyCow').innerHTML = roundedresultBabyCow;
}
function PetrolCalculate()
{
    var inputPetrol = document.getElementById('inputPetrol').value;
    if (isNaN(inputPetrol))
    {
        alert('กรุณาใส่จำนวนน้ำมันด้วยค่าตัวเลข');
        return;
    }

    var EFPetrol = 1.3268;

    var resultPetrol = inputPetrol * EFPetrol;

    var roundedresultPetrol = resultPetrol.toFixed(4);

    document.getElementById('resultPetrol').innerHTML = roundedresultPetrol;
}
function DieselCalculate()
{
    var inputDiesel = document.getElementById('inputDiesel').value;
    if (isNaN(inputDiesel))
    {
        alert('กรุณาใส่จำนวนน้ำมันเป็นลิตรด้วยค่าตัวเลข');
        return;
    }

    var EFDiesel = 0.3622;

    var resultDiesel = inputDiesel * EFDiesel;

    var roundedresultDiesel = resultDiesel.toFixed(4);

    document.getElementById('resultDiesel').innerHTML = roundedresultDiesel;
}
function PremixCalculate()
{
    var inputPremix = document.getElementById('inputPremix').value;
    if (isNaN(inputPremix))
    {
        alert('กรุณาใส่จำนวนน้ำหนักอาหารด้วยค่าตัวเลข');
        return;
    }

    var EFPremix = 0.1748;

    var resultPremix = inputPremix * EFPremix;

    var roundedresultPremix = resultPremix.toFixed(4);

    document.getElementById('resultPremix').innerHTML = roundedresultPremix;
}
function MineralsAndVitaminsPremixCalculate()
{
    var inputMineralsAndVitaminsPremix = document.getElementById('inputMineralsAndVitaminsPremix').value;
    if (isNaN(inputMineralsAndVitaminsPremix))
    {
        alert('กรุณาใส่จำนวนน้ำหนักอาหารด้วยค่าตัวเลข');
        return;
    }

    var EFMineralsAndVitaminsPremix = 1.7246;

    var resultMineralsAndVitaminsPremix = inputMineralsAndVitaminsPremix * EFMineralsAndVitaminsPremix;

    var roundedresultMineralsAndVitaminsPremix = resultMineralsAndVitaminsPremix.toFixed(4);

    document.getElementById('resultMineralsAndVitaminsPremix').innerHTML = roundedresultMineralsAndVitaminsPremix;
}
function RuziGrassCalculate()
{
    var inputRuziGrass = document.getElementById('inputRuziGrass').value;
    if (isNaN(inputRuziGrass))
    {
        alert('กรุณาใส่จำนวนน้ำหนักอาหารด้วยค่าตัวเลข');
        return;
    }

    var EFRuziGrass = 0.0045;

    var resultRuziGrass = inputRuziGrass * EFRuziGrass;

    var roundedresultRuziGrass = resultRuziGrass.toFixed(4);

    document.getElementById('resultRuziGrass').innerHTML = roundedresultRuziGrass;
}
function PangolaGrassCalculate()
{
    var inputPangolaGrass = document.getElementById('inputPangolaGrass').value;
    if (isNaN(inputPangolaGrass))
    {
        alert('กรุณาใส่จำนวนน้ำหนักอาหารด้วยค่าตัวเลข');
        return;
    }

    var EFPangolaGrass = 0.0034;

    var resultPangolaGrass = inputPangolaGrass * EFPangolaGrass;

    var roundedresultPangolaGrass = resultPangolaGrass.toFixed(4);

    document.getElementById('resultPangolaGrass').innerHTML = roundedresultPangolaGrass;
}
function NapierGrassCalculate()
{
    var inputNapierGrass = document.getElementById('inputNapierGrass').value;
    if (isNaN(inputNapierGrass))
    {
        alert('กรุณาใส่จำนวนน้ำหนักอาหารด้วยค่าตัวเลข');
        return;
    }

    var EFNapierGrass = 0.0014;

    var resultNapierGrass = inputNapierGrass * EFNapierGrass;

    var roundedresultNapierGrass = resultNapierGrass.toFixed(4);

    document.getElementById('resultNapierGrass').innerHTML = roundedresultNapierGrass;
}
function NapierGrassinBagCalculate()
{
    var inputNapierGrassinBag = document.getElementById('inputNapierGrassinBag').value;
    if (isNaN(inputNapierGrassinBag))
    {
        alert('กรุณาใส่จำนวนน้ำหนักอาหารด้วยค่าตัวเลข');
        return;
    }

    var EFNapierGrassinBag = 0.004;

    var resultNapierGrassinBag = inputNapierGrassinBag * EFNapierGrassinBag;

    var roundedresultNapierGrassinBag = resultNapierGrassinBag.toFixed(4);

    document.getElementById('resultNapierGrassinBag').innerHTML = roundedresultNapierGrassinBag;
}
function GuineaGrassCalculate()
{
    var inputGuineaGrass = document.getElementById('inputGuineaGrass').value;
    if (isNaN(inputGuineaGrass))
    {
        alert('กรุณาใส่จำนวนน้ำหนักอาหารด้วยค่าตัวเลข');
        return;
    }

    var EFGuineaGrass = 0.0018;

    var resultGuineaGrass = inputGuineaGrass * EFGuineaGrass;

    var roundedresultGuineaGrass = resultGuineaGrass.toFixed(4);

    document.getElementById('resultGuineaGrass').innerHTML = roundedresultGuineaGrass;
}
function GuineaGrassifDryCalculate()
{
    var inputGuineaGrassifDry = document.getElementById('inputGuineaGrassifDry').value;
    if (isNaN(inputGuineaGrassifDry))
    {
        alert('กรุณาใส่จำนวนน้ำหนักอาหารด้วยค่าตัวเลข');
        return;
    }

    var EFGuineaGrassifDry = 0.018;

    var resultGuineaGrassifDry = inputGuineaGrassifDry * EFGuineaGrassifDry;

    var roundedresultGuineaGrassifDry = resultGuineaGrassifDry.toFixed(4);

    document.getElementById('resultGuineaGrassifDry').innerHTML = roundedresultGuineaGrassifDry;
}
function GuineaGrassinSiloCalculate()
{
    var inputGuineaGrassinSilo = document.getElementById('inputGuineaGrassinSilo').value;
    if (isNaN(inputGuineaGrassinSilo))
    {
        alert('กรุณาใส่จำนวนน้ำหนักอาหารด้วยค่าตัวเลข');
        return;
    }

    var EFGuineaGrassinSilo = 0.0031;

    var resultGuineaGrassinSilo = inputGuineaGrassinSilo * EFGuineaGrassinSilo;

    var roundedresultGuineaGrassinSilo = resultGuineaGrassinSilo.toFixed(4);

    document.getElementById('resultGuineaGrassinSilo').innerHTML = roundedresultGuineaGrassinSilo;
}
function ThirtyFiveHPCalculate()
{
    var inputThirtyFiveHP = document.getElementById('inputThirtyFiveHP').value;
    if (isNaN(inputThirtyFiveHP))
    {
        alert('กรุณาใส่จำนวนการทำงานด้วยค่าตัวเลข');
        return;
    }

    var EFThirtyFiveHP = 22.3072;

    var resultThirtyFiveHP = inputThirtyFiveHP * EFThirtyFiveHP;

    var roundedresultThirtyFiveHP = resultThirtyFiveHP.toFixed(4);

    document.getElementById('resultThirtyFiveHP').innerHTML = roundedresultThirtyFiveHP;
}
function FortyFiveHPCalculate()
{
    var inputFortyFiveHP = document.getElementById('inputFortyFiveHP').value;
    if (isNaN(inputFortyFiveHP))
    {
        alert('กรุณาใส่จำนวนการทำงานด้วยค่าตัวเลข');
        return;
    }

    var EFFortyFiveHP = 28.5639;

    var resultFortyFiveHP = inputFortyFiveHP * EFFortyFiveHP;

    var roundedresultFortyFiveHP = resultFortyFiveHP.toFixed(4);

    document.getElementById('resultFortyFiveHP').innerHTML = roundedresultFortyFiveHP;
}
function SeventyHPCalculate()
{
    var inputSeventyHP = document.getElementById('inputSeventyHP').value;
    if (isNaN(inputSeventyHP))
    {
        alert('กรุณาใส่จำนวนการทำงานด้วยค่าตัวเลข');
        return;
    }

    var EFSeventyHP = 44.3889;

    var resultSeventyHP = inputSeventyHP * EFSeventyHP;

    var roundedresultSeventyHP = resultSeventyHP.toFixed(4);

    document.getElementById('resultSeventyHP').innerHTML = roundedresultSeventyHP;
}
function EightyHPCalculate()
{
    var inputEightyHP = document.getElementById('inputEightyHP').value;
    if (isNaN(inputEightyHP))
    {
        alert('กรุณาใส่จำนวนการทำงานด้วยค่าตัวเลข');
        return;
    }

    var EFEightyHP = 50.8372;

    var resultEightyHP = inputEightyHP * EFEightyHP;

    var roundedresultEightyHP = resultEightyHP.toFixed(4);

    document.getElementById('resultEightyHP').innerHTML = roundedresultEightyHP;
}
function NinetyHPCalculate()
{
    var inputNinetyHP = document.getElementById('inputNinetyHP').value;
    if (isNaN(inputNinetyHP))
    {
        alert('กรุณาใส่จำนวนการทำงานด้วยค่าตัวเลข');
        return;
    }

    var EFNinetyHP = 56.9422;

    var resultNinetyHP = inputNinetyHP * EFNinetyHP;

    var roundedresultNinetyHP = resultNinetyHP.toFixed(4);

    document.getElementById('resultNinetyHP').innerHTML = roundedresultNinetyHP;
}
function EighteenwithPetrolCalculate()
{
    var inputEighteenwithPetrol = document.getElementById('inputEighteenwithPetrol').value;
    if (isNaN(inputEighteenwithPetrol))
    {
        alert('กรุณาใส่จำนวนการทำงานด้วยค่าตัวเลข');
        return;
    }

    var EFEighteenwithPetrol = 7.563;

    var resultEighteenwithPetrol = inputEighteenwithPetrol * EFEighteenwithPetrol;

    var roundedresultEighteenwithPetrol = resultEighteenwithPetrol.toFixed(4);

    document.getElementById('resultEighteenwithPetrol').innerHTML = roundedresultEighteenwithPetrol;
}
function EighteenwithDieselCalculate()
{
    var inputEighteenwithDiesel = document.getElementById('inputEighteenwithDiesel').value;
    if (isNaN(inputEighteenwithDiesel))
    {
        alert('กรุณาใส่จำนวนการทำงานด้วยค่าตัวเลข');
        return;
    }

    var EFEighteenwithDiesel = 5.9162;

    var resultEighteenwithDiesel = inputEighteenwithDiesel * EFEighteenwithDiesel;

    var roundedresultEighteenwithDiesel = resultEighteenwithDiesel.toFixed(4);

    document.getElementById('resultEighteenwithDiesel').innerHTML = roundedresultEighteenwithDiesel;
}
function ElectricityCalculate()
{
    var inputElectricity = document.getElementById('inputElectricity').value;
    if (isNaN(inputElectricity))
    {
        alert('กรุณาใส่จำนวนการทำงานด้วยค่าตัวเลข');
        return;
    }

    var EFElectricity = 0.566;

    var resultElectricity = inputElectricity * EFElectricity;

    var roundedresultElectricity = resultElectricity.toFixed(4);

    document.getElementById('resultElectricity').innerHTML = roundedresultElectricity;
}
function CalculateAll1(){
    // calculate all function
    MotherCowCalculate();
    YoungCowCalculate();
    BabyCowCalculate();
    PetrolCalculate();
    DieselCalculate();
    PremixCalculate();
    MineralsAndVitaminsPremixCalculate();
    RuziGrassCalculate();
    PangolaGrassCalculate();
    NapierGrassCalculate();
    NapierGrassinBagCalculate();
    GuineaGrassCalculate();
    GuineaGrassifDryCalculate();
    GuineaGrassinSiloCalculate();
    ThirtyFiveHPCalculate();
    FortyFiveHPCalculate();
    SeventyHPCalculate();
    EightyHPCalculate();
    NinetyHPCalculate();
    EighteenwithPetrolCalculate();
    EighteenwithDieselCalculate();
    ElectricityCalculate();
    combineResults();

    // Collect data for the pie chart
    var pieChartData =
    [
        parseFloat(document.getElementById('resultMotherCow').innerHTML),
        parseFloat(document.getElementById('resultYoungCow').innerHTML),
        parseFloat(document.getElementById('resultBabyCow').innerHTML),
        parseFloat(document.getElementById('resultPetrol').innerHTML),
        parseFloat(document.getElementById('resultDiesel').innerHTML),
        parseFloat(document.getElementById('resultPremix').innerHTML),
        parseFloat(document.getElementById('resultMineralsAndVitaminsPremix').innerHTML),
        parseFloat(document.getElementById('resultRuziGrass').innerHTML),
        parseFloat(document.getElementById('resultPangolaGrass').innerHTML),
        parseFloat(document.getElementById('resultNapierGrass').innerHTML),
        parseFloat(document.getElementById('resultNapierGrassinBag').innerHTML),
        parseFloat(document.getElementById('resultGuineaGrass').innerHTML),
        parseFloat(document.getElementById('resultGuineaGrassifDry').innerHTML),
        parseFloat(document.getElementById('resultGuineaGrassinSilo').innerHTML),
        parseFloat(document.getElementById('resultThirtyFiveHP').innerHTML),
        parseFloat(document.getElementById('resultFortyFiveHP').innerHTML),
        parseFloat(document.getElementById('resultSeventyHP').innerHTML),
        parseFloat(document.getElementById('resultEightyHP').innerHTML),
        parseFloat(document.getElementById('resultNinetyHP').innerHTML),
        parseFloat(document.getElementById('resultEighteenwithPetrol').innerHTML),
        parseFloat(document.getElementById('resultEighteenwithDiesel').innerHTML),
        parseFloat(document.getElementById('resultElectricity').innerHTML)
    ];

    // Collect data for the bar chart
    var barChartData =
    [
        parseFloat(document.getElementById('resultMotherCow').innerHTML),
        parseFloat(document.getElementById('resultYoungCow').innerHTML),
        parseFloat(document.getElementById('resultBabyCow').innerHTML),
        parseFloat(document.getElementById('resultPetrol').innerHTML),
        parseFloat(document.getElementById('resultDiesel').innerHTML),
        parseFloat(document.getElementById('resultPremix').innerHTML),
        parseFloat(document.getElementById('resultMineralsAndVitaminsPremix').innerHTML),
        parseFloat(document.getElementById('resultRuziGrass').innerHTML),
        parseFloat(document.getElementById('resultPangolaGrass').innerHTML),
        parseFloat(document.getElementById('resultNapierGrass').innerHTML),
        parseFloat(document.getElementById('resultNapierGrassinBag').innerHTML),
        parseFloat(document.getElementById('resultGuineaGrass').innerHTML),
        parseFloat(document.getElementById('resultGuineaGrassifDry').innerHTML),
        parseFloat(document.getElementById('resultGuineaGrassinSilo').innerHTML),
        parseFloat(document.getElementById('resultThirtyFiveHP').innerHTML),
        parseFloat(document.getElementById('resultFortyFiveHP').innerHTML),
        parseFloat(document.getElementById('resultSeventyHP').innerHTML),
        parseFloat(document.getElementById('resultEightyHP').innerHTML),
        parseFloat(document.getElementById('resultNinetyHP').innerHTML),
        parseFloat(document.getElementById('resultEighteenwithPetrol').innerHTML),
        parseFloat(document.getElementById('resultEighteenwithDiesel').innerHTML),
        parseFloat(document.getElementById('resultElectricity').innerHTML)
    ];

    // Call a function to draw the pie chart using the collected data
    drawPieChart(pieChartData);
    drawBarChart(barChartData);
}
function TeakCalculate()
{
    var inputTeak = document.getElementById('inputTeak').value;
    if (isNaN(inputTeak))
    {
        alert('กรุณาใส่จำนวนการทำงานด้วยค่าตัวเลข');
        return;
    }

    var EFTeak = 470;

    var resultTeak = inputTeak * EFTeak;

    var roundedresultTeak = resultTeak.toFixed(4);

    document.getElementById('resultTeak').innerHTML = roundedresultTeak;
}
function EucalyptusCalculate()
{
    var inputEucalyptus = document.getElementById('inputEucalyptus').value;
    if (isNaN(inputEucalyptus))
    {
        alert('กรุณาใส่จำนวนการทำงานด้วยค่าตัวเลข');
        return;
    }

    var EFEucalyptus = 1300;

    var resultEucalyptus = inputEucalyptus * EFEucalyptus;

    var roundedresultEucalyptus = resultEucalyptus.toFixed(4);

    document.getElementById('resultEucalyptus').innerHTML = roundedresultEucalyptus;
}
function ThephaAcaciaCalculate()
{
    var inputThephaAcacia = document.getElementById('inputThephaAcacia').value;
    if (isNaN(inputThephaAcacia))
    {
        alert('กรุณาใส่จำนวนการทำงานด้วยค่าตัวเลข');
        return;
    }

    var EFThephaAcacia = 1200;

    var resultThephaAcacia = inputThephaAcacia * EFThephaAcacia;

    var roundedresultThephaAcacia = resultThephaAcacia.toFixed(4);

    document.getElementById('resultThephaAcacia').innerHTML = roundedresultThephaAcacia;
}
function AcaciaNarongCalculate()
{
    var inputAcaciaNarong = document.getElementById('inputAcaciaNarong').value;
    if (isNaN(inputAcaciaNarong))
    {
        alert('กรุณาใส่จำนวนการทำงานด้วยค่าตัวเลข');
        return;
    }

    var EFAcaciaNarong = 1200;

    var resultAcaciaNarong = inputAcaciaNarong * EFAcaciaNarong;

    var roundedresultAcaciaNarong = resultAcaciaNarong.toFixed(4);

    document.getElementById('resultAcaciaNarong').innerHTML = roundedresultAcaciaNarong;
}
function GiantAcaciaCalculate()
{
    var inputGiantAcacia = document.getElementById('inputGiantAcacia').value;
    if (isNaN(inputGiantAcacia))
    {
        alert('กรุณาใส่จำนวนการทำงานด้วยค่าตัวเลข');
        return;
    }

    var EFGiantAcacia = 1310;

    var resultGiantAcacia = inputGiantAcacia * EFGiantAcacia;

    var roundedresultGiantAcacia = resultGiantAcacia.toFixed(4);

    document.getElementById('resultGiantAcacia').innerHTML = roundedresultGiantAcacia;
}
function MangroveCalculate()
{
    var inputMangrove = document.getElementById('inputMangrove').value;
    if (isNaN(inputMangrove))
    {
        alert('กรุณาใส่จำนวนการทำงานด้วยค่าตัวเลข');
        return;
    }

    var EFMangrove = 750;

    var resultMangrove = inputMangrove * EFMangrove;

    var roundedresultMangrove = resultMangrove.toFixed(4);

    document.getElementById('resultMangrove').innerHTML = roundedresultMangrove;
}
function RubberCalculate()
{
    var inputRubber = document.getElementById('inputRubber').value;
    if (isNaN(inputRubber))
    {
        alert('กรุณาใส่จำนวนการทำงานด้วยค่าตัวเลข');
        return;
    }

    var EFRubber = 1150;

    var resultRubber = inputRubber * EFRubber;

    var roundedresultRubber = resultRubber.toFixed(4);

    document.getElementById('resultRubber').innerHTML = roundedresultRubber;
}
function OilpalmCalculate()
{
    var inputOilpalm = document.getElementById('inputOilpalm').value;
    if (isNaN(inputOilpalm))
    {
        alert('กรุณาใส่จำนวนการทำงานด้วยค่าตัวเลข');
        return;
    }

    var EFOilpalm = 680;

    var resultOilpalm = inputOilpalm * EFOilpalm;

    var roundedresultOilpalm = resultOilpalm.toFixed(4);

    document.getElementById('resultOilpalm').innerHTML = roundedresultOilpalm;
}
function NativePlantsGrowSlowlyCalculate()
{
    var inputNativePlantsGrowSlowly = document.getElementById('inputNativePlantsGrowSlowly').value;
    if (isNaN(inputNativePlantsGrowSlowly))
    {
        alert('กรุณาใส่จำนวนการทำงานด้วยค่าตัวเลข');
        return;
    }

    var EFNativePlantsGrowSlowly = 260;

    var resultNativePlantsGrowSlowly = inputNativePlantsGrowSlowly * EFNativePlantsGrowSlowly;

    var roundedresultNativePlantsGrowSlowly = resultNativePlantsGrowSlowly.toFixed(4);

    document.getElementById('resultNativePlantsGrowSlowly').innerHTML = roundedresultNativePlantsGrowSlowly;
}
function MultipurposePlantsCalculate()
{
    var inputMultipurposePlants = document.getElementById('inputMultipurposePlants').value;
    if (isNaN(inputMultipurposePlants))
    {
        alert('กรุณาใส่จำนวนการทำงานด้วยค่าตัวเลข');
        return;
    }

    var EFMultipurposePlants = 400;

    var resultMultipurposePlants = inputMultipurposePlants * EFMultipurposePlants;

    var roundedresultMultipurposePlants = resultMultipurposePlants.toFixed(4);

    document.getElementById('resultMultipurposePlants').innerHTML = roundedresultMultipurposePlants;
}
function PlantsGrownInTheCityCalculate()
{
    var inputPlantsGrownInTheCity = document.getElementById('inputPlantsGrownInTheCity').value;
    if (isNaN(inputPlantsGrownInTheCity))
    {
        alert('กรุณาใส่จำนวนการทำงานด้วยค่าตัวเลข');
        return;
    }

    var EFPlantsGrownInTheCity = 330;

    var resultPlantsGrownInTheCity = inputPlantsGrownInTheCity * EFPlantsGrownInTheCity;

    var roundedresultPlantsGrownInTheCity = resultPlantsGrownInTheCity.toFixed(4);

    document.getElementById('resultPlantsGrownInTheCity').innerHTML = roundedresultPlantsGrownInTheCity;
    ;
}
function CalculateAll2()
{
    // calculate all function
    TeakCalculate();
    EucalyptusCalculate();
    ThephaAcaciaCalculate();
    AcaciaNarongCalculate();
    GiantAcaciaCalculate();
    MangroveCalculate();
    RubberCalculate();
    OilpalmCalculate();
    NativePlantsGrowSlowlyCalculate();
    MultipurposePlantsCalculate();
    PlantsGrownInTheCityCalculate();

    // Collect data for the bar chart
    var barChartData =
    [
        parseFloat(document.getElementById('resultTeak').innerHTML),
        parseFloat(document.getElementById('resultEucalyptus').innerHTML),
        parseFloat(document.getElementById('resultThephaAcacia').innerHTML),
        parseFloat(document.getElementById('resultAcaciaNarong').innerHTML),
        parseFloat(document.getElementById('resultGiantAcacia').innerHTML),
        parseFloat(document.getElementById('resultMangrove').innerHTML),
        parseFloat(document.getElementById('resultRubber').innerHTML),
        parseFloat(document.getElementById('resultOilpalm').innerHTML),
        parseFloat(document.getElementById('resultNativePlantsGrowSlowly').innerHTML),
        parseFloat(document.getElementById('resultMultipurposePlants').innerHTML),
        parseFloat(document.getElementById('resultPlantsGrownInTheCity').innerHTML)
    ];

    // Call a function to draw the pie chart using the collected data
    drawBarChart(barChartData);
}
function combine1Results() {
    // Get the individual result values
    var resultMotherCow = parseFloat(document.getElementById('resultMotherCow').innerHTML);
    var resultYoungCow = parseFloat(document.getElementById('resultYoungCow').innerHTML);
    var resultBabyCow = parseFloat(document.getElementById('resultBabyCow').innerHTML);
    var resultPetrol = parseFloat(document.getElementById('resultPetrol').innerHTML);
    var resultDiesel = parseFloat(document.getElementById('resultDiesel').innerHTML);
    var resultPremix = parseFloat(document.getElementById('resultPremix').innerHTML);
    var resultMineralsAndVitaminsPremix = parseFloat(document.getElementById('resultMineralsAndVitaminsPremix').innerHTML);
    var inputRuziGrass = parseFloat(document.getElementById('inputRuziGrass').innerHTML);
    var inputPangolaGrass = parseFloat( document.getElementById('inputPangolaGrass').innerHTML);
    var inputNapierGrass = parseFloat( document.getElementById('inputNapierGrass').innerHTML);
    var inputNapierGrassinBag = parseFloat( document.getElementById('inputNapierGrassinBag').innerHTML);
    var inputGuineaGrass = parseFloat( document.getElementById('inputGuineaGrass').innerHTML);
    var inputGuineaGrassifDry = parseFloat( document.getElementById('inputGuineaGrassifDry').innerHTML);
    var inputGuineaGrassinSilo = parseFloat( document.getElementById('inputGuineaGrassinSilo').innerHTML);
    var inputThirtyFiveHP = parseFloat( document.getElementById('inputThirtyFiveHP').innerHTML);
    var inputFortyFiveHP = parseFloat( document.getElementById('inputFortyFiveHP').innerHTML);
    var inputSeventyHP = parseFloat( document.getElementById('inputSeventyHP').innerHTML);
    var inputEightyHP = parseFloat( document.getElementById('inputEightyHP').innerHTML);
    var inputNinetyHP = parseFloat( document.getElementById('inputNinetyHP').innerHTML);
    var inputEighteenwithPetrol = parseFloat( document.getElementById('inputEighteenwithPetrol').innerHTML);
    var inputEighteenwithDiesel = parseFloat( document.getElementById('inputEighteenwithDiesel').innerHTML);
    var inputElectricity = parseFloat( document.getAnimations('inputElectricity').innerHTML);

    // Combine the results
    var combined1Result = resultMotherCow + resultYoungCow 
    + resultBabyCow + resultPetrol + resultDiesel
    + resultPremix + resultMineralsAndVitaminsPremix + inputRuziGrass
    + inputPangolaGrass + inputNapierGrass + inputNapierGrassinBag
    + inputGuineaGrass + inputGuineaGrassifDry + inputGuineaGrassinSilo
    + inputThirtyFiveHP + inputFortyFiveHP + inputSeventyHP
    + inputEightyHP + inputNinetyHP + inputEighteenwithPetrol
    + inputEighteenwithDiesel + inputElectricity;

    // Display the combined result
    document.getElementById('resultAll').innerHTML = combined1Result.toFixed(4);
}
function combine0Results() {
    // Get the individual result values
    var resultTeak = parseFloat(document.getElementById('resultTeak').innerHTML);
    var resultEucalyptus = parseFloat(document.getElementById('resultEucalyptus').innerHTML);
    var resultThephaAcacia = parseFloat(document.getElementById('resultThephaAcacia').innerHTML);
    var resultAcaciaNarong = parseFloat(document.getElementById('resultAcaciaNarong').innerHTML);
    var resultGiantAcacia = parseFloat(document.getElementById('resultGiantAcacia').innerHTML);
    var resultMangrove = parseFloat(document.getElementById('resultMangrove').innerHTML);
    var resultRubber = parseFloat(document.getElementById('resultRubber').innerHTML);
    var resultNativePlantsGrowSlowly = parseFloat(document.getElementById('resultNativePlantsGrowSlowly').innerHTML);
    var resultMultipurposePlants = parseFloat( document.getElementById('resultMultipurposePlants').innerHTML);
    var resultPlantsGrownInTheCity = parseFloat( document.getElementById('resultPlantsGrownInTheCity').innerHTML);

    // Combine the results
    var combined0Result = resultTeak + resultEucalyptus 
    + resultThephaAcacia + resultAcaciaNarong + resultGiantAcacia
    + resultMangrove + resultRubber + resultNativePlantsGrowSlowly
    + resultMultipurposePlants + resultPlantsGrownInTheCity;

    // Display the combined result
    document.getElementById('resultDel').innerHTML = combined0Result.toFixed(4);
}
function CalculateAllAll()
{
    // calculate all function
    combine0Results();
    combine1Results();
}
// Declare myPieChart variable in the outer scope
var myPieChart;
function drawPieChart(data) 
{
    // Destroy the existing chart if it exists
    if (myPieChart) 
    {
        myPieChart.destroy();
    }

    var ctx = document.getElementById('myPieChart').getContext('2d');
    myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels:
            [
                'MotherCow',
                'YoungCow',
                'BabyCow',
                'Petrol',
                'Diesel',
                'Premix',
                'MineralsAndVitaminsPremix',
                'RuziGrass',
                'PangolaGrass',
                'NapierGrass',
                'NapierGrassinBag',
                'GuineaGrass',
                'GuineaGrassifDry',
                'GuineaGrassinSilo',
                'ThirtyFiveHP',
                'FortyFiveHP',
                'SeventyHP',
                'EightyHP',
                'NinetyHP',
                'EighteenwithPetrol',
                'EighteenwithDiesel',
                'resultElectricity'
            ],
            datasets: [{
                data: data,
                backgroundColor: 
                [
                    'rgba(250, 183, 128, 0.4)',
                    'rgba(104, 152, 71, 0.8)',
                    'rgba(50, 21, 48, 0.8)',
                    'rgba(214, 83, 194, 0.6)',
                    'rgba(245, 83, 90, 0.3)',
                    'rgba(0, 5, 242, 0.3)',
                    'rgba(87, 187, 160, 0.4)',
                    'rgba(251, 9, 83, 0.2)',
                    'rgba(144, 113, 224, 0.9)',
                    'rgba(251, 174, 60, 0.9)',
                    'rgba(91, 24, 110, 0.6)',
                    'rgba(128, 173, 6, 0.6)',
                    'rgba(73, 151, 221, 0.6)',
                    'rgba(48, 52, 14, 0.7)',
                    'rgba(14, 79, 134, 0.9)',
                    'rgba(33, 64, 78, 0.8)',
                    'rgba(215, 171, 132, 0.9)',
                    'rgba(190, 24, 17, 0.8)',
                    'rgba(30, 230, 164, 0.9)',
                    'rgba(41, 171, 222, 0.7)',
                    'rgba(246, 196, 206, 1)',
                    'rgba(171, 115, 96, 0.9)'
                ],
            }],
        },
    });
}
var myBarChart;
function drawBarChart(data) {
    // Destroy the existing chart if it exists
    if (myBarChart) {
        myBarChart.destroy();
    }

    var data = 
    {
        MotherCow:parseFloat(document.getElementById('resultMotherCow').innerHTML),
        YoungCow:parseFloat(document.getElementById('resultYoungCow').innerHTML),
        BabyCow:parseFloat(document.getElementById('resultBabyCow').innerHTML),
        Petrol:parseFloat(document.getElementById('resultPetrol').innerHTML),
        Diesel:parseFloat(document.getElementById('resultDiesel').innerHTML),
        Premix:parseFloat(document.getElementById('resultPremix').innerHTML),
        MineralsAndVitaminsPremix:parseFloat(document.getElementById('resultMineralsAndVitaminsPremix').innerHTML),
        RuziGrass:parseFloat(document.getElementById('resultRuziGrass').innerHTML),
        PangolaGrass:parseFloat(document.getElementById('resultPangolaGrass').innerHTML),
        NapierGrass:parseFloat(document.getElementById('resultNapierGrass').innerHTML),
        NapierGrassinBag:parseFloat(document.getElementById('resultNapierGrassinBag').innerHTML),
        GuineaGrass:parseFloat(document.getElementById('resultGuineaGrass').innerHTML),
        GuineaGrassifDry:parseFloat(document.getElementById('resultGuineaGrassifDry').innerHTML),
        GuineaGrassinSilo:parseFloat(document.getElementById('resultGuineaGrassinSilo').innerHTML),
        ThirtyFiveHP:parseFloat(document.getElementById('resultThirtyFiveHP').innerHTML),
        FortyFiveHP:parseFloat(document.getElementById('resultFortyFiveHP').innerHTML),
        SeventyHP:parseFloat(document.getElementById('resultSeventyHP').innerHTML),
        EightyHP:parseFloat(document.getElementById('resultEightyHP').innerHTML),
        NinetyHP:parseFloat(document.getElementById('resultNinetyHP').innerHTML),
        EighteenwithPetrol:parseFloat(document.getElementById('resultEighteenwithPetrol').innerHTML),
        EighteenwithDiesel:parseFloat(document.getElementById('resultEighteenwithDiesel').innerHTML),
        Electricity:parseFloat(document.getElementById('resultElectricity').innerHTML),
        Teak:parseFloat(document.getElementById('resultTeak').innerHTML),
        Eucalyptus:parseFloat(document.getElementById('resultEucalyptus').innerHTML),
        ThephaAcacia:parseFloat(document.getElementById('resultThephaAcacia').innerHTML),
        AcaciaNarong:parseFloat(document.getElementById('resultAcaciaNarong').innerHTML),
        GiantAcacia:parseFloat(document.getElementById('resultGiantAcacia').innerHTML),
        Mangrove:parseFloat(document.getElementById('resultMangrove').innerHTML),
        Rubber:parseFloat(document.getElementById('resultRubber').innerHTML),
        Oilpalm:parseFloat(document.getElementById('resultOilpalm').innerHTML),
        NativePlantsGrowSlowly:parseFloat(document.getElementById('resultNativePlantsGrowSlowly').innerHTML),
        MultipurposePlants:parseFloat(document.getElementById('resultMultipurposePlants').innerHTML),
        GrownInTheCity:parseFloat(document.getElementById('resultPlantsGrownInTheCity').innerHTML)
    };
    var ctx = document.getElementById('myBarChart').getContext('2d');
myBarChart = new Chart(ctx, {
    type: 'bar', // Change the chart type to 'bar'
    data: {
        labels: ['kqCO2 that you create', 'kqCO2 that you reduce'],
        datasets: [
            {
                label: 'MotherCow',
                data: [data.MotherCow,0],
                backgroundColor: 'rgba(250, 183, 128, 0.4)',
            }, {
                label: 'YoungCow',
                data: [data.YoungCow,0],
                backgroundColor: 'rgba(104, 152, 71, 0.8)',
            }, {
                label: 'BabyCow',
                data: [data.BabyCow,0],
                backgroundColor: 'rgba(50, 21, 48, 0.8)',
            }, {
                label: 'Petrol',
                data: [data.Petrol,0],
                backgroundColor: 'rgba(214, 83, 194, 0.6)',
            }, {
                label: 'Diesel',
                data: [data.Diesel,0],
                backgroundColor: 'rgba(245, 83, 90, 0.3)',
            }, {
                label: 'Premix',
                data: [data.Premix,0],
                backgroundColor: 'rgba(0, 5, 242, 0.3)',
            }, {
                label: 'MineralsAndVitaminsPremix',
                data: [data.MineralsAndVitaminsPremix,0],
                backgroundColor: 'rgba(87, 187, 160, 0.4)',
            }, {
                label: 'RuziGrass',
                data: [data.RuziGrass,0],
                backgroundColor: 'rgba(251, 9, 83, 0.2)',
            }, {
                label: 'PangolaGrass',
                data: [data.PangolaGrass,0],
                backgroundColor: 'rgba(144, 113, 224, 0.9)',
            }, {
                label: 'NapierGrass',
                data: [data.NapierGrass,0],
                backgroundColor: 'rgba(251, 174, 60, 0.9)',
            }, {
                label: 'NapierGrassinBag',
                data: [data.NapierGrassinBag,0],
                backgroundColor: 'rgba(91, 24, 110, 0.6)',
            }, {
                label: 'GuineaGrass',
                data: [data.GuineaGrass,0],
                backgroundColor: 'rgba128, 173, 6, 0.6)',
            }, {
                label: 'GuineaGrassifDry',
                data: [data.GuineaGrassifDry,0],
                backgroundColor: 'rgba(73, 151, 221, 0.6)',
            }, {
                label: 'GuineaGrassinSilo',
                data: [data.GuineaGrassinSilo,0],
                backgroundColor: 'rgba(48, 52, 14, 0.7)',
            }, {
                label: 'ThirtyFiveHP',
                data: [data.ThirtyFiveHP,0],
                backgroundColor: 'rgba(14, 79, 134, 0.9)',
            }, {
                label: 'FortyFiveHP',
                data: [data.FortyFiveHP,0],
                backgroundColor: 'rgba(33, 64, 78, 0.8)',
            }, {
                label: 'SeventyHP',
                data: [data.SeventyHP,0],
                backgroundColor: 'rgba(215, 171, 132, 0.9)',
            }, {
                label: 'EightyHP',
                data: [data.EightyHP,0],
                backgroundColor: 'rgba(190, 24, 17, 0.8)',
            }, {
                label: 'NinetyHP',
                data: [data.NinetyHP,0],
                backgroundColor: 'rgba(30, 230, 164, 0.9)',
            }, {
                label: 'EighteenwithPetrol',
                data: [data.EighteenwithPetrol,0],
                backgroundColor: 'rgba(41, 171, 222, 0.7)',
            }, {
                label: 'EighteenwithDiesel',
                data: [data.EighteenwithDiesel,0],
                backgroundColor: 'rgba(246, 196, 206, 1)',
            }, {
                label: 'Electricity',
                data: [data.Electricity,0],
                backgroundColor: 'rgba(171, 115, 96, 0.9)'
            }, {
                label: 'Teak',
                data: [0, data.Teak],
                backgroundColor: 'rgba(33, 165, 79, 0.6)',
            }, {
                label: 'Eucalyptus',
                data: [0, data.Eucalyptus],
                backgroundColor: 'rgba(16, 99, 3, 0.6)',
            }, {
                label: 'ThephaAcacia',
                data: [0, data.ThephaAcacia],
                backgroundColor: 'rgba(21, 75, 69, 0.9)',
            }, {
                label: 'AcaciaNarong',
                data: [0, data.AcaciaNarong],
                backgroundColor: 'rgba(106, 172, 160, 0.9)',
            }, {
                label: 'GiantAcacia',
                data: [0, data.GiantAcacia],
                backgroundColor: 'rgba(17, 100, 75, 0.4)',
            }, {
                label: 'Mangrove',
                data: [0, data.Mangrove],
                backgroundColor: 'rgba(102, 183, 4, 0.5)',
            }, {
                label: 'Rubber',
                data: [0, data.Rubber],
                backgroundColor: 'rgba(69, 187, 128, 0.8)',
            }, {
                label: 'Oilpalm',
                data: [0, data.Oilpalm],
                backgroundColor: 'rgba(3, 181, 14, 0.6)',
            }, {
                label: 'NativePlantsGrowSlowly',
                data: [0, data.NativePlantsGrowSlowly],
                backgroundColor: 'rgba(86, 227, 90, 0.6)',
            }, {
                label: 'MultipurposePlants',
                data: [0, data.MultipurposePlants],
                backgroundColor: 'rgba(33, 198, 71, 0.5)',
            }, {
                label: 'GrownInTheCity',
                data: [0, data.GrownInTheCity],
                backgroundColor: 'rgba(37, 190, 124, 0.5)',
            },]
        },
        options: {
            scales: {
                x: { stacked: true },
                y: { stacked: true, beginAtZero: true }
            }
        }
    });
}
drawBarChart(data);
function ResetAll()
{
    // Confirmation message
    var confirmation = confirm("Are you sure you want to reset all values?");
    
    // Check if the user clicked OK in the confirmation dialog
    if (confirmation) 
    {
        // Reset input fields
        document.getElementById('inputMotherCow').value = "";
        document.getElementById('inputYoungCow').value = "";
        document.getElementById('inputBabyCow').value = "";
        document.getElementById('inputPetrol').value = "";
        document.getElementById('inputDiesel').value = "";
        document.getElementById('inputPremix').value = "";
        document.getElementById('inputMineralsAndVitaminsPremix').value = "";
        document.getElementById('inputRuziGrass').value = "";
        document.getElementById('inputPangolaGrass').value = "";
        document.getElementById('inputNapierGrass').value = "";
        document.getElementById('inputNapierGrassinBag').value = "";
        document.getElementById('inputGuineaGrass').value = "";
        document.getElementById('inputGuineaGrassifDry').value = "";
        document.getElementById('inputGuineaGrassinSilo').value = "";
        document.getElementById('inputThirtyFiveHP').value = "";
        document.getElementById('inputFortyFiveHP').value = "";
        document.getElementById('inputSeventyHP').value = "";
        document.getElementById('inputEightyHP').value = "";
        document.getElementById('inputNinetyHP').value = "";
        document.getElementById('inputEighteenwithPetrol').value = "";
        document.getElementById('inputEighteenwithDiesel').value = "";
        document.getAnimations('inputElectricity').value = "";

        // Reset result outputs
        document.getElementById('resultMotherCow').innerHTML = "0.0000";
        document.getElementById('resultYoungCow').innerHTML = "0.0000";
        document.getElementById('resultBabyCow').innerHTML = "0.0000";
        document.getElementById('resultPetrol').innerHTML = "0.0000";
        document.getElementById('resultDiesel').innerHTML = "0.0000";
        document.getElementById('resultPremix').innerHTML = "0.0000";
        document.getElementById('resultMineralsAndVitaminsPremix').innerHTML = "0.0000";
        document.getElementById('resultRuziGrass').innerHTML = "0.0000";
        document.getElementById('resultPangolaGrass').innerHTML = "0.0000";
        document.getElementById('resultNapierGrass').innerHTML = "0.0000";
        document.getElementById('resultNapierGrassinBag').innerHTML = "0.0000";
        document.getElementById('resultGuineaGrass').innerHTML = "0.0000";
        document.getElementById('resultGuineaGrassifDry').innerHTML = "0.0000";
        document.getElementById('resultGuineaGrassinSilo').innerHTML = "0.0000";
        document.getElementById('resultThirtyFiveHP').innerHTML = "0.0000";
        document.getElementById('resultFortyFiveHP').innerHTML = "0.0000";
        document.getElementById('resultSeventyHP').innerHTML = "0.0000";
        document.getElementById('resultEightyHP').innerHTML = "0.0000";
        document.getElementById('resultNinetyHP').innerHTML = "0.0000";
        document.getElementById('resultEighteenwithPetrol').innerHTML = "0.0000";
        document.getElementById('resultEighteenwithDiesel').innerHTML = "0.0000";
        document.getElementById('resultElectricity').innerHTML = "0.0000";
    }
}