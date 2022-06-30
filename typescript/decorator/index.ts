
@testDecorator
class run {
  a() {
    console.log(this);
  }
};

console.log(run);



function testDecorator(target) {
  target.is = true;
}

