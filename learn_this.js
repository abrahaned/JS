var age = 20;

function test(){
  var age= 25;
  console.log(age);
  console.log(this.age);
}

test();

const random = {
    defined_name: "Tuotrial",
    video:["javascript","this","keyword"],
    info(){
      this.video.forEach(function(tag){
        console.log(this.defined_name,tag)
      },this)
    }
  }
  
  
  random.info();
  