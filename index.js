module.exports = format;

function findContext(args){
  if(typeof args[1] == 'object' && args[1])
    return args[1];

  return Array.prototype.slice.call(args, 1);
}

function format(text) {
  var context = findContext(arguments);

  return String(text).replace(/\{?\{\{([^{}]+)}}}?/g, replace(context));
};

function replace(context, nil){

  return function(tag, name) {

    if(tag.substring(0, 3) == '{{{' && tag.substring(tag.length - 3) == '}}}'){
      return '{{' + name + '}}';
    }

    if( !context.hasOwnProperty(name) ){
      return tag;
    }

    if( typeof context[name] == 'function' ){
      return context[name]();
    }

    return context[name];

  }

}
