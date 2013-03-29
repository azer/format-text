var format = require("./");

it('substitutes {\d} with remaning args', function(){

  expect(format('foo {0} bar {1} qux {2}', 'corge', 'span', 'quux')).to.equal('foo corge bar span qux quux');

});

it('substitutes {\w} with given context object', function(){

  expect(format('foo {corge} bar {qux}', { corge: 3, qux: 14 })).to.equal('foo 3 bar 14');

});

it('calls functions passed within context', function(){

  expect(format('foo {corge} bar {qux}', { corge: function(){ return 3 }, qux: 14 })).to.equal('foo 3 bar 14');

});

it('can be escaped by doubling: {{ and }}', function(){

  expect(format('foo {0}, bar {{1}}', 3, 14)).to.equal('foo 3, bar {1}');

});
