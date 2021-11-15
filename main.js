class TenthStudent
{

    constructor()
    {
        this.name ="student";
        this.englishMarks=100;  
        this.teluguMarks=100;
        this.hindhiMarks=100;
        this.mathsMarks=100;
        this.scienceMarks=100;
        this.socialMarks=100;
        this.passMarks=35;

    }
    calculateResult = function()
    
    {
  
      if(this.englishMarks>=this.passMarks&& 
        this.teluguMarks>=this.passMarks&& 
        this.hindhiMarks>=this.passMarks&& 
        this.mathsMarks>=this.passMarks&& 
        this.scienceMarks>=this.passMarks&&
        this.socialMarks>=this.passMarks)
      {
          console.log(`${this.name} is passed in tenth`)
      }else
      {

        console.log(`${this.name} is failed in tenth`)
      }
    }
    
}
let nagu = new TenthStudent()
nagu.name = "Nagu"
nagu.englishMarks=100;  
nagu.teluguMarks=100;
nagu.hindhiMarks=100;
nagu.mathsMarks=100;
nagu.scienceMarks=100;
nagu.socialMarks=100;
nagu.calculateResult()


let joel = new TenthStudent()
joel.name="Joel"
joel.englishMarks=10;  
joel.teluguMarks=100;
joel.hindhiMarks=100;
joel.mathsMarks=100;
joel.scienceMarks=100;
joel.socialMarks=100;
joel.calculateResult()


let chinni=new TenthStudent()
chinni.name="chinni"
chinni.englishMarks=10;  
chinni.teluguMarks=100;
chinni.hindhiMarks=100;
chinni.mathsMarks=100;
chinni.scienceMarks=100;
chinni.socialMarks=100;
chinni.calculateResult()


let chitti=new TenthStudent()
chitti.name="chitti"
chitti.englishMarks=10;  
chitti.teluguMarks=100;
chitti.hindhiMarks=100;
chitti.mathsMarks=100;
chitti.scienceMarks=100;
chitti.socialMarks=100;
chitti.calculateResult()


let deepu=new TenthStudent()
deepu.name="deepu"
deepu.englishMarks=10;  
deepu.teluguMarks=100;
deepu.hindhiMarks=100;
deepu.mathsMarks=100;
deepu.scienceMarks=100;
deepu.socialMarks=100;
deepu.calculateResult()


let deeven=new TenthStudent()
deeven.name="deeven"
deeven.englishMarks=10;  
deeven.teluguMarks=100;
deeven.hindhiMarks=100;
deeven.mathsMarks=100;
deeven.scienceMarks=100;
deeven.socialMarks=100;
deeven.calculateResult()


let vivek=new TenthStudent()
vivek.name="vivek"
vivek.englishMarks=10;  
vivek.teluguMarks=100;
vivek.hindhiMarks=100;
vivek.mathsMarks=100;
vivek.scienceMarks=100;
vivek.socialMarks=100;
vivek.calculateResult()


let rinku=new TenthStudent()
rinku.name="rinku"
rinku.englishMarks=10;  
rinku.teluguMarks=100;
rinku.hindhiMarks=100;
rinku.mathsMarks=100;
rinku.scienceMarks=100;
rinku.socialMarks=100;
rinku.calculateResult()


let prasanth=new TenthStudent()
prasanth.name="prasanth"
prasanth.englishMarks=10;  
prasanth.teluguMarks=100;
prasanth.hindhiMarks=100;
prasanth.mathsMarks=100;
prasanth.scienceMarks=100;
prasanth.socialMarks=100;
prasanth.calculateResult()


let indu=new TenthStudent()
indu.name="indu"
indu.englishMarks=10;  
indu.teluguMarks=100;
indu.hindhiMarks=100;
indu.mathsMarks=100;
indu.scienceMarks=100;
indu.socialMarks=100;
indu.calculateResult()

//original copy of inter results

class InterResults
{

    constructor()
    {
        this.name ="student";
        this.sanskritMarks=100;
        this.englishMarks=100;  
        this.maths1aMarks=75;
        this.maths1bMarks=75;
        this.physicsMarks=60;
        this.chemistryMarks=60;
        this.passMarks=35;

    }
    calculateInterResult = function()
    
    {
  
      if(this.sanskritMarks>=this.passMarks&& 
        this.teluguMarks>=this.passMarks&& 
        this.englishMarks>=this.passMarks&& 
        this.maths1aMarks>=this.passMarks&& 
        this.maths1bMarks>=this.passMarks&&
        this.physicsMarks>=this.passMarks&&
        this.chemistryMarks>=this.passMarks)
        
      {
          console.log(`${this.name} is passed in intermediate`)
      }else
      {

        console.log(`${this.name} is failed in intermediate`)
      }
    }
    
}
//printing inter results

let divya=new InterResults()
divya.name="divya"
divya.sanskritMarks=10;  
divya.englishMarks=100;
divya.maths1aMarks=100;
divya.maths1bMarks=100;
divya.physicsMarks=100;
divya.chemistryMarks=100;
divya.calculateInterResult()

let kalyan=new InterResults()
kalyan.name="kalyan"
kalyan.sanskritMarks=10;  
kalyan.englishMarks=100;
kalyan.maths1aMarks=100;
kalyan.maths1bMarks=100;
kalyan.physicsMarks=100;
kalyan.chemistryMarks=100;
kalyan.calculateInterResult()

let keerthi=new InterResults()
keerthi.name="keerthi"
keerthi.sanskritMarks=10;  
keerthi.englishMarks=100;
keerthi.maths1aMarks=100;
keerthi.maths1bMarks=100;
keerthi.physicsMarks=100;
keerthi.chemistryMarks=100;
keerthi.calculateInterResult()

let anu=new InterResults()
anu.name="anu"
anu.sanskritMarks=10;  
anu.englishMarks=100;
anu.maths1aMarks=100;
anu.maths1bMarks=100;
anu.physicsMarks=100;
anu.chemistryMarks=100;
anu.calculateInterResult()

let bhagi=new InterResults()
bhagi.name="bhagi"
bhagi.sanskritMarks=10;  
bhagi.englishMarks=100;
bhagi.maths1aMarks=100;
bhagi.maths1bMarks=100;
bhagi.physicsMarks=100;
bhagi.chemistryMarks=100;
bhagi.calculateInterResult()

let swathi=new InterResults()
swathi.name="swathi"
swathi.sanskritMarks=10;  
swathi.englishMarks=100;
swathi.maths1aMarks=100;
swathi.maths1bMarks=100;
swathi.physicsMarks=100;
swathi.chemistryMarks=100;
swathi.calculateInterResult()

let sandhya=new InterResults()
sandhya.name="sandhya"
sandhya.sanskritMarks=10;  
sandhya.englishMarks=100;
sandhya.maths1aMarks=100;
sandhya.maths1bMarks=100;
sandhya.physicsMarks=100;
sandhya.chemistryMarks=100;
sandhya.calculateInterResult()

let joshu=new InterResults()
joshu.name="joshu"
joshu.sanskritMarks=10;  
joshu.englishMarks=100;
joshu.maths1aMarks=100;
joshu.maths1bMarks=100;
joshu.physicsMarks=100;
joshu.chemistryMarks=100;
joshu.calculateInterResult()

let yona=new InterResults()
yona.name="yona"
yona.sanskritMarks=10;  
yona.englishMarks=100;
yona.maths1aMarks=100;
yona.maths1bMarks=100;
yona.physicsMarks=100;
yona.chemistryMarks=100;
yona.calculateInterResult()

let yobu=new InterResults()
yobu.name="yobu"
yobu.sanskritMarks=10;  
yobu.englishMarks=100;
yobu.maths1aMarks=100;
yobu.maths1bMarks=100;
yobu.physicsMarks=100;
yobu.chemistryMarks=100;
yobu.calculateInterResult()




