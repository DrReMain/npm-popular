var debug = {
    foo: require('debug')('test:foo'),
    bar: require('debug')('test:bar'),
    baz: require('debug/')('test:baz')
};

debug.foo('foo')
debug.bar('bar')
debug.baz('baz')